import { deepProp } from '../../functions/objects'
import { withNext, placeholder } from './utils'
import { Observable, Observer } from '../Observable'

/**
 * Pick, pick keys from objects of stream
 * @param {string} key
 * @param {observable} stream
 * @returns {observable}
 */
export const pick = placeholder(
  (key: PropertyKey, stream: Observable) =>
    new Observable((observer: Observer) => {
      const subs = stream.subscribe(
        withNext(observer)((obj: any) => observer.next(deepProp(key, obj))),
      )
      return () => subs.unsubscribe()
    }),
)
