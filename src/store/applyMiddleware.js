import { compose } from '../combinators.js'

/**
 * Applies various middleware function to the store dispatch
 *
 * @param {function} Middleware functions
 * @returns {function} A store enhancer that applies middleware
 */
export function applyMiddleware(...middlewares) {
  return createStore => (reducer, initialState) => {
    const store = createStore(reducer, initialState)

    let dispatch = () => {
      throw new Error('Cannot dispatch while constructing middleware')
    }

    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args),
    }

    const chain = middlewares.map(middleware => middleware(middlewareAPI))
    dispatch = compose(...chain)(store.dispatch)

    return {
      ...store,
      dispatch,
    }
  }
}
