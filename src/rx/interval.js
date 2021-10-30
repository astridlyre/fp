/**
 * Interval
 * @param {number} time of interval
 * @param {any} optional value to emit
 * @returns {observable}
 */
export const interval = (time, value) => {
  return new Observable(observer => {
    const id = setInterval(() => observer.next(value), time)
    observer.next(value)
    return () => {
      observer.complete()
      clearInterval(id)
    }
  })
}
