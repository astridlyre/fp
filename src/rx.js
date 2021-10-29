import { curry, last, values } from './combinators.js'
import 'core-js/features/observable/index.js'
export const { Observable, ReadableStream } = globalThis

const withNext = observer => next => ({
  next,
  error: observer.error.bind(observer),
  complete: observer.complete.bind(observer),
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

/**
 * Listen$
 * @param {string} eventName - Event to listen on
 * @param {HTMLElement} element
 * @returns {observable}
 */
export const listen$ = curry((eventName, element) => {
  return new Observable(observer => {
    const handler = event => observer.next(event)
    element.addEventListener(eventName, handler, true)
    return () => element.removeEventListener(eventName, handler, true)
  })
})

/**
 * Throttle
 * @param {number} limit - Delay between function calls
 * @param {observable} stream - Stream to throttle to
 * @returns {observable}
 */
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

/**
 * Debounce
 * @param {number} time to aggregate events for
 * @param {observable} stream - stream to debounce
 * @returns {observable}
 */
export const debounce = curry((limit, stream) => {
  const stack = []
  let lastInterval = 0
  return new Observable(observer => {
    const subs = stream.subscribe(
      withNext(observer)(value => {
        stack.push(value)
        clearTimeout(lastInterval)
        lastInterval = setTimeout(() => {
          observer.next(last(stack))
          stack.length = 0
        }, limit)
      })
    )
    return () => subs.unsubscribe()
  })
})

/**
 * Map
 * @param {function} fn - Mapper function
 * @parma {observable} stream - Stream to map
 * @returns {observable}
 */
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

/**
 * Filter
 * @param {function} predicate - Filter function
 * @param {observable} stream - Stream to filter
 * @returns {observable}
 */
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

/**
 * Buffer
 * @param {number} count - Size of events to buffer
 * @param {observable} stream - Stream to buffer
 * @returns {observable}
 */
export const buffer = curry((count, stream) => {
  const internalStorage = []
  return new Observable(observer => {
    const subs = stream.subscribe(
      withNext(observer)(value => {
        internalStorage.push(value)
        if (internalStorage.length >= count) {
          observer.next(internalStorage.slice())
          internalStorage.length = 0
        }
      })
    )
    return () => subs.unsubscribe()
  })
})

/**
 * Take
 * @param {number} numberToTake - Items to take from stream
 * @param {observable} stream
 * @returns {observable}
 */
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

/**
 * Skip
 * @param {number} count - Number of items to skip
 * @parma {observable} stream
 * @returns {observable}
 */
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

/**
 * Reduce
 * @param {function} reducer
 * @param {any} initialValue
 * @param {observable} stream
 * @returns {observable}
 */
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

/**
 * MapTo, map a stream to only output value
 * @param {any} value
 * @param {observable} stream
 * @returns {observable}
 */
export const mapTo = curry(
  (value, stream) =>
    new Observable(observer => {
      const subs = stream.subscribe(withNext(observer)(() => observer.next(value)))
      return () => subs.unsubscribe()
    })
)

/**
 * Do
 * @param {function} fn - Side effect function to run on each event
 * @param {observable} stream
 * @returns {observable}
 */
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

/**
 * ForEach, syntactic sugar for Observable.subscribe()
 * @param {function} fn - Function to run on each event
 * @param {observable} stream
 * @returns {object} unsubscribe object
 */
export const forEach = curry((fn, stream) => {
  const subs = stream.subscribe({
    next: fn,
    error: fn,
  })
  return { unsubscribe: subs.unsubscribe.bind(subs) }
})

/**
 * Pluck, pick keys from objects of stream
 * @param {string} key
 * @param {observable} stream
 * @returns {observable}
 */
export const pluck = curry(
  (key, stream) =>
    new Observable(observer => {
      const subs = stream.subscribe(withNext(observer)(obj => observer.next(obj[key])))
      return () => subs.unsubscribe()
    })
)

/**
 * Interval
 * @param {number} time of interval
 * @param {any} optional value to emit
 * @returns {observable}
 */
export const interval = (time, value) => {
  return new Observable(observer => {
    const id = setInterval(() => observer.next(value), time)
    return () => {
      clearInterval(id)
      observer.complete()
    }
  })
}

/**
 * Combine, merge two streams one-to-one, preserving order of each stream
 * @param {observable} Stream a
 * @param {observable} Stream b
 * @returns {observable} Combined output of stream a and b, one to one
 */
export const concat = (...streams) => {
  let done = 0
  const store = Object.fromEntries(streams.map((_, i) => [i, []]))
  const buffers = values(store)

  function pushResults(event, observer) {
    store[event.stream].unshift(event.value)
    if (buffers.every(buffer => buffer.length > 0)) {
      buffers.forEach(buffer => {
        observer.next(buffer.pop())
      })
    }
  }

  return new Observable(observer => {
    const subscriptions = streams.map((stream, i) =>
      stream.subscribe({
        next: value => pushResults({ stream: i, value }, observer),
        error: observer.error.bind(observer),
        complete: () => ++done === streams.length && observer.complete(),
      })
    )
    return () => subscriptions.forEach(subs => subs.unsubscribe())
  })
}

/**
 * combine, combine the latest output of each stream
 * @param {observable} Stream a
 * @param {observable} Stream b
 * @returns {observable} Latest combined output of stream a and b
 */
export const combine = (...streams) => {
  let done = 0
  const store = Object.fromEntries(streams.map((_, i) => [i, []]))
  const buffers = values(store)

  function pushResults(event, observer) {
    store[event.stream].push(event.value)
    if (buffers.every(buffer => buffer.length)) {
      buffers.forEach(buffer => {
        observer.next(buffer.pop())
        buffer.length = 0
      })
    }
  }

  return new Observable(observer => {
    const subscriptions = streams.map((stream, i) =>
      stream.subscribe({
        next: value => pushResults({ stream: i, value }, observer),
        error: observer.error.bind(observer),
        complete: () => ++done === streams.length && observer.complete(),
      })
    )
    return () => subscriptions.forEach(subs => subs.unsubscribe())
  })
}

/**
 * Merge, interleave two streams
 * @param {observable} Stream a
 * @param {observable} Stream b
 * @returns {observable} Interleaving stream of a and b
 */
export const merge = (...streams) => {
  let done = 0
  return new Observable(observer => {
    const subscriptions = streams.map(stream =>
      stream.subscribe({
        next: value => observer.next(value),
        error: observer.error.bind(observer),
        complete: () => ++done === streams.length && observer.complete(),
      })
    )
    return () => subscriptions.forEach(subs => subs.unsubscribe())
  })
}

const p = {
  enumerable: false,
  writable: false,
  configurable: false,
}

Object.defineProperties(Observable, {
  listen: { value: listen$, ...p },
  interval: { value: interval, ...p },
  concat: { value: concat, ...p },
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
  do(fn) {
    return _do(fn, this)
  },
  pluck(key) {
    return pluck(key, this)
  },
  debounce(limit) {
    return debounce(limit, this)
  },
  concat(stream) {
    return concat(this, stream)
  },
  combine(stream) {
    return combine(this, stream)
  },
  merge(stream) {
    return merge(this, stream)
  },
}

Object.assign(Observable.prototype, ReactiveExtensions)
