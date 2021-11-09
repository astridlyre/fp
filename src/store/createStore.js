import { immutable, isFunction, isObject, isUndefined } from '../combinators.js'
import { $$observable } from '../rx.js'
import { isPlainObject } from './isPlainObject.js'

export const INIT = '@@ACTION/INIT'

/**
 * Create a stateful store for managing application state
 *
 * @param {function} Reducer function
 * @param {object} Initial state
 * @returns {object} State store
 */
export function createStore(reducer, initialState, enhancer) {
  if (isFunction(initialState) && isFunction(enhancer)) {
    throw new Error('Passing multiple enhancers is not supported')
  }

  if (isFunction(initialState) && isUndefined(enhancer)) {
    enhancer = initialState
    initialState = undefined
  }

  if (!isUndefined(enhancer)) {
    if (!isFunction(enhancer)) {
      throw new Error(`Expected enhancer to be a function, got: ${enhancer}`)
    }

    return enhancer(createStore)(reducer, initialState)
  }

  if (!isFunction(reducer)) {
    throw new Error(`Expected reducer to be a function, got: ${reducer}`)
  }

  let currentState = initialState ?? {}
  let isDispatching = false

  let currentListeners = []
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
  function subscribe(listener) {
    if (!isFunction(listener)) {
      throw new Error(`Expected listener to be a function, received: ${listener}`)
    }

    if (isDispatching) {
      throw new Error('Cannot call subscribe() while reducer is executing')
    }

    ensureCanMutateNextListeners()
    nextListeners.push(listener)

    let isSubscribed = true

    return function unsubscribe() {
      if (!isSubscribed) return

      if (isDispatching) {
        throw new Error('Cannot call unsubscribe() while reducer is executing')
      }

      isSubscribed = false
      ensureCanMutateNextListeners()
      const index = nextListeners.indexOf(listener)
      nextListeners.splice(index, 1)
      currentListeners = null
    }
  }

  /**
   * Dispatch an action to update the state
   */
  function dispatch(action) {
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
      currentState = reducer(currentState, action)
    } finally {
      isDispatching = false
    }

    const listeners = (currentListeners = nextListeners)
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }

    return action
  }

  /**
   * Creates a simple observable from state updates, compatible with the
   * Observable proposal
   */
  function observable() {
    const outerSubscribe = subscribe
    return immutable({
      subscribe(observer) {
        if (!isObject(observer)) {
          throw new Error(`Expected observer to be an object, received: ${observer}`)
        }

        observeState()

        const unsubscribe = outerSubscribe(function observeState() {
          if (observer.next) observer.next(getState())
        })

        return { unsubscribe }
      },
      [$$observable]() {
        return this
      },
    })
  }

  /**
   * Initialize the store to allow populating initalState
   */
  dispatch({ type: INIT })

  return immutable({
    dispatch,
    subscribe,
    getState,
    [$$observable]: observable,
  })
}
