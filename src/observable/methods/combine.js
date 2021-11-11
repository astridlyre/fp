import { values } from '../../functions/objects.ts'
import { placeholder } from './utils.js'

/**
 * combine, combine the latest output of each stream
 * @param {observable} Stream a
 * @param {observable} Stream b
 * @returns {observable} Latest combined output of stream a and b
 */
export const combine = placeholder((...streams) => {
  let done = 0
  const store = Object.fromEntries(streams.map((_, i) => [i, []]))
  const buffers = values(store)

  function pushResults(event, observer) {
    store[event.stream].push(event.value)
    if (buffers.every(buffer => buffer.length)) {
      buffers.forEach(buffer => {
        observer.next(buffer.pop())
        buffer.length = 0
      })
    }
  }

  return new Observable(observer => {
    const subscriptions = streams.map((stream, i) =>
      stream.subscribe({
        next: value => pushResults({ stream: i, value }, observer),
        error: observer.error.bind(observer),
        complete: () => ++done === streams.length && observer.complete(),
      })
    )
    return () => subscriptions.forEach(subs => subs.unsubscribe())
  })
})
