/* eslint no-unused-vars: 0 */
import { isFunction, isObject } from '../functions/predicates'
import { stringify } from '../functions/utils'
import { IAction, IActionCreator } from './createAction'

interface IActionCreatorObject {
  [propKey: PropertyKey]: IActionCreator
}

/**
 * Turns an action creator object into one whose values are wrapped in
 * a dispatch call so as to enable them to be invoked directly
 */
export function bindActionCreators(
  actionCreators: IActionCreatorObject | IActionCreator,
  dispatch: (action: IAction) => any,
) {
  if (isFunction(actionCreators)) {
    return bindActionCreator(actionCreators as IActionCreator, dispatch)
  }

  if (!isObject(actionCreators)) {
    throw new Error(
      'Expected an object or function, but got: ' + stringify(actionCreators),
    )
  }

  const boundActionCreators: IActionCreatorObject = {}

  for (const key of Reflect.ownKeys(actionCreators)) {
    const actionCreator = (actionCreators as IActionCreatorObject)[key]

    if (isFunction(actionCreator)) {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
    }
  }

  return boundActionCreators
}

function bindActionCreator(
  actionCreator: IActionCreator,
  dispatch: (action: IAction) => any,
) {
  return Object.assign(
    function boundCreator(this: any, ...args: any[]) {
      return dispatch(actionCreator.apply(this, args))
    },
    {
      match(type: IAction): boolean {
        return actionCreator.match(type)
      },
      get type() {
        return actionCreator.type
      },
    },
  ) as any as IActionCreator
}
