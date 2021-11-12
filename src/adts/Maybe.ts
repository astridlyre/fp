/* eslint no-unused-vars: 0 */
import { identity } from '../functions/utils'
import { isFunction } from '../functions/predicates'
import { errorWith, throwError } from './utils'

// Maybe
export interface Maybe {
  isJust: boolean
  isNothing: boolean
  merge(): any
  map(mapper: (value: any) => any): Maybe
}

export class Maybe {
  #value;
  [Symbol.toStringTag] = 'Maybe'

  constructor(v?: any) {
    this.#value = v
  }
  get() {
    return this.value ?? errorWith('Unable to get from a Maybe#Nothing')
  }
  getOrElse(defaultValue: any) {
    return this.value ?? defaultValue
  }
  getOrElseThrow(error: Error) {
    return this.value ?? throwError(error)
  }
  get value() {
    return this.#value
  }
  static of(v: any): Maybe {
    return v == null ? new Nothing(v) : new Just(v)
  }
  static fromEmpty(v: any): Maybe {
    return Maybe.of(v).map((x: string | []) => (x.length === 0 ? null : x))
  }
  [Symbol.toPrimitive](hint: string) {
    switch (hint) {
      case 'string':
        return this.toString()
      case 'number':
      default:
        return this.get()
    }
  }
  *[Symbol.iterator]() {
    yield this.isNothing ? new Nothing(this.#value) : undefined
    yield this.isJust ? new Just(this.#value) : undefined
  }
}

export class Just extends Maybe {
  get isJust() {
    return true
  }
  get isNothing() {
    return false
  }
  fold(fn = identity): any {
    return fn(this.value)
  }
  filter(fn = identity): Maybe {
    return fn(this.value) ? new Just(this.value) : new Nothing()
  }
  map(fn: (x: any) => any): Maybe {
    return Maybe.of(fn(this.value))
  }
  flatMap(fn: (x: any) => Maybe): Maybe {
    return Maybe.of(fn(this.value).merge())
  }
  ap(Ma: Maybe): Maybe {
    return Ma.isNothing
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
  get isJust() {
    return false
  }
  get isNothing() {
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
