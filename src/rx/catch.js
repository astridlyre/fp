import { placeholder } from './utils.js'

/**
 * Catch, handle error in stream
 * @param {function} Error handler
 * @param {observable} Stream
 * @returns {observable}
 */
export const catchError = placeholder((handler, stream) => {
  const sub = []
  return new Observable(observer => {
    retry(handler, stream, sub, observer)
    return () => sub.pop().unsubscribe()
  })
})

function retry(handler, stream, sub, observer) {
  stream.subscribe({
    next: value => observer.next(value),
    error: err => {
      try {
        const capture = handler(err, stream)
        if (capture === stream) {
          return retry(handler, stream, sub, observer)
        }
        observer.next(capture)
      } catch (err) {
        observer.error(err)
      }
    },
    complete: () => observer.complete(),
  })
}
