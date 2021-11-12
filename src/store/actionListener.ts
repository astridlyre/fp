/* eslint no-unused-vars: 0 */
import { isFunction } from '../functions/predicates'
import { IAction, IActionCreator } from './createAction'
import { IMiddlewareAPI } from './applyMiddleware'

type IListener = (action: IAction, middlewareAPI: IMiddlewareAPI) => any

/**
 * Creates a middleware function that accepts an optional 'extra argument' to
 * be injected later.
 */
function createActionListenerMiddleware() {
  const listeners: Map<IActionCreator | string | IAction, IListener[]> = new Map()

  /**
   * Add a listener
   * @param Action creator function or action.type
   */
  function addListener(actionCreator: IActionCreator, listener: IListener) {
    const currentListeners = listeners.get(actionCreator) || []
    listeners.set(actionCreator, currentListeners.concat(listener))
  }

  /**
   * Remove a listener
   * @param Action creator function or action.type
   */
  function removeListener(actionCreator: IActionCreator, listener: IListener) {
    const currentListeners = listeners.get(actionCreator) || []
    listeners.set(
      actionCreator,
      currentListeners.filter((currentListener: IListener) => currentListener !== listener)
    )
  }

  return {
    middleware(middlewareAPI: IMiddlewareAPI) {
      return (next: (action: IAction) => any) => (action: IAction) => {
        if (isFunction(action)) {
          const currentListeners: IListener[] = listeners.get(action) || []

          for (const listener of currentListeners) {
            try {
              listener(action, middlewareAPI)
            } catch (err) {
              console.error(err)
            }
          }
        } else {
          const { type } = action
          const currentListeners: IListener[] = listeners.get(type) || []

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
