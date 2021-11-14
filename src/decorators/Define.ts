import { IBehaviour } from './Types'

export function Define(behaviour: IBehaviour) {
  const instanceKeys = Reflect.ownKeys(behaviour)

  return function define(clazz: any) {
    for (const prop of instanceKeys) {
      if (!clazz.prototype[prop]) {
        Object.defineProperty(clazz.prototype, prop, {
          value: behaviour[prop],
          writable: true,
        })
      } else {
        throw new Error(
          `Illegal attempt to override ${prop as string}, which already exists.`
        )
      }
    }
  }
}
