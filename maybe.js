// Maybe
function throwError(error) {
  throw error
}
function errorWith(str) {
  throw new TypeError(str)
}

export class Maybe {
  #value;
  [Symbol.toStringTag] = 'Maybe'

  constructor(v) {
    this.#value = v
  }
  get() {
    return this.value ?? errorWith('Unable to get from a Maybe#Nothing')
  }
  getOrElse(defaultValue) {
    return this.value ?? defaultValue
  }
  getOrElseThrow(error) {
    return this.value ?? throwError(error)
  }
  get value() {
    return this.#value
  }
  static of(v) {
    return v == null ? new Nothing(v) : new Just(v)
  }
  static fromEmpty(v) {
    return Maybe.of(v).map(x => (x.length === 0 ? null : x))
  }
}

export class Just extends Maybe {
  isJust() {
    return true
  }
  isNothing() {
    return false
  }
  fold(fn = identity) {
    return fn(this.value)
  }
  filter(fn = identity) {
    return fn(this.value) ? new Just(a) : new Nothing()
  }
  map(fn) {
    return Maybe.of(fn(this.value))
  }
  flatMap(fn) {
    return Maybe.of(fn(this.value).merge())
  }
  ap(Ma) {
    return Ma.isNothing()
      ? Ma
      : isFunction(this.value)
      ? Maybe.of(
          isFunction(Ma.merge())
            ? Ma.merge().call(Ma, this.value)
            : this.value(Ma.merge())
        )
      : Maybe.of(Ma.merge().call(Ma, this.value))
  }
  merge() {
    return this.value
  }
  toString() {
    return `Maybe#Just (${this.value})`
  }
  toJSON() {
    return { type: 'Maybe#Just', value: this.value }
  }
}

export class Nothing extends Maybe {
  isJust() {
    return false
  }
  isNothing() {
    return true
  }
  map() {
    return this
  }
  flatMap() {
    return this
  }
  ap() {
    return this
  }
  fold() {
    return this
  }
  toString() {
    return `Maybe#Nothing ()`
  }
  toJSON() {
    return { type: 'Maybe#Nothing', value: {} }
  }
}
