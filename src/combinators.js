/**
 * Identity, x => x
 * @param {any} x
 * @return {any} x
 */
export const identity = x => x

/**
 * Constant, x => y => x
 * @param {any} a
 * @returns {any} a
 */
export const constant = a => b => a

/**
 * Arity, turn a function into one with n arguments
 * @param {function} fn
 * @param {number} n - desired arity
 * @returns {function} arity - Function fn with new arity
 */
export const arity = (fn, n) =>
  function arity(...args) {
    return fn.apply(this, args.slice(0, n))
  }

/**
 * Unary, turn a function into one with 1 argument
 * @param {function} fn
 * @returns {function} arity - Function with arity of 1
 */
export const unary = fn => arity(fn, 1)

/**
 * Binary, turn a function into one with 2 arguments
 * @param {function} fn
 * @returns {function} arity - Function with arity of 2
 */
export const binary = fn => arity(fn, 2)

/**
 * Ternary, turn a function into one with 3 arguments
 * @param {function} fn
 * @returns {function} arity - Function with arity of 3
 */
export const ternary = fn => arity(fn, 3)

/**
 * Call First, partially apply a function's leftmost argument
 * @param {function} fn - Function to partially apply
 * @param {any} larg - Leftmost argument
 * @returns {function} callFirst - Function fn partially applied with larg
 */
export const callFirst = (fn, larg) =>
  function callFirst(...args) {
    return fn.call(this, larg, ...args)
  }

/**
 * Call Last, partially apply a function's rightmost argument
 * @param {function} fn - Function to partially apply
 * @param {any} rarg - Rightmost argument
 * @returns {function} callLast - Function fn partially applied with rarg
 */
export const callLast = (fn, rarg) =>
  function callLast(...args) {
    return fn.call(this, ...args, rarg)
  }

/**
 * Demethodize, convert a method to a standalone function
 * @param {method} method - Method to demethodize
 * @returns {function} method bound to use as regular function
 */
export const demethodize = Function.prototype.bind.bind(Function.prototype.call)

/**
 * Len, provides a simple way to get the length/size of something
 * @param {any} a - The subject of the length inquiry
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

const compose2 = (f, g) =>
  function compose(...args) {
    return f.call(this, g.call(this, ...args))
  }

/**
 * Compose, combine any number of functions together, right to left
 * @param {function} Any number of functions fns to compose
 * @returns {function} A function composed of fns
 */
export const compose = (...fns) => fns.reduce(compose2)

/**
 * Pipe, combine any number of functions together, left to right
 * @param {function} fns to pipe
 * @returns {function} A function pipe of fns
 */
export const pipe = (...fns) => fns.reduceRight(compose2)

/**
 * Curry, automatically curry a function, only works with non-variadic functions
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

/**
 * IsNumber, checks if x is a Number
 * @param {any} x
 * @returns {boolean}
 */
export const isNumber = isTypeOf('number')

/**
 * IsBoolean, checks if x is a Boolean
 * @param {any} x
 * @returns {boolean}
 */
export const isBoolean = isTypeOf('boolean')

/**
 * IsNull, checks if x is null
 * @param {any} x
 * @returns {boolean}
 */
export const isNull = x => x === null

/**
 * IsString, checks if x is a String
 * @param {any} x
 * @returns {boolean}
 */
export const isString = isTypeOf('string')

/**
 * IsObject, checks if x is an Object
 * @param {any} x
 * @returns {boolean}
 */
export const isObject = x => x !== null && typeof x === 'object'

/**
 * IsArray, checks if x is an Array
 * @param {any} x
 * @returns {boolean}
 */
export const isArray = a => Array.isArray(a)

/**
 * IsInstanceOf, checks if a is instanceof b
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
export const isInstanceOf = curry((a, b) => b instanceof a)

/**
 * IsFunction, checks if f is a Function
 * @param {any} f
 * @returns {boolean}
 */
export const isFunction = f => f && typeof f === 'function'

/**
 * IsSet, checks if s is a Set
 * @param {any} s
 * @returns {boolean}
 */
export const isSet = s => s instanceof Set

/**
 * IsMap, checks if m is a Map
 * @param {any} m
 * @returns {boolean}
 */
export const isMap = m => m instanceof Map

/**
 * Tap, run a side effect fn and then return x
 * @param {function} fn - Side effect to run
 * @param {any} x - Value to return
 */
export const tap = curry((fn, x) => (fn(x), x))

/**
 * Not, negate the result of a function
 * @param {function} f - Function to negate
 * @param {any} a - Argument for function f
 */
export const not = curry((f, a) => !f(a))

/**
 * Invert, reverse the sign of a numerical result of a function
 * @param {function} f - Function to reverse the sign of result
 * @param {any} a - Argument for function f
 */
export const invert = curry((f, a) => -f(a))

/**
 * Flip2, flip the position of a function's arguments
 * @param {function} f - Function to flip arguments
 * @returns {function} flip - Function f with arguments a and b flipped
 */
export const flip2 = f =>
  curry(function flip(a, b) {
    return f.call(this, b, a)
  })

/**
 * Flip3, flip the first argument to the last argument
 * @param {function} f - Function to flip arguments
 * @returns {function} flip - Function f with
 * arguments a, b, c flipped to b, c, a.
 */
export const flip3 = f =>
  curry(function flip(a, b, c) {
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
 * Transduce, combine multiple maps, filters, into a more efficient operation
 * @param {array} arr - Array to reduce
 * @param {array} fns - Array of functions to apply to arr
 * @param {function} reducer - Reducer function to apply to arr
 * @param {any} initial - Initial value to pass to reducer
 */
export const transduce = curry((arr, fns, reducer, initial) =>
  arr.reduce(compose(...fns)(reducer), initial)
)

/**
 * MapTR, create a map transducer
 * @param {function} fn - Create a transducer from map function
 * @returns {function}
 */
export const mapTR = fn => reducer => (acc, val) => reducer(acc, fn(val))

/**
 * filterTR, create a filter transducer
 * @param {function} fn - Create a transducer from a filter function
 * @returns {function}
 */
export const filterTR = fn => reducer => (acc, val) => fn(val) ? reducer(acc, val) : acc

/**
 * Prop, access a property in an object
 * @param {string} name - Property name
 * @param {object} a - Object to get property in
 */
export const prop = curry(
  (name, a) =>
    a && (name in a ? (isFunction(a[name]) ? a[name].call(a) : a[name]) : void 0)
)

/**
 * Send, returns a function that applies instance method name with args
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
 * Bound, returns a bound method or calls method with args
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
 * SetPropM, sets a property in an object **MUTATES**
 * @param {name} name - Property name
 * @param {value} value - New value to set
 * @param {object} a - Object to mutate with new value
 * @returns {object} a
 */
export const setPropM = curry((name, value, a) =>
  a && name in a ? ((a[name] = value), a) : a
)

/**
 * SetProp, returns a copy of an object with new property name set to value
 * @param {name} name - Property name
 * @param {value} value - New value to set
 * @param {object} a - Object to set value in
 * @returns {object} Copy of a with new value set
 */
export const setProp = curry((name, value, a) =>
  a && name in a ? { ...a, [name]: value } : { ...a }
)

/**
 * Props, gets an array of property names from an object, shallow
 * @param {array} names - Array of property names
 * @param {object} a - Object to get property names from
 * @returns {array} Array of values
 */
export const props = curry((names, a) => names.map(n => prop(n, a)))

/**
 * Pick, returns an object with only the selected property names, shallow
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
 * Invoke, returns a function that takes a context to call function fn with args in
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
 * DeepProp, get a property from any object, deep
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
 * DeepSetProp, set a property in an object, returns a copy, deep
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
 * DeepPick, returns an object with only deep properties paths
 * @param {array} paths - An array of string paths of property names
 * @param {object} a - The Object to pick properties from
 * @returns {object} A copy of Object a with only properties paths
 */
export const deepPick = curry((paths, a) =>
  paths.reduce((result, path) => deepSetProp(path, deepProp(path)(a))(result), {})
)

/**
 * DiffObject, returns the changed values from newObj that are not in oldObj
 * @param {object} oldObj - Old Object
 * @param {object} newObj - New Object to diff against oldObj
 * @returns {object} result - Object of differences between newObj and oldObj
 */
function diffObjects(oldObj, newObj) {
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
 * DiffArray, returns the changed items from newArr, that are not in oldArr
 * @param {array} oldArr - Array to diff
 * @param {array} newArr - Array to diff
 * @returns {array} result - Array of items that have changed
 * from a to b (one way)
 */
function diffArrays(oldArr, newArr) {
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
 * Diff, get the naive difference between a and b
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
 * Merge, deep merge a and b
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
 * AggregateOn, combine many objects into one with aggregated keys
 * TODO: Try to improve the algorithm
 * @param {string} key to Aggregate
 * @param {object} Objects to aggregate
 * @returns {object} Result of Aggregating on key
 */
export function aggregateOn(keyMap, ...objects) {
  let result = {}

  for (const current of objects) {
    result = merge(result, current)
    for (const [oldKey, newKey] of entries(keyMap)) {
      if (!current[oldKey]) continue
      result[newKey] = result[newKey]
        ? unique(result[newKey], current[oldKey])
        : unique(result[oldKey], current[oldKey])
      delete result[oldKey]
    }
  }
  return result
}

/**
 * Unique, get only unique items
 * @param {array} arr - Array to remove non-unique items
 * @returns {array} Array of unique items
 */
export const unique = (...items) => Array.from(new Set(items.flat()))

/**
 * Aggregate, combine all keys
 * @param {object} a - Object one
 * @param {object} b - Object two
 * @returns {object} c - Result of aggregation
 */
export function aggregate(a, b) {
  const result = {}
  const keys = unique([...Reflect.ownKeys(a), ...Reflect.ownKeys(b)])
  for (const key of keys) {
    const [aVal, bVal] = [a[key], b[key]]

    // If a === b just deepCopy b
    if (aVal === bVal) {
      result[key] = deepCopy(bVal)
    }

    // if both are arrays, merge them with unique elements
    else if (isArray(aVal) && isArray(bVal)) {
      result[key] = unique([...aVal, ...bVal])
    }

    // If both are objects, aggregate them
    else if (isObject(aVal) && isObject(bVal)) {
      result[key] = aggregate(aVal, bVal)
    }

    // If a but not b, deepCopy a
    else if (aVal && !bVal) {
      result[key] = deepCopy(aVal)
    }

    // If b but not a, deepCopy b
    else if (bVal && !aVal) {
      result[key] = deepCopy(bVal)
    }

    // Otherwise aggregate results in an array
    else {
      result[key] = [deepCopy(aVal), deepCopy(bVal)]
    }
  }
  return result
}

/**
 * GroupBy, group a collection of objects into a multi-dimensional array by key
 * @param {string} key - Property to group by
 * @param {array} arr - Array of objects to group
 * @returns {array} entries grouped by key
 */
export const groupBy = curry((key, arr) => {
  const result = {}
  for (const item of arr) {
    ;(result[item[key]] || (result[item[key]] = [])).push(item)
  }
  return values(result)
})

/**
 * KeyBy, convert array into object, assumes each key is unique otherwise the
 * last object wins
 * @param {string} key - Property to key by
 * @param {array} arr - Array of objects to key
 * @returns {object} Array arr mapped to an object by key
 */
export const keyBy = curry((key, arr) =>
  arr.reduce((result, item) => ((result[item[key]] = item), result), {})
)

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

/**
 * PadStart
 * @param {any} x - Base to stringify
 * @param {number} reps - Length to pad up to
 * @param {string} fill - Fill characters
 * @returns {string}
 */
export const padStart = curry((x, reps, fill) =>
  String.prototype.padStart.call(x, reps, fill)
)

/**
 * PadEnd
 * @param {any} x - Base to stringify
 * @param {number} reps - Length to pad up to
 * @param {string} fill - Fill characters
 * @returns {string}
 */
export const padEnd = curry((x, reps, fill) =>
  String.prototype.padEnd.call(x, reps, fill)
)

/**
 * ForEach
 * @param {function} f - Function to run on value(s) of M
 * @param {array} M - Monad / iterable that implements forEach
 * @returns {undefined}
 */
export const forEach = curry((f, M) => M.forEach(f))

/**
 * Map
 * @param {function} f - Mapper function
 * @param {array} M - Monad / iterable that implements map
 * @returns {array}
 */
export const map = curry((f, M) => M.map(f))

/**
 * Filter
 * @param {function} p - Predicate to filter with
 * @param {array} M - Monad / iterable to filter
 * @returns {array}
 */
export const filter = curry((p, M) => M.filter(p))

/**
 * Reduce
 * @param {function} reducer - Reducer function
 * @param {any} seed - Initial value
 * @param {array} M - Monad / iterable to reduce
 * @returns {any}
 */
export const reduce = curry((reducer, seed, M) => M.reduce(reducer, seed))

/**
 * ReduceRight
 * @param {function} reducer - Reducer function
 * @param {any} seed - Initial value
 * @param {array} M - Monad / iterable to reduce
 * @returns {any}
 */
export const reduceRight = curry((reducer, seed, M) => M.reduceRight(reducer, seed))

/**
 * Pluck
 * @param {string} prop - Property to pluck
 * @param {array} M - Monad / iterable to pluck prop out of
 * @returns {array}
 */
export const pluck = compose(map, prop)

/**
 * Entries, eagerly get entries of an object or iterable
 * @param {iterable} {object} Object that implements entries() or is iterable
 * @returns {array} Array of [key, value] entries
 */
export function entries(iterable) {
  if (iterable.entries && isFunction(iterable.entries)) {
    return [...iterable.entries()]
  }
  return Object.entries(iterable)
}

/**
 * Values, eagerly get values of an object or iterable
 * @param {iterable} {object} Object that implements values() or is iterable
 * @returns {array} Array of values
 */
export function values(iterable) {
  if (iterable.values && isFunction(iterable.values)) {
    return [...iterable.values()]
  }
  return Object.values(iterable)
}

/**
 * Keys, eagerly get keys of an object or iterable
 * @param {iterable} {object} Object that implements keys() or is iterable
 * @returns {array} Array of keys
 */
export function keys(iterable) {
  if (iterable.keys && isFunction(iterable.keys)) {
    return [...iterable.keys()]
  }
  return Object.keys(iterable)
}

/**
 * Rename
 * @param {object} Key map of keys to rename
 * @param {object} a - Object to rename
 * @returns {object} Copy of a with renamed keys
 */
export const rename = curry((keyMap, a) => {
  const result = deepCopy(a)
  for (const [oldKey, newKey] of entries(keyMap)) {
    if (isMap(result)) {
      result.set(newKey, a.get(oldKey))
      result.delete(oldKey)
    } else {
      result[newKey] = a[oldKey]
      delete result[oldKey]
    }
  }
  return result
})

/**
 * DeepMap
 * @param {function} fn - Mapper function
 * @returns {function} innerDeepMap - Maps recursively over nested array / tree
 */
export const deepMap = fn =>
  function innerDeepMap(tree) {
    return Array.prototype.map.call(tree, element =>
      Array.isArray(element) ? innerDeepMap(element) : fn(element)
    )
  }

const composeM2 = (f, g) =>
  function innerComposeM2(...args) {
    return g.apply(this, args).flatMap(f)
  }

/**
 * ComposeM
 * @param {monad} - Monads to compose
 * @returns {function} - Reduction of monads
 */
export const composeM = (...Ms) => Ms.reduce(composeM2)
export const liftA2 = curry((fn, a1, a2) => a1.map(fn).ap(a2))
export const liftA3 = curry((fn, a1, a2, a3) => a1.map(fn).ap(a2).ap(a3))
export const liftA4 = curry((fn, a1, a2, a3, a4) => a1.map(fn).ap(a2).ap(a3).ap(a4))
export const apply = curry((fn, F) => map.call(F, fn))

const composeAsync2 = (f, g) =>
  async function innerComposeAsync(...args) {
    return await f.call(this, await g.call(this, ...args))
  }

/**
 * ComposeAsync
 * @param {function} Async functions to compose, right to left
 * @returns {function}
 */
export const composeAsync = (...fns) => fns.reduce(composeAsync2)

/**
 * PipeAsync
 * @param {function} Async functions to pipe, left to right
 * @returns {function}
 */
export const pipeAsync = (...fns) => fns.reduceRight(composeAsync2)

/**
 * MapAsync
 * @param {function} Async mapper function
 * @param {array} a - Array of values to map over
 * @returns {array}
 */
export const mapAsync = async (f, a) => await Promise.all(a.map(f))

/**
 * ReduceAsync
 * @param {function} f - Async Reducer function
 * @param {any} init - Initial value
 * @param {array} a - Array of values to reduce
 * @returns {any}
 */
export const reduceAsync = async (f, init, a) =>
  await a.reduce((p, val) => p.then(() => f(val)), Promise.resolve(init))

/**
 * FilterAsync
 * @param {function} f - Predicate to filter a with
 * @param {array} a - Array to filter
 * @returns {array}
 */
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

/**
 * Partition, divide an array into two
 * @param {array} arr - Array to partition in to two
 * @param {function} a - Left side function
 * @param {function} b - Right side function
 * @returns {array} Multidimensional array
 */
export const partition = (arr, a, b) =>
  arr.reduce(
    (acc, cv) => (a(cv) ? (acc[0].push(cv), acc) : b(cv) ? (acc[1].push(cv), acc) : acc),
    [[], []]
  )

/**
 * ZipMap
 * @param {function} f - Mapper function
 * @param {iterable} Iterables
 * @returns {array}
 */
export const zipMap = (f, ...iters) => {
  const min = Math.min(...pluck('length')(iters))
  const result = []
  for (let i = 0; i < min; i++) {
    result.push(f(...pluck(i)(iters)))
  }
  return result
}

/**
 * SortBy
 * @param {function} f - Sorter function (a, b) => a - b
 * @param {array} a - Array to sort
 * @returns {array} Copy of array a, sorted with f
 */
export const sortBy = curry((f, a) => [...a].sort(f))

/**
 * Match
 * @param {regexp} re - Matcher RegExp
 * @param {string} s - String to test
 * @returns {boolean}
 */
export const match = curry((re, s) => re.test(s))

/**
 * Replace
 * @param {regexp} {string} - Regexp or String to match and replace
 * @param {string} Replacer string
 * @param {string} s - String to perform search and replace on
 * @returns {string}
 */
export const replace = curry((re, rpl, s) => s.replace(re, rpl))

/**
 * Split
 * @param {string} sep - Separater string
 * @param {string} s - String to split
 * @returns {array}
 */
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
    if (isMap(aux)) {
      for (const key of obj.keys()) {
        const keyCopy = deepCopy(key)
        aux.set(keyCopy, obj.get(key))
      }
    } else if (isSet(aux)) {
      for (const val of obj.values()) {
        aux.add(val)
      }
    } else {
      Object.getOwnPropertyNames(obj).forEach(prop => (aux[prop] = deepCopy(obj[prop])))
    }
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
