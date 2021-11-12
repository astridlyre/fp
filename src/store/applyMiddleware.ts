/* eslint no-unused-vars: 0, @typescript-eslint/no-unused-vars: 0 */
import { compose } from '../functions/utils'
import { IAction } from './createAction'

export interface IMiddlewareAPI {
  getState(): any
  dispatch(action: IAction, ...args: any[]): any
}

export type Middleware = (api: IMiddlewareAPI) => any

/**
 * Applies various middleware function to the store dispatch
 */
export function applyMiddleware(...middlewares: Middleware[]) {
  return (createStore: any) =>
    (reducer: (state: any, action: IAction) => any, initialState: any) => {
      const store = createStore(reducer, initialState)

      let dispatch = (...args: any[]) => {
        throw new Error('Cannot dispatch while constructing middleware')
      }

      const middlewareAPI: IMiddlewareAPI = {
        getState: store.getState,
        dispatch: (action, ...args: any[]) => dispatch(action, ...args),
      }

      const chain = middlewares.map(middleware => middleware(middlewareAPI))
      dispatch = compose(...chain)(store.dispatch)

      return {
        ...store,
        dispatch,
      }
    }
}
