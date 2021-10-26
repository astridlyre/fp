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

  describe('pick', function () {
    it('should create a new object with only prop names', function () {
      const obj = {
        firstName: 'Bob',
        lastName: 'Burgers',
        email: 'bob@burgers.co.uk',
      }
      assert.deepEqual(combinators.pick(['email'])(obj), { email: 'bob@burgers.co.uk' })
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

  describe('deepSetProp', function () {
    it('should set a deeply nested property', function () {
      assert.deepEqual(combinators.deepSetProp('a.b.c.d', 'hi')({}), {
        a: { b: { c: { d: 'hi' } } },
      })
    })
    it('should not mutate object', function () {
      const obj = {
        a: {
          b: {
            c: {
              d: 'hi',
            },
          },
          e: 'world',
        },
      }
      const result = combinators.deepSetProp('a.b.c.d', 'hello')(obj)
      assert.deepEqual(result, {
        a: { b: { c: { d: 'hello' } }, e: 'world' },
      })
      assert.notEqual(obj, result)
    })
  })

  describe('deepPick', function () {
    it('should return an object with only keys from paths', function () {
      const obj = {
        a: {
          b: {
            c: 'hi',
          },
          e: 'world',
        },
        h: 'sup',
      }
      const result = combinators.deepPick(['a.b.c', 'a.e'])(obj)
      assert.deepEqual(result, { a: { b: { c: 'hi' }, e: 'world' } })
      assert.notEqual(obj, result)
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

  describe('padStart', function () {
    it('should pad the start of a string', function () {
      assert.equal(combinators.padStart(1, 3, ' '), '  1')
      assert.equal(combinators.padStart('', 5, 'hi'), 'hihih')
    })
  })

  describe('padEnd', function () {
    it('should pad the end of a string', function () {
      assert.equal(combinators.padEnd(1, 3, ' '), '1  ')
      assert.equal(combinators.padEnd('', 3, 'a'), 'aaa')
    })
  })

  describe('forEach', function () {
    it('should call M#forEach', function () {
      combinators.forEach(num => assert.equal(num, 1))([1, 1, 1, 1])
    })
  })

  describe('map', function () {
    it('should call M#map', function () {
      const square = combinators.map(num => num * num)([1, 2, 3])
      assert.deepEqual(square, [1, 4, 9])
    })
  })

  describe('filter', function () {
    it('should call M#filter', function () {
      const evens = combinators.filter(n => n % 2 === 0)([1, 2, 3, 4, 5])
      assert.deepEqual(evens, [2, 4])
    })
  })

  describe('reduce', function () {
    it('should call M#reduce', function () {
      const result = combinators.reduce((acc, cv) => acc + cv, 0)([1, 2, 3, 4, 5])
      assert.equal(result, 15)
    })
    it('should call M#reduceRight', function () {
      const result = combinators.reduceRight((acc, cv) => acc + cv, 0)([1, 2, 3, 4, 5])
      assert.equal(result, 15)
    })
  })

  describe('pluck', function () {
    it('should plunk object keys', function () {
      const arr = [{ name: 'bob' }, { name: 'tim' }]
      assert.deepEqual(combinators.pluck('name')(arr), ['bob', 'tim'])
    })
  })

  describe('deepMap', function () {
    it('should deeply map nested arrays', function () {
      const arr = [[1], [[3], [4, [5]]]]
      assert.deepEqual(combinators.deepMap(x => x * x)(arr), [[1], [[9], [16, [25]]]])
    })
  })

  describe('composeM2', function () {
    it('should compose two monads', function () {
      const fn = x => [x]
      assert.deepEqual(combinators.composeM2(fn, fn)('hi'), ['hi'])
    })
  })

  describe('composeAsync2', function () {
    it('should compose two async functions', function (done) {
      const a = x => new Promise(resolve => setTimeout(() => resolve(x), 0))
      const b = x => new Promise(resolve => setTimeout(() => resolve(x), 1))
      const c = async x => await combinators.composeAsync2(a, b)
      ;(async () => assert.equal(await c(5), 5), done())()
    })
  })

  describe('math functions', function () {
    it('should perform strict equality test', function () {
      assert.equal(combinators.eq(1, 1), true)
      assert.equal(combinators.eq({}, {}), false)
    })
    it('should add numbers', function () {
      assert.equal(combinators.add(5)(6), 11)
      assert.equal(combinators.addRight(5)(6), 11)
    })
    it('should subtract numbers', function () {
      assert.equal(combinators.subtract(5)(4), 1)
      assert.equal(combinators.subtract(4)(5), -1)
      assert.equal(combinators.subtractRight(4)(5), 1)
      assert.equal(combinators.subtractRight(5)(4), -1)
    })
    it('should multiply numbers', function () {
      assert.equal(combinators.multiply(3)(3), 9)
      assert.equal(combinators.multiplyRight(5)(3), 15)
    })
    it('should divide numbers', function () {
      assert.equal(combinators.divide(5)(2), 2.5)
      assert.equal(combinators.divide(2)(2), 1)
      assert.equal(combinators.divide(2)(0), Infinity)
    })
  })

  describe('roundTo', function () {
    it('should round to N places', function () {
      assert.equal(combinators.roundTo(2)(5.234), 5.23)
    })
  })

  describe('pow', function () {
    it('should multiply base by itself exponent times', function () {
      assert.equal(combinators.pow(10, 2), 100)
      assert.equal(combinators.pow(2, 10), 1024)
    })
  })

  describe('array functions', function () {
    it('should take the head of an array', function () {
      assert.equal(combinators.head([1, 2, 3]), 1)
    })
    it('should take the last of an array', function () {
      assert.equal(combinators.last([1, 2, 3]), 3)
    })
    it('should call A#every', function () {
      assert.equal(combinators.every(x => x > 1)([2, 3, 4]), true)
    })
    it('should call A#some', function () {
      assert.equal(combinators.some(x => x > 2)([1, 2, 3]), true)
    })
    it('should call A#find', function () {
      const arr = [{ name: 'bob' }, { name: 'tim' }]
      assert.equal(combinators.find(x => x.name === 'tim')(arr), arr[1])
    })
    it('should sum all arguments', function () {
      assert.equal(combinators.sum(1, 2, 3, 4, 5), 15)
    })
    it('should average array', function () {
      assert.equal(combinators.average([1, 2, 3]), 2)
    })
    it('should partition an array based on two functions', function () {
      const odd = x => x % 2 !== 0
      const even = x => !odd(x)
      assert.deepEqual(combinators.partition([1, 2, 3, 4], even, odd), [
        [2, 4],
        [1, 3],
      ])
    })
  })

  describe('zipMap', function () {
    it('should zip up iterables and map', function () {
      assert.deepEqual(
        combinators.zipMap((...args) => args.map(x => x * x), [1, 2, 3], [4, 5, 6]),
        [
          [1, 16],
          [4, 25],
          [9, 36],
        ]
      )
    })
  })

  describe('sortBy', function () {
    it('should sortBy function f without mutating array', function () {
      const arr = [1, 2, 3]
      const sorter = (a, b) => b - a
      assert.deepEqual(combinators.sortBy(sorter)(arr), [3, 2, 1])
      assert.notEqual(combinators.sortBy(sorter)(arr), arr)
    })
  })

  describe('match', function () {
    it('should match a regexp to a string', function () {
      const re = new RegExp('\\s+')
      const str = '    '
      assert.equal(combinators.match(re, str), true)
    })
  })

  describe('replace', function () {
    it('should replace a match with replacer', function () {
      assert.equal(combinators.replace('hi', 'hello')('hi world'), 'hello world')
    })
  })

  describe('split', function () {
    it('should split by sep', function () {
      assert.deepEqual(combinators.split('|', 'hi|there'), ['hi', 'there'])
    })
  })

  describe('tryCatch', function () {
    it('should call catcher function if try function throws', function () {
      let result
      combinators.tryCatch(
        () => {
          throw new Error('testing')
        },
        err => (result = err.message)
      )
      assert.equal(result, 'testing')

      // try one without throwing error
      combinators.tryCatch(
        () => (result = 'hello'),
        () => {}
      )
      assert.equal(result, 'hello')
    })
  })

  describe('range', function () {
    it('should eagerly provide a range of numbers', function () {
      const nums = combinators.range(1, 10)
      assert.deepEqual(nums, [1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
    it('should count down if negative step', function () {
      const nums = combinators.range(9, 0, -1)
      assert.deepEqual(nums, [9, 8, 7, 6, 5, 4, 3, 2, 1])
    })
  })

  describe('once', function () {
    it('should call function only once', function () {
      let result = 1
      const x = combinators.once(n => (result += n))
      x(5)
      x(4)
      assert.equal(result, 6)
      assert.equal(x(), 6)
    })
  })

  describe('immutate', function () {
    it('should not allow changing properties', function () {
      const obj = combinators.immutable({ greeting: 'hi' })
      assert.throws(() => (obj.greeting = 'hello'))
    })
    it('should not allow extending object', function () {
      const obj = combinators.immutable({ greeting: 'hi' })
      assert.throws(() => (obj.method = () => {}))
    })
  })
})