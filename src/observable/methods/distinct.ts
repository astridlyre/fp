import { deepEqual } from '../../functions/utils'
import { Observable, Observer } from '../Observable'
import { withNext, placeholder } from './utils'

/**
 * Distinct, filter only unique consecutive events
 * @param {observable} Stream to filter distinct
 * @returns {observable} Stream with unique values only
 */
export const distinct = placeholder((fn: (value: any) => any, stream: Observable) => {
  let lastSent: any = null
  return new Observable((observer: Observer) => {
    const subs = stream.subscribe(
      withNext(observer)((value: any) => {
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
})
