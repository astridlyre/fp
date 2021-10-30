import { curry } from '../combinators.js'

/**
 * Until, subscribe to a stream until Comparator returns true
 * @param {function} Comparator function
 * @param {observable} Stream
 * @returns {observable} Stream that ends when comparator function returns true
 */
export const until = curry(
  (comparator, stream) =>
    new Observable(observer => {
      const subs = stream.subscribe({
        next: value => {
          try {
            if (comparator(value)) {
              return observer.complete()
            }
          } catch (err) {
            observer.error(err)
          }
          observer.next(value)
        },
      })
      return () => subs.unsubscribe()
    })
)
