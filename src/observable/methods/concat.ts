import { Observable, Observer, Subscription } from '../Observable'
import { placeholder } from './utils'
/**
 * Concat, append streams
 * @param {observable} Streams to append
 * @returns {observable} Concatenated stream
 */
export const concat = placeholder((...streams: Observable[]) => {
  const subs: Subscription[] = []
  return new Observable((observer: Observer) => {
    subNextStream(streams, 0, subs, observer)
    return () => subs.forEach(sub => sub.unsubscribe())
  })
})

function subNextStream(
  streams: Observable[],
  i: number,
  subs: Subscription[],
  observer: Observer
) {
  subs.push(
    streams[i].subscribe({
      next: value => observer.next(value),
      error: observer.error.bind(observer),
      complete() {
        if (i === streams.length - 1) return observer.complete()
        return subNextStream(streams, i + 1, subs, observer)
      },
    })
  )
}
