import { curry, deepProp } from '../combinators.js'
import { withNext } from './utils.js'

/**
 * Pick, pick keys from objects of stream
 * @param {string} key
 * @param {observable} stream
 * @returns {observable}
 */
export const pick = curry(
  (key, stream) =>
    new Observable(observer => {
      const subs = stream.subscribe(
        withNext(observer)(obj => observer.next(deepProp(key, obj)))
      )
      return () => subs.unsubscribe()
    })
)
