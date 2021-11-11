import { curry, compose, keyBy } from './utils'
import { prop, aggregate, values } from './objects'

function composeM2(f: Function, g: Function) {
  return function innerComposeM2(this: any, ...args: any[]) {
    return g.apply(this, args).flatMap(f)
  }
}

/**
 * ComposeM
 */
export function composeM(...Ms: any) {
  return Ms.reduce(composeM2)
}

export const liftA2 = curry((fn: Function, a1: any, a2: any) => a1.map(fn).ap(a2))
export const liftA3 = curry((fn: Function, a1: any, a2: any, a3: any) =>
  a1.map(fn).ap(a2).ap(a3)
)
export const liftA4 = curry((fn: Function, a1: any, a2: any, a3: any, a4: any) =>
  a1.map(fn).ap(a2).ap(a3).ap(a4)
)
export const apply = curry((fn: Function, F: any) => map.call(F, fn))
export const flat = (M: any) => M.flat()
export const flatMap = curry((f: Function, M: any) => M.flatMap(f))
export const fold = curry((f: Function, M: any) => M.fold(f))
export const getOrElseThrow = curry((e: Error, M: any) => M.getOrElseThrow(e))

/**
 * Array functions
 * Provides a set of functions for common array operations
 */
export const head = (a: string | any[]) => a && a[0]
export const last = (a: string | any[]) => a && a[a.length - 1]
export const every = curry((f: (value: any) => boolean, arr: any[]) => arr.every(f))
export const some = curry((f: (value: any) => boolean, arr: any[]) => arr.some(f))
export const find = curry((f: (value: any) => boolean, arr: any[]) => arr.find(f))
export const sum = (...args: number[]) => args.reduce((x, y) => x + y, 0)
export const average = (ns: number[]) => sum(...ns) / ns.length
export const join = curry((sep: string, a: any[]) => a.join(sep))

/**
 * Partition, divide an array into two
 */
export const partition = (
  arr: any[],
  a: (value: any) => boolean,
  b: (value: any) => boolean
) =>
  arr.reduce(
    (acc, cv) => (a(cv) ? (acc[0].push(cv), acc) : b(cv) ? (acc[1].push(cv), acc) : acc),
    [[], []]
  )

/**
 * ZipMap
 */
export const zipMap = <X>(f: Function, ...iters: Iterable<X>[]) => {
  const min = Math.min(...pluck('length')(iters))
  const result = []

  for (let i = 0; i < min; i++) {
    result.push(f(...pluck(i)(iters)))
  }

  return result
}

/**
 * SortBy
 */
export const sortBy = curry((f: (a: any, b: any) => number, a: any[]) => [...a].sort(f))

/**
 * ForEach
 * @param {function} f - Function to run on value(s) of M
 * @param {array} M - Monad / iterable that implements forEach
 * @returns {undefined}
 */
export const forEach = curry((f: (value: any) => void, M: any[]) => M.forEach(f))

/**
 * Map
 */
export const map = curry((f: (value: any, index: number) => any, M: any[]) => M.map(f))

/**
 * Filter
 */
export const filter = curry((p: (value: any) => boolean, M: any[]) => M.filter(p))

/**
 * Reduce
 */
export const reduce = curry(
  (reducer: (accumulator: any, value: any) => any, seed: any, M: any[]) =>
    M.reduce(reducer, seed)
)

/**
 * ReduceRight
 */
export const reduceRight = curry(
  (reducer: (accumulator: any, value: any) => any, seed: any, M: any[]) =>
    M.reduceRight(reducer, seed)
)

/**
 * Pluck
 */
export const pluck = compose(map, prop)

/**
 * DeepMap
 */
export const deepMap = (fn: Function) =>
  function innerDeepMap(tree: any[]): any[] {
    return Array.prototype.map.call(tree, element =>
      Array.isArray(element) ? innerDeepMap(element) : fn(element)
    )
  }

/**
 * Range
 */
export const range = (start: number, end: number, step = start < end ? 1 : -1) => {
  let index = -1
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0)

  const result = new Array(length)

  while (length--) {
    result[++index] = start
    start += step
  }

  return result
}

/**
 * deepJoin, deep join two arrays on keyA and keyB
 */
export const deepJoin = curry((keyA: string, keyB: string, a: any, b: any) => {
  const objA = keyBy(keyA, a)
  const objB = keyBy(keyB, b)

  return values(aggregate(objA, objB))
})
