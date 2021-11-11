import { isNumber } from '../../functions/predicates.ts'
import { placeholder } from './utils.js'

// Defaults: method 'expo' for exponential time increase, anything else for
// linear time increase.
const defaultConfig = {
  method: 'expo',
  delay: 100,
  retries: 3,
}
/**
 * Retry
 * @param {object} {number}
 * Configuration object { method: 'linear' | 'expo', retries: n }
 * @param {observable} Stream to retry incase of errors
 * @returns {observable}
 */
export const retry = placeholder((config, stream) => {
  if (isNumber(config)) {
    config = Object.assign(defaultConfig, { retries: config })
  } else {
    config = Object.assign(defaultConfig, config)
  }

  const sub = []
  return new Observable(observer => {
    retryInner(stream, observer, sub, config, 1)
    return () => sub.map(s => s.unsubscribe())
  })
})

function retryInner(stream, observer, sub, config, i) {
  sub.pop()?.unsubscribe()
  return sub.push(
    stream.subscribe({
      next: value => observer.next(value),
      error: () => {
        if (i <= config.retries) {
          return setTimeout(
            () => retryInner(stream, observer, sub, config, i + 1),
            config.method === 'expo' ? config.delay * Math.pow(i, 2) : config.delay * i
          )
        }
        observer.complete()
      },
      complete: () => observer.complete(),
    })
  )
}
