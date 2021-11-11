import { curry } from './utils'

/**
 * Math functions
 * Provides a set of functions for common math operations
 */
export const eq = curry((a: any, b: any) => a === b)
export const add = curry((x: number, y: number) => x + y)
export const addRight = curry((x: number, y: number) => y + x)
export const subtract = curry((x: number, y: number) => x - y)
export const subtractRight = curry((x: number, y: number) => y - x)
export const multiply = curry((x: number, y: number) => x * y)
export const divide = curry((x: number, y: number) => x / y)
export const divideRight = curry((x: number, y: number) => y / x)
export const roundTo = (n: number) => (x: number) =>
  Math.round(x * Math.pow(10, n)) / Math.pow(10, n)
export const pow = (base: number, power: number): number =>
  power === 0 ? 1 : power & 1 ? base * pow(base, power - 1) : pow(base * base, power >> 1)
