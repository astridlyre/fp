import { values } from '../../functions/objects'
import { Observable, Observer } from '../Observable'
import { placeholder } from './utils'

/**
 * combine, combine the latest output of each stream
 * @param {observable} Stream a
 * @param {observable} Stream b
 * @returns {observable} Latest combined output of stream a and b
 */
export const combine = placeholder((...streams: Observable[]) => {
  let done = 0
  const store: any = Object.fromEntries(streams.map((_, i) => [i, []]))
  const buffers = values(store)

  function pushResults(
    event: { stream: number; value: any },
    observer: Observer,
  ) {
    store[event.stream].push(event.value)
    if (buffers.every((buffer: any) => buffer.length)) {
      buffers.forEach((buffer) => {
        observer.next(buffer.pop())
        buffer.length = 0
      })
    }
  }

  return new Observable((observer: Observer) => {
    const subscriptions = streams.map((stream, i) =>
      stream.subscribe({
        next: (value) => pushResults({ stream: i, value }, observer),
        error: observer.error.bind(observer),
        complete: () => ++done === streams.length && observer.complete(),
      }),
    )
    return () => subscriptions.forEach((subs) => subs.unsubscribe())
  })
})
