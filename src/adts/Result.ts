/* eslint no-unused-vars: 0 */

import { isFunction } from '../functions/predicates'
import { errorWith } from './utils'

export interface Result {
  map(mapper: (value: any) => any): Result
  get(): any
  isFailure: boolean
  isSuccess: boolean
  merge(): any
}

export class Result {
  #value
  constructor(v?: any) {
    this.#value = v
  }
  get value() {
    return this.#value
  }
  static of(v: any, error = 'Null argument provided'): Result {
    return v == null ? new Failure(error) : new Success(v)
  }
  static fromEmpty(a: any) {
    return Result.of(a).map((x: string | []) => (x.length === 0 ? null : x))
  }
  static fromPromise<X>(p: Promise<X>) {
    return p.then(result => new Success(result)).catch(err => new Failure(err.message))
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
  *[Symbol.iterator](): Generator {
    yield this.isFailure ? new Failure(this.#value) : undefined
    yield this.isSuccess ? new Success(this.#value) : undefined
  }
}

export class Failure extends Result {
  get isSuccess() {
    return false
  }
  get isFailure() {
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
  get() {
    errorWith('Unable to get from a Result#Failure')
  }
  merge() {
    errorWith('Unable to merge from a Result#Failure')
  }
  getOrElse(defaultValue: any) {
    return defaultValue
  }
  getOrElseThrow() {
    throw new Error(this.value)
  }
  toString() {
    return `Result#Failure (${this.value})`
  }
  toJSON() {
    return { type: 'Result#Failure', value: this.value }
  }
}

export class Success extends Result {
  get isSuccess() {
    return true
  }
  get isFailure() {
    return false
  }
  map(fn: (value: any) => any): Result {
    return Result.of(fn(this.value))
  }
  flatMap(fn: (value: any) => Result): Result {
    return Result.of(fn(this.value).merge())
  }
  ap(Rs: Result): Result {
    return Rs.isFailure
      ? Rs
      : isFunction(this.value)
      ? Result.of(
          isFunction(Rs.merge())
            ? Rs.merge().call(Rs, this.value)
            : this.value(Rs.merge())
        )
      : Result.of(Rs.merge().call(Rs, this.value))
  }
  get() {
    return this.value
  }
  getOrElse() {
    return this.value
  }
  getOrElseThrow() {
    return this.value
  }
  merge() {
    return this.value
  }
  toString() {
    return `Result#Success (${this.value})`
  }
  toJSON() {
    return { type: 'Result#Success', value: this.value }
  }
}
