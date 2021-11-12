import { isFunction } from '../functions/predicates'
import { IMiddlewareAPI, Middleware } from './applyMiddleware'
import { IAction } from './createAction'

/**
 * Creates a middleware function that accepts an optional 'extra argument' to
 * be injected later.
 */
function createThunkMiddleware(extraArgument?: any) {
  function middleware({ dispatch, getState }: IMiddlewareAPI) {
    return (next: Middleware) => (action: IAction | any) =>
      isFunction(action) ? action(dispatch, getState, extraArgument) : next(action)
  }
  middleware.withExtraArgument = createThunkMiddleware
  return middleware
}

export const thunk = createThunkMiddleware()
