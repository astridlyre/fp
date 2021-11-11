import { curry } from './utils'

/**
 * Match
 */
export const match = curry((re: RegExp, s: string) => re.test(s))

/**
 * Replace
 */
export const replace = curry((re: RegExp, rpl: string, s: string) => s.replace(re, rpl))

/**
 * Split
 */
export const split = curry((sep: string | RegExp, s: string) => s.split(sep))
export const toLowerCase = (s: string) => s.toLowerCase()
export const toUpperCase = (s: string) => s.toUpperCase()
export const prepend = curry((s1: string, s2: string) => `${s1}${s2}`)
export const append = curry((s1: string, s2: string) => `${s2}${s1}`)

/**
 * PadStart
 */
export const padStart = curry((x: string, reps: number, fill: string) =>
  String.prototype.padStart.call(x, reps, fill)
)

/**
 * PadEnd
 */
export const padEnd = curry((x: string, reps: number, fill: string) =>
  String.prototype.padEnd.call(x, reps, fill)
)
