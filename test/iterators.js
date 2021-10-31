import { describe, it } from 'mocha'
import { strict as assert } from 'assert'
import * as iterators from '../src/iterators.js'
import { compose } from '../src/combinators.js'

describe('iterators', function () {
  describe('mapWith', function () {
    it('should map iterator with function', function () {
      const arr = [1, 2, 3]
      const iter = iterators.mapWith(x => x * x, arr)
      assert.deepEqual([...iter], [1, 4, 9])
    })
  })
  describe('mapAllWith', function () {
    it('should map all iterables of iterable with function', function () {
      const arr = [[1, 2], [3, 4], [5]]
      const iter = iterators.mapAllWith(nums => [nums.reduce((a, b) => a + b, 0)], arr)
      assert.deepEqual([...iter], [3, 7, 5])
    })
  })
  describe('filterWith', function () {
    it('should filter iterator with function', function () {
      const arr = [1, 2, 3, 4, 5, 6]
      const iter = iterators.filterWith(x => x % 2 === 0, arr)
      assert.deepEqual([...iter], [2, 4, 6])
    })
  })
  describe('compact', function () {
    it('should remove all nullable values', function () {
      const arr = [1, 4, 0, '', 'hi', {}, [], null, undefined, new Set()]
      const iter = iterators.compact(arr)
      assert.deepEqual([...iter], [1, 4, 0, '', 'hi', {}, [], new Set()])
    })
  })
  describe('untilWith', function () {
    it('should iterate until function returns true', function () {
      const arr = [1, 2, 3, 4, 5]
      const iter = iterators.untilWith(x => x > 3, arr)
      assert.deepEqual([...iter], [1, 2, 3])
    })
  })
  describe('first', function () {
    it('should return first item', function () {
      const arr = [1, 2, 3]
      const first = iterators.first(arr)
      assert.equal(first, 1)
    })
  })
  describe('rest', function () {
    it('should return rest of iterator without first', function () {
      const arr = [1, 2, 3]
      const rest = iterators.rest(arr)
      assert.deepEqual([...rest], [2, 3])
    })
  })
  describe('take', function () {
    it('should return only desired number to take', function () {
      const arr = [1, 2, 3, 4, 5]
      const two = iterators.take(2, arr)
      assert.deepEqual([...two], [1, 2])
    })
  })
  describe('zip', function () {
    it('should zip iterables together', function () {
      const arrA = [1, 2, 3]
      const arrB = ['hi', 'there', 'hello']
      assert.deepEqual(
        [...iterators.zip(arrA, arrB)],
        [
          [1, 'hi'],
          [2, 'there'],
          [3, 'hello'],
        ]
      )
    })
  })
  describe('zipWith', function () {
    it('should zip iterables with zipper function', function () {
      const arrA = ['hi', 'how', 'you']
      const arrB = ['there', 'are', 'doing']
      assert.deepEqual(
        [...iterators.zipWith((...values) => values.join(' ').toUpperCase(), arrA, arrB)],
        ['HI THERE', 'HOW ARE', 'YOU DOING']
      )
    })
  })
  describe('reduceWith', function () {
    it('should reduce iterable with reducer fn and initial value', function () {
      const arrA = ['hello', 'world']
      const result = iterators.reduceWith((acc, cv) => acc + cv.toUpperCase(), '', arrA)
      assert.deepEqual(result, 'HELLOWORLD')
    })
  })
  describe('drop', function () {
    it('should skip first n elements', function () {
      const arr = [1, 2, 3, 4, 5, 6]
      const result = iterators.drop(4, arr)
      assert.deepEqual([...result], [5, 6])
    })
    it('should skip all, returning empty', function () {
      const arr = [1, 2, 3]
      const result = iterators.drop(3, arr)
      assert.deepEqual([...result], [])
    })
  })

  describe('composing iterators', function () {
    it('should allow composing iterators', function () {
      const arr = [1, 2, 3, 4, 5]
      const result = compose(
        iterators.filterWith(x => x % 2 === 0),
        iterators.mapWith(x => x * 3),
        iterators.take(2)
      )
      assert.deepEqual([...result(arr)], [6])
    })
  })
})
