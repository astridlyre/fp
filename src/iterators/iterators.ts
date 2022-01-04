/* eslint no-unused-vars: 0 */
import { curry } from '../functions/utils'

/**
 * MapWith
 * @param {function} fn - Mapper function
 * @param {iterable} iterable
 * @returns {function} Generator iterator function
 */
export const mapWith = curry(function* mapWith<X>(
  fn: (element: X) => any,
  iterable: Iterable<X>,
): Iterable<any> {
  for (const element of iterable) {
    yield fn(element)
  }
})

/**
 * MapAllWith
 * @param {function} fn - Mapper function
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that applies mapper to all
 * elements and then yields the result of their individual iteration
 */
export const mapAllWith = curry(function* mapAllWith<X>(
  fn: (element: X) => Iterable<any>,
  iterable: Iterable<X>,
): Iterable<any> {
  for (const element of iterable) {
    yield* fn(element)
  }
})

/**
 * FilterWith
 * @param {function} fn - Filter function
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that filters elements by
 * function fn
 */
export const filterWith = curry(function* filterWith<X>(
  fn: (element: X) => boolean,
  iterable: Iterable<X>,
): Iterable<X> {
  for (const element of iterable) {
    if (fn(element)) yield element
  }
})

/**
 * Compact
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that removes nullable
 * values
 */
export const compact = curry(function* compact<X>(
  iterable: Iterable<X>,
): Iterable<X> {
  for (const element of iterable) {
    if (element != null) yield element
  }
})

/**
 * UntilWith
 * @param {function} fn - Tester function
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that returns elements until
 * the result of fn(element) is true
 */
export const untilWith = curry(function* untilWith<X>(
  fn: (element: X) => boolean,
  iterable: Iterable<X>,
): Iterable<X> {
  for (const element of iterable) {
    if (fn(element)) break
    yield element
  }
})

/**
 * First
 * @param {iterable} iterable
 * @returns {any} First element of iterable
 */
export const first = <X>(iterable: Iterable<X>): any =>
  iterable[Symbol.iterator]().next().value

/**
 * Rest
 * @param {iterable} iterable
 * @returns {function} Generator iterator function skipping the first element
 */
export function* rest<X>(iterable: Iterable<X>): Iterable<X> {
  const iterator = iterable[Symbol.iterator]()
  iterator.next()
  yield* iterator as any
}

/**
 * Take
 * @param {number} numberToTake
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that yields numberToTake
 * number elements from iteratable
 */
export const take = curry(function* take<X>(
  numberToTake: number,
  iterable: Iterable<X>,
): Iterable<X> {
  const iterator = iterable[Symbol.iterator]()

  for (let i = 0; i < numberToTake; ++i) {
    const { done, value } = iterator.next()
    if (!done) yield value
  }
})

/**
 * Drop
 * @param {number} numberToDrop
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that yields elements once
 * numberToDrop elements have been dropped
 */
export const drop = curry(function* drop<X>(
  numberToDrop: number,
  iterable: Iterable<X>,
): Iterable<X> {
  if (numberToDrop >= (iterable as any).length) return
  const iterator = iterable[Symbol.iterator]()

  let i = 0
  while (i++ < numberToDrop) {
    iterator.next()
  }
  do {
    const { done, value } = iterator.next()
    if (!done) yield value
  } while (++i <= (iterable as any).length)
})

/**
 * Zip
 * @param {iterable} iterables
 * @returns {function} Generator iterator function that yields an array of
 * the combined values of each iterator of iterables
 */
export function* zip<X>(...iterables: Iterable<X>[]): Iterable<X> {
  const iterators = iterables.map((i) => i[Symbol.iterator]())

  while (true) {
    const pairs = iterators.map((j) => j.next())
    const dones: (boolean | undefined)[] = []
    const values: any[] = []
    pairs.forEach((p) => (dones.push(p.done), values.push(p.value)))
    if (dones.indexOf(true) >= 0) break
    yield values as any
  }
}

/**
 * ZipWith
 * @param {function} zipper - Function to apply to values
 * @param {iterable} iterables - Iterables to zip
 * @returns {function} Generator iterator function that yields the result
 * of applying zipper function to elements of iterables
 */
export function* zipWith<X>(
  zipper: (...elements: X[]) => any,
  ...iterables: Iterable<X>[]
): Iterable<any> {
  const iterators = iterables.map((i) => i[Symbol.iterator]())

  while (true) {
    const pairs = iterators.map((j) => j.next())
    const dones: (boolean | undefined)[] = []
    const values: any[] = []
    pairs.forEach((p) => (dones.push(p.done), values.push(p.value)))
    if (dones.indexOf(true) >= 0) break
    yield zipper(...values)
  }
}

/**
 * ReduceWith
 * @param {function} fn - Reducer function
 * @param {any} seed - Initial value
 * @param {iterable} iterable
 * @returns {any} Result of reducing iterable with reducer
 */
export const reduceWith = curry(function reduceWith<X>(
  fn: (accumulator: any, element: X) => any,
  seed: any,
  iterable: Iterable<X>,
): any {
  let accumulator = seed
  for (const element of iterable) {
    accumulator = fn(accumulator, element)
  }
  return accumulator
})

/**
 * MemoizeIter
 * @param {function} generator - Iterator function
 * @returns {function} Memoized generator function
 */
export function memoizeIter(
  generator: (...args: any) => Generator,
): (...args: any) => Generator {
  const memos = Object.create(null)
  const iters = Object.create(null)

  return function* memoize(...args: any[]): any {
    const key = JSON.stringify(args)
    let i = 0

    if (memos[key] == null) {
      memos[key] = []
      iters[key] = generator(...args)
    }

    while (true) {
      if (i < memos[key].length) {
        yield memos[key][i++]
      } else {
        const { done, value } = iters[key].next()
        if (done) return
        else yield (memos[key][i++] = value)
      }
    }
  }
}
