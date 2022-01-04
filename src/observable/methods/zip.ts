import { values } from '../../functions/objects'
import { isFunction } from '../../functions/predicates'
import { head } from '../../functions/arrays'
import { placeholder } from './utils'
import { Observable, Observer } from '../Observable'

/**
 * Zip
 * @param {observable} Streams
 * @returns {observable} One-to-one zipped streams
 */
export const zip = placeholder((...streams: Observable[]) => {
  let zipper: any = (...args: any[]) => args
  if (isFunction(head(streams))) {
    zipper = streams.shift()
  }

  let done = 0
  const store: any = Object.fromEntries(streams.map((_, i) => [i, []]))
  const buffers = values(store)

  function pushValue(event: { n: number; value: any }, observer: Observer) {
    buffers[event.n].unshift(event.value)
    if (buffers.every((buffer: any) => buffer.length > 0)) {
      try {
        observer.next(zipper(...buffers.map((buffer) => buffer.pop())))
      } catch (err: any) {
        observer.error(err)
      }
    }
  }

  return new Observable((observer: Observer) => {
    const subscriptions = streams.map((stream, i) =>
      stream.subscribe({
        next: (value) => pushValue({ n: i, value }, observer),
        error: observer.error.bind(observer),
        complete: () => ++done === streams.length && observer.complete(),
      }),
    )
    return () => subscriptions.forEach((subs) => subs.unsubscribe())
  })
})
