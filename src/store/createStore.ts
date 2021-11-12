/* eslint no-param-reassign: 0, no-unused-vars: 0 */
import { isFunction, isUndefined } from '../functions/predicates'
import { identity, stringify } from '../functions/utils'
import { diff } from '../functions/objects'
import { $$observable, Observable, Observer } from '../observable/Observable'
import { isPlainObject } from './isPlainObject'
import { IAction } from './createAction'
import { IReducerFunction } from './reducer'

export const INIT = '@@ACTION/INIT'

interface IListener {
  selector: (state: any) => any
  listener: (state?: any) => void
}

/**
 * Create a stateful store for managing application state
 */
export function createStore(
  reducer: IReducerFunction,
  initialState?: any,
  enhancer?: (createStore: any) => (reducer: IReducerFunction, initialState: any) => any
) {
  if (isFunction(initialState) && isFunction(enhancer)) {
    throw new Error('Passing multiple enhancers is not supported')
  }

  if (isFunction(initialState) && isUndefined(enhancer)) {
    enhancer = initialState
    initialState = undefined
  }

  if (!isUndefined(enhancer)) {
    if (!isFunction(enhancer)) {
      throw new Error('Expected enhancer to be a function, got: ' + stringify(enhancer))
    }

    return enhancer && enhancer(createStore)(reducer, initialState)
  }

  if (!isFunction(reducer)) {
    throw new Error('Expected reducer to be a function, got: ' + stringify(reducer))
  }

  let previousState = initialState
  let currentState = initialState
  let isDispatching = false
  let currentListeners: IListener[] | null = []
  let nextListeners = currentListeners

  /**
   * Ensure that listeners that might be added during dispatch do not interfere
   * with the current broadcast
   */
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice()
    }
  }

  /**
   * Get the current state of the store
   */
  function getState() {
    if (isDispatching) {
      throw new Error('Unable to get state while reducer is executing')
    }

    return currentState
  }

  /**
   * Subscribe a listener to store updates
   */
  function subscribe(selector: (state: any) => any, listener: (state: any) => void) {
    if (!isFunction(selector)) {
      throw new Error('Expected selector to be a function, got: ' + stringify(selector))
    }

    if (!isFunction(listener)) {
      throw new Error('Expected listener to be a function, got: ' + stringify(listener))
    }

    if (isDispatching) {
      throw new Error('Cannot call subscribe() while reducer is executing')
    }

    ensureCanMutateNextListeners()
    nextListeners.push({ selector, listener })

    let isSubscribed = true

    return function unsubscribe() {
      if (!isSubscribed) return

      if (isDispatching) {
        throw new Error('Cannot call unsubscribe() while reducer is executing')
      }

      isSubscribed = false

      ensureCanMutateNextListeners()
      const index = nextListeners.findIndex(obj => obj.listener === listener)
      nextListeners.splice(index, 1)
      currentListeners = null
    }
  }

  /**
   * Dispatch an action to update the state
   */
  function dispatch(action: IAction) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects')
    }

    if (!action.type) {
      throw new Error('Actions must have a type property')
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions')
    }

    try {
      isDispatching = true
      previousState = currentState
      currentState = reducer(currentState, action)
    } finally {
      isDispatching = false
    }

    const changed = diff(previousState, currentState)
    const listeners = (currentListeners = nextListeners)

    for (let i = 0; i < listeners.length; i++) {
      const { selector, listener } = listeners[i]
      try {
        if (selector(changed)) {
          listener()
        }
      } catch {
        continue
      }
    }

    return action
  }

  /**
   * Creates a simple observable from state updates, compatible with the
   * Observable proposal
   */
  function observe(selector: (state: any) => any = identity) {
    return new Observable((observer: Observer) => {
      return subscribe(selector, () => observer.next(selector(getState())))
    })
  }

  /**
   * Initialize the store to allow populating initalState
   */
  dispatch({ type: INIT } as IAction)

  return {
    dispatch,
    subscribe,
    getState,
    [$$observable]: observe,
    observe,
  }
}
