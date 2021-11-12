/* eslint no-unused-vars: 0 */

import { Success, Failure } from './Result'

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
