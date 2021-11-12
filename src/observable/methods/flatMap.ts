import { placeholder } from './utils'
import { Observable, Observer, Subscription } from '../Observable'

/**
 * FlatMap
 * @param {function} fn - Mapping function
 * @param {observable} stream
 * @returns {observable}
 */
export const flatMap = placeholder(
  (fn: (value: any) => Observable, stream: Observable) =>
    new Observable((observer: Observer) => {
      let done = false
      let pending = 0
      const subs: Subscription[] = []
      const initialSub = stream.subscribe({
        next: value => {
          try {
            handleNext(fn(value))
          } catch (err: any) {
            observer.error(err)
          }
        },
        complete: () => {
          done = true
          if (!pending) observer.complete()
        },
      } as Observer)
      function handleNext(nextObs: Observable) {
        pending++
        subs.push(
          nextObs.subscribe({
            next: value => observer.next(value),
            complete: () => {
              pending -= 1
              if (done && pending === 0) observer.complete()
            },
          } as Observer)
        )
      }
      return () => (
        initialSub.unsubscribe(),
        subs.forEach(sub => sub.unsubscribe()),
        observer.complete()
      )
    })
)
