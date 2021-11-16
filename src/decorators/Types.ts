/* eslint no-unused-vars: 0 */

export interface IGenericFunction {
  (...args: any[]): any
}

export interface IBehaviour {
  [propKey: PropertyKey]: IGenericFunction
}
