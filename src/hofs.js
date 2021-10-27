import { curry } from './combinators.js'

export class ValidationError {
  constructor(message, errors) {
    Error.call(this, message)
    Error.captureStackTrace(this)
    this.errors = errors
  }
  get messages() {
    return this.errors.map(e => e.message)
  }
}
/**
 * WithValidation
 * @param {function} validator - Function to validate data
 * @param {function} fn - Function to wrap with validation
 * @returns {function} Wrapped function fn with validation logic
 */
export const withValidation = curry((validator, fn) => data => {
  if (!validator(data)) {
    throw new ValidationError('Validation failed', validator.errors)
  }
  return fn(data)
})
