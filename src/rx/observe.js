import { isFunction } from '../combinators.js'

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

      if (prop === 'clearCache') return () => (cache = Object.create(null))

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

      return Reflect.get(...arguments)
    },
    deleteProperty(target, key) {
      if (!key in target) return false
      delete target[key]
      dispatchChanged(target, key)
      return true
    },
  })

  function dispatchChanged(target, prop) {
    for (let i = 0; i < subs.length; i++) {
      const { props, observer } = subs[i]
      if (!props || !props.length || props.includes(prop)) {
        observer.next(target)
      }
    }
  }
}
