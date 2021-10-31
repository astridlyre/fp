import { placeholder } from './utils.js'

/**
 * Finally, run a side effect after stream completes
 * @param {function} Clean-up function
 * @param {observable} Stream to tap into
 * @returns {observable}
 */
export const finallyEffect = placeholder(
  (fn, stream) =>
    new Observable(observer => {
      const subs = stream.subscribe({
        next: value => observer.next(value),
        error: err => {
          try {
            fn(err)
            observer.complete()
          } catch (err) {
            observer.error(err)
            observer.complete()
          }
        },
        complete() {
          try {
            fn()
            observer.complete()
          } catch (err) {
            observer.error(err)
            observer.complete()
          }
        },
      })
      return () => subs.unsubscribe()
    })
)
