export const ClassMixin = (behaviour: any, sharedBehaviour: any = {}) => {
  const instanceKeys = Reflect.ownKeys(behaviour)
  const sharedKeys = Reflect.ownKeys(sharedBehaviour)
  const typeTag = Symbol('isA')

  function mixin(classs: any) {
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
    value: (instance: any) => !!instance[typeTag],
  })
  return mixin
}
