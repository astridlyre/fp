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
}

export class Failure extends Result {
  isSuccess() {
    return false
  }
  isFailure() {
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
  isSuccess() {
    return true
  }
  isFailure() {
    return false
  }
  map(fn) {
    return Result.of(fn(this.value))
  }
  flatMap(fn) {
    return Result.of(fn(this.value).merge())
  }
  ap(Rs) {
    return Rs.isFailure()
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
