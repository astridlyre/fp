/* eslint no-unused-vars: 0 */

export function throwError(err: Error): Error {
  throw err
}
export function errorWith(str: string): TypeError {
  throw new TypeError(str)
}
