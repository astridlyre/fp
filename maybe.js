import { isFunction, compose, composeAsync } from './index.js'
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
  get isJust() {
    return true
  }
  get isNothing() {
    return false
  }
  fold(fn = x => x) {
    return fn(this.value)
  }
  filter(fn = x => x) {
    return fn(this.value) ? new Just(a) : new Nothing()
  }
  map(fn) {
    return Maybe.of(fn(this.value))
  }
  flatMap(fn) {
    return Maybe.of(fn(this.value).merge())
  }
  ap(Ma) {
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

export class Result {
  #value
  constructor(v) {
    this.#value = v
  }
  get value() {
    return this.#value
  }
  static of(v, error = 'Null argument provided') {
    return v == null ? new Failure(error) : new Success(v)
  }
  static fromEmpty(a) {
    return Result.of(a).map(x => (x.length === 0 ? null : x))
  }

  static fromPromise(p) {
    return p.then(result => new Success(result)).catch(err => new Failure(err.message))
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
  getOrElse(defaultValue) {
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
  map(fn) {
    return Result.of(fn(this.value))
  }
  flatMap(fn) {
    return Result.of(fn(this.value).merge())
  }
  ap(Rs) {
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
  constructor(fn, msg) {
    try {
      return new Success(fn())
    } catch (e) {
      return new Failure(msg || e.message)
    }
  }
  static of(fn, msg) {
    return new Try(fn, msg)
  }
}

export class TryAsync {
  constructor() {
    throw new Error('Must use static method of')
  }
  static async of(fn, msg) {
    try {
      const result = await fn()
      return new Success(result)
    } catch (e) {
      return new Failure(msg || e.message)
    }
  }
}

export class IO {
  [Symbol.toStringTag] = 'IO'

  constructor(fn) {
    this.unsafePerformIO = fn
  }
  map(fn) {
    return new IO(compose(fn, this.unsafePerformIO))
  }
  flatMap(fn) {
    return this.map(fn).merge()
  }
  ap(f) {
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
  static of(x) {
    return new IO(() => x)
  }
}

export class IOAsync {
  [Symbol.toStringTag] = 'IOAsync'

  constructor(fn) {
    this.unsafePerformIO = fn
  }
  async map(fn) {
    return new IO(composeAsync(fn, this.unsafePerformIO))
  }
  async flatMap(fn) {
    return await this.map(fn).merge()
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
  static of(fn) {
    return new IOAsync(async () => await fn)
  }
}

export class Pair {
  #left
  #right;
  [Symbol.toStringTag] = 'Pair'

  constructor(left, right) {
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
  map(fn) {
    return new Pair(fn(this.#left), fn(this.#right))
  }
  flatMap(fn) {
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
  static of(left, right) {
    return new Pair(left, right)
  }
  static eq(pairA, pairB) {
    return pairA.left === pairB.left && pairA.right === pairB.right
  }
}

export class Triple {
  #left
  #middle
  #right;
  [Symbol.toStringTag] = 'Triple'

  constructor(left, middle, right) {
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
  map(fn) {
    return new Triple(fn(this.#left), fn(this.#middle), fn(this.#right))
  }
  flatMap(fn) {
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
  static of(left, middle, right) {
    return new Triple(left, middle, right)
  }
  static eq(tripleA, tripleB) {
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

  constructor(types) {
    types.forEach(type => this.#types.add(type))
  }
  has(type) {
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
  static of(...types) {
    return new Enum(types)
  }
}
