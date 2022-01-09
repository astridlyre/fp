const isProduction = process.env.NODE_ENV === 'production'
const prefix = 'Invariant failed'

export function invariant(
  condition: any,
  message?: string | (() => string),
): asserts condition {
  if (condition) {
    return
  }

  if (isProduction) {
    throw new Error(prefix)
  }

  const provided = typeof message === 'function' ? message() : message
  const value = provided ? `${prefix}: ${provided}` : prefix
  throw new Error(value)
}
