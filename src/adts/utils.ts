export function throwError(err: Error): Error {
  throw err
}
export function errorWith(str: string): TypeError {
  throw new TypeError(str)
}
