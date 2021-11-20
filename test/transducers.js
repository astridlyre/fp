/* eslint func-names: 0 */
import { describe, it } from 'mocha'
import { strict as assert } from 'assert'
import { takeN, cat, filterTR, mapTR, transduce, whileTR } from '../dist/index.js'

describe('Transducers', function () {
  describe('mapTR', function () {
    it('should create a map transducer', function () {
      const map = mapTR(x => x * x)
      const arr = [1, 2, 3]

      assert.deepEqual(transduce([map], cat, [], arr), [1, 4, 9])
    })
  })

  describe('filterTR', function () {
    it('should create a filter transducer', function () {
      const filter = filterTR(x => x > 2)
      const arr = [1, 2, 3, 4]

      assert.deepEqual(transduce([filter], cat, [], arr), [3, 4])
    })
  })

  describe('whileTR', function () {
    it('should create a while transducer', function () {
      const take = whileTR(takeN(5))
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

      assert.deepEqual(transduce([take], cat, [], arr), [1, 2, 3, 4, 5])
    })
  })

  describe('combining transducers', function () {
    it('should combine transducers', function () {
      const map = mapTR(x => x.toUpperCase())
      const filter = filterTR(x => x.startsWith('h'))
      const take2 = whileTR(takeN(2))
      const arr = ['hello', 'world', 'how', 'are', 'you', 'holla']
      const cat = (x, y) => x.concat(y)

      assert.deepEqual(transduce([filter, map, take2], cat, [], arr), ['HELLO', 'HOW'])
    })
  })
})
