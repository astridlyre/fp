import { Maybe, Just, Nothing, Result, Success, Failure, Try, TryAsync } from './maybe.js'
/*
 * My lil functional programming collection
 */

// identity x returns x
export const identity = x => x

// constant () => a
export const constant = a => b => a

// fip order of arguments
export const flip = f =>
  function flip(a) {
    return b => f.call(this, b, a)
  }
export const flip2 = f =>
  function flip2(a, b) {
    return f.call(this, b, a)
  }
export const flip3 = f =>
  function flip3(a, b, c) {
    return f.call(this, b, c, a)
  }

// arity functions
export const arity = (fn, n) =>
  function arity(...args) {
    return fn.apply(this, args.slice(0, n))
  }
export const unary = fn => arity(fn, 1)
export const binary = fn => arity(fn, 2)
export const ternary = fn => arity(fn, 3)

// partial application
export const callFirst = (fn, larg) =>
  function callFirst(...args) {
    return fn.call(this, larg, ...args)
  }
export const callLast = (fn, rarg) =>
  function callLast(...args) {
    return fn.call(this, ...args, rarg)
  }

// de-methodize
export const demethodize = Function.prototype.bind.bind(Function.prototype.call)

// typeof functions
const isTypeOf = a => b => typeof b === a
export const isNumber = isTypeOf('number')
export const isBoolean = isTypeOf('boolean')
export const isNull = x => x === null
export const isString = isTypeOf('string')
export const isObject = isTypeOf('object')
export const isArray = a => Array.isArray(a)
export const isInstanceOf = a => b => b instanceof a
export const isFunction = f => f && typeof f === 'function'
export const isSet = s => s instanceof Set
export const isMap = m => m instanceof Map

// Len gets the length argument a
export const len = a =>
  isString(a) || isArray(a) || isFunction(a)
    ? a.length
    : isSet(a) || isMap(a)
    ? a.size
    : isObject(a)
    ? a.entries().length
    : void 0

// Compose and pipe
export const compose2 = (f, g) =>
  function compose(...args) {
    return f.call(this, g.call(this, ...args))
  }
export const compose = (...fns) => fns.reduce(compose2)
export const pipe = (...fns) => fns.reduceRight(compose2)

// Autocurry
export const curry = fn =>
  function curryInner(...args1) {
    return args1.length === fn.length
      ? fn.apply(this, args1)
      : (...args2) => {
          return args1.length + args2.length >= fn.length
            ? fn.call(this, ...args1, ...args2)
            : curry(fn)(...args1, ...args2)
        }
  }

// run a side effect with tap
export const tap = curry((fn, x) => (fn(x), x))

// not and invert
export const not = curry((f, a) => !f(a))
export const invert = curry((f, a) => -f(a))

// Logging
export const tee = tap(console.log.bind(console))
export const log = (fn, logger = console.log.bind(console)) =>
  function log(...args) {
    logger(`Entering function ${fn.name}(${JSON.stringify(args, null, 2)})`)
    const result = fn.apply(this, args)
    logger(`Exiting function ${fn.name} -> ${JSON.stringify(result, null, 2)}`)
    return result
  }

// creates a Transducer function
export const transduce = curry((arr, fns, reducer, initial) =>
  arr.reduce(compose(...fns)(reducer), initial)
)
// Transducers
export const mapTR = fn => reducer => (acc, val) => reducer(acc, fn(val))
export const filterTR = fn => reducer => (acc, val) => fn(val) ? reducer(acc, val) : acc

// prop & props get object properties
export const prop = curry(
  (name, a) =>
    a && (name in a ? (isFunction(a[name]) ? a[name].call(a) : a[name]) : void 0)
)
export const send =
  (name, ...args) =>
  instance =>
    instance[name].apply(instance, args)
export const bound = (name, ...args) =>
  args === []
    ? instance[name].bind(instance)
    : Function.prototype.bind.apply(instance[name], [instance].concat(args))
export const setPropM = curry((name, value, a) =>
  a && name in a ? ((a[name] = value), a) : a
)
export const setProp = curry((name, value, a) =>
  a && name in a ? { ...a, [name]: value } : { ...a }
)
export const props = curry((names, a) => names.map(n => prop(n, a)))
export const invoke =
  (fn, ...args) =>
  instance =>
    fn.apply(instance, args)
export const instanceEval =
  instance =>
  (fn, ...args) =>
    fn.apply(instance, args)

// map, filter, reduce
export const forEach = curry((f, M) => M.forEach(f))
export const map = curry((f, M) => M.map(f))
export const filter = curry((p, M) => M.filter(p))
export const reduce = curry((acc, start, M) => M.reduce(acc, start))
export const reduceRight = curry((acc, start, M) => M.reduceRight(acc, start))
export const pluck = compose(map, prop)
export const deepMap = fn =>
  function innerDeepMap(tree) {
    return Array.prototype.map.call(tree, element =>
      Array.isArray(element) ? innerDeepMap(element) : fn(element)
    )
  }

// compose monads
export const composeM2 = (f, g) =>
  function innerComposeM2(...args) {
    return g.apply(this, args).flatMap(f)
  }
export const composeM = (...Ms) => Ms.reduce(composeM2)

// flat
export const flat = M => M.flat()
export const flatMap = curry((f, M) => M.flatMap(f))
export const fold = curry((f, M) => M.fold(f))
export const getOrElseThrow = curry((e, M) => M.getOrElseThrow(e))

// math functions
export const eq = curry((a, b) => a === b)
export const add = curry((x, y) => x + y)
export const addRight = curry((x, y) => y + x)
export const subtract = curry((x, y) => x - y)
export const subtractRight = curry((x, y) => y - x)
export const multipy = curry((x, y) => x * y)
export const multipyRight = curry((x, y) => y * x)
export const divide = curry((x, y) => x / y)
export const divideRight = curry((x, y) => y / x)
export const roundTo = n => x => Math.round(x * Math.pow(10, n)) / Math.pow(10, n)
export const pow = (base, power) =>
  power === 0 ? 1 : power & 1 ? base * pow(base, power - 1) : pow(base * base, power >> 1)

// array functions
export const head = a => a[0]
export const last = a => a[a.length - 1]
export const every = curry((f, M) => M.every(f))
export const some = curry((f, M) => M.some(f))
export const sum = (...args) => args.reduce((x, y) => x + y, 0)
export const average = ns => sum(...ns) / ns.length
export const shift = arr => [arr[0], arr.slice(1)]
export const pop = arr => [arr.slice(0, -1), arr[arr.length - 1]]
export const unshift = curry((arr, v) => [v].concat(arr))
export const push = curry((arr, v) => arr.concat(v))
export const partition = (arr, a, b) =>
  arr.reduce(
    (acc, cv) => (a(cv) ? (acc[0].push(cv), acc) : b(cv) ? (acc[1].push(cv), acc) : acc),
    [[], []]
  )
export const sortBy = curry((f, a) => [...a].sort(f))
export const match = curry((re, s) => re.test(s))
export const replace = curry((re, rpl, s) => s.replace(re, rpl))
export const split = curry((sep, s) => s.split(sep))
export const toLowerCase = s => s.toLowerCase()
export const toUpperCase = s => s.toUpperCase()
export const toString = String

export const tryCatch = curry((f, g) => {
  try {
    return f()
  } catch (e) {
    return g(e)
  }
})

export const maybe = fn =>
  function maybe(...args) {
    return args.reduce((acc, cv) => acc && cv != null, true)
      ? fn.apply(this, args)
      : void 0
  }

// range
export const range = (start, end, step = start < end ? 1 : -1) => {
  let index = -1
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0)
  const result = new Array(length)
  while (length--) {
    result[++index] = start
    start += step
  }
  return result
}

// once only runs a function once, then returns cached result
export function once(fn) {
  let done = false
  let result
  return function once(...args) {
    return !done ? ((done = true), (result = fn.apply(this, args)), result) : result
  }
}

// memoize a function
export function memoize(fn) {
  const cache = Object.create(null)
  const toKey = key => JSON.stringify(key)
  const isPrimitive = x =>
    typeof x === 'number' || typeof x === 'string' || typeof x === 'boolean'
  return function memoize(...args) {
    const key = args.length === 1 && isPrimitive(args[0]) ? args[0] : toKey(args)
    return key in cache ? cache[key] : (cache[key] = fn.apply(this, args))
  }
}

// debounce
export const debounce = delay => {
  let pending = false
  return function debounce(fn) {
    if (pending) clearTimeout(pending)
    pending = setTimeout(() => fn.call(this), delay)
  }
}

// accumulate
export const accumulate = delay => {
  const stack = []
  let pending = false
  return function accumulate(fn) {
    return event => {
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

// Object functions
export const FunctionalMixin = behaviour => {
  const instanceKeys = Reflect.ownKeys(behaviour)
  const sharedKeys = Reflect.ownKeys(sharedBehaviour)
  const typeTag = Symbol('isA')

  function mixin(target) {
    for (const property of instanceKeys) {
      if (!target[property]) {
        Object.defineProperty(target, property, {
          value: behaviour[property],
          writable: true,
        })
      }
    }
    target[typeTag] = true
    return target
  }

  for (const property of sharedKeys) {
    Object.defineProperty(mixin, property, {
      value: sharedBehaviour[property],
      enumerable: Object.prototype.propertyIsEnumerable.call(sharedBehaviour, property),
    })
  }
  Object.defineProperty(mixin, Symbol.hasInstance, {
    value: instance => !!instance[typeTag],
  })
  return mixin
}

// Basically same as above, but for classes
export const ClassMixin = behaviour => {
  const instanceKeys = Reflect.ownKeys(behaviour)
  const sharedKeys = Reflect.ownKeys(sharedBehaviour)
  const typeTag = Symbol('isA')

  function mixin(classs) {
    for (const property of instanceKeys) {
      if (!classs.prototype[property]) {
        Object.defineProperty(classs.prototype, property, {
          value: behaviour[property],
          writable: true,
        })
      }
    }
    classs.prototype[typeTag] = true
    return classs
  }

  for (const property of sharedKeys) {
    Object.defineProperty(mixin, property, {
      value: sharedBehaviour[property],
      enumerable: Object.prototype.propertyIsEnumerable.call(sharedBehaviour, property),
    })
  }
  Object.defineProperty(mixin, Symbol.hasInstance, {
    value: instance => !!instance[typeTag],
  })
  return mixin
}

// Class decorators
export function Define(behaviour) {
  const instanceKeys = Reflect.ownKeys(behaviour)
  return function define(clazz) {
    for (const prop of instanceKeys) {
      if (!clazz.prototype[prop]) {
        Object.defineProperty(clazz.prototype, prop, {
          value: behaviour[prop],
          writable: true,
        })
      } else throw new Error(`Illegal attempt to override ${prop}, which already exists.`)
    }
  }
}

export function Override(behaviour) {
  const instanceKeys = Reflect.ownKeys(behaviour)
  return function override(clazz) {
    for (const prop of instanceKeys) {
      if (clazz.prototype[prop]) {
        const overriddenMethodFunction = clazz.prototype[prop]
        Object.defineProperty(clazz.prototype, prop, {
          value(...args) {
            return behaviour[prop].call(
              this,
              overriddenMethodFunction.bind(this, ...args)
            )
          },
          writable: true,
        })
      } else throw new Error(`Attempt to override non-existant method${prop}`)
    }
    return clazz
  }
}

export function Prepend(behaviour) {
  const instanceKeys = Reflect.ownKeys(behaviour)
  return function prepend(clazz) {
    for (const prop of instanceKeys) {
      if (clazz.prototype[prop]) {
        const overriddenMethodFunction = clazz.prototype[prop]
        Object.defineProperty(clazz.prototype, prop, {
          value(...args) {
            const prependValue = behaviour[prop].apply(this, args)
            if (prependValue === undefined || !!prependValue) {
              return overriddenMethodFunction.apply(this, args)
            }
          },
          writable: true,
        })
      } else throw new Error(`Attempt to override non-existant method ${prop}`)
    }
    return clazz
  }
}

export function Append(behaviour) {
  const instanceKeys = Reflect.ownKeys(behaviour)
  return function append(clazz) {
    for (const prop of instanceKeys) {
      if (clazz.prototype[prop]) {
        const overriddenMethodFunction = clazz.prototype[prop]
        Object.defineProperty(clazz.prototype, prop, {
          value(...args) {
            const returnedValue = overriddenMethodFunction.apply(this, args)
            behaviour[prop].apply(this, args)
            return returnedValue
          },
          writable: true,
        })
      } else throw new Error(`Attempt to override non-existant method ${prop}`)
    }
    return clazz
  }
}

// Method Decorators
// Calls fns after method invocation
export const after = (...fns) =>
  function after(target, name, descriptor) {
    const method = descriptor.value
    descriptor.value = function withAfter(...args) {
      const value = method.apply(this, args)
      for (const fn of fns) {
        fn.apply(this, args)
      }
      return value
    }
  }

// Calls fns before method invocation
export const before = (...fns) =>
  function before(target, name, descriptor) {
    const method = descriptor.value
    descriptor.value = function withBefore(...args) {
      for (const fn of fns) {
        fn.apply(this, args)
      }
      return method.apply(this, args)
    }
  }

// Calls method if all fns return truthy
export const provided = (...fns) =>
  function provided(target, name, descriptor) {
    const method = descriptor.value
    descriptor.value = function withProvided(...args) {
      for (const fn of fns) if (!fn.apply(this, args)) return
      return method.apply(this, args)
    }
  }

// Does not call method if any fn returns truthy
export const unless = (...fns) =>
  function unless(target, name, descriptor) {
    const method = descriptor.value
    descriptor.value = function withUnless(...args) {
      for (const fn of fns) if (fn.apply(this, args)) return
      return method.apply(this, args)
    }
  }

// Wrap a method with a decorator (turns ordinary decorator into ES.later)
export const wrapWith = decorator =>
  function wrapWith(target, name, descriptor) {
    descriptor.value = decorator(descriptor.value)
  }

// Cross-cutting methods "provided method advice"
export const aroundAll =
  (behaviour, ...methodNames) =>
  clazz => {
    for (const methodName of methodNames) {
      Object.defineProperty(clazz.prototype, methodName, {
        value: behaviour(clazz.prototype[methodName]),
        writable: true,
      })
    }
    return clazz
  }

export const beforeAll =
  (behaviour, ...methodNames) =>
  clazz => {
    for (const methodName of methodNames) {
      const method = clazz.prototype[methodName]
      Object.defineProperty(clazz.prototype, methodName, {
        value(...args) {
          behaviour.apply(this, args)
          return method.apply(this, args)
        },
        writable: true,
      })
    }
    return clazz
  }

export const afterAll =
  (behaviour, ...methodNames) =>
  clazz => {
    for (const methodName of methodNames) {
      const method = clazz.prototype[methodName]
      Object.defineProperty(clazz.prototype, methodName, {
        value(...args) {
          const returnedValue = method.apply(this, args)
          behaviour.apply(this, args)
          return returnedValue
        },
        writable: true,
      })
    }
    return clazz
  }

export const SubclassFactory = behaviour => superclass =>
  ClassMixin(behaviour)(class extends superclass {})

export const FactoryFactory =
  c =>
  (...args) =>
    new c(...args)

const detectCollision = (...descriptors) =>
  descriptors
    .flatMap(Object.keys)
    .reduce(sortReducer, [])
    .reduce(collisionReducer, [])
    .forEach(c => console.log(`[WARN] Collision found: ${c}`))

const sortReducer = (accumulator, value) => {
  const nextIndex = accumulator.findIndex(i => value < i)
  const index = nextIndex > -1 ? nextIndex : accumulator.length
  accumulator.splice(index, 0, value)
  return accumulator
}

const collisionReducer = (accumulator, value, index, arr) =>
  value === arr[index + 1] ? [...accumulator, value] : accumulator

const isDescriptor = obj => obj && (obj['state'] || obj['methods'])

// extend Object
if (typeof Object.impl !== 'function') {
  Object.defineProperty(Object, 'impl', {
    value:
      (...mixins) =>
      target => {
        if (!Object.isExtensible(target) || Object.isSealed(target)) {
          throw new TypeError(
            'Unable to concatenate mixins into base object. Object is either not extensible or has been sealed'
          )
        }
        Object.assign(target.prototype, ...mixins)
        return target
      },
    enumerable: false,
    writable: false,
    configurable: false,
  })
}
if (typeof Object.mixin !== 'function') {
  Object.defineProperty(Object, 'mixin', {
    value: function concatExtend(descriptor, ...mixins) {
      let base = Object(descriptor)
      if (isDescriptor(descriptor)) {
        base = { ...base.state, ...base.methods, ...base.interop }
      }
      detectCollision(base, ...mixins)
      if (!Object.isExtensible(base) || Object.isSealed(base)) {
        throw new TypeError(
          'Unable to concatenate mixins into base object. Object is either not extensible or has been sealed'
        )
      }
      return Object.assign({ ...base }, ...mixins)
    },
    enumerable: false,
    writable: false,
    configurable: false,
  })
}

export const deepFreeze = obj => {
  if (obj && typeof obj === 'object' && !Object.isFrozen(obj)) {
    Object.getOwnPropertyNames(obj).forEach(name => deepFreeze(obj[name]))
    Object.freeze(obj)
  }
  return obj
}

export const deepCopy = obj => {
  let aux = obj
  if (obj && typeof obj === 'object') {
    aux = new obj.constructor()
    Object.getOwnPropertyNames(obj).forEach(prop => (aux[prop] = deepCopy(obj[prop])))
  }
  return aux
}
Object.deepFreeze = Object.deepFreeze || deepFreeze

// Lenses
class Constant {
  #value
  constructor(v) {
    this.#value = Maybe.of(v)
    this.map = () => this
  }
  get value() {
    return this.#value
  }
}

class Variable {
  #value
  constructor(v) {
    this.#value = Maybe.of(v)
    this.map = fn => new Variable(fn(v))
  }
  get value() {
    return this.#value
  }
}
export const lens = (getter, setter) => fn => obj =>
  fn(getter(obj)).map(value => setter(value, obj))

export const view = curry((lensAttr, obj) => lensAttr(x => new Constant(x))(obj).value)

export const set = curry(
  (lensAttr, newVal, obj) => lensAttr(() => new Variable(newVal))(obj).value
)

export const over = curry(
  (lensAttr, mapfn, obj) => lensAttr(x => new Variable(mapfn(x)))(obj).value
)

export const lensProp = p => lens(prop(p), setProp(p))

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
    if (!!fn(element)) yield element
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

export { Maybe, Just, Nothing, Try, TryAsync, Result, Failure, Success }
