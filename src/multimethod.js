import { deepEqual, isFunction, last, isClass } from './combinators.js'

class NoHandlerError {
  constructor(message) {
    Error.call(this, message)
    Error.captureStackTrace(this)
  }
}

// Helper functions
const handlersKey = Symbol('handlers key')
const dispatchKey = Symbol('dispatch key')
const isMethodObject = Symbol('is method object')
const DEFAULT_METHOD = 'MULTI:DEFAULT_METHOD'

const defaultDispatch = function defaultDispatch() {
  return arguments.length === 1 ? arguments[0] : Array.from(arguments)
}

const initialHandler = handlers =>
  last(handlers).key === DEFAULT_METHOD ? last(handlers).handler : null

/**
 * Method, create a method inside a call to multi()
 * @param {function} {any} key / function key
 * @param {function} {any} handler / value to return)
 * @returns {array} [key, handler]
 */
export function method(key, handler) {
  if (handler === undefined) {
    return { key: DEFAULT_METHOD, handler: key, [isMethodObject]: true }
  }
  return { key, handler, [isMethodObject]: true }
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
    let method = initialHandler(multiMethod[handlersKey])

    for (let i = 0; i < multiMethod[handlersKey].length; i++) {
      const { key, handler } = multiMethod[handlersKey][i]

      if (
        (isFunction(key) && arguments[0]?.constructor === key) ||
        (isFunction(key) && !isClass(key) && key.apply(null, arguments)) ||
        deepEqual(multiMethod[dispatchKey].apply(null, arguments), key)
      ) {
        method = handler
        break
      }
    }

    if (method) {
      return isFunction(method) ? method.apply(null, arguments) : method
    }

    throw new NoHandlerError(`No handlers for args (${JSON.stringify(arguments)})`)
  }

  const dispatchers = []
  const methods = []
  let defaultMethod = null

  for (let i = 0; i < initialMethods.length; i++) {
    const method = initialMethods[i]

    if (isFunction(method)) {
      dispatchers.push(method)
    } else if (method.key === DEFAULT_METHOD) {
      defaultMethod = method
    } else {
      methods.push(method)
    }
  }

  const dispatch = last(dispatchers) ?? defaultDispatch

  multiMethod[dispatchKey] = dispatch
  multiMethod[handlersKey] = defaultMethod ? methods.concat(defaultMethod) : methods

  multiMethod.map = function map(fn) {
    return multi(
      multiMethod[dispatchKey],
      ...multiMethod[handlersKey].map(({ key, handler }) => ({
        key,
        handler: function mappedHandler() {
          return fn(handler.apply(null, arguments))
        },
      }))
    )
  }

  return multiMethod
}

multi.extend = function extend(multiMethod, ...methods) {
  return multi(multiMethod[dispatchKey], ...methods.concat(multiMethod[handlersKey]))
}
