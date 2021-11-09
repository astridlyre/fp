import { deepEqual, isFunction, last, isClass } from './combinators.js'

class NoHandlerError {
  constructor(message) {
    Error.call(this, message)
    Error.captureStackTrace(this)
    this.args = args
  }
}

// Helper functions
const handlersKey = Symbol('handlers key')
const dispatchKey = Symbol('dispatch key')
const DEFAULT_DISPATCH = 'MULTI:DEFAULT_DISPATCH'

const defaultDispatch = function defaultDispatch() {
  return arguments.length === 1 ? arguments[0] : Array.from(arguments)
}

const extractDispatchAndMethods = methods =>
  isFunction(methods[0]) ? [methods[0], methods.slice(1)] : [defaultDispatch, methods]

const initialHandler = handlers =>
  last(handlers)[0] === DEFAULT_DISPATCH ? last(handlers)[1] : null

/**
 * Method, create a method inside a call to multi()
 * @param {function} {any} key / function key
 * @param {function} {any} handler / value to return)
 * @returns {array} [key, handler]
 */
export function method(key, handler) {
  if (handler === undefined) {
    return [DEFAULT_DISPATCH, key]
  }
  return [key, handler]
}

/**
 * multi, create a multimethod function
 * @param {function} dispatch - Optional custom dispatch function
 * @param {function} initialMethods - Method functions (args, handler)
 * @returns {function} dispatch function
 */
export function multi(...initialMethods) {
  // multiMethod function takes variable arguments and returns the result of
  // calling any handler that can handle the arguments
  function multiMethod() {
    let handler = initialHandler(multiMethod[handlersKey])
    for (let i = 0; i < multiMethod[handlersKey].length; i++) {
      const key = multiMethod[handlersKey][i][0]
      const method = multiMethod[handlersKey][i][1]

      if (
        (isFunction(key) && arguments[0]?.constructor === key) ||
        (isFunction(key) && !isClass(key) && key.apply(null, arguments)) ||
        deepEqual(multiMethod[dispatchKey].apply(null, arguments), key)
      ) {
        handler = method
        break
      }
    }

    if (handler) {
      return isFunction(handler) ? handler.apply(null, arguments) : handler
    }

    throw new NoHandlerError(`No handlers for args (${JSON.stringify(arguments)})`)
  }

  const [dispatch, methods] = extractDispatchAndMethods(initialMethods)
  multiMethod[dispatchKey] = dispatch
  multiMethod[handlersKey] = methods
  for (const pair of methods) {
    if (pair[0] === DEFAULT_DISPATCH) {
      multiMethod[handlersKey].push(pair)
    } else {
      multiMethod[handlersKey] = [pair].concat(multiMethod[handlersKey])
    }
  }

  multiMethod.map = function map(fn) {
    return multi(
      multiMethod[dispatchKey],
      ...multiMethod[handlersKey].map(([key, handler]) => [
        key,
        function mappedHandler() {
          return fn(handler.apply(null, arguments))
        },
      ])
    )
  }

  return multiMethod
}

multi.extend = function extend(multiMethod, ...methods) {
  return multi(multiMethod[dispatchKey], ...methods.concat(multiMethod[handlersKey]))
}
