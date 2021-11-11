const composeAsync2 = (f: Function, g: Function) =>
  async function innerComposeAsync(this: any, ...args: any[]) {
    return await f.call(this, await g.apply(this, args))
  }

/**
 * ComposeAsync
 */
export const composeAsync = (...fns: Function[]) => fns.reduce(composeAsync2)

/**
 * PipeAsync
 */
export const pipeAsync = (...fns: Function[]) => fns.reduceRight(composeAsync2)

/**
 * MapAsync
 */
export const mapAsync = async (f: <X>(value: any) => Promise<X>, a: any[]) =>
  await Promise.all(a.map(f))

/**
 * ReduceAsync
 */
export const reduceAsync = async (
  f: <X>(value: any) => Promise<X>,
  init: any,
  a: any[]
) => await a.reduce((p, val) => p.then(() => f(val)), Promise.resolve(init))

/**
 * FilterAsync
 */
export const filterAsync = async (f: <X>(value: any) => Promise<X>, a: any) =>
  await mapAsync(f, a).then(bools => a.filter((_: any, i: number) => Boolean(bools[i])))
