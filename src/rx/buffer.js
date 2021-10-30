import { curry } from '../combinators.js'
import { withNext } from './utils.js'

/**
 * Buffer
 * @param {number} count - Size of events to buffer
 * @param {observable} stream - Stream to buffer
 * @returns {observable}
 */
export const buffer = curry((count, stream) => {
  const internalStorage = []
  return new Observable(observer => {
    const subs = stream.subscribe(
      withNext(observer)(value => {
        internalStorage.push(value)
        if (internalStorage.length >= count) {
          observer.next(internalStorage.slice())
          internalStorage.length = 0
        }
      })
    )
    return () => subs.unsubscribe()
  })
})
