import { isObject } from '../functions/predicates'

/**
 * Checks to see if something appears to be a plain object
 */
export function isPlainObject(obj: any) {
  if (!isObject(obj)) {
    return false
  }

  let proto = obj
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(obj) === proto
}
