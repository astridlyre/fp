// identity x returns x
export const identity = x => x

// constant () => a
export const constant = a => b => a

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
export const isObject = x => x !== null && typeof x === 'object'
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
    ? Object.entries(a).length
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
export const flip2 = f =>
  curry(function flip(a, b) {
    return f.call(this, b, a)
  })
export const flip3 = f =>
  curry(function flip(a, b, c) {
    return f.call(this, b, c, a)
  })

// Logging
export const tee = tap(console.log.bind(console))
export const log = (fn, logger = console.log.bind(console)) =>
  function log(...args) {
    logger(`Entering function ${fn.name}(${args.map(a => JSON.stringify(a)).join(',')})`)
    const result = fn.apply(this, args)
    logger(`\nExiting function ${fn.name} -> ${JSON.stringify(result)}`)
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
    ? instance => instance[name].bind(instance)
    : instance => Function.prototype.bind.apply(instance[name], [instance].concat(args))
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

export const deepProp = curry((path, a) => {
  if (!Array.isArray(path)) path = path.split('.')
  const [p, ...rest] = path
  return !rest.length ? prop(p, a) : deepProp(rest, prop(p, a))
})

export const toJSON = x => JSON.stringify(x)
export const fromJSON = x => JSON.parse(x)
export const stringify = JSON.stringify.bind(JSON)
export const parse = JSON.parse.bind(JSON)
export const toString = String
export const toInteger = s => Number.parseInt(s, 10)
export const padStart = curry((x, reps, fill) =>
  String.prototype.padStart.call(x, reps, fill)
)
export const padEnd = curry((x, reps, fill) =>
  String.prototype.padEnd.call(x, reps, fill)
)

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

export const composeAsync2 = (f, g) =>
  async function innerComposeAsync(...args) {
    return await f.call(this, await g.call(this, ...args))
  }

export const liftA2 = curry((fn, a1, a2) => a1.map(fn).ap(a2))
export const liftA3 = curry((fn, a1, a2, a3) => a1.map(fn).ap(a2).ap(a3))
export const liftA4 = curry((fn, a1, a2, a3, a4) => a1.map(fn).ap(a2).ap(a3).ap(a4))
export const apply = curry((fn, F) => map.call(F, fn))
export const composeAsync = (...fns) => fns.reduce(composeAsync2)
export const pipeAsync = (...fns) => fns.reduceRight(composeAsync2)
export const mapAsync = async (f, a) => await Promise.all(a.map(f))
export const reduceAsync = async (f, init, a) =>
  await a.reduce((p, val) => p.then(() => f(val)), Promise.resolve(init))
export const filterAsync = async (f, a) =>
  await mapAsync(f, a).then(bools => a.filter((_, i) => Boolean(bools[i])))

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
export const every = curry((f, arr) => arr.every(f))
export const some = curry((f, arr) => arr.some(f))
export const find = curry((f, arr) => arr.find(f))
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
export const zipMap = (f, ...iters) => {
  const min = Math.min(...pluck('length')(iters))
  const result = []
  for (let i = 0; i < min; i++) {
    result.push(f(...pluck(i)(iters)))
  }
  return result
}
export const sortBy = curry((f, a) => [...a].sort(f))
export const match = curry((re, s) => re.test(s))
export const replace = curry((re, rpl, s) => s.replace(re, rpl))
export const split = curry((sep, s) => s.split(sep))
export const toLowerCase = s => s.toLowerCase()
export const toUpperCase = s => s.toUpperCase()
export const prepend = curry((s1, s2) => `${s1}${s2}`)
export const append = curry((s1, s2) => `${s2}${s1}`)

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
export const FunctionalMixin = (behaviour, sharedBehaviour = {}) => {
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

const isDescriptor = obj => obj && (obj.state || obj.methods)

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
export const immutable = compose(Object.seal, Object.deepFreeze)
