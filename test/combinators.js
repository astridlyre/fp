import * as combinators from '../src/combinators.js'
import { describe, it } from 'mocha'
import { strict as assert } from 'assert'

describe('Combinators', function () {
  describe('identity', function () {
    it('should return value given', function () {
      const value = combinators.identity('hello')
      assert.equal(value, 'hello')
    })
  })

  describe('constant', function () {
    it('should return a function that retuns the value given', function () {
      const fn = combinators.constant('hello')
      assert.equal(fn(), 'hello')
    })
  })

  describe('flip2', function () {
    it('should flip the order of arguments of a function', function () {
      const fn = (a, b) => `${a} ${b}`
      assert.equal(combinators.flip2(fn)('hello', 'world'), 'world hello')
      const obj = {
        hello: 'world',
        greet(a, b) {
          return a + this.hello + b
        },
      }
      assert.equal(combinators.flip2(obj.greet.bind(obj))('a')('b'), 'bworlda')
    })
  })

  describe('flip3', function () {
    it('should flip the order of arguments of a function', function () {
      const fn = (a, b, c) => `${a} ${b} ${c}`
      assert.equal(combinators.flip3(fn)('hi', 'to', 'you'), 'to you hi')
    })
  })

  describe('arity', function () {
    it('should convert a function to one of arity n', function () {
      const fn = (a, b, c) => `${a} ${b} ${c}`
      assert.equal(combinators.arity(fn, 2)('hello', 'world'), 'hello world undefined')
    })

    it('unary', function () {
      const fn = (a, b) => `${a} ${b}`
      assert.equal(combinators.unary(fn)('hello', 'world'), 'hello undefined')
    })

    it('binary', function () {
      const fn = (a, b, c) => `${a} ${b} ${c}`
      assert.equal(
        combinators.binary(fn)('hello', 'world', 'test'),
        'hello world undefined'
      )
    })

    it('ternary', function () {
      const fn = (a, b, c, d) => `${a} ${b} ${c} ${d}`
      assert.equal(
        combinators.ternary(fn)('this', 'is', 'a', 'test'),
        'this is a undefined'
      )
    })
  })

  describe('callFirst', function () {
    it('should call with arg as first arg', function () {
      const fn = (a, b) => `${a} ${b}`
      assert.equal(combinators.callFirst(fn, 'hello')('world'), 'hello world')
    })
  })

  describe('callLast', function () {
    it('should call with arg as last arg', function () {
      const fn = (a, b) => `${a} ${b}`
      assert.equal(combinators.callLast(fn, 'world')('hello'), 'hello world')
    })
  })

  describe('demethodize', function () {
    it('should allow using a method as a regular function', function () {
      const toUpperCase = combinators.demethodize(String.prototype.toUpperCase)
      assert.equal(toUpperCase('hello'), 'HELLO')
    })
  })

  describe('isX functions', function () {
    it('should test if x is a number', function () {
      assert.equal(combinators.isNumber(10), true)
      assert.equal(combinators.isNumber('hi'), false)
    })
    it('should test if x is boolean', function () {
      assert.equal(combinators.isBoolean(0), false)
      assert.equal(combinators.isBoolean(true), true)
      assert.equal(combinators.isBoolean(null), false)
    })
    it('should test if x is null', function () {
      assert.equal(combinators.isNull(0), false)
      assert.equal(combinators.isNull(null), true)
      assert.equal(combinators.isNull('null'), false)
    })
    it('should test is x is a string', function () {
      assert.equal(combinators.isString('null'), true)
      assert.equal(combinators.isString(String), false)
    })
    it('should test if x is an object', function () {
      assert.equal(combinators.isObject(String), false)
      assert.equal(combinators.isObject(null), false)
      assert.equal(combinators.isObject({}), true)
    })
    it('should test if x is an array', function () {
      assert.equal(combinators.isArray([]), true)
      assert.equal(combinators.isArray(Array), false)
      assert.equal(combinators.isArray('[]'), false)
    })
    it('should test if x is instance of y', function () {
      class y {}
      assert.equal(combinators.isInstanceOf(y)(new y()), true)
      assert.equal(combinators.isInstanceOf(y)(y), false)
    })
    it('should test if x is a function', function () {
      assert.equal(combinators.isFunction(String), true)
      assert.equal(combinators.isFunction('hi'), false)
    })
    it('should test if x is a set', function () {
      assert.equal(combinators.isSet([]), false)
      assert.equal(combinators.isSet(new Set()), true)
    })
    it('should test if x is a map', function () {
      assert.equal(combinators.isMap(new Map()), true)
      assert.equal(combinators.isMap({}), false)
    })
  })

  describe('len', function () {
    it('should return length of a string', function () {
      assert.equal(combinators.len('hi'), 2)
    })
    it('should return the arity of a function', function () {
      assert.equal(
        combinators.len((x, y) => x + y),
        2
      )
    })
    it('should return the length of an array', function () {
      assert.equal(combinators.len([]), 0)
      assert.equal(combinators.len([1, 2, 3]), 3)
    })
    it('should return the size of a set or map', function () {
      assert.equal(combinators.len(new Set([1, 2, 3])), 3)
      assert.equal(
        combinators.len(
          new Map([
            [1, 2],
            [3, 4],
            [5, 6],
          ])
        ),
        3
      )
    })
    it('should return the number of enumerable keys of an object', function () {
      const obj = {
        hi: 'hello',
        sup: 'world',
      }
      assert.equal(combinators.len(obj), 2)
    })
  })

  describe('compose2', function () {
    it('should compose two functions', function () {
      const shout = combinators.compose2(
        x => x + '!',
        x => x.toUpperCase()
      )
      assert.equal(shout('hello world'), 'HELLO WORLD!')
    })
  })

  describe('compose', function () {
    it('should compose multiple functions', function () {
      const shoutBackwards = combinators.compose(
        x => x.join(''),
        x => [...x].reverse(),
        x => x + '!',
        x => x.toUpperCase()
      )
      assert.equal(shoutBackwards('hello world'), '!DLROW OLLEH')
    })
  })

  describe('pipe', function () {
    it('should pipe multiple functions', function () {
      const add3AndSquare = combinators.pipe(
        x => x + 3,
        x => x * x
      )
      assert.equal(add3AndSquare(3), 36)
    })
  })

  describe('curry', function () {
    it('should auto curry functions', function () {
      const fn = (a, b) => a + b
      assert.equal(typeof combinators.curry(fn)(1) === 'function', true)
      assert.equal(combinators.curry(fn)(1)(2), 3)
    })
  })

  describe('tap', function () {
    it('should run side effect function', function () {
      let y = 1
      const fn = x => (y += x)
      combinators.tap(fn)(5)
      assert.equal(y, 6)
    })
  })

  describe('not', function () {
    it('should return opposite of boolean function', function () {
      const x = y => true
      assert.equal(combinators.not(x)(1), false)
    })
  })

  describe('invert', function () {
    it('should invert sign of function result', function () {
      const x = y => y + 1
      assert.equal(combinators.invert(x)(5), -6)
    })
  })

  describe('log', function () {
    it('should log debugging information', function () {
      let result = ''
      const y = str => (result += str)
      const x = y => y + 1
      combinators.log(x, y)(5)
      assert.equal(result, 'Entering function x(5)' + '\nExiting function x -> 6')
    })
  })

  describe('prop', function () {
    it('should pluck a prop', function () {
      assert.equal(
        combinators.prop('greeting')({ greeting: 'hello world' }),
        'hello world'
      )
    })
  })

  describe('setPropM', function () {
    it('should set a propertity on an object and mutate it', function () {
      const obj = {
        prop: 2,
      }
      assert.deepEqual(combinators.setPropM('prop', 3)(obj), obj)
    })
  })

  describe('setProp', function () {
    it('should set a property without mutating the original', function () {
      const obj = {
        prop: 1,
      }
      const newObj = combinators.setProp('prop', 2)(obj)
      assert.notDeepEqual(newObj, obj)
      assert.notEqual(newObj, obj)
    })
  })

  describe('props', function () {
    it('should pluck props from an object', function () {
      const obj = {
        a: 1,
        b: 2,
        c: 3,
      }
      assert.deepEqual(combinators.props(['a', 'b'])(obj), [1, 2])
    })
  })

  describe('send', function () {
    it('should call an instance with arguments', function () {
      assert.equal(
        combinators.send(
          'greet',
          'astrid'
        )({
          greet(name) {
            return 'hi ' + name
          },
        }),
        'hi astrid'
      )
    })
  })

  describe('bound', function () {
    it('should create a bound version of a method', function () {
      const obj = {
        greeting: 'hello',
        greet() {
          return this.greeting
        },
        greetByName(name) {
          return this.greeting + ' ' + name
        },
      }
      assert.equal(combinators.bound('greet')(obj)(), 'hello')
      assert.equal(combinators.bound('greetByName', 'astrid')(obj)(), 'hello astrid')
    })
  })

  describe('invoke', function () {
    it('should allow invoking a function in context', function () {
      const obj = {
        greeting: 'hello',
      }
      function greet(name) {
        return this.greeting + ' ' + name
      }
      assert.equal(combinators.invoke(greet, 'astrid')(obj), 'hello astrid')
    })
  })

  describe('deepProp', function () {
    it('should get a property using a path', function () {
      const obj = {
        a: {
          b: {
            a: {
              d: 'hi',
            },
          },
        },
      }
      assert.equal(combinators.deepProp('a.b.a.d')(obj), 'hi')
      assert.equal(combinators.deepProp(['a', 'b', 'a', 'd'])(obj), 'hi')
    })
  })

  describe('toJSON', function () {
    it('should stringify x', function () {
      assert.equal(combinators.toJSON({ a: 'b' }), '{"a":"b"}')
    })
  })

  describe('fromJSON', function () {
    it('should parse x', function () {
      assert.deepEqual(combinators.fromJSON('{"a":"b"}'), { a: 'b' })
    })
  })

  describe('toInteger', function () {
    it('should convert a string to a number', function () {
      assert.equal(combinators.toInteger('5'), 5)
      assert.equal(combinators.toInteger('5null'), 5)
      assert.equal(combinators.toInteger('098null'), 98)
    })
  })
})
