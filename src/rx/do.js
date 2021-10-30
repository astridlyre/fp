import { curry } from '../combinators.js'
import { withNext } from './utils.js'

/**
 * Effect
 * @param {function} fn - Side effect function to run on each event
 * @param {observable} stream
 * @returns {observable}
 */
export const effect = curry(
  (fn, stream) =>
    new Observable(observer => {
      const subs = stream.subscribe(
        withNext(observer)(value => {
          try {
            fn(value)
            observer.next(value)
          } catch (err) {
            observer.error(err)
          }
        })
      )
      return () => subs.unsubscribe()
    })
)