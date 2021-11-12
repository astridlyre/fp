export function Prepend(behaviour: any) {
  const instanceKeys = Reflect.ownKeys(behaviour)

  return function prepend(clazz: any) {
    for (const prop of instanceKeys) {
      if (clazz.prototype[prop]) {
        const overriddenMethodFunction = clazz.prototype[prop]
        Object.defineProperty(clazz.prototype, prop, {
          value(this: any, ...args: any[]) {
            const prependValue = behaviour[prop].apply(this, args)
            if (prependValue === undefined || !!prependValue) {
              return overriddenMethodFunction.apply(this, args)
            }
            return void 0
          },
          writable: true,
        })
      } else {
        throw new Error(`Attempt to override non-existant method ${prop as string}`)
      }
    }
    return clazz
  }
}
