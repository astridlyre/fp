import { curry } from '../combinators.js'
import { withNext } from './utils.js'

/**
 * Throttle
 * @param {number} limit - Delay between function calls
 * @param {observable} stream - Stream to throttle to
 * @returns {observable}
 */
export const throttle = curry((limit, stream) => {
  let lastRan = 0
  let lastInterval = 0
  return new Observable(observer => {
    const subs = stream.subscribe(
      withNext(observer)(value => {
        if (!lastRan) {
          observer.next(value)
          lastRan = Date.now()
        } else {
          clearTimeout(lastInterval)
          lastInterval = setTimeout(() => {
            if (Date.now() - lastRan >= limit) {
              observer.next(value)
              lastRan = Date.now()
            }
          }, limit - (Date.now() - lastRan))
        }
      })
    )
    return () => subs.unsubscribe()
  })
})
