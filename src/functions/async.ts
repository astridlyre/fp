/* eslint no-unused-vars: 0 */
type GenericFunction = (...args: any[]) => any

const composeAsync2 = (f: GenericFunction, g: GenericFunction) =>
  async function innerComposeAsync(this: any, ...args: any[]) {
    return await f.call(this, await g.apply(this, args))
  }

/**
 * ComposeAsync
 */
export const composeAsync = (...fns: GenericFunction[]) =>
  fns.reduce(composeAsync2)

/**
 * PipeAsync
 */
export const pipeAsync = (...fns: GenericFunction[]) =>
  fns.reduceRight(composeAsync2)

/**
 * MapAsync
 */
export const mapAsync = async <T>(f: <X>(value: T) => Promise<X>, a: T[]) =>
  await Promise.all(a.map(f))

/**
 * ReduceAsync
 */
export const reduceAsync = async <T>(
  f: <X>(value: T) => Promise<X>,
  init: any,
  a: T[],
) => await a.reduce((p, val) => p.then(() => f(val)), Promise.resolve(init))

/**
 * FilterAsync
 */
export const filterAsync = async <T>(f: <X>(value: T) => Promise<X>, a: T[]) =>
  await mapAsync(f, a).then((bools) =>
    a.filter((_: any, i: number) => Boolean(bools[i])),
  )
