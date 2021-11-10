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
      dispatchChanged(target)

      return result
    },
    get(target, prop) {
      if (prop === 'observe')
        return () =>
          new Observable(observer => {
            subs.push(observer)
            return () => subs.splice(subs.indexOf(observer), 1)
          })

      if (prop === 'clearCache') return () => (cache = Object.create(null))

      if (isFunction(target[prop])) {
        return function wrappedMethod() {
          const result = target[prop]?.apply(target, arguments)
          const currentArgs = JSON.stringify(arguments)
          const lastArgs = cache[prop]

          if (currentArgs !== lastArgs) {
            cache[prop] = currentArgs
            dispatchChanged(target)
          }

          return result
        }
      }

      return Reflect.get(...arguments)
    },
    deleteProperty(target, key) {
      if (!key in target) return false
      delete target[key]
      dispatchChanged(target)
      return true
    },
  })

  function dispatchChanged(target) {
    for (let i = 0; i < subs.length; i++) {
      const observer = subs[i]
      observer.next(target)
    }
  }
}
