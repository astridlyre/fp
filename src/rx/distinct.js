import { deepEqual } from '../combinators.js'
import { withNext } from './utils.js'

/**
 * Distinct, filter only unique consecutive events
 * @param {observable} Stream to filter distinct
 * @returns {observable} Stream with unique values only
 */
export const distinct = (fn, stream) => {
  let lastSent = null
  return new Observable(observer => {
    const subs = stream.subscribe(
      withNext(observer)(value => {
        try {
          const a = fn(lastSent)
          const b = fn(value)
          if (!deepEqual(a, b)) {
            observer.next(value)
          }
        } catch {
          observer.next(value)
        }
        lastSent = value
      })
    )
    return () => subs.unsubscribe()
  })
}
