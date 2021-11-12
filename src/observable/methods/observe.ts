import {
  isObject,
  isFunction,
  isAsyncFunction,
  isGeneratorFunction,
  isAsyncGeneratorFunction,
} from '../../functions/predicates'
import { Observable, Observer } from '../Observable'

/**
 * Wrap an existing object in an Observable to update any subscribers when
 * object properties change or methods are called.
 */
export function makeObservable(object: any) {
  const subs: { props: PropertyKey[]; observer: Observer }[] = []
  let cache: any = Object.create(null)

  return new Proxy(object, {
    set(target, prop, value) {
      if (target[prop] === value) return value

      const result = Reflect.set(target, prop, value)
      dispatchChanged(target, prop)

      return result
    },
    get(target, prop, receiver) {
      if (prop === 'observe')
        /**
         * Returns an observe function that takes an optional array of props
         * to observe
         */
        return (props: string[] = []) =>
          new Observable((observer: Observer) => {
            const sub = { props, observer }
            subs.push(sub)
            return () => subs.splice(subs.indexOf(sub), 1)
          })

      if (isAsyncFunction(target[prop])) {
        return async function wrappedMethod() {
          const result = await target[prop]?.apply(target, arguments)
          const currentArgs = JSON.stringify(arguments)
          const lastArgs = cache[prop]

          if (currentArgs !== lastArgs) {
            cache[prop] = currentArgs
            dispatchChanged(target, prop)
          }

          return result
        }
      }

      if (isGeneratorFunction(target[prop])) {
        return function* wrappedMethod() {
          const generator = target[prop]?.apply(target, arguments)
          let { done, value } = generator.next()

          while (!done) {
            ;({ done, value } = generator.next())
            dispatchChanged(target, prop)
            yield { done, value }
          }
        }
      }

      if (isAsyncGeneratorFunction(target[prop])) {
        return async function* wrappedMethod() {
          const generator = target[prop]?.apply(target, arguments)
          let { done, value } = await generator.next()

          while (!done) {
            ;({ done, value } = await generator.next())
            dispatchChanged(target, prop)
            yield { done, value }
          }
        }
      }

      if (isFunction(target[prop])) {
        return function wrappedMethod() {
          const result = target[prop]?.apply(target, arguments)
          const currentArgs = JSON.stringify(arguments)
          const lastArgs = cache[prop]

          if (currentArgs !== lastArgs) {
            cache[prop] = currentArgs
            dispatchChanged(target, prop)
          }

          return result
        }
      }

      if (isObject(target[prop])) {
        const cached = cache[prop] ?? {}
        let { observed, original } = cached

        // The target object must have changed, resub
        if (original !== target[prop]) {
          observed?.unsubscribe()
          observed = undefined
          original = target[prop]
        }

        if (!observed) {
          observed = Observable.makeObservable(target[prop])
          observed.observe().subscribe(() => dispatchChanged(target, prop))
        }

        return observed
      }

      if (prop === 'clearCache') return () => (cache = Object.create(null))
      if (prop === 'isObserved') return () => subs.length > 0

      return Reflect.get(target, prop, receiver)
    },
    deleteProperty(target: any, key: PropertyKey) {
      if (!(key in target)) return false
      delete target[key]

      if (isObject(cache[key])) {
        cache[key].observed?.unsubscribe()
        delete cache[key].observed
        delete cache[key].original
        delete cache[key]
      }
      dispatchChanged(target, key)
      return true
    },
  })

  function dispatchChanged(target: any, prop: PropertyKey) {
    for (let i = 0; i < subs.length; i++) {
      const { props, observer } = subs[i]
      if (!props?.length || props.includes(prop)) {
        observer.next(target)
      }
    }
  }
}
