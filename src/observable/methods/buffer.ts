import { placeholder, withNext } from './utils'
import { Observer, Observable } from '../Observable'

/**
 * Buffer
 * @param {number} count - Size of events to buffer
 * @param {observable} stream - Stream to buffer
 * @returns {observable}
 */
export const buffer = placeholder((count: number, stream: Observable) => {
  const internalStorage: any[] = []
  return new Observable((observer: Observer) => {
    const subs = stream.subscribe(
      withNext(observer)((value: any) => {
        internalStorage.push(value)
        if (internalStorage.length >= count) {
          observer.next(internalStorage.slice())
          internalStorage.length = 0
        }
      }),
    )
    return () => subs.unsubscribe()
  })
})
