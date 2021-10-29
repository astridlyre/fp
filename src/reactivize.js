import { Observable } from './rx.js'

export let EventEmitter
if (typeof process != 'undefined' && typeof process.versions != 'undefined') {
  ;({ EventEmitter } = await import('events'))
} else {
  EventEmitter = class EventEmitter {
    #events = Object.create(null)

    getListeners(event) {
      return this.#events[event] || []
    }
    addListener(event, listener, options = {}) {
      const listeners = this.#events[event] || []
      if (options.once) {
        this.#events[event] = listeners.concat({ listener, once: true })
        return this
      }
      this.#events[event] = listeners.concat({ listener })
      return this
    }
    addOnceListener(event, listener) {
      return this.addListener(event, listener, { once: true })
    }
    on(event, listener, options) {
      return this.addListener(event, listener, options)
    }
    removeListener(event, listener) {
      const listeners = this.#events[event] || []
      this.#events[event] = listeners.filter(l => l.listener !== listener)
      return this
    }
    removeAllListeners(...events) {
      events.forEach(event => delete this.#events[event])
    }
    emit(event, ...args) {
      const listeners = this.#events[event] || []
      listeners.forEach(
        ({ listener, once }) => (
          once && this.removeListener(event, listener), listener(...args)
        )
      )
      return this
    }
  }
}

function implementsPushProtocol(obj) {
  return (
    obj &&
    Symbol.iterator in Object(obj) &&
    typeof obj['push'] === 'function' &&
    typeof obj[Symbol.iterator] === 'function'
  )
}

const ON_EVENT = 'on'
const END_EVENT = 'end'

export const reactivize = obj => {
  if (!implementsPushProtocol(obj)) {
    throw new TypeError('Object does not implement a push protocol')
  }
  const emitter = new EventEmitter()
  const pushProxy = new Proxy(obj, {
    get(...args) {
      const [target, key] = args
      if (key === 'push') {
        const pushRef = target[key]
        return (...capturedArgs) => {
          const result = pushRef.call(target, ...capturedArgs)
          emitter.emit(ON_EVENT, ...capturedArgs)
          return result
        }
      }
      return Reflect.get(...args)
    },
  })
  const observable = {
    [Symbol.observable]() {
      return new Observable(observer => {
        emitter.on(ON_EVENT, newValue => {
          observer.next(newValue)
        })
        emitter.on(END_EVENT, () => observer.complete())
        for (const value of obj) {
          observer.next(value)
        }
        return () => {
          emitter.removeAllListeners(ON_EVENT, END_EVENT)
        }
      })
    },
  }
  return Object.assign(pushProxy, observable)
}
