/* eslint no-unused-vars: 0 */
import { compose } from '../functions/utils'
import { composeAsync } from '../functions/async'

type IOFunction = () => any

export class IO {
  unsafePerformIO: IOFunction;
  [Symbol.toStringTag] = 'IO'

  constructor(fn: IOFunction) {
    this.unsafePerformIO = fn
  }
  map(fn: (value: IOFunction) => IOFunction) {
    return new IO(compose(fn, this.unsafePerformIO) as IOFunction)
  }
  flatMap(fn: (value: IOFunction) => IOFunction) {
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

type IOAsyncFunction = <X>() => Promise<X>

export class IOAsync {
  unsafePerformIO: IOAsyncFunction;
  [Symbol.toStringTag] = 'IOAsync'

  constructor(fn: IOAsyncFunction) {
    this.unsafePerformIO = fn
  }
  async map(fn: (value: IOAsyncFunction) => IOAsyncFunction) {
    return new IO(composeAsync(fn, this.unsafePerformIO) as IOAsyncFunction)
  }
  async flatMap(fn: (value: IOAsyncFunction) => IOAsyncFunction) {
    return await (this.map(fn) as any as IOAsync).merge()
  }
  async merge() {
    return new IOAsync(
      async () => await (this.unsafePerformIO() as any).unsafePerformIO()
    )
  }
  toString() {
    return `IOAsync#(${this.unsafePerformIO.name})`
  }
  toJSON() {
    return { type: 'IOAsync', value: this.unsafePerformIO }
  }
  static of(fn: IOAsyncFunction) {
    return new IOAsync(fn)
  }
}
