import { curry } from '../../functions/utils.ts'

/**
 * ForEach, syntactic sugar for Observable.subscribe()
 * @param {function} fn - Function to run on each event
 * @param {observable} stream
 * @returns {object} unsubscribe object
 */
export const forEach = curry((fn, stream) => {
  const subs = stream.subscribe({
    next: fn,
    error: fn,
  })
  return { unsubscribe: subs.unsubscribe.bind(subs) }
})
