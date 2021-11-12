import { isFunction } from '../functions/predicates'
import { IMiddlewareAPI } from './applyMiddleware'

/**
 * Creates a middleware function that accepts an optional 'extra argument' to
 * be injected later.
 */
function createThunkMiddleware(extraArgument?: any) {
  function middleware(api: IMiddlewareAPI) {
    const { dispatch, getState } = api
    return (next: Function) => (action: any) =>
      isFunction(action) ? action(dispatch, getState, extraArgument) : next(action)
  }
  middleware.withExtraArgument = createThunkMiddleware
  return middleware
}

export const thunk = createThunkMiddleware()
