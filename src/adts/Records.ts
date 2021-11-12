/* eslint no-unused-vars: 0 */

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
