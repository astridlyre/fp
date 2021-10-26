/**
 * MapWith
 * @param {function} fn - Mapper function
 * @param {iterable} iterable
 * @returns {function} Generator iterator function
 */
export function* mapWith(fn, iterable) {
  for (const element of iterable) {
    yield fn(element)
  }
}

/**
 * MapAllWith
 * @param {function} fn - Mapper function
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that applies mapper to all
 * elements and then yields the result of their individual iteration
 */
export function* mapAllWith(fn, iterable) {
  for (const element of iterable) {
    yield* fn(element)
  }
}

/**
 * FilterWith
 * @param {function} fn - Filter function
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that filters elements by
 * function fn
 */
export function* filterWith(fn, iterable) {
  for (const element of iterable) {
    if (fn(element)) yield element
  }
}

/**
 * Compact
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that removes nullable
 * values
 */
export function* compact(iterable) {
  for (const element of iterable) {
    if (element != null) yield element
  }
}

/**
 * UntilWith
 * @param {function} fn - Tester function
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that returns elements until
 * the result of fn(element) is true
 */
export function* untilWith(fn, iterable) {
  for (const element of iterable) {
    if (fn(element)) break
    yield element
  }
}

/**
 * First
 * @param {iterable} iterable
 * @returns {any} First element of iterable
 */
export const first = iterable => iterable[Symbol.iterator]().next().value

/**
 * Rest
 * @param {iterable} iterable
 * @returns {function} Generator iterator function skipping the first element
 */
export function* rest(iterable) {
  const iterator = iterable[Symbol.iterator]()
  iterator.next()
  yield* iterator
}

/**
 * Take
 * @param {number} numberToTake
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that yields numberToTake
 * number elements from iteratable
 */
export function* take(numberToTake, iterable) {
  const iterator = iterable[Symbol.iterator]()
  for (let i = 0; i < numberToTake; ++i) {
    const { done, value } = iterator.next()
    if (!done) yield value
  }
}

/**
 * Zip
 * @param {iterable} iterables
 * @returns {function} Generator iterator function that yields an array of
 * the combined values of each iterator of iterables
 */
export function* zip(...iterables) {
  const iterators = iterables.map(i => i[Symbol.iterator]())
  while (true) {
    const pairs = iterators.map(j => j.next())
    const dones = []
    const values = []
    pairs.forEach(p => (dones.push(p.done), values.push(p.value)))
    if (dones.indexOf(true) >= 0) break
    yield values
  }
}

/**
 * ZipWith
 * @param {function} zipper - Function to apply to values
 * @param {iterable} iterables - Iterables to zip
 * @returns {function} Generator iterator function that yields the result
 * of applying zipper function to elements of iterables
 */
export function* zipWith(zipper, ...iterables) {
  const iterators = iterables.map(i => i[Symbol.iterator]())
  while (true) {
    const pairs = iterators.map(j => j.next())
    const dones = []
    const values = []
    pairs.forEach(p => (dones.push(p.done), values.push(p.value)))
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
export function reduceWith(fn, seed, iterable) {
  let accumulator = seed
  for (const element of iterable) {
    accumulator = fn(accumulator, element)
  }
  return accumulator
}

/**
 * MemoizeIter
 * @param {function} generator - Iterator function
 * @returns {function} Memoized generator function
 */
export function memoizeIter(generator) {
  const memos = Object.create(null)
  const iters = Object.create(null)

  return function* memoize(...args) {
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
