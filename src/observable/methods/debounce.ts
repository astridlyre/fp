import { last } from '../../functions/arrays'
import { Observable, Observer } from '../Observable'
import { placeholder } from './utils'

/**
 * Debounce
 * @param {number} time to aggregate events for
 * @param {observable} stream - stream to debounce
 * @returns {observable}
 */
export const debounce = placeholder((limit: number, stream: Observable) => {
  const stack: any[] = []
  let lastInterval: any = 0
  let wantsComplete = false
  return new Observable((observer: Observer) => {
    const subs = stream.subscribe({
      next: (value) => {
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
