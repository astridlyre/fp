import { isObject } from '../functions/predicates.ts'
/**
 * Checks to see if something appears to be a plain object
 *
 * @param {object} Object to check
 * @returns {boolean}
 */
export function isPlainObject(obj) {
  if (!isObject(obj)) {
    return false
  }

  let proto = obj
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(obj) === proto
}
