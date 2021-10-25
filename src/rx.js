import { curry } from './combinators.js'
import 'core-js/features/observable/index.js'
export const { Observable, ReadableStream } = globalThis

const withNext = observer => next => ({
  next,
  error(e) {
    observer.error(e)
  },
  complete() {
    observer.complete()
  },
})

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

if (Observable.fromEvent === undefined || typeof Observable.fromEvent !== 'function') {
  Object.defineProperty(Observable, 'fromEvent', {
    value: curry(
      (emitter, event, handler) =>
        new Observable(observer => {
          emitter.on(event, (...args) => observer.next(handler(...args)))
          emitter.on('end', observer.complete.bind(observer))
          emitter.on('error', observer.error.bind(observer))
        })
    ),
    enumerable: false,
    writable: false,
    configurable: false,
  })
}

if (
  Observable.fromPromise === undefined ||
  typeof Observable.fromPromise !== 'function'
) {
  Object.defineProperty(Observable, 'fromPromise', {
    value: promise =>
      new Observable(observer => {
        promise
          .then(value => observer.next(value))
          .catch(err => observer.error(err))
          .finally(() => observer.complete())
      }),
  })
}

export const listen$ = curry((eventName, element) => {
  return new Observable(observer => {
    const handler = event => observer.next(event)
    element.addEventListener(eventName, handler, true)
    return () => element.removeEventListener(eventName, handler, true)
  })
})

export const throttle = curry((limit, stream) => {
  let lastRan = 0
  let lastInterval = 0
  return new Observable(observer => {
    const subs = stream.subscribe(
      withNext(observer)(value => {
        if (!lastRan) {
          observer.next(value)
          lastRan = Date.now()
        } else {
          clearTimeout(lastInterval)
          lastInterval = setTimeout(() => {
            if (Date.now() - lastRan >= limit) {
              observer.next(value)
              lastRan = Date.now()
            }
          }, limit - (Date.now() - lastRan))
        }
      })
    )
    return () => subs.unsubscribe()
  })
})

export const map = curry(
  (fn, stream) =>
    new Observable(observer => {
      const subs = stream.subscribe(
        withNext(observer)(value => {
          try {
            observer.next(fn(value))
          } catch (err) {
            observer.error(err)
          }
        })
      )
      return () => subs.unsubscribe()
    })
)

export const filter = curry(
  (predicate, stream) =>
    new Observable(observer => {
      const subs = stream.subscribe(
        withNext(observer)(value => {
          try {
            if (predicate(value)) {
              observer.next(value)
            }
          } catch (err) {
            observer.error(err)
          }
        })
      )
      return () => subs.unsubscribe()
    })
)

export const buffer = curry((count, stream) => {
  const _internalStorage = []
  return new Observable(observer => {
    const subs = stream.subscribe(
      withNext(observer)(value => {
        _internalStorage.push(value)
        if (_internalStorage.length >= count) {
          observer.next(_internalStorage.slice())
          _internalStorage.length = 0
        }
      })
    )
    return () => subs.unsubscribe()
  })
})

export const take = curry((numberToTake, stream) => {
  let taken = 0
  return new Observable(observer => {
    const subs = stream.subscribe(
      withNext(observer)(value => {
        if (taken++ === numberToTake) return observer.complete()
        observer.next(value)
      })
    )
    return () => subs.unsubscribe()
  })
})

export const skip = curry((count, stream) => {
  let skipped = 0
  return new Observable(observer => {
    const subs = stream.subscribe(
      withNext(observer)(value => {
        if (skipped++ >= count) {
          observer.next(value)
        }
      })
    )
    return () => subs.unsubscribe()
  })
})

export const reduce = curry((reducer, initialValue, stream) => {
  let accumulator = initialValue ?? {}
  return new Observable(observer => {
    const subs = stream.subscribe({
      next(value) {
        try {
          accumulator = reducer(accumulator, value)
        } catch (err) {
          observer.error(err)
        }
      },
      error(e) {
        observer.error(e)
      },
      complete() {
        observer.next(accumulator)
        observer.complete()
      },
    })
    return () => subs.unsubscribe()
  })
})

export const mapTo = curry(
  (value, stream) =>
    new Observable(observer => {
      const subs = stream.subscribe(withNext(observer)(() => observer.next(value)))
      return () => subs.unsubscribe()
    })
)

export const _do = curry(
  (fn, stream) =>
    new Observable(observer => {
      const subs = stream.subscribe(
        withNext(observer)(value => {
          try {
            fn(value)
            observer.next(value)
          } catch (err) {
            observer.error(err)
          }
        })
      )
      return () => subs.unsubscribe()
    })
)

export const forEach = curry((fn, stream) => {
  const subs = stream.subscribe({
    next: fn,
    error: fn,
  })
  return { unsubscribe: subs.unsubscribe.bind(subs) }
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
  do(fn) {
    return _do(fn, this)
  },
}

Object.assign(Observable.prototype, ReactiveExtensions)
