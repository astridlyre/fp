import { isFunction, isUndefined } from '../functions/predicates.ts'
import { keys } from '../functions/objects.ts'
import { INIT } from './createStore.js'

/**
 * Turns an object with various reducer functions into a single reducer
 * function.
 *
 * @param {object} Reducers object, with values corresponding to reducers
 * @returns {function} A reducer function that invokes each reducer
 */
export function combineReducers(reducers) {
  const reducerKeys = Reflect.ownKeys(reducers)
  const finalReducers = {}

  for (const key of reducerKeys) {
    if (process.env.NODE_ENV !== 'production' && typeof reducers[key] === 'undefined') {
      console.warn(`No reducer provided for key ${key}`)
    }

    if (isFunction(reducers[key])) {
      finalReducers[key] = reducers[key]
    }
  }

  const finalReducerKeys = keys(finalReducers)

  let shapeAssertionError

  try {
    assertReducerShape(finalReducers)
  } catch (err) {
    shapeAssertionError = err
  }

  /**
   * Combined reducer
   *
   * @param {object} State to reduce
   * @param {object} Action to perform
   * @returns {object} New state
   */
  return function combinedReducers(state, action) {
    if (shapeAssertionError) throw shapeAssertionError
    if (isUndefined(state)) state = {}

    let hasChanged = false

    const nextState = {}

    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i]
      const reducer = finalReducers[key]
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)

      if (typeof nextStateForKey === 'undefined') {
        const actionType = action && action.type
        throw new Error(
          `When called with action of type ${actionType} ` +
            `the reducer for key ${key} returned undefined.`
        )
      }

      nextState[key] = nextStateForKey
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey
    }

    hasChanged = hasChanged || finalReducerKeys.length !== keys(state).length
    return hasChanged ? nextState : state
  }
}

function assertReducerShape(reducers) {
  const keys = Reflect.ownKeys(reducers)

  for (const key of keys) {
    const reducer = reducers[key]
    const initialState = reducer(undefined, { type: INIT })

    if (typeof initialState === 'undefined') {
      throw new Error(
        `Reducer for key ${key} returned undefined. ` +
          'Set null for the return value if you do not ' +
          'want to set a value for this reducer.'
      )
    }
  }
}
