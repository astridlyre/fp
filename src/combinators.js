/**
 * Identity
 * @param {any} x
 * @return {any} x
 */
export const identity = x => x

/**
 * Constant
 * @param {any} a
 * @returns {any} a
 */
export const constant = a => b => a

/**
 * Arity
 * @param {function} fn
 * @param {number} n - desired arity
 * @returns {function} arity - Function fn with new arity
 */
export const arity = (fn, n) =>
  function arity(...args) {
    return fn.apply(this, args.slice(0, n))
  }

/**
 * Unary
 * @param {function} fn
 * @returns {function} arity - Function with arity of 1
 */
export const unary = fn => arity(fn, 1)

/**
 * Binary
 * @param {function} fn
 * @returns {function} arity - Function with arity of 2
 */
export const binary = fn => arity(fn, 2)

/**
 * Ternary
 * @param {function} fn
 * @returns {function} arity - Function with arity of 3
 */
export const ternary = fn => arity(fn, 3)

/**
 * Call First
 * @param {function} fn - Function to partially apply
 * @param {any} larg - Leftmost argument
 * @returns {function} callFirst - Function fn partially applied with larg
 */
export const callFirst = (fn, larg) =>
  function callFirst(...args) {
    return fn.call(this, larg, ...args)
  }

/**
 * Call Last
 * @param {function} fn - Function to partially apply
 * @param {any} rarg - Rightmost argument
 * @returns {function} callLast - Function fn partially applied with rarg
 */
export const callLast = (fn, rarg) =>
  function callLast(...args) {
    return fn.call(this, ...args, rarg)
  }

/**
 * Demethodize
 * @param {method} method - Method to demethodize
 * @returns {function} method bound to use as regular function
 */
export const demethodize = Function.prototype.bind.bind(Function.prototype.call)

/**
 * Len - provides a simple way to get the length/size of something
 * @param {any} a
 * @returns {number} {undefined} The length or size of the argument
 */
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

/**
 * Compose
 * @param {function} Any number of functions fns to compose
 * @returns {function} A function composed of fns
 */
export const compose = (...fns) => fns.reduce(compose2)

/**
 * Pipe
 * @param {function} fns to pipe
 * @returns {function} A function pipe of fns
 */
export const pipe = (...fns) => fns.reduceRight(compose2)

/**
 * Curry
 * @param {function} fn - Function to curry
 * @returns {function} Partially applied function, or result of calling
 * function fn if arguments are greater than or equal to total arity of
 * function fn.
 */
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

/**
 * Typeof Functions
 * Provides several functions to test whether x is of type y
 */
const isTypeOf = a => b => typeof b === a
export const isNumber = isTypeOf('number')
export const isBoolean = isTypeOf('boolean')
export const isNull = x => x === null
export const isString = isTypeOf('string')
export const isObject = x => x !== null && typeof x === 'object'
export const isArray = a => Array.isArray(a)
export const isInstanceOf = curry((a, b) => b instanceof a)
export const isFunction = f => f && typeof f === 'function'
export const isSet = s => s instanceof Set
export const isMap = m => m instanceof Map

/**
 * Tap
 * @param {function} fn - Side effect to run
 * @param {any} x - Value to return
 */
export const tap = curry((fn, x) => (fn(x), x))

/**
 * Not
 * @param {function} f - Function to negate
 * @param {any} a - Argument for function f
 */
export const not = curry((f, a) => !f(a))

/**
 * Invert
 * @param {function} f - Function to reverse the sign of result
 * @param {any} a - Argument for function f
 */
export const invert = curry((f, a) => -f(a))

/**
 * Flip2
 * @param {function} f - Function to flip arguments
 * @returns {function} flip - Function f with arguments a and b flipped
 */
export const flip2 = f =>
  curry(function flip(a, b) {
    return f.call(this, b, a)
  })

/**
 * Flip3
 * @param {function} f - Function to flip arguments
 * @returns {function} flip - Function f with
 * arguments a, b, c flipped to b, c, a.
 */
export const flip3 = f =>
  curry(function flip(a, b, c) {
    return f.call(this, b, c, a)
  })

/**
 * Tee - Logs argument and returns it
 * @param {any}
 * @returns {any}
 */
export const tee = tap(console.log.bind(console))

/**
 * Log
 * @param {function} fn - Function to log
 * @param {function} logger - Logging function
 * @returns {function} log - Function fn with enhanced logging
 */
export const log = (fn, logger = console.log.bind(console)) =>
  function log(...args) {
    logger(`Entering function ${fn.name}(${args.map(a => JSON.stringify(a)).join(',')})`)
    const result = fn.apply(this, args)
    logger(`\nExiting function ${fn.name} -> ${JSON.stringify(result)}`)
    return result
  }

/**
 * Transduce
 * @param {array} arr - Array to reduce
 * @param {array} fns - Array of functions to apply to arr
 * @param {function} reducer - Reducer function to apply to arr
 * @param {any} initial - Initial value to pass to reducer
 */
export const transduce = curry((arr, fns, reducer, initial) =>
  arr.reduce(compose(...fns)(reducer), initial)
)

/**
 * MapTR
 * @param {function} fn - Create a transducer from map function
 * @returns {function}
 */
export const mapTR = fn => reducer => (acc, val) => reducer(acc, fn(val))

/**
 * filterTR
 * @param {function} fn - Create a transducer from a filter function
 * @returns {function}
 */
export const filterTR = fn => reducer => (acc, val) => fn(val) ? reducer(acc, val) : acc

/**
 * Prop
 * @param {string} name - Property name
 * @param {object} a - Object to get property in
 */
export const prop = curry(
  (name, a) =>
    a && (name in a ? (isFunction(a[name]) ? a[name].call(a) : a[name]) : void 0)
)

/**
 * Send
 * @param {string} name - Property name
 * @param {any} args - Arguments to send to instance method
 * @returns {function} send - Function send takes an instance and calls
 * instance#name with args
 */
export const send =
  (name, ...args) =>
  instance =>
    instance[name].apply(instance, args)

/**
 * Bound
 * @param {name} name - Property name
 * @param {any} args - Arguments to send to bound method
 * @returns {function} {any} Returns bound method or bound method called with
 * args
 */
export const bound = (name, ...args) =>
  args === []
    ? instance => instance[name].bind(instance)
    : instance => Function.prototype.bind.apply(instance[name], [instance].concat(args))

/**
 * SetPropM
 * @param {name} name - Property name
 * @param {value} value - New value to set
 * @param {object} a - Object to mutate with new value
 * @returns {object} a
 */
export const setPropM = curry((name, value, a) =>
  a && name in a ? ((a[name] = value), a) : a
)

/**
 * SetProp
 * @param {name} name - Property name
 * @param {value} value - New value to set
 * @param {object} a - Object to set value in
 * @returns {object} Copy of a with new value set
 */
export const setProp = curry((name, value, a) =>
  a && name in a ? { ...a, [name]: value } : { ...a }
)

/**
 * Props
 * @param {array} names - Array of property names
 * @param {object} a - Object to get property names from
 * @returns {array} Array of values
 */
export const props = curry((names, a) => names.map(n => prop(n, a)))

/**
 * Pick
 * @param {array} names - Array of property names
 * @param {object} a - Object to get property names from
 * @returns {object} A new object with only properties names
 */
export const pick = curry((names, a) =>
  names.reduce(
    (result, key) => (key in a ? ((result[key] = a[key]), result) : result),
    {}
  )
)

/**
 * Invoke
 * @param {function} fn - Function to invoke in new context
 * @param {any} args - Argument for function fn
 * @returns {function} invoke - Function which takes instance and calls fn with
 * args in context of instance
 */
export const invoke =
  (fn, ...args) =>
  instance =>
    fn.apply(instance, args)

/**
 * DeepProp
 * @param {string} {array} path - A path of properties or an Array of
 * properties to get
 * @param {object} a - Object to get properties from
 * @returns {any} Value of property access
 */
export const deepProp = curry((path, a) => {
  if (!Array.isArray(path)) path = path.split('.')
  const [p, ...rest] = path
  return !rest.length ? prop(p, a) : deepProp(rest, prop(p, a))
})

/**
 * DeepSetProp
 * @param {string} {array} path - A path of properties or an Array of
 * properties to set
 * @param {any} value - The value to set
 * @param {object} a - Object to set new property in
 * @returns {object} A copy of Object a, with new property set
 */
export const deepSetProp = curry((path, value, a) => {
  if (!Array.isArray(path)) path = path.split('.')
  function innerDeepSetProp(path, value, obj) {
    if (path.length === 1) {
      obj[path[0]] = value
      return obj
    }
    if (path[0] in obj && isObject(obj[path[0]])) {
      const newObj = obj[path[0]]
      return innerDeepSetProp(path.slice(1), value, newObj)
    }
    const newObj = {}
    obj[path[0]] = newObj
    return innerDeepSetProp(path.slice(1), value, newObj)
  }
  const aux = deepCopy(a)
  return innerDeepSetProp(path, value, aux), aux
})

/**
 * DeepPick
 * @param {array} paths - An array of string paths of property names
 * @param {object} a - The Object to pick properties from
 * @returns {object} A copy of Object a with only properties paths
 */
export const deepPick = curry((paths, a) =>
  paths.reduce((result, path) => deepSetProp(path, deepProp(path)(a))(result), {})
)

/**
 * DiffObject
 * @param {object} oldObj - Old Object
 * @param {object} newObj - New Object to diff against oldObj
 * @returns {object} result - Object of differences between newObj and oldObj
 */
export function diffObjects(oldObj, newObj) {
  if (oldObj === newObj) return {}

  function innerDiffObjects(oldObj, newObj, result) {
    if (oldObj === newObj) return result

    for (const key of Reflect.ownKeys(newObj)) {
      if (oldObj[key] === newObj[key]) continue

      if (isArray(newObj[key])) {
        result[key] = diffArrays(oldObj[key], newObj[key])
        if (result[key].length === 0) delete result[key]
      } else if (isObject(newObj[key])) {
        result[key] = {}
        innerDiffObjects(oldObj[key], newObj[key], result[key])
      } else {
        result[key] = newObj[key]
      }
    }
    return result
  }
  return innerDiffObjects(oldObj, newObj, {})
}

/**
 * DiffArray
 * @param {array} oldArr - Array to diff
 * @param {array} newArr - Array to diff
 * @returns {array} result - Array of items that have changed
 * from a to b (one way)
 */
export function diffArrays(oldArr, newArr) {
  const result = []
  if (oldArr === newArr) return result

  for (let i = 0; i < newArr.length; i++) {
    if (!(oldArr[i] === newArr[i])) {
      result.push(diff(oldArr[i], newArr[i]))
    }
  }
  return result
}

/**
 * Diff
 * Only diffs simple objects, arrays and primitives. Maybe I'll extend it to
 * support Maps and Sets later.
 * @param {object} a - Object to compare
 * @param {object} b - Object to compare
 * @returns {object} c - Object that is difference between a and b
 */
export function diff(a, b) {
  return isArray(b) ? diffArrays(a, b) : isObject(b) ? diffObjects(a, b) : b
}

/**
 * Merge
 * @param {object} a - Object to merge into
 * @param {object} b - Object with diffs to merge
 * @return {object} c - Result of merge
 */
export function merge(a, b) {
  if (!a && b) return b
  if (isArray(b)) {
    return b.map((value, i) => merge(a[i], value))
  }
  if (isObject(b)) {
    const result = deepCopy(a)
    for (const key of Reflect.ownKeys(b)) {
      result[key] = merge(a[key], b[key])
    }
    return result
  }
  return b
}

/**
 * Stringifying functions
 * Provides helper functions to stringify and parse JSON, along with numbers
 * and strings
 */
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

/**
 * Monad-related functions
 * Provides functions to help when working with Monads, such as Array
 */
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
export const composeM2 = (f, g) =>
  function innerComposeM2(...args) {
    return g.apply(this, args).flatMap(f)
  }
export const composeM = (...Ms) => Ms.reduce(composeM2)
export const liftA2 = curry((fn, a1, a2) => a1.map(fn).ap(a2))
export const liftA3 = curry((fn, a1, a2, a3) => a1.map(fn).ap(a2).ap(a3))
export const liftA4 = curry((fn, a1, a2, a3, a4) => a1.map(fn).ap(a2).ap(a3).ap(a4))
export const apply = curry((fn, F) => map.call(F, fn))
export const composeAsync2 = (f, g) =>
  async function innerComposeAsync(...args) {
    return await f.call(this, await g.call(this, ...args))
  }
export const composeAsync = (...fns) => fns.reduce(composeAsync2)
export const pipeAsync = (...fns) => fns.reduceRight(composeAsync2)
export const mapAsync = async (f, a) => await Promise.all(a.map(f))
export const reduceAsync = async (f, init, a) =>
  await a.reduce((p, val) => p.then(() => f(val)), Promise.resolve(init))
export const filterAsync = async (f, a) =>
  await mapAsync(f, a).then(bools => a.filter((_, i) => Boolean(bools[i])))
export const flat = M => M.flat()
export const flatMap = curry((f, M) => M.flatMap(f))
export const fold = curry((f, M) => M.fold(f))
export const getOrElseThrow = curry((e, M) => M.getOrElseThrow(e))

/**
 * Math functions
 * Provides a set of functions for common math operations
 */
export const eq = curry((a, b) => a === b)
export const add = curry((x, y) => x + y)
export const addRight = curry((x, y) => y + x)
export const subtract = curry((x, y) => x - y)
export const subtractRight = curry((x, y) => y - x)
export const multiply = curry((x, y) => x * y)
export const multiplyRight = curry((x, y) => y * x)
export const divide = curry((x, y) => x / y)
export const divideRight = curry((x, y) => y / x)
export const roundTo = n => x => Math.round(x * Math.pow(10, n)) / Math.pow(10, n)
export const pow = (base, power) =>
  power === 0 ? 1 : power & 1 ? base * pow(base, power - 1) : pow(base * base, power >> 1)

/**
 * Array functions
 * Provides a set of functions for common array operations
 */
export const head = a => a[0]
export const last = a => a[a.length - 1]
export const every = curry((f, arr) => arr.every(f))
export const some = curry((f, arr) => arr.some(f))
export const find = curry((f, arr) => arr.find(f))
export const sum = (...args) => args.reduce((x, y) => x + y, 0)
export const average = ns => sum(...ns) / ns.length
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

/**
 * TryCatch
 * @param {function} f - Try function, may throw
 * @param {function} g - Catch function, to catch error
 * @returns {any} Calls g if function f throws
 */
export const tryCatch = curry((f, g) => {
  try {
    return f()
  } catch (e) {
    return g(e)
  }
})

/**
 * Range
 * @param {number} start
 * @param {number} end
 * @param {number} step
 * @returns {array} result - An array of numbers from start to end, spaced by
 * step
 */
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

/**
 * Once
 * @param {function} fn - Function to run only once
 * @returns {function} once - Function fn will be called once, and thereafter
 * will return the cached result of the call
 */
export function once(fn) {
  let done = false
  let result
  return function once(...args) {
    return !done ? ((done = true), (result = fn.apply(this, args)), result) : result
  }
}

/**
 * Memoize
 * @param {function} fn - Function to memoize
 * @returns {function} memorize - Memoized function fn
 */
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

/**
 * Debounce
 * @param {number} delay - Amount of time to debounce
 * @returns {function} debounce - Function which takes an argument fn, which is
 * a function to debounce
 */
export const debounce = delay => {
  let pending = false
  return function debounce(fn) {
    if (pending) clearTimeout(pending)
    pending = setTimeout(() => fn.call(this), delay)
  }
}

/**
 * Accumulate
 * @param {number} delay - Amount of time to delay result
 * @returns {function} accumulate - Function which takes argument fn,
 * a function that will be called with all accumulated events after delay
 */
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

/**
 * FunctionalMixin
 * @param {object} behaviour - Desired mixin behaviour
 * @param {object} sharedBehaviour - Desired behaviour to add to prototype
 * @returns {function} mixin - Function which takes argument target, which is
 * the object to mix behaviour into
 */
export function FunctionalMixin(behaviour, sharedBehaviour = {}) {
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

/**
 * DeepFreeze
 * @param {object} obj - Object to deep freeze
 * @returns {object} obj - Object that was deep frozen
 */
export function deepFreeze(obj) {
  if (obj && typeof obj === 'object' && !Object.isFrozen(obj)) {
    Object.getOwnPropertyNames(obj).forEach(name => deepFreeze(obj[name]))
    Object.freeze(obj)
  }
  return obj
}

/**
 * DeepCopy
 * @param {object} obj - Object to deep copy
 * @returns {object} aux - Copy of Object obj
 */
export function deepCopy(obj) {
  let aux = obj
  if (obj && typeof obj === 'object') {
    aux = new obj.constructor()
    Object.getOwnPropertyNames(obj).forEach(prop => (aux[prop] = deepCopy(obj[prop])))
  }
  return aux
}
Object.deepFreeze = Object.deepFreeze || deepFreeze

/**
 * Immutate
 * @param {object} Object to seal and deep freeze
 * @returns {object} Object that is sealed and deep frozen
 */
export const immutable = compose(Object.seal, Object.deepFreeze)
