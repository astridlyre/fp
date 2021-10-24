import { curry } from './combinators.js'
import 'core-js/features/observable/index.js'
const { Observable } = globalThis

export const map = curry(
  (fn, stream) =>
    new Observable(observer => {
      const subs = stream.subscribe({
        next(value) {
          try {
            observer.next(fn(value))
          } catch (err) {
            observer.error(err)
          }
        },
        error(e) {
          observer.error(e)
        },
        complete() {
          observer.complete()
        },
      })
      return () => subs.unsubscribe()
    })
)
