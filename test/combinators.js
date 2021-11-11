import * as combinators from '../dist/index.js'
import { describe, it } from 'mocha'
import { AssertionError, strict as assert } from 'assert'

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
      assert.deepEqual(combinators.unary((...args) => [...args])(1, 2, 3), [1])
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

  describe('compose', function () {
    it('should compose two functions', function () {
      const shout = combinators.compose(
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

  describe('negate', function () {
    it('should negate sign of function result', function () {
      const x = y => y + 1
      assert.equal(combinators.negate(x)(5), -6)
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

    it('should return an object with only key from paths', function () {
      const obj = {
        name: 'tim',
        age: 15,
      }
      const result = combinators.deepPick(['name'], obj)
      assert.deepEqual(result, { name: 'tim' })
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

  describe('composeM', function () {
    it('should compose two monads', function () {
      const fn = x => [x]
      assert.deepEqual(combinators.composeM(fn, fn)('hi'), ['hi'])
    })
  })

  describe('composeAsync', function () {
    it('should compose two async functions', function (done) {
      const a = x => new Promise(resolve => setTimeout(() => resolve(x), 0))
      const b = x => new Promise(resolve => setTimeout(() => resolve(x), 1))
      const c = combinators.composeAsync(a, b)
      ;(async () => {
        try {
          assert.equal(await c(5), 5)
          done()
        } catch (err) {
          done(err)
        }
      })()
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

  describe('diff', function () {
    it('should diff array', function () {
      const a = [1, 2, 3]
      const b = [1, 2]
      const c = [1, 2, 4]
      assert.deepEqual(combinators.diff(a, b), [])
      assert.deepEqual(combinators.diff(a, c), [4])
    })
    it('should diff objects', function () {
      const a = {
        name: 'Jim',
        age: 16,
        likes: ['cats', 'dogs'],
      }
      const b = {
        name: 'Jim',
        age: 17,
        likes: ['cats', 'dogs'],
      }
      const c = {
        name: 'Jim',
        age: '15',
        likes: ['cats', 'birds'],
      }
      assert.deepEqual(combinators.diff(a, b), { age: 17 })
      assert.deepEqual(combinators.diff(a, c), { age: '15', likes: ['birds'] })
    })
  })

  describe('deepCopy', function () {
    it('should deep copy an object', function () {
      const a = {
        name: 'Jim',
        age: 15,
      }
      const copy = combinators.deepCopy(a)
      assert.deepEqual(a, copy)
      assert.notEqual(a, copy)
    })

    it('should deep copy an array', function () {
      const arr = [{ name: 'Jim', age: 15 }]
      const copy = combinators.deepCopy(arr)
      assert.deepEqual(arr, copy)
      assert.notEqual(arr[0], copy[0])
    })
  })

  describe('deepCopyArray', function () {
    it('should deep copy an array', function () {
      const arr = [1, 2, 3, 4]
      const copy = combinators.deepCopyArray(arr)
      assert.deepEqual(arr, copy)
      assert.notEqual(arr, copy)
    })
    it('should deep copy an array of objects', function () {
      const arr = [{ name: 'tim' }, { name: 'bob' }]
      const copy = combinators.deepCopyArray(arr)
      assert.deepEqual(arr, copy)
      for (let i = 0; i < arr.length; i++) {
        assert.deepEqual(arr[i], copy[i])
        assert.notEqual(arr[i], copy[i])
      }
    })
  })

  describe('merge', function () {
    it('should merge arrays', function () {
      const a = [1, 2, 3]
      const b = [1, 2, 4]
      assert.deepEqual(combinators.merge(a, b), [1, 2, 3, 4])
    })
    it('should merge objects', function () {
      const a = {
        name: 'jim',
        age: 15,
        address: {
          city: 'Hellosville',
        },
      }
      const b = {
        name: 'john',
        likes: ['cats', 'birds'],
        address: {
          street: '123 Fake st',
        },
      }
      assert.deepEqual(combinators.merge(a, b), {
        name: 'john',
        age: 15,
        likes: ['cats', 'birds'],
        address: {
          city: 'Hellosville',
          street: '123 Fake st',
        },
      })
    })
  })

  describe('merge and diff', function () {
    it('should diff and merge resulting in deepEqual objects', function () {
      const a = {
        name: 'Jim',
        catName: 'Steve Lu-cat-ther',
      }
      const b = {
        name: 'Jim',
        age: 16,
        catName: 'Steve Lu-cat-ther',
      }
      assert.deepEqual(combinators.diff(a, b), { age: 16 })
      const merged = combinators.merge(b, combinators.diff(a, b))
      assert.deepEqual(merged, b)
      assert.notEqual(merged, b)
    })
  })

  describe('deepCopy', function () {
    it('should copy maps, sets and objects', function () {
      const s = new Set([1, 2, 3])
      assert.deepEqual(combinators.deepCopy(s), new Set([1, 2, 3]))
      const m = new Map([
        ['hi', 'there'],
        [{}, null],
      ])
      assert.deepEqual(
        combinators.deepCopy(m),
        new Map([
          ['hi', 'there'],
          [{}, null],
        ])
      )
      const o = {
        a: {
          b: 'x',
        },
        c: ['cat'],
      }
      assert.deepEqual(combinators.deepCopy(o), o)
      assert.notEqual(combinators.deepCopy(o), o)
    })
  })

  describe('entries', function () {
    it('should return the key value pairs of an object', function () {
      const obj = {
        title: 'My book',
        available: true,
        publicationDate: 1987,
      }
      assert.deepEqual(combinators.entries(obj), [
        ['title', 'My book'],
        ['available', true],
        ['publicationDate', 1987],
      ])
    })
    it('should return the key value pairs of a map', function () {
      const m = new Map()
      m.set('hi', 'there')
      m.set(1, 2)
      assert.deepEqual(combinators.entries(m), [
        ['hi', 'there'],
        [1, 2],
      ])
    })
    it('should return the values of a set', function () {
      const s = new Set()
      s.add('hi')
      s.add(69)
      assert.deepEqual(combinators.entries(s), [
        ['hi', 'hi'],
        [69, 69],
      ])
    })
  })

  describe('values', function () {
    it('should return values of an object', function () {
      const obj = {
        name: 'kimmy',
        age: 5,
      }
      assert.deepEqual(combinators.values(obj), ['kimmy', 5])
    })
    it('should return values of a map', function () {
      const m = new Map()
      m.set('name', 'kimmy')
      m.set(5, 6)
      assert.deepEqual(combinators.values(m), ['kimmy', 6])
    })
    it('should return values of a set', function () {
      const s = new Set()
      s.add('cat')
      s.add('dog')
      assert.deepEqual(combinators.values(s), ['cat', 'dog'])
    })
  })

  describe('keys', function () {
    it('should get keys of an object', function () {
      const o = {
        a: 'b',
        c: 'd',
      }
      assert.deepEqual(combinators.keys(o), ['a', 'c'])
    })
    it('should get keys of a map', function () {
      const m = new Map()
      m.set('cat', 'dog')
      m.set(null, 69)
      assert.deepEqual(combinators.keys(m), ['cat', null])
    })
    it('should get "keys" of a set', function () {
      const s = new Set()
      s.add(1)
      s.add(2)
      assert.deepEqual(combinators.keys(s), [1, 2])
    })
  })

  describe('rename', function () {
    it('should rename object keys', function () {
      const o = {
        title: 'my book',
        publication_date: 1987,
        available: true,
      }
      assert.deepEqual(
        combinators.rename(
          {
            title: 'bookTitle',
            publication_date: 'publicationDate',
          },
          o
        ),
        {
          bookTitle: 'my book',
          publicationDate: 1987,
          available: true,
        }
      )
    })
    it('should rename map keys', function () {
      const m = new Map()
      m.set('hi', 'there')
      m.set(8, 10)
      assert.deepEqual(
        combinators.rename(
          {
            hi: 'HI',
          },
          m
        ),
        new Map([
          ['HI', 'there'],
          [8, 10],
        ])
      )
    })
  })

  describe('aggregate', function () {
    it('should aggregate object properties', function () {
      const a = {
        a: 1,
        b: 2,
        c: {
          d: 4,
        },
      }
      const b = {
        a: 2,
        b: 2,
        c: {
          e: 'f',
        },
      }
      assert.deepEqual(combinators.aggregate(a, b), {
        a: 2,
        b: 2,
        c: {
          d: 4,
          e: 'f',
        },
      })
    })
    it('should aggregate objects with array properties', function () {
      const a = {
        title: 'my book',
        authors: 'astrid',
      }
      const b = {
        title: 'my book',
        authors: 'liz',
      }
      assert.deepEqual(combinators.aggregate(a, b), {
        title: 'my book',
        authors: 'liz',
      })
    })
  })

  describe('unique', function () {
    it('should filter non-unique items from arrays', function () {
      const a = [1, 2, 3]
      const b = [3, 4, 5]
      assert.deepEqual(combinators.unique(a, b), [1, 2, 3, 4, 5])
    })
  })

  describe('groupBy', function () {
    it('should group an array of objects by key', function () {
      const a = [
        {
          name: 'tim',
          age: 15,
        },
        {
          name: 'tim',
          age: 5,
        },
        {
          name: 'bob',
          age: 87,
        },
      ]
      assert.deepEqual(combinators.groupBy('name', a), [[a[0], a[1]], [a[2]]])
    })
  })

  describe('aggregateOn', function () {
    it('should group a key of an object into an array', function () {
      const a = {
        title: 'my book',
        author: 'tim',
        publication_date: 2008,
      }
      const b = {
        title: 'my book',
        publication_date: 1987,
        author: 'dave',
      }
      assert.deepEqual(
        combinators.aggregateOn(
          {
            author: 'authors',
            publication_date: 'publicationDates',
          },
          a,
          b
        ),
        {
          title: 'my book',
          authors: ['tim', 'dave'],
          publicationDates: [2008, 1987],
        }
      )
      assert.deepEqual(combinators.aggregateOn({ author: 'authors' }, a), {
        title: 'my book',
        authors: ['tim'],
        publication_date: 2008,
      })
    })

    it('should group object keys of an object into an array', function () {
      const a = {
        b: {
          e: 'f',
        },
        a: 1,
      }
      const b = {
        b: {
          c: 'd',
        },
        a: 1,
      }
      assert.deepEqual(combinators.aggregateOn({ b: 'bs' }, a, b), {
        bs: [{ e: 'f' }, { c: 'd' }],
        a: 1,
      })
    })
  })

  describe('keyBy', function () {
    it('should convert array to map', function () {
      const arr = [{ name: 'tim' }, { name: 'bob' }]
      assert.deepEqual(combinators.keyBy('name', arr), {
        tim: { name: 'tim' },
        bob: { name: 'bob' },
      })
    })
  })

  describe('deepJoin', function () {
    it('should deep join two arrays', function () {
      const a = [
        {
          isbn: '978-0812981605',
          title: '7 Habits of Highly Effective People',
          available: true,
        },
        {
          isbn: '978-1982137274',
          title: 'The Power of Habit',
          available: false,
        },
      ]
      const b = [
        {
          isbn: '978-0812981605',
          title: '7 Habits of Highly Effective People',
          subtitle: 'Powerful Lessons in Personal Change',
          number_of_pages: 432,
        },
        {
          isbn: '978-1982137274',
          title: 'The Power of Habit',
          subtitle: 'Why We Do What We Do in Life and Business',
          subjects: ['Social Aspects', 'Habit', 'Change (Psychology)'],
        },
      ]

      const expected = [
        {
          available: true,
          isbn: '978-0812981605',
          number_of_pages: 432,
          subtitle: 'Powerful Lessons in Personal Change',
          title: '7 Habits of Highly Effective People',
        },
        {
          available: false,
          isbn: '978-1982137274',
          subjects: ['Social Aspects', 'Habit', 'Change (Psychology)'],
          subtitle: 'Why We Do What We Do in Life and Business',
          title: 'The Power of Habit',
        },
      ]

      assert.deepEqual(combinators.deepJoin('isbn', 'isbn', a, b), expected)
    })
  })

  describe('deepEqual', function () {
    it('should check for deep equality', function () {
      const a = {
        a: 1,
        b: 2,
        c: {
          d: 3,
        },
      }
      const b = {
        a: 1,
        b: 2,
        c: {
          d: 3,
        },
      }
      assert.equal(combinators.deepEqual(a, b), true)
      const c = {
        a: 1,
        b: 2,
        c: {
          d: 4,
        },
      }
      assert.equal(combinators.deepEqual(b, c), false)
      const d = {
        a: '1',
        b: 2,
      }
      assert.equal(combinators.deepEqual(d, c), false)
      assert.equal(combinators.deepEqual(null, null), true)
      assert.equal(combinators.deepEqual('hello', 'hello'), true)
      assert.equal(combinators.deepEqual(new Set(['hi']), new Set(['hi'])), true)
      assert.equal(
        combinators.deepEqual(new Map([['hey', 'hi']]), new Map([['hey', 'hi']])),
        true
      )
    })
  })

  describe('isEmpty', function () {
    it('should check empty string', function () {
      const strA = ''
      const strB = 'hi'
      assert.equal(combinators.isEmpty(strA), true)
      assert.equal(combinators.isEmpty(strB), false)
    })
    it('should check empty array', function () {
      const arrA = []
      const arrB = [1]
      assert.equal(combinators.isEmpty(arrA), true)
      assert.equal(combinators.isEmpty(arrB), false)
    })
    it('should check empty object', function () {
      const objA = {}
      const objB = { hi: 'there' }
      assert.equal(combinators.isEmpty(objA), true)
      assert.equal(combinators.isEmpty(objB), false)
    })
    it('should check empty set', function () {
      const setA = new Set()
      const setB = new Set(['hi'])
      assert.equal(combinators.isEmpty(setA), true)
      assert.equal(combinators.isEmpty(setB), false)
    })
    it('should check empty map', function () {
      const mapA = new Map()
      const mapB = new Map([['hi', 'there']])
      assert.equal(combinators.isEmpty(mapA), true)
      assert.equal(combinators.isEmpty(mapB), false)
    })
    it('should check null and undefined', function () {
      assert.equal(combinators.isEmpty(null), true)
      assert.equal(combinators.isEmpty(undefined), true)
    })
    it('should check NaN', function () {
      assert.equal(combinators.isEmpty(NaN), true)
      assert.equal(combinators.isEmpty(0), false)
    })
    it('should check class', function () {
      assert.equal(combinators.isEmpty(new (class Dog {})()), false)
    })
    it('should combine with not', function () {
      assert.equal(combinators.compose(combinators.isEmpty, combinators.not)(''), false)
    })
  })

  describe('memoize', function () {
    it('should memoize a function', function () {
      let called = 0
      const f = x => (called++, x * x)
      const m = combinators.memoize(f)
      m(5)
      m(5)
      m(5)
      m(5)
      m(5)
      m(2)
      m(2)
      m(2)
      assert.equal(called, 2)
    })

    it('should memoize a function with object arg', function () {
      let called = 0
      const f = x => (called++, x.name.toUpperCase())
      const m = combinators.memoize(f)
      m({ name: 'tim' })
      m({ name: 'tim' })
      m({ name: 'tim' })
      m({ name: 'bob' })
      const result = m({ name: 'bob' })
      assert.equal(called, 2)
      assert.equal(result, 'BOB')
    })

    it('should enable clearing of cache', function () {
      let called = 0
      const f = x => (called++, x * x)
      const m = combinators.memoize(f)
      m(5)
      m(5)
      assert.equal(called, 1)
      m(3)
      m(3)
      assert.equal(called, 2)
      m.clearCache()
      m(5)
      assert.equal(called, 3)
    })
  })
})
