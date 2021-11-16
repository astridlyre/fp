/* eslint func-names: 0 */
import { describe, it } from 'mocha'
import { strict as assert } from 'assert'
import * as predicates from '../dist/index.js'

describe('Predicates', function () {
  describe('isNumber', function () {
    it('should return true if x is a number', function () {
      assert.equal(predicates.isNumber(10), true)
    })

    it('should return false if x is not a number', function () {
      assert.equal(predicates.isNumber('hi'), false)
      assert.equal(predicates.isNumber(null), false)
      assert.equal(predicates.isNumber('1'), false)
      assert.equal(predicates.isNumber([]), false)
      assert.equal(predicates.isNumber({}), false)
    })
  })

  describe('isBoolean', function () {
    it('should return true if x is a boolean', function () {
      assert.equal(predicates.isBoolean(true), true)
      assert.equal(predicates.isBoolean(false), true)
    })

    it('should return false if x is not a boolean', function () {
      assert.equal(predicates.isBoolean(0), false)
      assert.equal(predicates.isBoolean(null), false)
      assert.equal(predicates.isBoolean({}), false)
      assert.equal(predicates.isBoolean('false'), false)
    })
  })

  describe('isNull', function () {
    it('should return true if x is null', function () {
      assert.equal(predicates.isNull(null), true)
    })

    it('should return false if x is not null', function () {
      assert.equal(predicates.isNull(undefined), false)
      assert.equal(predicates.isNull(0), false)
      assert.equal(predicates.isNull('null'), false)
      assert.equal(predicates.isNull({}), false)
    })
  })

  describe('isUndefined', function () {
    it('should return true if x is undefined', function () {
      assert.equal(predicates.isUndefined(undefined), true)
    })

    it('should return false if x is not undefined', function () {
      assert.equal(predicates.isUndefined(null), false)
      assert.equal(predicates.isUndefined(''), false)
      assert.equal(predicates.isUndefined([]), false)
    })
  })

  describe('isString', function () {
    it('should return true if x is a string', function () {
      assert.equal(predicates.isString('null'), true)
      assert.equal(predicates.isString(''), true)
    })

    it('should return false if x is not a string', function () {
      assert.equal(predicates.isString(0), false)
      assert.equal(predicates.isString([]), false)
      assert.equal(predicates.isString(String), false)
    })
  })

  describe('isObject', function () {
    it('should return true if x is an object', function () {
      assert.equal(predicates.isObject({}), true)
      assert.equal(predicates.isObject([]), true)
    })

    it('should return false if x is not an object', function () {
      assert.equal(predicates.isObject(String), false)
      assert.equal(predicates.isObject(null), false)
      assert.equal(predicates.isObject(''), false)
      assert.equal(predicates.isObject(false), false)
    })
  })

  describe('isArray', function () {
    it('should return true if x is an array', function () {
      assert.equal(predicates.isArray([]), true)
      assert.equal(predicates.isArray(['hello']), true)
      assert.equal(predicates.isArray(new Array(2)), true)
    })

    it('should return false if x is not an array', function () {
      assert.equal(predicates.isArray(Array), false)
      assert.equal(predicates.isArray('[]'), false)
      assert.equal(predicates.isArray({}), false)
    })
  })

  describe('isInstanceOf', function () {
    it('should return true if x is instance of y', function () {
      class y {}
      assert.equal(predicates.isInstanceOf(y)(new y()), true)
      assert.equal(predicates.isInstanceOf(Array)([]), true)
    })

    it('should return false if x is not instance of y', function () {
      class y {}
      assert.equal(predicates.isInstanceOf(class x {})(new y()), false)
    })
  })

  describe('isFunction', function () {
    it('should return true if x is a function', function () {
      assert.equal(predicates.isFunction(String), true)
      assert.equal(
        predicates.isFunction(() => {
          'hi'
        }),
        true
      )
      assert.equal(
        predicates.isFunction(async () => {
          /* */
        }),
        true
      )
    })

    it('should return false if x is not a function', function () {
      assert.equal(predicates.isFunction('hi'), false)
      assert.equal(predicates.isFunction({}), false)
      assert.equal(predicates.isFunction([]), false)
    })
  })

  describe('isAsyncFunction', function () {
    it('should return true if x is an async function', function () {
      const f = async () => await 'hello'
      assert.equal(predicates.isAsyncFunction(f), true)
    })

    it('should return false if x is not an async function', function () {
      assert.equal(
        predicates.isAsyncFunction(() => {
          //...
        }),
        false
      )
    })
  })

  describe('isGeneratorFunction', function () {
    it('should return true if x is a generator', function () {
      const f = function* gen() {
        yield 'hello'
      }
      assert.equal(predicates.isGeneratorFunction(f), true)
    })

    it('should return false if x is not a generator', function () {
      assert.equal(
        predicates.isGeneratorFunction(() => {
          //...
        }),
        false
      )
    })
  })

  describe('isAsyncGeneratorFunction', function () {
    it('should return true if x is an async generator', function () {
      const f = async function* hello() {
        yield await 'hello'
      }
      assert.equal(predicates.isAsyncGeneratorFunction(f), true)
    })

    it('should return false if x is not an async generator', function () {
      assert.equal(
        predicates.isAsyncGeneratorFunction(() => {
          //...
        }),
        false
      )
    })
  })

  describe('isSet', function () {
    it('should return true if x is a set', function () {
      assert.equal(predicates.isSet(new Set()), true)
    })

    it('should return false if x is not a set', function () {
      assert.equal(predicates.isSet([]), false)
    })
  })

  describe('isMap', function () {
    it('should return true if x is a map', function () {
      assert.equal(predicates.isMap(new Map()), true)
    })

    it('should return false if x is not a map', function () {
      assert.equal(predicates.isMap({}), false)
    })
  })

  describe('isEmpty', function () {
    it('should check if strings are empty', function () {
      assert.equal(predicates.isEmpty(''), true)
      assert.equal(predicates.isEmpty('hi'), false)
    })

    it('should check for null', function () {
      assert.equal(predicates.isEmpty(null), true)
      assert.equal(predicates.isEmpty(2), false)
    })

    it('should check if arrays are empty', function () {
      assert.equal(predicates.isEmpty([]), true)
      assert.equal(predicates.isEmpty([4]), false)
    })

    it('should check if objects are empty', function () {
      assert.equal(predicates.isEmpty({}), true)
      assert.equal(predicates.isEmpty({ name: 'tim' }), false)
    })

    it('should check if sets are empty', function () {
      assert.equal(predicates.isEmpty(new Set()), true)
      assert.equal(predicates.isEmpty(new Set([1, 2])), false)
    })

    it('should check if maps are empty', function () {
      assert.equal(predicates.isEmpty(new Map()), true)
      assert.equal(predicates.isEmpty(new Map([['hi', 'there']])), false)
    })

    it('should check for NaN', function () {
      assert.equal(predicates.isEmpty(NaN), true)
      assert.equal(predicates.isEmpty(0), false)
    })
  })
})
