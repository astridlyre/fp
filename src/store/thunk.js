import { isFunction } from '../combinators.js'

/**
 * Creates a middleware function that accepts an optional 'extra argument' to
 * be injected later.
 */
function createThunkMiddleware(extraArgument) {
  const middleware =
    ({ dispatch, getState }) =>
    next =>
    action => {
      //If a function was passed to store.dispatch, call it and return the
      // result
      if (isFunction(action)) {
        return action(dispatch, getState, extraArgument)
      }
      //Otherwise, pass the action down the middleware chain
      return next(action)
    }
  return middleware
}

export const thunk = createThunkMiddleware()
thunk.withExtraArgument = createThunkMiddleware
