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
    return () => sub.map(s => s.unsubscribe())
  })
})

function retry(handler, stream, sub, observer) {
  sub.pop()?.unsubscribe()
  return sub.push(
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
  )
}
