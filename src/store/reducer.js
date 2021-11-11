import { isFunction } from '../combinators.js'
import { multi, method } from '../multimethod.ts'
import { combineReducers } from './combineReducers.js'

/**
 * Reducer offers an easy way to create a reducer function
 */
export const Reducer = {
  builder() {
    const cases = []

    return {
      case(type, handler) {
        if (isFunction(type)) {
          cases.push(method(type, handler))
        } else {
          cases.push(method((_, action) => action.type === type, handler))
        }
        return this
      },
      init(initialState) {
        cases.push(method((state = initialState) => state))
        return this
      },
      build() {
        return multi(...cases)
      },
    }
  },
  combineReducers,
}
