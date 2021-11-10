export const ClassMixin = (behaviour, sharedBehaviour = {}) => {
  const instanceKeys = Reflect.ownKeys(behaviour)
  const sharedKeys = Reflect.ownKeys(sharedBehaviour)
  const typeTag = Symbol('isA')

  function mixin(classs) {
    for (const property of instanceKeys) {
      if (!classs.prototype[property]) {
        Object.defineProperty(classs.prototype, property, {
          value: behaviour[property],
          writable: true,
        })
      }
    }
    classs.prototype[typeTag] = true
    return classs
  }

  for (const property of sharedKeys) {
    Object.defineProperty(mixin, property, {
      value: sharedBehaviour[property],
      enumerable: Object.prototype.propertyIsEnumerable.call(sharedBehaviour, property),
    })
  }
  Object.defineProperty(mixin, Symbol.hasInstance, {
    value: instance => !!instance[typeTag],
  })
  return mixin
}

// Class decorators
export function Define(behaviour) {
  const instanceKeys = Reflect.ownKeys(behaviour)

  return function define(clazz) {
    for (const prop of instanceKeys) {
      if (!clazz.prototype[prop]) {
        Object.defineProperty(clazz.prototype, prop, {
          value: behaviour[prop],
          writable: true,
        })
      } else throw new Error(`Illegal attempt to override ${prop}, which already exists.`)
    }
  }
}

export function Override(behaviour) {
  const instanceKeys = Reflect.ownKeys(behaviour)

  return function override(clazz) {
    for (const prop of instanceKeys) {
      if (clazz.prototype[prop]) {
        const overriddenMethodFunction = clazz.prototype[prop]
        Object.defineProperty(clazz.prototype, prop, {
          value(...args) {
            return behaviour[prop].call(
              this,
              overriddenMethodFunction.bind(this, ...args)
            )
          },
          writable: true,
        })
      } else throw new Error(`Attempt to override non-existant method${prop}`)
    }
    return clazz
  }
}

export function Prepend(behaviour) {
  const instanceKeys = Reflect.ownKeys(behaviour)

  return function prepend(clazz) {
    for (const prop of instanceKeys) {
      if (clazz.prototype[prop]) {
        const overriddenMethodFunction = clazz.prototype[prop]
        Object.defineProperty(clazz.prototype, prop, {
          value(...args) {
            const prependValue = behaviour[prop].apply(this, args)
            if (prependValue === undefined || !!prependValue) {
              return overriddenMethodFunction.apply(this, args)
            }
          },
          writable: true,
        })
      } else throw new Error(`Attempt to override non-existant method ${prop}`)
    }
    return clazz
  }
}

export function Append(behaviour) {
  const instanceKeys = Reflect.ownKeys(behaviour)

  return function append(clazz) {
    for (const prop of instanceKeys) {
      if (clazz.prototype[prop]) {
        const overriddenMethodFunction = clazz.prototype[prop]
        Object.defineProperty(clazz.prototype, prop, {
          value(...args) {
            const returnedValue = overriddenMethodFunction.apply(this, args)
            behaviour[prop].apply(this, args)
            return returnedValue
          },
          writable: true,
        })
      } else throw new Error(`Attempt to override non-existant method ${prop}`)
    }
    return clazz
  }
}

// Method Decorators
// Calls fns after method invocation
export const after = (...fns) =>
  function after(target, name, descriptor) {
    const method = descriptor.value

    descriptor.value = function withAfter(...args) {
      const value = method.apply(this, args)
      for (const fn of fns) {
        fn.apply(this, args)
      }
      return value
    }
  }

// Calls fns before method invocation
export const before = (...fns) =>
  function before(target, name, descriptor) {
    const method = descriptor.value

    descriptor.value = function withBefore(...args) {
      for (const fn of fns) {
        fn.apply(this, args)
      }
      return method.apply(this, args)
    }
  }

// Calls method if all fns return truthy
export const provided = (...fns) =>
  function provided(target, name, descriptor) {
    const method = descriptor.value

    descriptor.value = function withProvided(...args) {
      for (const fn of fns) if (!fn.apply(this, args)) return
      return method.apply(this, args)
    }
  }

// Does not call method if any fn returns truthy
export const unless = (...fns) =>
  function unless(target, name, descriptor) {
    const method = descriptor.value

    descriptor.value = function withUnless(...args) {
      for (const fn of fns) if (fn.apply(this, args)) return
      return method.apply(this, args)
    }
  }

// Wrap a method with a decorator (turns ordinary decorator into ES.later)
export const wrapWith = decorator =>
  function wrapWith(target, name, descriptor) {
    descriptor.value = decorator(descriptor.value)
  }

// Cross-cutting methods "provided method advice"
export const aroundAll =
  (behaviour, ...methodNames) =>
  clazz => {
    for (const methodName of methodNames) {
      Object.defineProperty(clazz.prototype, methodName, {
        value: behaviour(clazz.prototype[methodName]),
        writable: true,
      })
    }
    return clazz
  }

export const beforeAll =
  (behaviour, ...methodNames) =>
  clazz => {
    for (const methodName of methodNames) {
      const method = clazz.prototype[methodName]
      Object.defineProperty(clazz.prototype, methodName, {
        value(...args) {
          behaviour.apply(this, args)
          return method.apply(this, args)
        },
        writable: true,
      })
    }
    return clazz
  }

export const afterAll =
  (behaviour, ...methodNames) =>
  clazz => {
    for (const methodName of methodNames) {
      const method = clazz.prototype[methodName]
      Object.defineProperty(clazz.prototype, methodName, {
        value(...args) {
          const returnedValue = method.apply(this, args)
          behaviour.apply(this, args)
          return returnedValue
        },
        writable: true,
      })
    }
    return clazz
  }

export const SubclassFactory = behaviour => superclass =>
  ClassMixin(behaviour)(class extends superclass {})

export const FactoryFactory =
  c =>
  (...args) =>
    new c(...args)
