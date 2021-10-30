/**
 * Interval
 * @param {number} time of interval
 * @param {any} optional value to emit
 * @returns {observable}
 */
export const interval = time =>
  new Proxy(
    {},
    {
      get(_, prop) {
        return (...args) => {
          let n = 0
          return new Observable(observer => {
            const id = setInterval(() => observer.next(++n), time)
            observer.next(++n)
            return () => {
              observer.complete()
              clearInterval(id)
            }
          })[prop](...args)
        }
      },
    }
  )
