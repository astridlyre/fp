import { placeholder } from './utils.js'
/**
 * Switch, switch to a mapped Observable
 * @param {observable}
 * @returns {observable}
 */
export const switchStream = placeholder(
  stream =>
    new Observable(observer => {
      let done = false
      let subs = stream.subscribe({
        next: nextStream =>
          queueMicrotask(() => {
            if (!done) {
              subs.unsubscribe()
              subs = nextStream.subscribe({
                next: value => observer.next(value),
                complete: () => observer.complete(),
              })
            }
          }),
      })
      return () => {
        done = true
        subs.unsubscribe()
      }
    })
)
