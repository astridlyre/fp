/**
 * FunctionalMixin takes a behaviour object and a target, which is the object to mix behaviour into
 */
export function FunctionalMixin(behaviour: any, sharedBehaviour = {}) {
  const instanceKeys = Reflect.ownKeys(behaviour)
  const sharedKeys = Reflect.ownKeys(sharedBehaviour)
  const typeTag = Symbol('isA')

  function mixin(target: any) {
    for (const property of instanceKeys) {
      if (!target[property]) {
        Object.defineProperty(target, property, {
          value: behaviour[property],
          writable: true,
        })
      }
    }
    target[typeTag] = true
    return target
  }

  for (const property of sharedKeys) {
    Object.defineProperty(mixin, property, {
      value: (sharedBehaviour as any)[property],
      enumerable: Object.prototype.propertyIsEnumerable.call(sharedBehaviour, property),
    })
  }
  Object.defineProperty(mixin, Symbol.hasInstance, {
    value: (instance: any) => !!instance[typeTag],
  })
  return mixin
}
