import { Observable, $$observable, Observer } from './Observable'
import { EventEmitter } from 'events'
export { EventEmitter }

function implementsPushProtocol(obj: any) {
  return (
    obj &&
    Symbol.iterator in Object(obj) &&
    typeof obj['push'] === 'function' &&
    typeof obj[Symbol.iterator] === 'function'
  )
}

const ON_EVENT = 'on'
const END_EVENT = 'end'

export const reactivize = (obj: any) => {
  if (!implementsPushProtocol(obj)) {
    throw new TypeError('Object does not implement a push protocol')
  }
  const emitter = new EventEmitter()
  const pushProxy = new Proxy(obj, {
    get(...args) {
      const [target, key] = args
      if (key === 'push') {
        const pushRef = target[key]
        return (...capturedArgs: any[]) => {
          const result = pushRef.call(target, ...capturedArgs)
          emitter.emit(ON_EVENT, ...capturedArgs)
          return result
        }
      }
      return Reflect.get(...args)
    },
  })
  const observable = {
    [$$observable]() {
      return new Observable((observer: Observer) => {
        emitter.on(ON_EVENT, (newValue: any) => {
          observer.next(newValue)
        })
        emitter.on(END_EVENT, () => observer.complete())
        for (const value of obj) {
          observer.next(value)
        }
        return () => {
          emitter.removeAllListeners(ON_EVENT)
          emitter.removeAllListeners(END_EVENT)
        }
      })
    },
  }
  return Object.assign(pushProxy, observable)
}
