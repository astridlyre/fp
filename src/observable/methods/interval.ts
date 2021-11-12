import { Observer, Observable } from '../Observable'
import { placeholder } from './utils'
/**
 * Interval
 * @param {number} time of interval
 * @param {any} optional value to emit
 * @returns {observable}
 */
export const interval = placeholder((time: number) => {
  let n = 0
  return new Observable((observer: Observer) => {
    const id = setInterval(() => observer.next(++n), time)
    observer.next(++n)
    return () => {
      observer.complete()
      clearInterval(id)
    }
  })
})
