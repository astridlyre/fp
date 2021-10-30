import { values } from '../combinators.js'

/**
 * Zip
 * @param {observable} Streams
 * @returns {observable} One-to-one zipped streams
 */
export const zip = (...streams) => {
  let done = 0
  const store = Object.fromEntries(streams.map((_, i) => [i, []]))
  const buffers = values(store)

  function pushValue(event, observer) {
    buffers[event.n].unshift(event.value)
    if (buffers.every(buffer => buffer.length > 0)) {
      observer.next(buffers.map(buffer => buffer.pop()))
    }
  }

  return new Observable(observer => {
    const subscriptions = streams.map((stream, i) =>
      stream.subscribe({
        next: value => pushValue({ n: i, value }, observer),
        error: observer.error.bind(observer),
        complete: () => ++done === streams.length && observer.complete(),
      })
    )
    return () => subscriptions.forEach(subs => subs.unsubscribe())
  })
}
