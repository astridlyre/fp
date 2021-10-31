import { withNext, placeholder } from './utils.js'

/**
 * Skip
 * @param {number} count - Number of items to skip
 * @parma {observable} stream
 * @returns {observable}
 */
export const skip = placeholder((count, stream) => {
  let skipped = 0
  return new Observable(observer => {
    const subs = stream.subscribe(
      withNext(observer)(value => {
        if (skipped++ >= count) {
          observer.next(value)
        }
      })
    )
    return () => subs.unsubscribe()
  })
})
