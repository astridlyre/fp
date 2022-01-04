import { placeholder } from './utils'
import { Observable, Observer } from '../Observable'

/**
 * Switch, switch to a mapped Observable
 * @param {observable}
 * @returns {observable}
 */
export const switchStream = placeholder(
  (stream: Observable) =>
    new Observable((observer: Observer) => {
      let done = false
      let subs = stream.subscribe({
        next: (nextStream: Observable) =>
          queueMicrotask(() => {
            if (!done) {
              subs.unsubscribe()
              subs = nextStream.subscribe({
                next: (value: any) => observer.next(value),
                complete: () => observer.complete(),
              } as Observer)
            }
          }),
      } as Observer)
      return () => {
        done = true
        subs.unsubscribe()
      }
    }),
)
