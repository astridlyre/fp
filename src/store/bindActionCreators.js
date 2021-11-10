import { isFunction, isObject, stringify } from '../combinators.js'

/**
 * Turns an action creator object into one whose values are wrapped in
 * a dispatch call so as to enable them to be invoked directly
 *
 * @param {object} Action Creators
 * @param {function} Dispatch function
 * @returns {object} Bound action creator object
 */
export function bindActionCreators(actionCreators, dispatch) {
  if (isFunction(actionCreators)) {
    return bindActionCreator(actionCreators, dispatch)
  }

  if (!isObject(actionCreators)) {
    throw new Error(
      'Expected an object or function, but got: ' + stringify(actionCreators)
    )
  }

  const boundActionCreators = {}

  for (const key of Reflect.ownKeys(actionCreators)) {
    const actionCreator = actionCreators[key]

    if (isFunction(actionCreator)) {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
    }
  }

  return boundActionCreators
}

function bindActionCreator(actionCreator, dispatch) {
  return function boundCreator() {
    return dispatch(actionCreator.apply(this, arguments))
  }
}
