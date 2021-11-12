export function Append(behaviour: any) {
  const instanceKeys = Reflect.ownKeys(behaviour)

  return function append(clazz: any) {
    for (const prop of instanceKeys) {
      if (clazz.prototype[prop]) {
        const overriddenMethodFunction = clazz.prototype[prop]
        Object.defineProperty(clazz.prototype, prop, {
          value(this: any, ...args: any[]) {
            const returnedValue = overriddenMethodFunction.apply(this, args)
            behaviour[prop].apply(this, args)
            return returnedValue
          },
          writable: true,
        })
      } else throw new Error(`Attempt to override non-existant method ${prop as string}`)
    }
    return clazz
  }
}
