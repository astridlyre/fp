import { withNext, placeholder } from './utils'
import { Observable, Observer } from '../Observable'

/**
 * Map
 * @param {function} fn - Mapper function
 * @parma {observable} stream - Stream to map
 * @returns {observable}
 */
export const map = placeholder(
  (fn: (value: any) => any, stream: Observable) =>
    new Observable((observer: Observer) => {
      const subs = stream.subscribe(
        withNext(observer)((value: any) => {
          try {
            observer.next(fn(value))
          } catch (err: any) {
            observer.error(err)
          }
        })
      )
      return () => subs.unsubscribe()
    })
)
