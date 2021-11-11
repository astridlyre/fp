import { placeholder } from './utils.js'
/**
 * Concat, append streams
 * @param {observable} Streams to append
 * @returns {observable} Concatenated stream
 */
export const concat = placeholder((...streams) => {
  const subs = []
  return new Observable(observer => {
    subNextStream(streams, 0, subs, observer)
    return () => subs.forEach(sub => sub.unsubscribe())
  })
})

function subNextStream(streams, i, subs, observer) {
  subs.push(
    streams[i].subscribe({
      next: value => observer.next(value),
      error: observer.error.bind(observer),
      complete() {
        if (i === streams.length - 1) return observer.complete()
        subNextStream(streams, i + 1, subs, observer)
      },
    })
  )
}
