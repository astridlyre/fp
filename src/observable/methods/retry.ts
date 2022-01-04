/* eslint no-param-reassign: 0, no-magic-numbers: 0 */
import { isNumber } from '../../functions/predicates'
import { placeholder } from './utils'
import { Observable, Observer, Subscription } from '../Observable'

export interface IRetryConfig {
  method: 'expo' | string
  delay: number
  retries: number
}

// Defaults: method 'expo' for exponential time increase, anything else for
// linear time increase.
const defaultConfig: IRetryConfig = {
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
export const retry = placeholder((config: IRetryConfig, stream: Observable) => {
  if (isNumber(config)) {
    config = Object.assign(defaultConfig, { retries: config })
  } else {
    config = Object.assign(defaultConfig, config)
  }

  const sub: Subscription[] = []
  return new Observable((observer: Observer) => {
    retryInner(stream, observer, sub, config, 1)
    return () => sub.map((s) => s.unsubscribe())
  })
})

function retryInner(
  stream: Observable,
  observer: Observer,
  sub: Subscription[],
  config: IRetryConfig,
  i: number,
): void {
  sub.pop()?.unsubscribe()
  sub.push(
    stream.subscribe({
      next: (value) => observer.next(value),
      error: () => {
        if (i <= config.retries) {
          return setTimeout(
            () => retryInner(stream, observer, sub, config, i + 1),
            config.method === 'expo'
              ? config.delay * Math.pow(i, 2)
              : config.delay * i,
          )
        }
        return observer.complete()
      },
      complete: () => observer.complete(),
    }),
  )
}
