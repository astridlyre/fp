import { Observable, Observer } from '../Observable'
import { withNext, placeholder } from './utils'

/**
 * Filter
 * @param {function} predicate - Filter function
 * @param {observable} stream - Stream to filter
 * @returns {observable}
 */
export const filter = placeholder(
  (predicate: (value: any) => boolean, stream: Observable) =>
    new Observable((observer: Observer) => {
      const subs = stream.subscribe(
        withNext(observer)((value: any) => {
          try {
            if (predicate(value)) {
              observer.next(value)
            }
          } catch (err: any) {
            observer.error(err)
          }
        })
      )
      return () => subs.unsubscribe()
    })
)
