import { withNext, placeholder } from './utils.js'

/**
 * Filter
 * @param {function} predicate - Filter function
 * @param {observable} stream - Stream to filter
 * @returns {observable}
 */
export const filter = placeholder(
  (predicate, stream) =>
    new Observable(observer => {
      const subs = stream.subscribe(
        withNext(observer)(value => {
          try {
            if (predicate(value)) {
              observer.next(value)
            }
          } catch (err) {
            observer.error(err)
          }
        })
      )
      return () => subs.unsubscribe()
    })
)
