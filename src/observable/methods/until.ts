/* eslint no-unused-vars: 0 */
import { placeholder } from './utils'
import { Observable, Observer } from '../Observable'

/**
 * Until, subscribe to a stream until Comparator returns true
 * @param {function} Comparator function
 * @param {observable} Stream
 * @returns {observable} Stream that ends when comparator function returns true
 */
export const until = placeholder(
  (comparator: (value: any) => boolean, stream: Observable) =>
    new Observable((observer: Observer) => {
      const subs = stream.subscribe({
        next: (value) => {
          try {
            if (comparator(value)) {
              observer.complete()
            }
          } catch (err: any) {
            observer.error(err)
          }
          observer.next(value)
        },
      } as Observer)
      return () => subs.unsubscribe()
    }),
)
