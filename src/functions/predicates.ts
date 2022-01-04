/* eslint no-magic-numbers: 0 */
import { curry } from './utils'
import { values } from './objects'
/**
 * Typeof Functions
 * Provides several functions to test whether x is of type y
 */
const isTypeOf = (a: any) => (b: any) => typeof b === a

/**
 * IsNumber, checks if x is a Number
 */
export const isNumber = isTypeOf('number')

/**
 * IsBoolean, checks if x is a Boolean
 */
export const isBoolean = isTypeOf('boolean')

/**
 * IsNull, checks if x is null
 */
export const isNull = (x: any) => x === null

/**
 * IsUndefined, checks if x is undefined
 */
export const isUndefined = (x: any) => typeof x === 'undefined'

/**
 * IsString, checks if x is a String
 */
export const isString = isTypeOf('string')

/**
 * IsObject, checks if x is an Object
 */
export const isObject = (x: any) => x !== null && typeof x === 'object'

/**
 * IsArray, checks if x is an Array
 */
export const isArray = (a: any) => Array.isArray(a)

/**
 * IsInstanceOf, checks if a is instanceof b
 */
export const isInstanceOf = curry((a: any, b: any) => b instanceof a)

/**
 * IsFunction, checks if f is a Function
 */
export const isFunction = (f: any) => f && typeof f === 'function'

/**
 * IsAsyncFunction, checks if f is an async function
 */
export const isAsyncFunction = (f: any) =>
  isFunction(f) && f[Symbol.toStringTag] === 'AsyncFunction'

/**
 * IsGeneratorFunction, checks if f is a generator function
 */
export const isGeneratorFunction = (f: any) =>
  isFunction(f) && f[Symbol.toStringTag] === 'GeneratorFunction'

/**
 * isAsyncGeneratorFunction, checks if f is an async generator
 */
export const isAsyncGeneratorFunction = (f: any) =>
  isFunction(f) && f[Symbol.toStringTag] === 'AsyncGeneratorFunction'

/**
 * IsSet, checks if s is a Set
 */
export const isSet = (s: any) => s instanceof Set

/**
 * IsMap, checks if m is a Map
 */
export const isMap = (m: any) => m instanceof Map

/**
 * IsEmpty
 */
export function isEmpty(x: any) {
  if (
    x === '' ||
    x == null ||
    (isArray(x) && x.length === 0) ||
    (!isClass(x) &&
      (isSet(x) || isMap(x) || isObject(x)) &&
      values(x).length === 0) ||
    Number.isNaN(x)
  ) {
    return true
  }

  return false
}

/**
 * IsClass
 */
export function isClass(obj: any) {
  const isCtorClass =
    obj.constructor && obj.constructor.toString().substring(0, 5) === 'class'

  if (obj.prototype === undefined) {
    return isCtorClass
  }

  const isPrototypeCtorClass =
    obj.prototype.constructor &&
    obj.prototype.constructor.toString &&
    obj.prototype.constructor.toString().substring(0, 5) === 'class'

  return isCtorClass || isPrototypeCtorClass
}

export const ReducedSymbol = Symbol('reduced')
export const isReduced = (thing: any) => !!thing?.[ReducedSymbol]
