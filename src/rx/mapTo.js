import { withNext, placeholder } from './utils.js'

/**
 * MapTo, map a stream to only output value
 * @param {any} value
 * @param {observable} stream
 * @returns {observable}
 */
export const mapTo = placeholder(
  (value, stream) =>
    new Observable(observer => {
      const subs = stream.subscribe(withNext(observer)(() => observer.next(value)))
      return () => subs.unsubscribe()
    })
)
