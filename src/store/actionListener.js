import { isFunction } from '../functions/predicates.ts'

/**
 * Creates a middleware function that accepts an optional 'extra argument' to
 * be injected later.
 *
 * @returns {object} Action listener, with methods:
 *
 *     @method middleware
 *     @method addListener(action, listener) Add a listener for an
 *     actionCreator or action.type
 *     @method removeListener(action, listener) Remove a listener for
 *     an actionCreator or action.type
 */
function createActionListenerMiddleware() {
  const listeners = new Map()

  /**
   * Add a listener
   * @param Action creator function or action.type
   */
  function addListener(actionCreator, listener) {
    const currentListeners = listeners.get(actionCreator) || []
    listeners.set(actionCreator, currentListeners.concat(listener))
  }

  /**
   * Remove a listener
   * @param Action creator function or action.type
   */
  function removeListener(actionCreator, listener) {
    const currentListeners = listeners.get(actionCreator) || []
    listeners.set(
      actionCreator,
      currentListeners.filter(currentListener => currentListener !== listener)
    )
  }

  return {
    middleware(middlewareAPI) {
      return next => action => {
        if (isFunction(action)) {
          const listeners = listeners.get(action) || []

          for (const listener of listeners) {
            try {
              listener(action, middlewareAPI)
            } catch (err) {
              console.error(err)
            }
          }
        } else {
          const { type } = action
          const listeners = listeners.get(type) || []

          for (const listener of listeners) {
            try {
              listener(action, middlewareAPI)
            } catch (err) {
              console.error(err)
            }
          }
        }

        return next(action)
      }
    },
    addListener,
    removeListener,
  }
}

export const actionListener = createActionListenerMiddleware()
