import { Observable, Observer } from '../Observable'

export const withNext = (observer: Observer) => (next: Function) =>
  ({
    next,
    error: observer.error.bind(observer),
    complete: observer.complete.bind(observer),
  } as Observer)

export const placeholder =
  (creator: (...args: any[]) => Observable) =>
  (...initialArgs: any[]) =>
    new Proxy(
      {},
      {
        get(_, prop: PropertyKey) {
          return (...args: any[]) =>
            ((creator(...initialArgs) as any)[prop] as any)(...args)
        },
      }
    )
