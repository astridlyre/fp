import { withNext, placeholder } from './utils'
import { Observable, Observer } from '../Observable'

/**
 * MapTo, map a stream to only output value
 * @param {any} value
 * @param {observable} stream
 * @returns {observable}
 */
export const mapTo = placeholder(
  (value: any, stream: Observable) =>
    new Observable((observer: Observer) => {
      const subs = stream.subscribe(withNext(observer)(() => observer.next(value)))
      return () => subs.unsubscribe()
    })
)
