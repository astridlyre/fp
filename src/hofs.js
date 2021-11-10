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
export const withValidation = curry(
  (validator, selector, onSucces, onFailure) =>
    function validate() {
      if (!validator(selector.apply(this, arguments))) {
        return onFailure(new ValidationError('Validation failed', validator.errors))
      }
      return onSucces.apply(this, arguments)
    }
)
