import { isFunction, isObject } from '../functions/predicates'
import { stringify } from '../functions/utils'
import { IAction, IActionCreator } from './createAction'

/**
 * Turns an action creator object into one whose values are wrapped in
 * a dispatch call so as to enable them to be invoked directly
 *
 * @param {object} Action Creators
 * @param {function} Dispatch function
 * @returns {object} Bound action creator object
 */
export function bindActionCreators(
  actionCreators: any,
  dispatch: (action: IAction) => any
) {
  if (isFunction(actionCreators)) {
    return bindActionCreator(actionCreators, dispatch)
  }

  if (!isObject(actionCreators)) {
    throw new Error(
      'Expected an object or function, but got: ' + stringify(actionCreators)
    )
  }

  const boundActionCreators: any = {}

  for (const key of Reflect.ownKeys(actionCreators)) {
    const actionCreator = actionCreators[key]

    if (isFunction(actionCreator)) {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
    }
  }

  return boundActionCreators
}

function bindActionCreator(
  actionCreator: IActionCreator,
  dispatch: (action: IAction) => any
) {
  return function boundCreator(this: any) {
    return dispatch(actionCreator.apply(this, arguments))
  }
}
