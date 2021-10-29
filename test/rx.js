import { Observable } from '../src/rx.js'
import { describe, it } from 'mocha'
import { strict as assert } from 'assert'
import { EventEmitter } from 'events'

describe('Observable', function () {
  describe('fromGenerator', function () {
    it('should create an Observable from a generator', function (done) {
      const gen = function* gen() {
        yield 'hello'
        yield 'world'
      }
      const stream = Observable.fromGenerator(gen())
      const values = []
      stream.subscribe({
        next: value => values.push(value),
        complete: () => {
          assert.deepEqual(values, ['hello', 'world'])
          done()
        },
      })
    })

    it('should create an Observable from an EventEmitter', function (done) {
      const emitter = new EventEmitter()
      const stream = Observable.fromEvent(emitter, 'test', (...args) => [...args])
      const values = []
      stream.subscribe({
        next: value => values.push(value),
        complete: () => {
          assert.deepEqual(values, [['cat'], ['dog']])
          done()
        },
      })
      emitter.emit('test', 'cat')
      emitter.emit('test', 'dog')
      emitter.emit('end')
    })

    it('should throttle a stream', function (done) {
      const stream = Observable.from([1, 2, 3])
      const values = []
      stream.throttle(50).subscribe({
        next: value => values.push(value),
        complete: () => {
          assert.deepEqual(values, [1])
          done()
        },
      })
    })

    it('should debounce a stream', function (done) {
      const stream = new Observable(observer => {
        let num = 20
        let n = 1
        let currentTimeout
        function recur() {
          observer.next(n++)
          currentTimeout = setTimeout(recur, (num += 5))
        }
        recur()
        setTimeout(() => clearTimeout(currentTimeout), 100)
        return () => clearTimeout(currentTimeout)
      })
      const values = []
      const sub = stream.debounce(20).subscribe({
        next: value => {
          values.push(value)
        },
      })
      setTimeout(() => {
        sub.unsubscribe()
        assert.deepEqual(values, [1, 2, 3])
        done()
      }, 100)
    })

    it('should map a stream', function (done) {
      const values = []
      Observable.from([1, 2, 3])
        .map(x => x * x)
        .subscribe({
          next: value => values.push(value),
          complete: () => {
            assert.deepEqual(values, [1, 4, 9])
            done()
          },
        })
    })

    it('should filter a stream', function (done) {
      const values = []
      Observable.from([1, 2, 3, 4, 5, 6])
        .filter(x => x % 2 === 0)
        .subscribe({
          next: value => values.push(value),
          complete: () => {
            assert.deepEqual(values, [2, 4, 6])
            done()
          },
        })
    })

    it('should take from a stream', function (done) {
      const values = []
      Observable.from([1, 2, 3, 4, 5, 6])
        .take(2)
        .subscribe({
          next: value => values.push(value),
          complete: () => {
            assert.deepEqual(values, [1, 2])
            done()
          },
        })
    })

    it('should permit skipping the first n', function (done) {
      const values = []
      Observable.from(['hi', 'there', 'how', 'are', 'you'])
        .skip(2)
        .subscribe({
          next: value => values.push(value),
          complete: () => {
            assert.deepEqual(values, ['how', 'are', 'you'])
            done()
          },
        })
    })

    it('should combine streams', function (done) {
      const values = []
      const streamA = Observable.from([1, 2, 3])
      const streamB = Observable.from(['a', 'b', 'c'])
      streamA.combine(streamB).subscribe({
        next: value => values.push(value),
        complete: () => {
          assert.deepEqual(values, [
            [1, 'a'],
            [2, 'b'],
            [3, 'c'],
          ])
          done()
        },
      })
    })

    it('should combine latest streams', function (done) {
      const values = []
      const streamA = Observable.from([1, 2, 3])
      const streamB = Observable.from(['a', 'b', 'c'])
      streamA.combineLatest(streamB).subscribe({
        next: value => values.push(value),
        complete: () => {
          assert.deepEqual(values, [[3, 'a']])
          done()
        },
      })
    })

    it('should output an interval', function (done) {
      const values = []
      let num = 1
      const sub = Observable.interval(10).subscribe({
        next: () => values.push(num++),
      })
      setTimeout(() => {
        sub.unsubscribe()
        assert.deepEqual(values, [1, 2, 3, 4])
        done()
      }, 50)
    })
  })
})
