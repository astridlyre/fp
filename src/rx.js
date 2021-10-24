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

if (!(Observable.fromGenerator || typeof Observable.fromGenerator !== 'function')) {
  if (ReadableStream === undefined) {
    import('stream').then(({ Readable }) => {
      Object.defineProperty(Observable, 'fromGenerator', {
        value(generator) {
          return new Observable(observer => {
            Readable.from(generator)
              .on('data', observer.next.bind(observer))
              .on('end', observer.complete.bind(observer))
          })
        },
        enumerable: false,
        writable: false,
        configurable: false,
      })
    })
  } else {
    import('./web-streams.js').then(() => {
      Object.defineProperty(Observable, 'fromGenerator', {
        value(generator) {
          return new Observable(observer => {
            ReadableStream.from(generator)
              .on('data', observer.next.bind(observer))
              .on('end', observer.complete.bind(observer))
          })
        },
        enumerable: false,
        writable: false,
        configurable: false,
      })
    })
  }
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
          if (predicate(value)) {
            observer.next(value)
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
        result = reducer(result, value)
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
  reduce(reducer, initialValue = {}) {
    return reduce(reducer, initialValue, this)
  },
  mapTo(value) {
    return mapTo(value, this)
  },
  throttle(limit) {
    return throttle(limit, this)
  },
}

Object.assign(Observable.prototype, ReactiveExtensions)
