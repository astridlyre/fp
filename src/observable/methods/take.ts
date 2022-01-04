import { withNext, placeholder } from './utils'
import { Observable, Observer } from '../Observable'

/**
 * Take
 * @param {number} numberToTake - Items to take from stream
 * @param {observable} stream
 * @returns {observable}
 */
export const take = placeholder((numberToTake: number, stream: Observable) => {
  let taken = 0
  return new Observable((observer: Observer) => {
    const subs = stream.subscribe(
      withNext(observer)((value: any) => {
        if (taken++ >= numberToTake) return observer.complete()
        return observer.next(value)
      }),
    )
    return () => subs.unsubscribe()
  })
})
