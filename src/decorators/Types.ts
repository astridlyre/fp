export interface IGenericFunction {
  (...args: any[]): any
}

export interface IBehaviour {
  [propKey: PropertyKey]: IGenericFunction
}
