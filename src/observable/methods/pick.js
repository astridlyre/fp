import { deepProp } from '../../functions/objects.ts'
import { withNext, placeholder } from './utils.js'

/**
 * Pick, pick keys from objects of stream
 * @param {string} key
 * @param {observable} stream
 * @returns {observable}
 */
export const pick = placeholder(
  (key, stream) =>
    new Observable(observer => {
      const subs = stream.subscribe(
        withNext(observer)(obj => observer.next(deepProp(key, obj)))
      )
      return () => subs.unsubscribe()
    })
)
