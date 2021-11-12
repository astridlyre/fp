// Method Decorators
// Calls fns after method invocation
export const after = (...fns: Function[]) =>
  function after(target: any, name: string, descriptor: any) {
    const method = descriptor.value

    descriptor.value = function withAfter(this: any, ...args: any[]) {
      const value = method.apply(this, args)
      for (const fn of fns) {
        fn.apply(this, args)
      }
      return value
    }
  }

// Calls fns before method invocation
export const before = (...fns: Function[]) =>
  function before(target: any, name: string, descriptor: any) {
    const method = descriptor.value

    descriptor.value = function withBefore(this: any, ...args: any[]) {
      for (const fn of fns) {
        fn.apply(this, args)
      }
      return method.apply(this, args)
    }
  }

// Calls method if all fns return truthy
export const provided = (...fns: Function[]) =>
  function provided(target: any, name: string, descriptor: any) {
    const method = descriptor.value

    descriptor.value = function withProvided(this: any, ...args: any[]) {
      for (const fn of fns) if (!fn.apply(this, arguments)) return
      return method.apply(this, arguments)
    }
  }

// Does not call method if any fn returns truthy
export const unless = (...fns: Function[]) =>
  function unless(target: any, name: string, descriptor: any) {
    const method = descriptor.value

    descriptor.value = function withUnless(this: any, ...args: any[]) {
      for (const fn of fns) if (fn.apply(this, args)) return
      return method.apply(this, args)
    }
  }

// Wrap a method with a decorator (turns ordinary decorator into ES.later)
export const wrapWith = (decorator: Function) =>
  function wrapWith(target: any, name: string, descriptor: any) {
    descriptor.value = decorator(descriptor.value)
  }

// Cross-cutting methods "provided method advice"
export const aroundAll =
  (behaviour: any, ...methodNames: string[]) =>
  (clazz: any) => {
    for (const methodName of methodNames) {
      Object.defineProperty(clazz.prototype, methodName, {
        value: behaviour(clazz.prototype[methodName]),
        writable: true,
      })
    }
    return clazz
  }

export const beforeAll =
  (behaviour: any, ...methodNames: string[]) =>
  (clazz: any) => {
    for (const methodName of methodNames) {
      const method = clazz.prototype[methodName]
      Object.defineProperty(clazz.prototype, methodName, {
        value(/*...args*/) {
          behaviour.apply(this, arguments)
          return method.apply(this, arguments)
        },
        writable: true,
      })
    }
    return clazz
  }

export const afterAll =
  (behaviour: any, ...methodNames: string[]) =>
  (clazz: any) => {
    for (const methodName of methodNames) {
      const method = clazz.prototype[methodName]
      Object.defineProperty(clazz.prototype, methodName, {
        value(/*...args*/) {
          const returnedValue = method.apply(this, arguments)
          behaviour.apply(this, arguments)
          return returnedValue
        },
        writable: true,
      })
    }
    return clazz
  }
