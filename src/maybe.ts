import { identity, isFunction, compose, composeAsync } from './combinators.js'

// Maybe
function throwError(err: Error): Error {
  throw err
}
function errorWith(str: string): TypeError {
  throw new TypeError(str)
}

export interface Maybe {
  isJust: boolean
  isNothing: boolean
  merge(): Maybe
  call(content: Maybe, ...args: any): Function
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

export class Try {
  constructor(fn: () => any, msg: string) {
    try {
      return new Success(fn())
    } catch (e: any) {
      return new Failure(msg || e.message)
    }
  }
  static of(fn: () => any, msg: string) {
    return new Try(fn, msg)
  }
}

export class TryAsync {
  constructor() {
    throw new Error('Must use static method of')
  }
  static async of(fn: <X>() => Promise<X>, msg: string) {
    try {
      const result = await fn()
      return new Success(result)
    } catch (e: any) {
      return new Failure(msg || e.message)
    }
  }
}

export class IO {
  unsafePerformIO: Function;
  [Symbol.toStringTag] = 'IO'

  constructor(fn: Function) {
    this.unsafePerformIO = fn
  }
  map(fn: (value: Function) => Function) {
    return new IO(compose(fn, this.unsafePerformIO))
  }
  flatMap(fn: (value: Function) => Function) {
    return this.map(fn).merge()
  }
  ap(f: any) {
    return this.flatMap(fn => f.map(fn))
  }
  merge() {
    return new IO(() => this.unsafePerformIO().unsafePerformIO())
  }
  toString() {
    return `IO#(${this.unsafePerformIO.name})`
  }
  toJSON() {
    return { type: 'IO', value: this.unsafePerformIO }
  }
  static of(x: any) {
    return new IO(() => x)
  }
}

export class IOAsync {
  unsafePerformIO: Function;
  [Symbol.toStringTag] = 'IOAsync'

  constructor(fn: Function) {
    this.unsafePerformIO = fn
  }
  async map(fn: (value: Function) => Function) {
    return new IO(composeAsync(fn, this.unsafePerformIO))
  }
  async flatMap(fn: (value: Function) => Function) {
    return await (this.map(fn) as any).merge()
  }
  async merge() {
    return new IOAsync(async () => await this.unsafePerformIO().unsafePerformIO())
  }
  toString() {
    return `IOAsync#(${this.unsafePerformIO.name})`
  }
  toJSON() {
    return { type: 'IOAsync', value: this.unsafePerformIO }
  }
  static of<X>(fn: Promise<X>) {
    return new IOAsync(async () => await fn)
  }
}

export class Pair {
  #left
  #right;
  [Symbol.toStringTag] = 'Pair'

  constructor(left: any, right: any) {
    this.#left = left
    this.#right = right
  }
  get left() {
    return this.#left
  }
  get right() {
    return this.#right
  }
  get() {
    return { left: this.#left, right: this.#right }
  }
  map(fn: (value: any) => any) {
    return new Pair(fn(this.#left), fn(this.#right))
  }
  flatMap(fn: (left: any, right: any) => [left: any, right: any]) {
    return new Pair(...fn(this.#left, this.#right))
  }
  toString() {
    return `Pair {${this.#left}, ${this.#right}}`
  }
  toJSON() {
    return { type: 'Pair', value: this.get() }
  }
  *[Symbol.iterator]() {
    yield this.#left
    yield this.#right
  }
  static of(left: any, right: any) {
    return new Pair(left, right)
  }
  static eq(pairA: Pair, pairB: Pair) {
    return pairA.left === pairB.left && pairA.right === pairB.right
  }
}

export class Triple {
  #left
  #middle
  #right;
  [Symbol.toStringTag] = 'Triple'

  constructor(left: any, middle: any, right: any) {
    this.#left = left
    this.#middle = middle
    this.#right = right
  }
  get left() {
    return this.#left
  }
  get middle() {
    return this.#middle
  }
  get right() {
    return this.#right
  }
  get() {
    return { left: this.#left, middle: this.#middle, right: this.#right }
  }
  map(fn: (value: any) => any) {
    return new Triple(fn(this.#left), fn(this.#middle), fn(this.#right))
  }
  flatMap(
    fn: (left: any, middle: any, right: any) => [left: any, middle: any, right: any]
  ) {
    return new Triple(...fn(this.#left, this.#middle, this.#right))
  }
  toString() {
    return `Triple {${this.#left}, ${this.#middle}, ${this.#right}}`
  }
  toJSON() {
    return { type: 'Triple', value: this.get() }
  }
  *[Symbol.iterator]() {
    yield this.#left
    yield this.#middle
    yield this.#right
  }
  static of(left: any, middle: any, right: any) {
    return new Triple(left, middle, right)
  }
  static eq(tripleA: Triple, tripleB: Triple) {
    return (
      tripleA.left === tripleB.left &&
      tripleA.middle === tripleB.middle &&
      tripleA.right === tripleB.right
    )
  }
}

export class Enum {
  #types = new Set();
  [Symbol.toStringTag] = 'Enum'

  constructor(types: string[]) {
    types.forEach(type => this.#types.add(type))
  }
  has(type: string) {
    return this.#types.has(type)
  }
  toString() {
    return `Enum [${[...this.#types].join(', ')}]`
  }
  toJSON() {
    return { type: 'Enum', value: [...this.#types] }
  }
  [Symbol.iterator]() {
    return this.#types[Symbol.iterator]
  }
  static of(...types: string[]) {
    return new Enum(types)
  }
}
