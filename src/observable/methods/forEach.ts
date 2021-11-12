/* eslint no-unused-vars: 0 */
import { curry } from '../../functions/utils'
import { Observable, Observer } from '../Observable'

/**
 * ForEach, syntactic sugar for Observable.subscribe()
 * @param {function} fn - Function to run on each event
 * @param {observable} stream
 * @returns {object} unsubscribe object
 */
export const forEach = curry((fn: (value: any) => void, stream: Observable) => {
  const subs = stream.subscribe({
    next: fn,
    error: fn,
  } as Observer)
  return { unsubscribe: subs.unsubscribe.bind(subs) }
})
