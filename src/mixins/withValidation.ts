import { curry } from '../functions/utils'

interface IValidationError {
  message: string
}

export interface ValidationError extends Error {
  errors: IValidationError[]
}

export class ValidationError extends Error {
  constructor(message: string, errors: IValidationError[]) {
    super(message)
    this.errors = errors
  }
  get messages() {
    return this.errors.map(e => e.message)
  }
}

interface IValidator {
  errors: IValidationError[]
  (...values: any): boolean
}

/**
 * WithValidation
 * @param {function} validator - Function to validate data
 * @param {function} fn - Function to wrap with validation
 * @returns {function} Wrapped function fn with validation logic
 */
export const withValidation = curry(
  (
    validator: IValidator,
    selector: (...args: any) => any,
    onSucces: (...args: any) => any,
    onFailure: (...args: any) => any
  ) =>
    function validate(this: any) {
      if (!validator(selector.apply(this, arguments as any))) {
        return onFailure(new ValidationError('Validation failed', validator.errors))
      }
      return onSucces.apply(this, arguments as any)
    }
)
