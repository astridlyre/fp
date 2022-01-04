import { placeholder } from './utils'
import { Observable, Observer } from '../Observable'

/**
 * Merge, interleave two streams
 * @param {observable} Stream a
 * @param {observable} Stream b
 * @returns {observable} Interleaving stream of a and b
 */
export const merge = placeholder((...streams: Observable[]) => {
  let done = 0
  return new Observable((observer: Observer) => {
    const subscriptions = streams.map((stream) =>
      stream.subscribe({
        next: (value) => observer.next(value),
        error: observer.error.bind(observer),
        complete: () => ++done === streams.length && observer.complete(),
      }),
    )
    return () => subscriptions.forEach((subs) => subs.unsubscribe())
  })
})
