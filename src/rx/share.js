import { placeholder } from './utils.js'
/**
 * Share
 * @param {observable} Observable to share
 * @returns {observable}
 */
export const share = stream => {
  let sharedSubs = []
  const subs = stream.subscribe({
    next: broadcast('next'),
    error: broadcast('error'),
    complete: broadcast('complete'),
  })

  function broadcast(handler) {
    return value => sharedSubs.forEach(observer => observer[handler](value))
  }

  return placeholder(
    () =>
      new Observable(observer => {
        sharedSubs.push(observer)
        return () => {
          sharedSubs = sharedSubs.filter(o => o !== observer)
          observer.complete()
          if (sharedSubs.length === 0) subs.unsubscribe()
        }
      })
  )()
}
