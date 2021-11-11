import {
  isObject,
  isFunction,
  isAsyncFunction,
  isGeneratorFunction,
  isAsyncGeneratorFunction,
} from '../../functions/predicates.ts'
import { Observable } from '../Observable.js'

/**
 * Wrap an existing object in an Observable to update any subscribers when
 * object properties change or methods are called.
 *
 * @param {object} Object to observe
 * @returns {Proxy} New Proxy object
 */
export function makeObservable(object) {
  const subs = []
  const cache = Object.create(null)

  return new Proxy(object, {
    set(target, prop, value) {
      if (target[prop] === value) return value

      const result = Reflect.set(...arguments)
      dispatchChanged(target, prop)

      return result
    },
    get(target, prop) {
      if (prop === 'observe')
        /**
         * Returns an observe function that takes an optional array of props
         * to observe
         *
         * @param {array} Props
         * @returns {Observable}
         */
        return (props = []) =>
          new Observable(observer => {
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

          do {
            const { done, value } = generator.next()
            dispatchChanged(target, prop)
            yield { done, value }
          } while (!done)
        }
      }

      if (isAsyncGeneratorFunction(target[prop])) {
        return async function* wrappedMethod() {
          const generator = target[prop]?.apply(target, arguments)

          do {
            const { done, value } = await generator.next()
            dispatchChanged(target, prop)
            yield { done, value }
          } while (!done)
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

      return Reflect.get(...arguments)
    },
    deleteProperty(target, key) {
      if (!key in target) return false
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

  function dispatchChanged(target, prop) {
    for (let i = 0; i < subs.length; i++) {
      const { props, observer } = subs[i]
      if (!props?.length || props.includes(prop)) {
        observer.next(target)
      }
    }
  }
}
