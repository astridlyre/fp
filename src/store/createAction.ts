/* eslint no-unused-vars: 0 */
import { isPlainObject } from './isPlainObject'
import { isString } from '../functions/predicates'

export interface IAction {
  type: string
  payload?: any
  meta?: any
  error?: any
}

export interface IActionCreator extends Function {
  match(action: IAction): boolean
  toString(): string
  type: string
}

/**
 * A utility function for making an action creator for a given type
 */
export function createAction(type: string, prepareAction: (...args: any[]) => any) {
  function actionCreator(...args: any[]) {
    if (prepareAction) {
      const prepared = prepareAction(...args)
      if (!prepared) throw new Error('prepareAction did not return an object')

      return {
        type,
        payload: prepared.payload,
        ...('meta' in prepared && { meta: prepared.meta }),
        ...('error' in prepared && { error: prepared.error }),
      } as IAction
    }

    return { type, payload: args[0] } as IAction
  }

  actionCreator.toString = function toString() {
    return `${type}`
  }

  actionCreator.type = type

  actionCreator.match = function match(action: IAction) {
    return action.type === type
  }

  return actionCreator
}

export function isValidKey(key: string) {
  return ['type', 'payload', 'error', 'meta'].indexOf(key) > -1
}

export function getType(actionCreator: IActionCreator) {
  return `${actionCreator}`
}

export function isFSA(action: IAction) {
  return (
    isPlainObject(action) &&
    isString(action.type) &&
    Object.keys(action).every(isValidKey)
  )
}
