/* eslint no-param-reassign: 0, no-unused-vars: 0 */
import { curry, compose, keyBy } from './utils'
import { prop, aggregate, values } from './objects'

type GenericFunction = (...args: any[]) => any

function composeM2(f: GenericFunction, g: GenericFunction) {
  return function innerComposeM2(this: any, ...args: any[]) {
    return g.apply(this, args).flatMap(f)
  }
}

interface Mappable {
  map(f: (value: any, index?: number, arr?: any[]) => any): any
}

interface Applyable {
  ap(f: (value: any) => any): any
}

interface FlatMappable {
  flatMap(f: (value: any, index?: number, arr?: any[]) => any): any
}

interface Flatable {
  flat(): any
}

interface Foldable {
  fold(f: (value: any, index?: number, arr?: any[]) => any): any
}

/**
 * ComposeM
 */
export function composeM(...Ms: any) {
  return Ms.reduce(composeM2)
}

export const liftA2 = curry(
  <T extends Mappable>(fn: GenericFunction, a1: T, a2: any) =>
    a1.map(fn).ap(a2),
)

export const liftA3 = curry(
  <T extends Mappable, P extends Applyable>(
    fn: GenericFunction,
    a1: T,
    a2: P,
    a3: P,
  ) => a1.map(fn).ap(a2).ap(a3),
)

export const liftA4 = curry(
  <T extends Mappable, P extends Applyable>(
    fn: GenericFunction,
    a1: T,
    a2: P,
    a3: P,
    a4: P,
  ) => a1.map(fn).ap(a2).ap(a3).ap(a4),
)

export const apply = curry((fn: GenericFunction, F: any) => map.call(F, fn))

export const flat = <F extends Flatable>(M: F) => M.flat()

export const flatMap = curry(
  <F extends FlatMappable>(f: GenericFunction, M: F) => M.flatMap(f),
)

export const fold = curry(<F extends Foldable>(f: GenericFunction, M: F) =>
  M.fold(f),
)

export const getOrElseThrow = curry((e: Error, M: any) => M.getOrElseThrow(e))

/**
 * Array functions
 * Provides a set of functions for common array operations
 */
export const head = <T extends { [index: number]: any }>(a: T): T => a && a[0]
export const last = <T>(a: T[]): T => a && a[a.length - 1]
export const cat = (a: any[], b: any): any[] => a.concat(b)
export const every = curry(<T>(f: (value: T) => boolean, arr: T[]) =>
  arr.every(f),
)
export const some = curry(<T>(f: (value: T) => boolean, arr: T[]) =>
  arr.some(f),
)
export const find = curry(<T>(f: (value: T) => boolean, arr: T[]) =>
  arr.find(f),
)
export const sum = (...args: number[]) => args.reduce((x, y) => x + y, 0)
export const average = (ns: number[]) => sum(...ns) / ns.length
export const join = curry((sep: string, a: any[]) => a.join(sep))

/**
 * Partition, divide an array into two
 */
export const partition = <T>(
  arr: T[],
  a: (value: T) => boolean,
  b: (value: T) => boolean,
) =>
  arr.reduce(
    (acc, cv) =>
      a(cv) ? (acc[0].push(cv), acc) : b(cv) ? (acc[1].push(cv), acc) : acc,
    [[] as T[], [] as T[]],
  )

/**
 * ZipMap
 */
export const zipMap = <T>(f: GenericFunction, ...iters: Iterable<T>[]) => {
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
export const sortBy = curry(<T>(f: (a: T, b: T) => number, a: T[]): T[] =>
  [...a].sort(f),
)

/**
 * ForEach
 * @param {function} f - Function to run on value(s) of M
 * @param {array} M - Monad / iterable that implements forEach
 * @returns {undefined}
 */
export const forEach = curry(<T>(f: (value: T) => void, M: T[]): void =>
  M.forEach(f),
)

/**
 * Map
 */
export const map = curry(<T>(f: (value: T, index: number) => any, M: T[]) =>
  M.map(f),
)

/**
 * Filter
 */
export const filter = curry(<T>(p: (value: T) => boolean, M: T[]) =>
  M.filter(p),
)

/**
 * Reduce
 */
export const reduce = curry(
  <T>(reducer: (accumulator: any, value: T) => any, seed: any, M: T[]) =>
    M.reduce(reducer, seed),
)

/**
 * ReduceRight
 */
export const reduceRight = curry(
  <T>(reducer: (accumulator: any, value: T) => any, seed: any, M: T[]) =>
    M.reduceRight(reducer, seed),
)

/**
 * Pluck
 */
export const pluck = compose(map, prop)

/**
 * DeepMap
 */
export const deepMap = <T>(fn: (element: T) => any) =>
  function innerDeepMap(tree: T[]): any[] {
    return Array.prototype.map.call(tree, (element) =>
      Array.isArray(element) ? innerDeepMap(element) : fn(element),
    )
  }

/**
 * Range
 */
export const range = (
  start: number,
  end: number,
  step = start < end ? 1 : -1,
) => {
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
export const deepJoin = curry(
  (keyA: string, keyB: string, a: any[], b: any[]) => {
    const objA = keyBy(keyA, a)
    const objB = keyBy(keyB, b)

    return values(aggregate(objA, objB))
  },
)
