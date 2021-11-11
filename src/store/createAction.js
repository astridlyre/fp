import { isPlainObject } from './isPlainObject.js'
import { isString } from '../functions/predicates.ts'

/**
 * A utility function for making an action creator for a given type
 *
 * @param {string} Type of action
 * @param {function} Optional variadic prepare function used to return
 *  a payload
 *
 * @returns {function} Action Creator function
 */
export function createAction(type, prepareAction) {
  function actionCreator(...args) {
    if (prepareAction) {
      let prepared = prepareAction(...args)
      if (!prepared) throw new Error('prepareAction did not return an object')

      return {
        type,
        payload: prepared.payload,
        ...('meta' in prepared && { meta: prepared.meta }),
        ...('error' in prepared && { error: prepared.error }),
      }
    }

    return { type, payload: args[0] }
  }

  actionCreator.toString = function toString() {
    return `${type}`
  }

  actionCreator.type = type

  actionCreator.match = function match(action) {
    return action.type === type
  }

  return actionCreator
}

export function isValidKey(key) {
  return ['type', 'payload', 'error', 'meta'].indexOf(key) > -1
}

export function getType(actionCreator) {
  return `${actionCreator}`
}

export function isFSA(action) {
  return (
    isPlainObject(action) &&
    isString(action.type) &&
    Object.keys(action).every(isValidKey)
  )
}
