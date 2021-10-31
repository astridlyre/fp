import { isFunction } from '../combinators.js'

/**
 * Subject
 * @param {observable} Stream to subscribe to
 * @returns {observable} Subject
 */
export const subject = () => {
  const subs = []
  return new Proxy(
    {},
    {
      get(_, prop) {
        if (['error', 'next', 'complete'].includes(prop)) {
          return (...args) => subs.forEach(observer => observer[prop](...args))
        }
        if (prop === 'subscribe') {
          return observer => {
            if (isFunction(observer)) {
              observer = { next: observer, error: observer, complete: observer }
            }
            subs.push(observer)
            return { unsubscribe: () => subs.slice(subs.indexOf(observer), 1) }
          }
        }
        return new Observable(observer => {
          subs.push({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          })
          return () => subs.slice(subs.indexOf(observer), 1)
        })[prop]
      },
    }
  )
}
