/* eslint func-names: 0 */
import { Lazy, Numbers } from '../dist/index.js'
import { describe, it } from 'mocha'
import { strict as assert } from 'assert'

describe('Lazy', function () {
  describe('map', function () {
    it('should map a collection', function () {
      const col = Lazy([1, 2, 3])
      assert.deepEqual([...col.map(x => x * x)], [1, 4, 9])
    })
  })

  describe('reduce', function () {
    it('should reduce', function () {
      const col = Lazy([1, 2, 3])
      assert.deepEqual(
        col.map(x => x * x).reduce((acc, cv) => acc + cv, 0),
        14
      )
    })
  })

  describe('filter', function () {
    it('should filter', function () {
      const col = Lazy([1, 2, 3, 4, 5, 6])
      assert.deepEqual([...col.filter(n => n % 2 === 0)], [2, 4, 6])
    })
  })

  describe('find', function () {
    it('should find', function () {
      const col = Lazy([
        { name: 'tim', id: 1 },
        { name: 'bob', id: 2 },
      ])
      assert.deepEqual([...col.find(p => p.name === 'bob')], [{ name: 'bob', id: 2 }])
    })
  })

  describe('until', function () {
    it('should iterate until', function () {
      const col = Lazy([1, 2, 3, 4, 5])
      assert.deepEqual([...col.until(n => n > 3)], [1, 2, 3])
    })
  })

  describe('first', function () {
    it('should get first', function () {
      const col = Lazy([1, 2, 3])
      assert.deepEqual(col.first(), 1)
    })
  })

  describe('rest', function () {
    it('should get rest', function () {
      const col = Lazy([1, 2, 3])
      assert.deepEqual([...col.rest()], [2, 3])
    })
  })

  describe('take', function () {
    it('should take n', function () {
      const col = Numbers
      assert.deepEqual([...col.take(3)], [0, 1, 2])
    })
  })

  describe('drop', function () {
    it('should drop', function () {
      const col = Lazy([1, 2, 3, 4, 5])
      assert.deepEqual([...col.drop(4)], [5])
    })
  })
})
