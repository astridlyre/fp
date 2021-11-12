/* eslint prefer-rest-params: 0, prefer-spread: 0, no-unused-vars: 0 */
import { deepEqual } from '../functions/utils'
import { isFunction, isClass } from '../functions/predicates'
import { last } from '../functions/arrays'

// Helper functions
const handlersKey = Symbol('handlers key')
const dispatchKey = Symbol('dispatch key')
const isMethodObject = Symbol('is method object')
const DEFAULT_METHOD = 'MULTI:DEFAULT_METHOD'

class NoHandlerError extends Error {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, NoHandlerError.prototype)
  }
}

export interface IHandler {
  key: any
  handler: ((...args: any) => any) | any
  [isMethodObject]: boolean
}

export interface MultiMethod extends Function {
  [dispatchKey]: dispatchFunction
  [handlersKey]: IHandler[]
  map: (...args: any) => any
}

type dispatchFunction = (...args: any[]) => any

const defaultDispatch: dispatchFunction = function defaultDispatch() {
  return arguments.length === 1 ? arguments[0] : Array.from(arguments)
}

const initialHandler = (handlers: IHandler[]) =>
  last(handlers).key === DEFAULT_METHOD ? last(handlers).handler : null

/**
 * Method, create a method inside a call to multi()
 * Param key / function key
 * Param handler / value to return)
 * Returns Handler
 */
export function method(handler: (...args: any) => any): IHandler
export function method(key: any, handler: (...args: any) => any): IHandler
export function method(key: any, handler?: (...args: any) => any): IHandler {
  if (handler === undefined) {
    return { key: DEFAULT_METHOD, handler: key, [isMethodObject]: true } as IHandler
  }
  return { key, handler, [isMethodObject]: true } as IHandler
}

/**
 * multi, create a multimethod function
 * Takes a dispatch - Optional custom dispatch function
 * And initialMethods - Method functions (args, handler)
 * Returns dispatch function
 */
export function multi(...initialMethods: IHandler[]): MultiMethod {
  // multiMethod function takes variable arguments and returns the result of
  // calling any handler that can handle the arguments
  function multiMethod() {
    let method: (...args: any[]) => any = initialHandler(multiMethod[handlersKey])

    for (let i = 0; i < multiMethod[handlersKey].length; i++) {
      const { key, handler } = multiMethod[handlersKey][i]

      if (
        (isFunction(key) && arguments[0]?.constructor === key) ||
        (isFunction(key) && !isClass(key) && key.apply(null, arguments)) ||
        deepEqual(multiMethod[dispatchKey].apply(null, arguments as any), key)
      ) {
        method = handler
        break
      }
    }

    if (method) {
      return typeof method === 'function' ? method.apply(null, arguments as any) : method
    }

    throw new NoHandlerError(`No handlers for args (${JSON.stringify(arguments)})`)
  }

  const dispatchers = []
  const methods = []

  let defaultMethod = null

  for (let i = 0; i < initialMethods.length; i++) {
    const method = initialMethods[i]

    if (typeof method === 'function') {
      dispatchers.push(method as dispatchFunction)
    } else if (method.key === DEFAULT_METHOD) {
      defaultMethod = method
    } else {
      methods.push(method)
    }
  }

  const dispatch: dispatchFunction = last(dispatchers) ?? defaultDispatch

  multiMethod[dispatchKey] = dispatch
  multiMethod[handlersKey] = defaultMethod ? methods.concat(defaultMethod) : methods

  multiMethod.map = function map(fn: (...args: any) => any) {
    return multi(
      multiMethod[dispatchKey] as any,
      ...multiMethod[handlersKey].map(
        ({ key, handler }) =>
          ({
            key,
            handler: function mappedHandler() {
              return fn(handler.apply(null, arguments as any))
            },
          } as IHandler)
      )
    )
  }

  return multiMethod as MultiMethod
}

multi.extend = function extend(multiMethod: MultiMethod, ...methods: any[]) {
  return multi(
    multiMethod[dispatchKey] as any,
    ...methods.concat(multiMethod[handlersKey])
  )
}
