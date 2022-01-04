/* eslint no-param-reassign: 0 */
import { isFunction, isUndefined } from '../functions/predicates'
import { keys } from '../functions/objects'
import { INIT } from './createStore'
import { IAction } from './createAction'
import { IReducerFunction } from './reducer'

export interface IReducerObject {
  [propKey: PropertyKey]: IReducerFunction
}

/**
 * Turns an object with various reducer functions into a single reducer
 * function.
 */
export function combineReducers(reducers: IReducerObject): IReducerFunction {
  const reducerKeys = Reflect.ownKeys(reducers)
  const finalReducers: IReducerObject = {}

  for (const key of reducerKeys) {
    if (isFunction(reducers[key])) {
      finalReducers[key] = reducers[key]
    }
  }

  const finalReducerKeys = keys(finalReducers)

  let shapeAssertionError: Error | undefined

  try {
    assertReducerShape(finalReducers)
  } catch (err: any) {
    shapeAssertionError = err
  }

  /**
   * Combined reducer
   */
  return function combinedReducers(state: any, action: IAction) {
    if (shapeAssertionError) throw shapeAssertionError
    if (isUndefined(state)) state = {}

    let hasChanged = false

    const nextState: any = {}

    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i]
      const reducer = finalReducers[key]
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)

      if (typeof nextStateForKey === 'undefined') {
        const actionType = action && action.type
        throw new Error(
          `When called with action of type ${actionType} ` +
            `the reducer for key ${key} returned undefined.`,
        )
      }

      nextState[key] = nextStateForKey
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey
    }

    hasChanged = hasChanged || finalReducerKeys.length !== keys(state).length
    return hasChanged ? nextState : state
  }
}

function assertReducerShape(reducers: IReducerObject) {
  const keys = Reflect.ownKeys(reducers)

  for (const key of keys) {
    const reducer = reducers[key]
    const initialState = reducer(undefined, { type: INIT })

    if (typeof initialState === 'undefined') {
      throw new Error(
        `Reducer for key ${key as string} returned undefined. ` +
          'Set null for the return value if you do not ' +
          'want to set a value for this reducer.',
      )
    }
  }
}
