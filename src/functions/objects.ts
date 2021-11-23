/* eslint no-param-reassign: 0, no-unused-vars: 0 */
import { curry, unique, compose } from './utils'
import { isFunction, isObject, isMap, isArray, isSet } from './predicates'

interface GenericObject {
  [propKey: PropertyKey]: any
}
/**
 * Prop, access a property in an object
 */
export const prop = curry(
  (name: PropertyKey, a: GenericObject) =>
    a && (name in a ? (isFunction(a[name]) ? a[name].call(a) : a[name]) : void 0)
)

/**
 * SetPropM, sets a property in an object **MUTATES**
 */
export const setPropM = curry(
  (name: PropertyKey, value: any, a: GenericObject): GenericObject =>
    isObject(a) ? ((a[name] = value), a) : a
)

/**
 * SetProp, returns a copy of an object with new property name set to value
 */
export const setProp = curry(
  (name: PropertyKey, value: any, a: GenericObject): GenericObject =>
    a && name in a ? { ...a, [name]: value } : { ...a }
)

/**
 * Set, set key in object a to value
 */
export const set = curry(
  (key: any, value: any, a: GenericObject): GenericObject | Map<any, any> => (
    isMap(a) ? a.set(key, value) : (a[key] = value), a
  )
)

/**
 * Update, updates a key of an object with an updator function
 */
export const update = curry(
  (key: PropertyKey | any, updater: (currentValue: any) => any, a: any) =>
    isMap(a) ? a.set(key, updater(a.get(key))) : ((a[key] = updater(a[key])), a)
)

/**
 * Props, gets an array of property names from an object, shallow
 */
export const props = curry((names: PropertyKey[], a: GenericObject) =>
  names.map(n => prop(n, a))
)

/**
 * Pick, returns an object with only the selected property names, shallow
 */
export const pick = curry((names: PropertyKey[], a: GenericObject) =>
  names.reduce(
    (result: GenericObject, key) =>
      key in a ? ((result[key] = a[key]), result) : result,
    {}
  )
)

/**
 * DeepProp, get a property from any object, deep
 */
export const deepProp = curry((path: string | PropertyKey[], a: GenericObject) => {
  if (!Array.isArray(path)) path = path.split('.')
  const [p, ...rest] = path
  return !rest.length ? prop(p, a) : deepProp(rest, prop(p, a))
})

/**
 * DeepSetProp, set a property in an object, returns a copy, deep
 */
export const deepSetProp = curry(
  (path: string | PropertyKey[], value: any, a: GenericObject) => {
    if (!Array.isArray(path)) path = path.split('.')

    function innerDeepSetProp(
      path: PropertyKey[],
      value: any,
      obj: GenericObject
    ): object {
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
  }
)

/**
 * DeepUpdate, updates a property in an object with an updater function
 */
export const deepUpdate = curry(
  (
    path: string | PropertyKey[],
    updater: (currentValue: any) => any,
    a: GenericObject
  ) => {
    if (!Array.isArray(path)) path = path.split('.')

    function innerDeepSetProp(
      path: PropertyKey[],
      updater: (currentValue: any) => any,
      obj: GenericObject
    ): object {
      if (path.length === 1) {
        obj[path[0]] = updater(obj[path[0]])
        return obj
      }

      if (path[0] in obj && isObject(obj[path[0]])) {
        const newObj = obj[path[0]]
        return innerDeepSetProp(path.slice(1), updater, newObj)
      }

      const newObj = {}

      obj[path[0]] = newObj

      return innerDeepSetProp(path.slice(1), updater, newObj)
    }

    return innerDeepSetProp(path, updater, a), a
  }
)

/**
 * DeepPick, returns an object with only deep properties paths
 */
export const deepPick = curry((paths: PropertyKey[], a: GenericObject) =>
  paths.reduce((result, path) => deepSetProp(path, deepProp(path)(a), result), {})
)

/**
 * DiffObject, returns the changed values from newObj that are not in oldObj
 */
function diffObjects(oldObj: GenericObject, newObj: GenericObject) {
  if (oldObj === newObj) return {}
  if (!oldObj) return newObj
  if (!newObj) return oldObj

  function innerDiffObjects(
    oldObj: GenericObject,
    newObj: GenericObject,
    result: GenericObject
  ) {
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
 */
function diffArrays(oldArr: any[], newArr: any[]) {
  const result: any[] = []

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
 */
export function diff(a: any, b: any) {
  return isArray(b) ? diffArrays(a, b) : isObject(b) ? diffObjects(a, b) : b
}

/**
 * Aggregate, deep merge a and b
 */
export function aggregate<T extends GenericObject>(a: T, b: T): T {
  if (!a && b) return b

  if (isArray(b)) {
    return b.map((value: any, i: number) => aggregate(a[i], value))
  }

  if (isObject(b)) {
    const result = deepCopy(a)
    for (const key of Reflect.ownKeys(b)) {
      result[key] = aggregate(a[key], b[key])
    }
    return result
  }

  return b
}

/**
 * AggregateOn, combine many objects into one with aggregated keys
 * TODO: Try to improve the algorithm
 */
export function aggregateOn(keyMap: any, ...objects: GenericObject[]) {
  let result: GenericObject = {}

  for (const current of objects) {
    result = aggregate(result, current)

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
 * Merge, combine all keys
 */
export function merge(a: GenericObject, b: GenericObject) {
  if (!a && b) return deepCopy(b)
  if (!b && a) return deepCopy(a)

  if (isArray(a) && isArray(b)) {
    return unique(a, b).map(value => deepCopy(value))
  }

  if (!isArray(a) && isArray(b)) {
    return b.map((value: any) => deepCopy(value))
  }

  if (isObject(a) && isObject(b)) {
    const result: GenericObject = {}
    const keys = unique([...Reflect.ownKeys(a), ...Reflect.ownKeys(b)])

    for (const key of keys) {
      const [aVal, bVal] = [a[key], b[key]]

      // If a === b just deepCopy b
      if (aVal === bVal) {
        result[key] = deepCopy(bVal)
      }

      // if both are arrays, merge them with unique elements
      else if (isArray(aVal) && isArray(bVal)) {
        result[key] = merge(aVal, bVal)
      }

      // If both are objects, merge them
      else if (isObject(aVal) && isObject(bVal)) {
        result[key] = merge(aVal, bVal)
      } else if (bVal === undefined) {
        result[key] = deepCopy(aVal)
      } else {
        result[key] = deepCopy(bVal)
      }
    }
    return result
  }

  return b
}

/**
 * Entries, eagerly get entries of an object or iterable
 */
export function entries(iterable: any) {
  if (iterable.entries && isFunction(iterable.entries)) {
    return [...iterable.entries()]
  }
  return Object.entries(iterable)
}

/**
 * Values, eagerly get values of an object or iterable
 */
export function values(iterable: any) {
  if (iterable.values && isFunction(iterable.values)) {
    return [...iterable.values()]
  }
  return Object.values(iterable)
}

/**
 * Keys, eagerly get keys of an object or iterable
 */
export function keys(iterable: any) {
  if (iterable.keys && isFunction(iterable.keys)) {
    return [...iterable.keys()]
  }
  return Object.keys(iterable)
}

/**
 * Rename object's keys using a keymap
 */
export const rename = curry((keyMap: any, a: GenericObject) => {
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

const detectCollision = (...descriptors: PropertyDescriptor[]) =>
  descriptors
    .flatMap(Object.keys)
    .reduce(sortReducer, [])
    .reduce(collisionReducer, [])
    .forEach((c: any) => console.log(`[WARN] Collision found: ${c}`))

const sortReducer = (accumulator: any, value: any) => {
  const nextIndex = accumulator.findIndex((i: number) => value < i)
  const index = nextIndex > -1 ? nextIndex : accumulator.length
  accumulator.splice(index, 0, value)
  return accumulator
}

const collisionReducer = (accumulator: any, value: any, index: number, arr: any[]) =>
  value === arr[index + 1] ? [...accumulator, value] : accumulator

const isDescriptor = (obj: any) => obj && (obj.state || obj.methods)

// extend Object
if (typeof (Object as any).impl !== 'function') {
  Object.defineProperty(Object, 'impl', {
    value:
      (...mixins: object[]) =>
      (target: any) => {
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
if (typeof (Object as any).mixin !== 'function') {
  Object.defineProperty(Object, 'mixin', {
    value: function concatExtend(descriptor: string, ...mixins: object[]) {
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
 */
export function deepFreeze(obj: GenericObject) {
  if (obj && typeof obj === 'object' && !Object.isFrozen(obj)) {
    Object.getOwnPropertyNames(obj).forEach(name => deepFreeze(obj[name]))
    Object.freeze(obj)
  }
  return obj
}

/**
 * DeepCopyArray
 */
export function deepCopyArray(arr: any[], offset = 0) {
  const len = Math.max(0, arr.length - offset)
  const newArray = new Array(len)

  for (let i = 0; i < len; i++) {
    newArray[i] = deepCopy(arr[i + offset])
  }

  return newArray
}

/**
 * DeepCopy
 */
export function deepCopy(obj: any) {
  if (isArray(obj)) return deepCopyArray(obj)

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

;(Object as any).deepFreeze = (Object as any).deepFreeze || deepFreeze

/**
 * Immutable
 * @param {object} Object to seal and deep freeze
 * @returns {object} Object that is sealed and deep frozen
 */
export const immutable = compose(Object.seal, (Object as any).deepFreeze)
