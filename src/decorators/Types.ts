/* eslint no-unused-vars: 0 */

export interface IGenericFunction {
  (...args: unknown[]): unknown
}

export interface IBehaviour {
  [propKey: PropertyKey]: IGenericFunction
}
