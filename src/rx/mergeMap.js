import { curry } from '../combinators.js'

/**
 * MergeMap
 * @param {function} fn - Mapping function
 * @param {observable} stream
 * @returns {observable}
 */
export const mergeMap = curry(
  (fn, stream) =>
    new Observable(observer => {
      let done = false
      let pending = 0
      const subs = []
      const initialSub = stream.subscribe({
        next: value => handleNext(fn(value)),
        complete: () => {
          done = true
          if (!pending) observer.complete()
        },
      })
      function handleNext(nextObs) {
        pending++
        subs.push(
          nextObs.subscribe({
            next: value => observer.next(value),
            complete: () => {
              pending -= 1
              if (done && pending === 0) observer.complete()
            },
          })
        )
      }
      return () => (
        initialSub.unsubscribe(),
        subs.forEach(sub => sub.unsubscribe()),
        observer.complete()
      )
    })
)
