/* eslint no-unused-vars: 0, prefer-const: 0, no-param-reassign: 0 */
/**
 * Lazy Collection is a Collection data-type that is essentially just mapping
 * Symbol.iterator. It can be mixed in to any existing iterable object, such as
 * an Array.
 */
interface ICollection {
  map: (mapper: (element: any) => any) => ICollection
  reduce: (reducer: (accumulator: any, element: any) => any, seed: any) => any
  filter: (predicate: (element: any) => boolean) => ICollection
  find: (searcher: (element: any) => boolean) => ICollection
  until: (searcher: (element: any) => boolean) => ICollection
  first: () => any
  rest: () => ICollection
  take: (numberToTake: number) => ICollection
  drop: (numberToDrop: number) => ICollection
}

export const Collection: ICollection = {
  map(this: ICollection, fn: (element: any) => any): ICollection {
    return Object.assign(
      {
        [Symbol.iterator]: () => {
          const iterator = (this as any)[Symbol.iterator]()
          return {
            next: () => {
              const { done, value } = iterator.next()
              return { done, value: done ? undefined : fn(value) }
            },
          }
        },
      },
      Collection
    )
  },

  reduce(
    this: ICollection,
    reducer: (accumulator: any, element: any) => any,
    seed: any
  ): any {
    const iterator = (this as any)[Symbol.iterator]()

    let iterationResult
    let accumulator = seed

    while (((iterationResult = iterator.next()), !iterationResult.done)) {
      accumulator = reducer(accumulator, iterationResult.value)
    }
    return accumulator
  },

  filter(this: ICollection, predicate: (element: any) => boolean): ICollection {
    return Object.assign(
      {
        [Symbol.iterator]: () => {
          const iterator = (this as any)[Symbol.iterator]()
          return {
            next: () => {
              let done, value
              do {
                ({ done, value } = iterator.next())
              } while (!done && !predicate(value))
              return { done, value }
            },
          }
        },
      },
      Collection
    )
  },

  find(this: ICollection, searcher: (element: any) => boolean): ICollection {
    return Object.assign(
      {
        [Symbol.iterator]: () => {
          const iterator = (this as any)[Symbol.iterator]()
          return {
            next: () => {
              let done, value
              do {
                ({ done, value } = iterator.next())
              } while (!done && !searcher(value))
              return { done, value }
            },
          }
        },
      },
      Collection
    )
  },

  until(this: ICollection, searcher: (element: any) => boolean): ICollection {
    return Object.assign(
      {
        [Symbol.iterator]: () => {
          const iterator = (this as any)[Symbol.iterator]()
          return {
            next: () => {
              let { done, value } = iterator.next()
              done = done || searcher(value)
              return { done, value: done ? undefined : value }
            },
          }
        },
      },
      Collection
    )
  },

  first(this: ICollection): any {
    return (this as any)[Symbol.iterator]().next().value
  },

  rest(this: ICollection): ICollection {
    return Object.assign(
      {
        [Symbol.iterator]: () => {
          const iterator = (this as any)[Symbol.iterator]()
          iterator.next()
          return iterator
        },
      },
      Collection
    )
  },

  take(this: ICollection, numberToTake: number): ICollection {
    return Object.assign(
      {
        [Symbol.iterator]: () => {
          const iterator = (this as any)[Symbol.iterator]()
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
      Collection
    )
  },

  drop(this: ICollection, numberToDrop: number): ICollection {
    return Object.assign({
      [Symbol.iterator]: () => {
        const iterator = (this as any)[Symbol.iterator]()
        while (numberToDrop-- > 0) iterator.next()
        return {
          next: () => {
            const { done, value } = iterator.next()
            return { done, value: done ? undefined : value }
          },
        }
      },
    })
  },
}

export const Numbers = Object.assign(
  {
    *[Symbol.iterator]() {
      let n = 0
      while (true) yield n++
    },
  },
  Collection
)

interface IStack extends ICollection {
  array: any[]
  index: number
  push: (value: any) => any
  pop: () => any
  isEmpty: () => boolean
}

export const Stack = (): IStack =>
  Object.assign(
    {
      array: [],
      index: -1,
      push(value: any) {
        return ((this.array[(this.index += 1)] as any) = value)
      },
      pop() {
        const value = this.array[this.index]
        ;(this.array[this.index] as any) = undefined
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
    Collection
  )

Stack.from = function from<X>(iterable: Iterable<X>): IStack {
  const stack = this()
  for (const element of iterable) {
    stack.push(element)
  }
  return stack
}

export function Lazy<X>(target: Iterable<X>): ICollection {
  return Object.assign(target, Collection)
}

Lazy.Collection = Collection
Lazy.Stack = Stack
Lazy.Numbers = Numbers
