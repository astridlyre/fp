import { IBehaviour } from './Types'

export function Override(behaviour: IBehaviour) {
  const instanceKeys = Reflect.ownKeys(behaviour)

  return function override(clazz: any) {
    for (const prop of instanceKeys) {
      if (clazz.prototype[prop]) {
        const overriddenMethodFunction = clazz.prototype[prop]

        Object.defineProperty(clazz.prototype, prop, {
          value(this: any, ...args: any[]) {
            return behaviour[prop].call(
              this,
              overriddenMethodFunction.bind(this, ...args),
            )
          },
          writable: true,
        })
      } else {
        throw new Error(
          `Attempt to override non-existant method${prop as string}`,
        )
      }
    }
    return clazz
  }
}
