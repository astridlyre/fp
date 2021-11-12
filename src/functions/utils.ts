/* eslint complexity: 0, no-unused-vars: 0, eqeqeq: 0, no-magic-numbers: 0 */
import { isArray, isFunction, isString, isMap, isObject, isSet } from './predicates'
import { values } from './objects'

type GenericFunction = (...args: any[]) => any

/**
 * Identity, x => x
 */
export const identity = (x: any) => x

/**
 * Constant, x => y => x
 */
export const constant = (a: any) => () => a

/**
 * Arity, turn a function into one with n arguments
 */
export const arity = (fn: GenericFunction, n: number) =>
  function arity(this: any, ...args: any[]) {
    return fn.apply(this, args.slice(0, n))
  }

/**
 * Unary, turn a function into one with 1 argument
 */
export const unary = (fn: GenericFunction) => arity(fn, 1)

/**
 * Binary, turn a function into one with 2 arguments
 */
export const binary = (fn: GenericFunction) => arity(fn, 2)

/**
 * Ternary, turn a function into one with 3 arguments
 */
export const ternary = (fn: GenericFunction) => arity(fn, 3)

/**
 * Call First, partially apply a function's leftmost argument
 */
export const callFirst = (fn: GenericFunction, larg: any) =>
  function callFirst(this: any, ...args: any) {
    return fn.call(this, larg, ...args)
  }

/**
 * Call Last, partially apply a function's rightmost argument
 */
export const callLast = (fn: GenericFunction, rarg: any) =>
  function callLast(this: any, ...args: any) {
    return fn.call(this, ...args, rarg)
  }

/**
 * Demethodize, convert a method to a standalone function
 */
export const demethodize = Function.prototype.bind.bind(Function.prototype.call)

/**
 * Len, provides a simple way to get the length/size of something
 */
export const len = (a: any) =>
  isString(a) || isArray(a) || isFunction(a)
    ? a.length
    : isSet(a) || isMap(a)
    ? a.size
    : isObject(a)
    ? Object.entries(a).length
    : void 0

function compose2(f: GenericFunction, g: GenericFunction) {
  return function compose(this: any, ...args: any[]) {
    return f.call(this, g.apply(this, args))
  }
}

/**
 * Compose, combine any number of functions together, right to left
 * Any number of functions fns to compose
 *  A function composed of fns
 */
export function compose(...fns: GenericFunction[]) {
  return fns.reduce(compose2)
}

/**
 * Pipe, combine any number of functions together, left to right
 * fns to pipe
 * A function pipe of fns
 */
export function pipe(...fns: GenericFunction[]) {
  return fns.reduceRight(compose2)
}

/**
 * Curry, automatically curry a function, only works with non-variadic functions
 *
 * Takes fn - Function to curry
 * Returns partially applied function, or result of calling
 * function fn if arguments are greater than or equal to total arity of function fn.
 */
export function curry(fn: GenericFunction) {
  return function curryInner(this: any, ...args: any[]) {
    return args.length >= fn.length
      ? fn.apply(this, args)
      : (...args2: any[]) =>
          args.length + args2.length >= fn.length
            ? fn.call(this, ...args, ...args2)
            : curry(fn)(...args, ...args2)
  }
}

/**
 * Tap, run a side effect fn and then return x
 */
export const tap = curry((fn: GenericFunction, x: any) => (fn(x), x))

/**
 * Not, negate the result of a function
 */
export const not = curry((f: GenericFunction, a: any) => !f(a))

/**
 * Negate, reverse the sign of a numerical result of a function
 */
export const negate = curry((f: GenericFunction, a: any) => -f(a))

/**
 * Flip2, flip the position of a function's arguments
 */
export const flip2 = (f: GenericFunction) =>
  curry(function flip(this: any, a: any, b: any) {
    return f.call(this, b, a)
  })

/**
 * Flip3, flip the first argument to the last argument
 */
export const flip3 = (f: GenericFunction) =>
  curry(function flip(this: any, a: any, b: any, c: any) {
    return f.call(this, b, c, a)
  })

/**
 * Tee, logs argument and returns it
 * @param {any}
 * @returns {any}
 */
export const tee = tap(console.log.bind(console))

/**
 * Log, spy on the execution of a function fn with logger
 */
export const log = (fn: GenericFunction, logger = console.log.bind(console)) =>
  function log(this: any, ...args: any[]) {
    logger(`Entering function ${fn.name}(${args.map(a => JSON.stringify(a)).join(',')})`)
    const result = fn.apply(this, args)
    logger(`\nExiting function ${fn.name} -> ${JSON.stringify(result)}`)
    return result
  }

/**
 * Transduce, combine multiple maps, filters, into a more efficient operation
 */
export const transduce = curry(
  <T>(
    arr: T[],
    fns: GenericFunction[],
    reducer: (accumulator: any, value: T) => any,
    initial: any
  ) => arr.reduce(compose(...fns)(reducer), initial)
)

/**
 * MapTR, create a map transducer
 */
export const mapTR =
  (fn: GenericFunction) =>
  (reducer: (accumulator: any, value: any) => any) =>
  (acc: any, val: any) =>
    reducer(acc, fn(val))

/**
 * filterTR, create a filter transducer
 */
export const filterTR =
  (fn: GenericFunction) =>
  (reducer: (accumulator: any, value: any) => any) =>
  (acc: any, val: any) =>
    fn(val) ? reducer(acc, val) : acc

/**
 * Send, returns a function that applies instance method name with args
 */
export const send =
  (name: string, ...args: any[]) =>
  (instance: any) =>
    instance[name](...args)

/**
 * Bound, returns a bound method or calls method with args
 */
export const bound = (name: string, ...args: any[]) =>
  args === []
    ? (instance: any) => instance[name].bind(instance)
    : (instance: any) =>
        Function.prototype.bind.apply(instance[name], [instance].concat(args) as any)

/**
 * Invoke, returns a function that takes a context to call function fn with args in
 */
export const invoke =
  (fn: GenericFunction, ...args: any[]) =>
  (instance: any) =>
    fn.apply(instance, args)

/**
 * Unique, get only unique items
 */
export function unique(...items: any[]) {
  return Array.from(new Set(items.flat()))
}

/**
 * GroupBy, group a collection of objects into a multi-dimensional array by key
 */
export const groupBy = curry((key: string, arr: any[]) => {
  const result: any = {}

  for (const item of arr) {
    ;(result[item[key]] || (result[item[key]] = [])).push(item)
  }

  return values(result)
})

/**
 * KeyBy, convert array into object, assumes each key is unique otherwise the
 * last object wins
 */
export const keyBy = curry((key: string, arr: any[]) =>
  arr.reduce((result: any, item: any) => ((result[item[key]] = item), result), {})
)

/**
 * Stringifying functions
 * Provides helper functions to stringify and parse JSON, along with numbers
 * and strings
 */
export const toJSON = (x: any) => JSON.stringify(x)
export const fromJSON = (x: any) => JSON.parse(x)
export const stringify = JSON.stringify.bind(JSON)
export const parse = JSON.parse.bind(JSON)
export const toString = String
export const toInteger = (s: string) => Number.parseInt(s, 10)

/**
 * TryCatch
 */
export const tryCatch = curry((f: GenericFunction, g: GenericFunction) => {
  try {
    return f()
  } catch (e) {
    return g(e)
  }
})

/**
 * Once will return the cached result of the call
 */
export function once(fn: GenericFunction) {
  let done = false
  let result: any

  return function once(this: any, ...args: any[]) {
    return !done ? ((done = true), (result = fn.apply(this, args)), result) : result
  }
}

/**
 * Memoize a function
 */
export function memoize(fn: GenericFunction) {
  let cache = Object.create(null)

  const isPrimitive = (x: any) =>
    typeof x === 'number' || typeof x === 'string' || typeof x === 'boolean'

  function memoize(this: any, ...args: any[]) {
    const key = args.length === 1 && isPrimitive(args[0]) ? args[0] : JSON.stringify(args)

    return key in cache ? cache[key] : (cache[key] = fn.apply(this, args))
  }

  memoize.clearCache = function clearCache() {
    cache = Object.create(null)
    return memoize
  }

  return memoize
}

/**
 * Debounce a function
 */
export const debounce = (delay: number) => {
  let pending: any = false

  return function debounce(this: any, fn: GenericFunction) {
    if (pending) clearTimeout(pending)
    pending = setTimeout(() => fn.call(this), delay)
  }
}

/**
 * Accumulate returns a function that will be called with all accumulated events after delay
 */
export const accumulate = (delay: number) => {
  const stack: any[] = []
  let pending: any = false

  return function accumulate(this: any, fn: GenericFunction) {
    return (event: any) => {
      if (pending) clearTimeout(pending)

      stack.push(event)

      pending = setTimeout(() => {
        pending = false
        fn.call(this, stack.slice())
        stack.length = 0
      }, delay)
    }
  }
}

/**
 * DeepEqual
 * @param {any} a
 * @param {any} b
 */
export function deepEqual(a: any, b: any) {
  if (a === b) return true

  if (a && b && isObject(a) && isObject(b)) {
    if (a.constructor !== b.constructor) return false

    let length, i
    if (isArray(a)) {
      length = a.length
      if (length != b.length) return false
      for (i = length; i-- !== 0; ) if (!deepEqual(a[i], b[i])) return false
      return true
    }

    if (isMap(a) && isMap(b)) {
      if (a.size !== b.size) return false
      for (i of a.entries()) if (!b.has(i[0])) return false
      for (i of a.entries()) if (!deepEqual(i[1], b.get(i[0]))) return false
      return true
    }

    if (isSet(a) && isSet(b)) {
      if (a.size !== b.size) return false
      for (i of a.entries()) if (!b.has(i[0])) return false
      return true
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = (a as any).length
      if (length != (b as any).length) return false
      for (i = length; i-- !== 0; ) if ((a as any)[i] !== (b as any)[i]) return false
      return true
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf()
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString()

    const keys = Object.keys(a)
    length = keys.length
    if (length !== Object.keys(b).length) return false

    for (i = length; i-- !== 0; ) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false
    }

    for (i = length; i-- !== 0; ) {
      const key = keys[i]
      if (!deepEqual(a[key], b[key])) return false
    }
    return true
  }
  return a !== a && b !== b
}
