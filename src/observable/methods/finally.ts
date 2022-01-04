/* eslint no-unused-vars: 0 */
import { Observable, Observer } from '../Observable'
import { placeholder } from './utils'

/**
 * Finally, run a side effect after stream completes
 * @param {function} Clean-up function
 * @param {observable} Stream to tap into
 * @returns {observable}
 */
export const finallyEffect = placeholder(
  (fn: (err?: Error) => void, stream: Observable) =>
    new Observable((observer: Observer) => {
      const subs = stream.subscribe({
        next: (value) => observer.next(value),
        error: (err) => {
          try {
            fn(err)
            observer.complete()
          } catch (err: any) {
            observer.error(err)
            observer.complete()
          }
        },
        complete() {
          try {
            fn()
            observer.complete()
          } catch (err: any) {
            observer.error(err)
            observer.complete()
          }
        },
      })
      return () => subs.unsubscribe()
    }),
)
