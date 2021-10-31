import { placeholder } from './utils.js'
/**
 * Share
 * @param {observable} Observable to share
 * @returns {observable}
 */
export const share = stream => {
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
      store.values.push(value)
      queueMicrotask(() => broadcast())
    },
    error: error => store.errors.push(error),
    complete: () => (store.wantsComplete = true),
  })

  function broadcast() {
    if (store.errors.length) {
      store.observers.forEach(observer => {
        store.errors.forEach(value => {
          observer.error(value)
        })
      })
    } else {
      store.observers.forEach(observer => {
        store.values.forEach(value => {
          observer.next(value)
        })
      })
    }
    if (store.wantsComplete) {
      store.observers.forEach(observer => observer.complete())
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
