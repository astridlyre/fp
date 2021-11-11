import { withNext, placeholder } from './utils.js'

/**
 * Take
 * @param {number} numberToTake - Items to take from stream
 * @param {observable} stream
 * @returns {observable}
 */
export const take = placeholder((numberToTake, stream) => {
  let taken = 0
  return new Observable(observer => {
    const subs = stream.subscribe(
      withNext(observer)(value => {
        if (taken++ >= numberToTake) return observer.complete()
        observer.next(value)
      })
    )
    return () => subs.unsubscribe()
  })
})
