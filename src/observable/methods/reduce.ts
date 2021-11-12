import { placeholder } from './utils'
import { Observable, Observer } from '../Observable'

/**
 * Reduce
 * @param {function} reducer
 * @param {any} initialValue
 * @param {observable} stream
 * @returns {observable}
 */
export const reduce = placeholder(
  (
    reducer: (accumulator: any, value: any) => any,
    initialValue: any,
    stream: Observable
  ) => {
    let accumulator = initialValue ?? {}
    return new Observable((observer: Observer) => {
      const subs = stream.subscribe({
        next(value) {
          try {
            accumulator = reducer(accumulator, value)
          } catch (err: any) {
            observer.error(err)
          }
        },
        error(e) {
          observer.error(e)
        },
        complete() {
          observer.next(accumulator)
          observer.complete()
        },
      })
      return () => subs.unsubscribe()
    })
  }
)
