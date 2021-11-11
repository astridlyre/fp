import { withNext, placeholder } from './utils.js'

/**
 * Map
 * @param {function} fn - Mapper function
 * @parma {observable} stream - Stream to map
 * @returns {observable}
 */
export const map = placeholder(
  (fn, stream) =>
    new Observable(observer => {
      const subs = stream.subscribe(
        withNext(observer)(value => {
          try {
            observer.next(fn(value))
          } catch (err) {
            observer.error(err)
          }
        })
      )
      return () => subs.unsubscribe()
    })
)
