import { Maybe } from './maybe.js'
import { curry } from './combinators.js'

// Lenses
class Constant {
  #value
  constructor(v) {
    this.#value = Maybe.of(v)
    this.map = () => this
  }
  get value() {
    return this.#value
  }
}

class Variable {
  #value
  constructor(v) {
    this.#value = Maybe.of(v)
    this.map = fn => new Variable(fn(v))
  }
  get value() {
    return this.#value
  }
}
export const lens = (getter, setter) => fn => obj =>
  fn(getter(obj)).map(value => setter(value, obj))

export const view = curry((lensAttr, obj) => lensAttr(x => new Constant(x))(obj).value)

export const set = curry(
  (lensAttr, newVal, obj) => lensAttr(() => new Variable(newVal))(obj).value
)

export const over = curry(
  (lensAttr, mapfn, obj) => lensAttr(x => new Variable(mapfn(x)))(obj).value
)

export const lensProp = p => lens(prop(p), setProp(p))
