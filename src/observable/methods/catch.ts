/* eslint no-unused-vars: 0 */
import { placeholder } from './utils'
import { Observable, Observer, Subscription } from '../Observable'

/**
 * Catch, handle error in stream
 * @param {function} Error handler
 * @param {observable} Stream
 * @returns {observable}
 */
export const catchError = placeholder(
  (handler: (err: Error, stream: Observable) => any, stream: Observable) => {
    const sub: Subscription[] = []
    return new Observable((observer: Observer) => {
      retry(handler, stream, sub, observer)
      return () => sub.map(s => s.unsubscribe())
    })
  }
)

function retry(
  handler: (err: Error, stream: Observable) => any,
  stream: Observable,
  sub: Subscription[],
  observer: Observer
): any {
  sub.pop()?.unsubscribe()
  return sub.push(
    stream.subscribe({
      next: value => observer.next(value),
      error: (err: Error) => {
        try {
          const capture = handler(err, stream)
          if (capture === stream) {
            return retry(handler, stream, sub, observer)
          }
          return observer.next(capture)
        } catch (err: any) {
          return observer.error(err)
        }
      },
      complete: () => observer.complete(),
    })
  )
}
