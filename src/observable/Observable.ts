/* eslint-disable no-redeclare */
/* eslint no-unused-vars: 0, no-magic-numbers: 0 */
import { entries } from '../functions/objects'
import { isFunction } from '../functions/predicates'
import 'core-js/features/observable/index.js'

export const { Observable } = globalThis as any

// import { Readable } from 'stream'
import { buffer } from './methods/buffer'
import { catchError } from './methods/catch'
import { concat } from './methods/concat'
import { combine } from './methods/combine'
import { debounce } from './methods/debounce'
import { distinct } from './methods/distinct'
import { effect } from './methods/effect'
import { finallyEffect } from './methods/finally'
import { filter } from './methods/filter'
import { forEach } from './methods/forEach'
import { interval } from './methods/interval'
import { listen } from './methods/listen'
import { map } from './methods/map'
import { mapTo } from './methods/mapTo'
import { wrap } from './methods/wrap'
import { merge } from './methods/merge'
import { flatMap } from './methods/flatMap'
import { pick } from './methods/pick'
import { reduce } from './methods/reduce'
import { retry } from './methods/retry'
import { skip } from './methods/skip'
import { share, DEFAULT_BUFFER_SIZE } from './methods/share'
import { switchStream } from './methods/switch'
import { subject } from './methods/subject'
import { take } from './methods/take'
import { throttle } from './methods/throttle'
import { until } from './methods/until'
import { zip } from './methods/zip'
import { placeholder } from './methods/utils'

export interface Observer {
  next(value: any): void
  error(err: Error): void
  complete(): void
}

type GenericFunction = (...args: any[]) => any

export interface Observable {
  fromEvent(emitter: any, event: string, handler: GenericFunction): Observable
  // fromGenerator(generator: GeneratorFunction): Observable
  fromPromise<X>(promise: Promise<X>): Observable
  fromStream(stream: any): Observable
  listen(eventName: string, element: any): Observable
  subject(): Observable
  wrap(obj: any): Observable
  filter(fn: (value: any) => boolean): Observable
  map(fn: (value: any) => any): Observable
  buffer(size: number): Observable
  skip(numberToSkip: number): Observable
  take(numberToTake: number): Observable
  reduce(
    reducer: (accumulator: any, value: any) => any,
    initialValue: any,
  ): Observable
  mapTo(value: any): Observable
  throttle(limit: number): Observable
  forEach(f: (value: any) => void): any
  effect(f: (value: any) => void): Observable
  pick(prop: PropertyKey): Observable
  debounce(limit: number): Observable
  catch(err: Error): Observable
  concat(...streams: Observable[]): Observable
  combine(stream: Observable): Observable
  merge(stream: Observable): Observable
  share(bufferSize: number): Observable
  switch(): Observable
  flatMap(fn: (value: any) => any): Observable
  distinct(fn: (value: any) => any): Observable
  until(fn: (value: any) => boolean): Observable
  zip(zipper: (...args: any[]) => any, ...streams: Observable[]): Observable
  retry(config: any): Observable
  finally(f: (err?: Error) => void): Observable
  subscribe(observer: Observer): Subscription
}

export interface Subscription {
  unsubscribe(): void
}

export const $$observable = /* #__PURE__ */ (() =>
  (typeof Symbol === 'function' && (Symbol as any).observable) ||
  '@@observable')()

const additionalProperties = {
  fromEvent: placeholder(
    (emitter: any, event: string, handler: GenericFunction) =>
      new Observable((observer: Observer) => {
        const group = new Map([
          [event, (...args: any[]) => observer.next(handler(...args))],
          ['error', observer.error.bind(observer)],
          ['end', observer.complete.bind(observer)],
        ])
        entries(group as any).forEach(([event, handler]) =>
          emitter.on(event, handler),
        )
        return () =>
          entries(group as any).forEach(([event, handler]) =>
            emitter.removeListener(event, handler),
          )
      }),
  ),
  /* fromGenerator: placeholder(
    (generator: GeneratorFunction) =>
      new Observable((observer: Observer) => {
        Readable.from(generator())
          .on('data', observer.next.bind(observer))
          .on('end', observer.complete.bind(observer))
          .on('error', observer.error.bind(observer))
      }),
  ), */
  fromPromise: placeholder(
    <X>(promise: Promise<X>) =>
      new Observable((observer: Observer) => {
        promise
          .then((value) => observer.next(value))
          .catch((err) => observer.error(err))
          .finally(() => observer.complete())
      }),
  ),
  fromStream: placeholder(
    (stream: any) =>
      new Observable((observer: Observer) => {
        stream.on('data', observer.next.bind(observer))
        stream.on('end', observer.complete.bind(observer))
        stream.on('error', observer.error.bind(observer))
      }),
  ),
  combine,
  interval,
  listen,
  merge,
  subject,
  wrap,
}

for (const [prop, value] of Object.entries(additionalProperties)) {
  if (!Observable[prop]) {
    Object.defineProperty(Observable, prop, {
      value,
      enumerable: false,
      writable: false,
      configurable: false,
    })
  }
}

export const ReactiveExtensions = {
  filter(predicate: (value: any) => boolean) {
    return filter(predicate, this)
  },
  map(fn: (value: any) => any) {
    return map(fn, this)
  },
  buffer(count: number) {
    return buffer(count, this)
  },
  skip(count: number) {
    return skip(count, this)
  },
  take(numberToTake: number) {
    return take(numberToTake, this)
  },
  reduce(
    reducer: (accumulator: any, value: any) => any,
    initialValue: any = {},
  ) {
    return reduce(reducer, initialValue, this)
  },
  mapTo(value: any) {
    return mapTo(value, this)
  },
  throttle(limit: number) {
    return throttle(limit, this)
  },
  forEach(fn: (value: any) => void) {
    return forEach(fn, this)
  },
  effect(fn: (value: any) => void) {
    return effect(fn, this)
  },
  pick(key: PropertyKey) {
    return pick(key, this)
  },
  debounce(limit: number) {
    return debounce(limit, this)
  },
  catch(handler: (err: Error) => void) {
    return catchError(handler, this)
  },
  concat(...streams: Observable[]) {
    return concat(this, ...streams)
  },
  combine(stream: Observable) {
    return combine(this, stream)
  },
  merge(stream: Observable) {
    return merge(this, stream)
  },
  share(bufferSize: number = DEFAULT_BUFFER_SIZE) {
    return share(bufferSize, this as any)
  },
  switch() {
    return switchStream(this)
  },
  flatMap(fn: (value: any) => Observable) {
    return flatMap(fn, this)
  },
  distinct(fn: GenericFunction = (x: any) => x) {
    return distinct(fn, this)
  },
  until(fn: (value: any) => boolean) {
    return until(fn, this)
  },
  zip(zipper: (...args: any[]) => any, ...streams: Observable[]) {
    if (!isFunction(zipper)) {
      return zip(this, zipper, ...streams)
    }
    return zip(zipper, this, ...streams)
  },
  retry(config: any) {
    return retry(config, this)
  },
  finally(fn: () => void) {
    return finallyEffect(fn, this)
  },
  subject() {
    return subject()
  },
}
Object.assign(Observable.prototype, ReactiveExtensions)

export {
  buffer,
  catchError,
  concat,
  combine,
  debounce,
  distinct,
  effect,
  filter,
  finallyEffect,
  forEach,
  interval,
  listen,
  map,
  mapTo,
  merge,
  flatMap,
  pick,
  reduce,
  retry,
  skip,
  share,
  switchStream,
  subject,
  take,
  throttle,
  until,
  zip,
}
