// Iterables
export function* mapWith(fn, iterable) {
  for (const element of iterable) {
    yield fn(element)
  }
}

export function* mapAllWith(fn, iterable) {
  for (const element of iterable) {
    yield* fn(element)
  }
}

export function* filterWith(fn, iterable) {
  for (const element of iterable) {
    if (!fn(element)) yield element
  }
}

export function* compact(iterable) {
  for (const element of iterable) {
    if (element != null) yield element
  }
}

export function* untilWith(fn, iterable) {
  for (const element of iterable) {
    if (fn(element)) break
    yield element
  }
}

export const first = iterable => iterable[Symbol.iterator]().next().value

export function* rest(iterable) {
  const iterator = iterable[Symbol.iterator]()
  iterator.next()
  yield* iterator
}

export function* take(numberToTake, iterable) {
  const iterator = iterable[Symbol.iterator]()
  for (let i = 0; i < numberToTake; ++i) {
    const { done, value } = iterator.next()
    if (!done) yield value
  }
}

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

export function reduceWith(fn, seed, iterable) {
  let accumulator = seed
  for (const element of iterable) {
    accumulator = fn(accumulator, element)
  }
  return accumulator
}

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
