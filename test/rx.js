import { EventEmitter } from '../src/reactivize.js'
import { Observable } from '../src/rx.js'
import { describe, it } from 'mocha'
import { strict as assert } from 'assert'

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
  })

  describe('from EventEmitter', function () {
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
  })

  describe('operators', function () {
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

    it('should concat streams', function (done) {
      const values = []
      const streamA = new Observable(observer => {
        let n = 0
        let to = null
        function go() {
          if (n < 10) {
            to = setTimeout(() => {
              observer.next(++n)
              go()
            }, 1)
          } else observer.complete()
        }
        go()
        return () => clearTimeout(to)
      })
      const streamB = Observable.from(['a', 'b', 'c'])
      streamA.concat(streamB).subscribe({
        next: value => values.push(value),
        complete() {
          assert.deepEqual(values, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'b', 'c'])
          done()
        },
      })
    })

    it('should combine latest streams', function (done) {
      const values = []
      const streamA = Observable.from([1, 2, 3])
      const streamB = Observable.from(['a', 'b', 'c'])
      streamA.combine(streamB).subscribe({
        next: value => values.push(value),
        complete: () => {
          assert.deepEqual(values, [3, 'a'])
          done()
        },
      })
    })

    it('should output an interval', function (done) {
      const values = []
      let num = 1
      Observable.interval(10)
        .take(5)
        .subscribe({
          next: () => values.push(num++),
          complete: () => {
            assert.deepEqual(values, [1, 2, 3, 4, 5])
            done()
          },
        })
    })

    it('should merge streams', function (done) {
      const values = []
      const streamA = Observable.from([1, 2, 3])
      const streamB = Observable.from(['a', 'b', 'c'])
      Observable.merge(streamA, streamB).subscribe({
        next: value => values.push(value),
        complete: () => {
          assert.deepEqual(values, [1, 2, 3, 'a', 'b', 'c'])
          done()
        },
      })
    })

    it('should merge promise-based streams', function (done) {
      const values = []
      const streamA = Observable.fromPromise(
        new Promise(resolve => setTimeout(() => resolve('hello'), 10))
      )
      const streamB = Observable.fromPromise(
        new Promise(resolve => setTimeout(() => resolve('world'), 15))
      )
      Observable.merge(streamA, streamB).subscribe({
        next: value => values.push(value),
        complete() {
          assert.deepEqual(values, ['hello', 'world'])
          done()
        },
      })
    })

    it('should switch streams', function (done) {
      const values = []
      const streamA = Observable.from([1, 2, 3])
      const streamB = Observable.from(['a', 'b', 'c'])
      streamA
        .map(() => streamB)
        .switch()
        .subscribe({
          next: value => values.push(value),
          complete: () => {
            assert.deepEqual(values, ['a', 'b', 'c'])
            done()
          },
        })
    })

    it('should switch streams async', function (done) {
      const values2 = []
      const stream1 = new Observable(observer => {
        setTimeout(() => observer.next(), 10)
        setTimeout(() => observer.complete(), 20)
      })
      const stream2 = Observable.from([1, 2, 3, 4])
      stream1
        .map(() => stream2)
        .switch()
        .subscribe({
          next: value => values2.push(value),
          complete: () => {
            assert.deepEqual(values2, [1, 2, 3, 4])
            done()
          },
        })
    })

    it('should flatMap', function (done) {
      const values = []
      const streamA = Observable.from([1, 2, 3])
      streamA
        .flatMap(x => Observable.from([x + x]))
        .subscribe({
          next: value => values.push(value),
          complete: () => {
            assert.deepEqual(values, [2, 4, 6])
            done()
          },
        })
    })

    it('should flatMap async', function (done) {
      let n = 1
      const values = []
      const streamA = Observable.interval(5).take(4)
      streamA
        .flatMap(() => Observable.from(['a', n++]))
        .subscribe({
          next: value => values.push(value),
          complete: () => {
            assert.deepEqual(values, ['a', 1, 'a', 2, 'a', 3, 'a', 4])
            done()
          },
        })
    })

    it('should flatMap another flatMap', function (done) {
      const values = []
      Observable.interval(5)
        .take(1)
        .flatMap(() => Observable.of('hi', 'hello'))
        .flatMap(value => Observable.of(value + 'there'))
        .subscribe({
          next: value => values.push(value),
          complete: () => {
            assert.deepEqual(values, ['hithere', 'hellothere'])
            done()
          },
        })
    })

    it('should flatMap with a promise', function (done) {
      const values = []
      Observable.fromPromise(new Promise(resolve => setTimeout(() => resolve('hi'), 10)))
        .flatMap(str =>
          Observable.fromPromise(
            new Promise(resolve => setTimeout(() => resolve(str + 'there'), 50))
          )
        )
        .flatMap(result => Observable.of(result))
        .subscribe({
          next: value => values.push(value),
          complete() {
            assert.deepEqual(values, ['hithere'])
            done()
          },
        })
    })

    it('should pick', function (done) {
      const values = []
      Observable.from([{ name: 'tim' }, { name: 'bob' }])
        .pick(['name'])
        .subscribe({
          next: value => values.push(value),
          complete() {
            assert.deepEqual(values, ['tim', 'bob'])
            done()
          },
        })
    })

    it('should filter distinct', function (done) {
      const values = []
      Observable.from([1, 2, 2, 2, 3, 4, 5, 5, 6])
        .distinct()
        .subscribe({
          next: value => values.push(value),
          complete() {
            assert.deepEqual(values, [1, 2, 3, 4, 5, 6])
            done()
          },
        })
    })

    it('should filter distinct with a function', function (done) {
      const values = []
      Observable.from([
        { name: 'tim', age: 2 },
        { name: 'tim', age: 3 },
        { name: 'tim', age: 3 },
        { name: 'tim', age: 2 },
      ])
        .distinct(x => x.age)
        .subscribe({
          next: value => values.push(value),
          complete() {
            assert.deepEqual(values, [
              { name: 'tim', age: 2 },
              { name: 'tim', age: 3 },
              { name: 'tim', age: 2 },
            ])
            done()
          },
        })
    })

    it('should stream until', function (done) {
      const values = []
      Observable.from([1, 2, 3, 4, 5])
        .until(n => n > 3)
        .subscribe({
          next: value => values.push(value),
          complete() {
            assert.deepEqual(values, [1, 2, 3])
            done()
          },
        })
    })

    it('should catch error', function (done) {
      new Observable(observer => {
        let n = 0
        if (n < 1) {
          n++
          throw new Error('Uh oh')
        }
        observer.next(n)
      })
        .catch(err => `Error: ${err.message}`)
        .subscribe({
          next: value => {
            assert.equal(value, 'Error: Uh oh')
            done()
          },
        })
    })

    it('should catch error and restart', function (done) {
      let n = 0
      new Observable(observer => {
        if (n < 1) {
          n++
          throw new Error('Uh oh')
        }
        observer.next(n)
      })
        .catch((_, source) => source)
        .subscribe({
          next: value => {
            assert.equal(value, 1)
            done()
          },
        })
    })

    it('should zip multiple streams', function (done) {
      const values = []
      Observable.from([1, 2, 3])
        .zip(Observable.from(['a', 'b', 'c']), Observable.from([4, 5, 6]))
        .subscribe({
          next: value => values.push(value),
          complete() {
            assert.deepEqual(values, [
              [1, 'a', 4],
              [2, 'b', 5],
              [3, 'c', 6],
            ])
            done()
          },
        })
    })

    it('should retry', function (done) {
      const values = []
      let n = 0
      new Observable(observer => {
        if (n === 1) {
          observer.next('hello')
          observer.complete()
        }
        n++
        throw new Error('NO')
      })
        .retry({ delay: 2 })
        .subscribe({
          next: value => values.push(value),
          complete() {
            assert.deepEqual(values, ['hello'])
            done()
          },
        })
    })

    it('should retry n times', function (done) {
      const values = []
      let n = 0
      new Observable(observer => {
        if (n === 3) {
          observer.next('hello')
          observer.complete()
        }
        n++
        throw new Error('NO')
      })
        .retry({ delay: 1 })
        .subscribe({
          next: value => values.push(value),
          complete() {
            assert.deepEqual(values, ['hello'])
            done()
          },
        })
    })
  })
})