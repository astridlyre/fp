/* eslint no-param-reassign: 0 */
import { isFunction } from '../../functions/predicates'
import { Observable, Observer } from '../Observable'

/**
 * Subject
 */
export const subject = () => {
  const subs: Observer[] = []
  return new Proxy(
    {},
    {
      get(_, prop: PropertyKey) {
        if (['error', 'next', 'complete'].includes(prop as string)) {
          return (...args: any[]) =>
            subs.forEach(observer => (observer as any)[prop](...args))
        }
        if (prop === 'subscribe') {
          return (observer: Observer) => {
            if (isFunction(observer)) {
              observer = {
                next: observer,
                error: observer,
                complete: observer,
              } as any
            }
            subs.push(observer)
            return { unsubscribe: () => subs.slice(subs.indexOf(observer), 1) }
          }
        }
        return new Observable((observer: Observer) => {
          subs.push({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          })
          return () => subs.slice(subs.indexOf(observer), 1)
        })[prop]
      },
    }
  )
}
