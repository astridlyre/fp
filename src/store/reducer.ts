/* eslint no-unused-vars: 0 */
import { isFunction } from '../functions/predicates'
import { multi, method, MultiMethod, IHandler } from '../multimethod/multimethod'
import { combineReducers } from './combineReducers'
import { IAction } from './createAction'

export interface Reducer {
  builder(): IReducerBuilder
  combineReducers: (...reducers: Reducer[]) => Reducer
}

interface IReducerBuilder {
  case(type: string, handler: (state: any, action: IAction) => any): IReducerBuilder
  init(initialState: any): IReducerBuilder
  build(): MultiMethod
}

/**
 * Reducer offers an easy way to create a reducer function
 */
export const Reducer = {
  builder() {
    const cases: IHandler[] = []

    return {
      case(type: any, handler: (state: any, action: IAction) => any) {
        if (isFunction(type)) {
          cases.push(method(type, handler))
        } else {
          cases.push(
            method((state: any, action: IAction) => action.type === type, handler)
          )
        }
        return this
      },
      init(initialState: any) {
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
