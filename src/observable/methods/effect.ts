/* eslint no-unused-vars: 0 */
import { Observable, Observer } from '../Observable'
import { withNext, placeholder } from './utils'

/**
 * Effect
 * @param {function} fn - Side effect function to run on each event
 * @param {observable} stream
 * @returns {observable}
 */
export const effect = placeholder(
  (fn: (value: any) => void, stream: Observable) =>
    new Observable((observer: Observer) => {
      const subs = stream.subscribe(
        withNext(observer)((value: any) => {
          try {
            fn(value)
            observer.next(value)
          } catch (err: any) {
            observer.error(err)
          }
        }),
      )
      return () => subs.unsubscribe()
    }),
)
