import { placeholder } from './utils.js'
/**
 * Merge, interleave two streams
 * @param {observable} Stream a
 * @param {observable} Stream b
 * @returns {observable} Interleaving stream of a and b
 */
export const merge = placeholder((...streams) => {
  let done = 0
  return new Observable(observer => {
    const subscriptions = streams.map(stream =>
      stream.subscribe({
        next: value => observer.next(value),
        error: observer.error.bind(observer),
        complete: () => ++done === streams.length && observer.complete(),
      })
    )
    return () => subscriptions.forEach(subs => subs.unsubscribe())
  })
})
