import { Lazy, Numbers } from '../src/lazy.js'
import { describe, it } from 'mocha'
import { strict as assert } from 'assert'

describe('Lazy', function () {
  describe('map', function () {
    it('should map a collection', function () {
      const col = Lazy([1, 2, 3])
      assert.deepEqual([...col.map(x => x * x)], [1, 4, 9])
    })

    it('should reduce', function () {
      const col = Lazy([1, 2, 3])
      assert.deepEqual(
        col.map(x => x * x).reduce((acc, cv) => acc + cv, 0),
        14
      )
    })

    it('should filter', function () {
      const col = Lazy([1, 2, 3, 4, 5, 6])
      assert.deepEqual([...col.filter(n => n % 2 === 0)], [2, 4, 6])
    })

    it('should find', function () {
      const col = Lazy([
        { name: 'tim', id: 1 },
        { name: 'bob', id: 2 },
      ])
      assert.deepEqual([...col.find(p => p.name === 'bob')], [{ name: 'bob', id: 2 }])
    })

    it('should iterate until', function () {
      const col = Lazy([1, 2, 3, 4, 5])
      assert.deepEqual([...col.until(n => n > 3)], [1, 2, 3])
    })

    it('should get first', function () {
      const col = Lazy([1, 2, 3])
      assert.deepEqual(col.first(), 1)
    })

    it('should get rest', function () {
      const col = Lazy([1, 2, 3])
      assert.deepEqual([...col.rest()], [2, 3])
    })

    it('should take n', function () {
      const col = Numbers
      assert.deepEqual([...col.take(3)], [0, 1, 2])
    })
  })
})
