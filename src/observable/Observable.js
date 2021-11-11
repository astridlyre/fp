import { entries } from '../functions/objects.ts'
import { isFunction } from '../functions/predicates.ts'
import 'core-js/features/observable/index.js'
export const { Observable } = globalThis

import { Readable } from 'stream'
import { buffer } from './methods/buffer.js'
import { catchError } from './methods/catch.js'
import { concat } from './methods/concat.js'
import { combine } from './methods/combine.js'
import { debounce } from './methods/debounce.js'
import { distinct } from './methods/distinct.js'
import { effect } from './methods/effect.js'
import { finallyEffect } from './methods/finally.js'
import { filter } from './methods/filter.js'
import { forEach } from './methods/forEach.js'
import { interval } from './methods/interval.js'
import { listen } from './methods/listen.js'
import { map } from './methods/map.js'
import { mapTo } from './methods/mapTo.js'
import { makeObservable } from './methods/observe.js'
import { merge } from './methods/merge.js'
import { flatMap } from './methods/flatMap.js'
import { pick } from './methods/pick.js'
import { reduce } from './methods/reduce.js'
import { retry } from './methods/retry.js'
import { skip } from './methods/skip.js'
import { share } from './methods/share.js'
import { switchStream } from './methods/switch.js'
import { subject } from './methods/subject.js'
import { take } from './methods/take.js'
import { throttle } from './methods/throttle.js'
import { until } from './methods/until.js'
import { zip } from './methods/zip.js'
import { placeholder } from './methods/utils.js'

export const $$observable = /* #__PURE__ */ (() =>
  (typeof Symbol === 'function' && Symbol.observable) || '@@observable')()

const additionalProperties = {
  fromEvent: placeholder(
    (emitter, event, handler) =>
      new Observable(observer => {
        const group = new Map([
          [event, (...args) => observer.next(handler(...args))],
          ['error', observer.error.bind(observer)],
          ['end', observer.complete.bind(observer)],
        ])
        entries(group).forEach(([event, handler]) => emitter.on(event, handler))
        return () =>
          entries(group).forEach(([event, handler]) =>
            emitter.removeListener(event, handler)
          )
      })
  ),
  fromGenerator: placeholder(
    generator =>
      new Observable(observer => {
        Readable.from(generator())
          .on('data', observer.next.bind(observer))
          .on('end', observer.complete.bind(observer))
          .on('error', observer.error.bind(observer))
      })
  ),
  fromPromise: placeholder(
    promise =>
      new Observable(observer => {
        promise
          .then(value => observer.next(value))
          .catch(err => observer.error(err))
          .finally(() => observer.complete())
      })
  ),
  fromStream: placeholder(
    stream =>
      new Observable(observer => {
        stream.on('data', observer.next.bind(observer))
        stream.on('end', observer.complete.bind(observer))
        stream.on('error', observer.error.bind(observer))
      })
  ),
  combine,
  interval,
  listen,
  merge,
  subject,
  makeObservable,
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
  share(bufferSize = 100) {
    return share(bufferSize, this)
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
  zip(zipper, ...streams) {
    if (!isFunction(zipper)) {
      return zip(this, zipper, ...streams)
    }
    return zip(zipper, this, ...streams)
  },
  retry(config) {
    return retry(config, this)
  },
  finally(fn) {
    return finallyEffect(fn, this)
  },
  subject() {
    return subject(this)
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
