export const LazyCollection = {
  map(fn) {
    return Object.assign(
      {
        [Symbol.iterator]: () => {
          const iterator = this[Symbol.iterator]()
          return {
            next: () => {
              const { done, value } = iterator.next()
              return { done, value: done ? undefined : fn(value) }
            },
          }
        },
      },
      LazyCollection
    )
  },
  reduce(fn, seed) {
    const iterator = this[Symbol.iterator]()
    let iterationResult
    let accumulator = seed
    while (((iterationResult = iterator.next()), !iterationResult.done)) {
      accumulator = fn(accumulator, iterationResult.value)
    }
    return accumulator
  },
  filter(fn) {
    return Object.assign(
      {
        [Symbol.iterator]: () => {
          const iterator = this[Symbol.iterator]()
          return {
            next: () => {
              let done, value
              do {
                ;({ done, value } = iterator.next())
              } while (!done && !fn(value))
              return { done, value }
            },
          }
        },
      },
      LazyCollection
    )
  },
  find(fn) {
    return Object.assign(
      {
        [Symbol.iterator]: () => {
          const iterator = this[Symbol.iterator]()
          return {
            next: () => {
              let done, value
              do {
                ;({ done, value } = iterator.next())
              } while (!done && !fn(value))
              return { done, value }
            },
          }
        },
      },
      LazyCollection
    )
  },
  until(fn) {
    return Object.assign(
      {
        [Symbol.iterator]: () => {
          const iterator = this[Symbol.iterator]()
          return {
            next: () => {
              let { done, value } = iterator.next()
              done = done || fn(value)
              return { done, value: done ? undefined : value }
            },
          }
        },
      },
      LazyCollection
    )
  },
  first() {
    return this[Symbol.iterator]().next().value
  },
  rest() {
    return Object.assign(
      {
        [Symbol.iterator]: () => {
          const iterator = this[Symbol.iterator]()
          iterator.next()
          return iterator
        },
      },
      LazyCollection
    )
  },
  take(numberToTake) {
    return Object.assign(
      {
        [Symbol.iterator]: () => {
          const iterator = this[Symbol.iterator]()
          let remainingElements = numberToTake
          return {
            next: () => {
              let { done, value } = iterator.next()
              done = done || remainingElements-- <= 0
              return { done, value: done ? undefined : value }
            },
          }
        },
      },
      LazyCollection
    )
  },
}

export const Numbers = Object.assign(
  {
    *[Symbol.iterator]() {
      let n = 0
      while (true) yield n++
    },
  },
  LazyCollection
)

const EMPTY = { isEmpty: () => true }

export const Pair = (car, cdr = EMPTY) =>
  Object.assign(
    {
      car,
      cdr,
      isEmpty: () => false,
      [Symbol.iterator]() {
        let currentPair = this
        return {
          next: () => {
            if (currentPair.isEmpty()) return { done: true }
            else {
              const value = currentPair.car
              currentPair = currentPair.cdr
              return { done: false, value }
            }
          },
        }
      },
    },
    LazyCollection
  )

Pair.from = iterable =>
  (function iterationToList(iteration) {
    const { done, value } = iteration.next()
    return done ? EMPTY : Pair(value, iterationToList(iteration))
  })(iterable[Symbol.iterator]())

export const Stack = () =>
  Object.assign(
    {
      array: [],
      index: -1,
      push(value) {
        return (this.array[(this.index += 1)] = value)
      },
      pop() {
        const value = this.array[this.index]
        this.array[this.index] = undefined
        if (this.index >= 0) this.index -= 1
        return value
      },
      isEmpty() {
        return this.index < 0
      },
      [Symbol.iterator]() {
        let iteractionIndex = this.index
        return {
          next: () => {
            if (iteractionIndex > this.index) iteractionIndex = this.index
            if (iteractionIndex < 0) return { done: true }
            else return { done: false, value: this.array[iteractionIndex--] }
          },
        }
      },
    },
    LazyCollection
  )

Stack.from = function from(iterable) {
  const stack = this()
  for (let element of iterable) {
    stack.push(element)
  }
  return stack
}
