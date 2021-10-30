import { curry } from './combinators.js'
import 'core-js/features/observable/index.js'
export const { Observable, ReadableStream } = globalThis
import { buffer } from './rx/buffer.js'
import { catchError } from './rx/catch.js'
import { concat } from './rx/concat.js'
import { combine } from './rx/combine.js'
import { debounce } from './rx/debounce.js'
import { distinct } from './rx/distinct.js'
import { effect } from './rx/effect.js'
import { filter } from './rx/filter.js'
import { forEach } from './rx/forEach.js'
import { interval } from './rx/interval.js'
import { listen } from './rx/listen.js'
import { map } from './rx/map.js'
import { mapTo } from './rx/mapTo.js'
import { merge } from './rx/merge.js'
import { flatMap } from './rx/flatMap.js'
import { pick } from './rx/pick.js'
import { reduce } from './rx/reduce.js'
import { retry } from './rx/retry.js'
import { skip } from './rx/skip.js'
import { switchStream } from './rx/switch.js'
import { take } from './rx/take.js'
import { throttle } from './rx/throttle.js'
import { until } from './rx/until.js'
import { zip } from './rx/zip.js'

if (
  Observable.fromGenerator === undefined ||
  typeof Observable.fromGenerator !== 'function'
) {
  if (ReadableStream === undefined) {
    const { Readable } = await import('stream')
    Object.defineProperty(Observable, 'fromGenerator', {
      value(generator) {
        return new Observable(observer => {
          Readable.from(generator)
            .on('data', observer.next.bind(observer))
            .on('end', observer.complete.bind(observer))
            .on('error', observer.error.bind(observer))
        })
      },
      enumerable: false,
      writable: false,
      configurable: false,
    })
  } else {
    await import('./web-streams.js')
    Object.defineProperty(Observable, 'fromGenerator', {
      value(generator) {
        return new Observable(observer => {
          ReadableStream.from(generator)
            .on('data', observer.next.bind(observer))
            .on('end', observer.complete.bind(observer))
            .on('error', observer.error.bind(observer))
        })
      },
      enumerable: false,
      writable: false,
      configurable: false,
    })
  }
}

const p = {
  enumerable: false,
  writable: false,
  configurable: false,
}

Object.defineProperties(Observable, {
  listen: { value: listen, ...p },
  interval: { value: interval, ...p },
  combine: { value: combine, ...p },
  merge: { value: merge, ...p },
  fromEvent: {
    value: curry(
      (emitter, event, handler) =>
        new Observable(observer => {
          emitter.on(event, (...args) => observer.next(handler(...args)))
          emitter.on('end', observer.complete.bind(observer))
          emitter.on('error', observer.error.bind(observer))
        })
    ),
    ...p,
  },
  fromPromise: {
    value: promise =>
      new Observable(observer => {
        promise
          .then(value => observer.next(value))
          .catch(err => observer.error(err))
          .finally(() => observer.complete())
      }),
    ...p,
  },
})

export const ReactiveExtensions = {
  filter(predicate) {
    return filter(predicate, this)
  },
  map(fn) {
    return map(fn, this)
  },
  buffer(count) {
    return buffer(count, this)
  },
  skip(count) {
    return skip(count, this)
  },
  take(numberToTake) {
    return take(numberToTake, this)
  },
  reduce(reducer, initialValue = {}) {
    return reduce(reducer, initialValue, this)
  },
  mapTo(value) {
    return mapTo(value, this)
  },
  throttle(limit) {
    return throttle(limit, this)
  },
  forEach(fn) {
    return forEach(fn, this)
  },
  effect(fn) {
    return effect(fn, this)
  },
  pick(key) {
    return pick(key, this)
  },
  debounce(limit) {
    return debounce(limit, this)
  },
  catch(handler) {
    return catchError(handler, this)
  },
  concat(...streams) {
    return concat(this, ...streams)
  },
  combine(stream) {
    return combine(this, stream)
  },
  merge(stream) {
    return merge(this, stream)
  },
  switch() {
    return switchStream(this)
  },
  flatMap(fn) {
    return flatMap(fn, this)
  },
  distinct(fn = x => x) {
    return distinct(fn, this)
  },
  until(fn) {
    return until(fn, this)
  },
  zip(...streams) {
    return zip(this, ...streams)
  },
  retry(config) {
    return retry(config, this)
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
  switchStream,
  take,
  throttle,
  until,
  zip,
}
