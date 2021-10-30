/**
 * Switch, switch to a mapped Observable
 * @param {observable}
 * @returns {observable}
 */
export const switchStream = stream =>
  new Observable(observer => {
    let done = false
    let prevSubs = []
    let subs = stream.subscribe({
      next: nextStream =>
        queueMicrotask(() => {
          if (!done) {
            prevSubs.push(() => subs.unsubscribe())
            subs = nextStream.subscribe({
              next: value => observer.next(value),
              complete: () => observer.complete(),
            })
          }
        }),
    })
    return () => {
      done = true
      prevSubs.forEach(f => f())
      subs.unsubscribe()
    }
  })
