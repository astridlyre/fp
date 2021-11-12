import { compose } from '../functions/utils'
import { composeAsync } from '../functions/async'

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
