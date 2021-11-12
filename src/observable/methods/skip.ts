import { withNext, placeholder } from './utils'
import { Observable, Observer } from '../Observable'

/**
 * Skip
 */
export const skip = placeholder((count: number, stream: Observable) => {
  let skipped = 0
  return new Observable((observer: Observer) => {
    const subs = stream.subscribe(
      withNext(observer)((value: any) => {
        if (skipped++ >= count) {
          observer.next(value)
        }
      })
    )
    return () => subs.unsubscribe()
  })
})
