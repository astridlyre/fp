import { isFunction } from '../functions/predicates.ts'

/**
 * Creates a middleware function that accepts an optional 'extra argument' to
 * be injected later.
 */
function createThunkMiddleware(extraArgument) {
  function middleware({ dispatch, getState }) {
    return next => action =>
      isFunction(action) ? action(dispatch, getState, extraArgument) : next(action)
  }
  middleware.withExtraArgument = createThunkMiddleware
  return middleware
}

export const thunk = createThunkMiddleware()
