import { withNext, placeholder } from './utils'
import { Observable, Observer } from '../Observable'

/**
 * Throttle
 * @param {number} limit - Delay between function calls
 * @param {observable} stream - Stream to throttle to
 * @returns {observable}
 */
export const throttle = placeholder((limit: number, stream: Observable) => {
  let lastRan = 0
  let lastInterval: any = 0
  return new Observable((observer: Observer) => {
    const subs = stream.subscribe(
      withNext(observer)((value: any) => {
        if (!lastRan) {
          observer.next(value)
          lastRan = Date.now()
        } else {
          clearTimeout(lastInterval)
          lastInterval = setTimeout(() => {
            if (Date.now() - lastRan >= limit) {
              observer.next(value)
              lastRan = Date.now()
            }
          }, limit - (Date.now() - lastRan))
        }
      })
    )
    return () => subs.unsubscribe()
  })
})
