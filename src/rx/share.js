import { placeholder } from './utils.js'
/**
 * Share, buffers 100 events by default
 * @param {number} bufferSize (length of buffer)
 * @param {observable} Observable to share
 * @returns {observable}
 */
export const share = (bufferSize, stream) => {
  const store = {
    values: [],
    errors: [],
    wantsComplete: false,
    observers: [],
    addObserver(o) {
      this.observers.push(o)
    },
    removeObserver(o) {
      this.observers = this.observers.filter(ob => ob !== o)
    },
  }
  const subs = stream.subscribe({
    next: value => {
      if (store.values.length >= bufferSize) {
        store.values.shift()
      }
      store.values.push(value)
      queueMicrotask(() => broadcast())
    },
    error: error => {
      if (store.errors.length >= bufferSize) {
        store.errors.shift()
      }
      store.errors.push(error)
    },
    complete: () => (store.wantsComplete = true),
  })

  function broadcast() {
    const { values, errors, observers, wantsComplete } = store
    if (errors.length) {
      observers.forEach(observer => {
        errors.forEach(value => {
          observer.error(value)
        })
      })
      errors.length = 0
    } else {
      observers.forEach(observer => {
        values.forEach(value => {
          observer.next(value)
        })
      })
      values.length = 0
    }
    if (wantsComplete) {
      observers.forEach(observer => observer.complete())
      return subs.unsubscribe()
    }
  }

  return placeholder(
    () =>
      new Observable(observer => {
        store.addObserver(observer)
        return () => {
          store.removeObserver(observer)
          observer.complete()
          if (store.observers.length === 0) subs.unsubscribe()
        }
      })
  )()
}
