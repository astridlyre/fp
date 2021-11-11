import { placeholder } from './utils.js'
/**
 * Interval
 * @param {number} time of interval
 * @param {any} optional value to emit
 * @returns {observable}
 */
export const interval = placeholder(time => {
  let n = 0
  return new Observable(observer => {
    const id = setInterval(() => observer.next(++n), time)
    observer.next(++n)
    return () => {
      observer.complete()
      clearInterval(id)
    }
  })
})
