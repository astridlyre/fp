import { isFunction } from '../functions/predicates'
import { IAction, IActionCreator } from './createAction'
import { IMiddlewareAPI } from './applyMiddleware'

/**
 * Creates a middleware function that accepts an optional 'extra argument' to
 * be injected later.
 */
function createActionListenerMiddleware() {
  const listeners = new Map()

  /**
   * Add a listener
   * @param Action creator function or action.type
   */
  function addListener(actionCreator: IActionCreator, listener: Function) {
    const currentListeners = listeners.get(actionCreator) || []
    listeners.set(actionCreator, currentListeners.concat(listener))
  }

  /**
   * Remove a listener
   * @param Action creator function or action.type
   */
  function removeListener(actionCreator: IActionCreator, listener: Function) {
    const currentListeners = listeners.get(actionCreator) || []
    listeners.set(
      actionCreator,
      currentListeners.filter((currentListener: Function) => currentListener !== listener)
    )
  }

  return {
    middleware(middlewareAPI: IMiddlewareAPI) {
      return (next: Function) => (action: IAction) => {
        if (isFunction(action)) {
          const currentListeners: Function[] = listeners.get(action) || []

          for (const listener of currentListeners) {
            try {
              listener(action, middlewareAPI)
            } catch (err) {
              console.error(err)
            }
          }
        } else {
          const { type } = action
          const currentListeners: Function[] = listeners.get(type) || []

          for (const listener of currentListeners) {
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
