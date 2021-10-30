import { curry, last } from '../combinators.js'

/**
 * Debounce
 * @param {number} time to aggregate events for
 * @param {observable} stream - stream to debounce
 * @returns {observable}
 */
export const debounce = curry((limit, stream) => {
  const stack = []
  let lastInterval = 0
  let wantsComplete = false
  return new Observable(observer => {
    const subs = stream.subscribe({
      next: value => {
        stack.push(value)
        clearTimeout(lastInterval)
        lastInterval = setTimeout(() => {
          observer.next(last(stack))
          stack.length = 0
          if (wantsComplete) observer.complete()
        }, limit)
      },
      error: observer.error.bind(observer),
      complete: () => (wantsComplete = true),
    })
    return () => subs.unsubscribe()
  })
})