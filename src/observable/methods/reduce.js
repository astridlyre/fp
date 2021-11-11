import { placeholder } from './utils.js'

/**
 * Reduce
 * @param {function} reducer
 * @param {any} initialValue
 * @param {observable} stream
 * @returns {observable}
 */
export const reduce = placeholder((reducer, initialValue, stream) => {
  let accumulator = initialValue ?? {}
  return new Observable(observer => {
    const subs = stream.subscribe({
      next(value) {
        try {
          accumulator = reducer(accumulator, value)
        } catch (err) {
          observer.error(err)
        }
      },
      error(e) {
        observer.error(e)
      },
      complete() {
        observer.next(accumulator)
        observer.complete()
      },
    })
    return () => subs.unsubscribe()
  })
})
