import { EventEmitter } from '../src/reactivize.js'
import { Observable } from '../src/rx.js'
import { describe, it } from 'mocha'
import { strict as assert } from 'assert'
import { Readable } from 'stream'

function createAsyncStream(from) {
  return new Observable(observer => {
    function recur(from, i) {
      if (i < from.length) {
        return setTimeout(() => {
          observer.next(from[i])
          recur(from, i + 1)
        }, 1)
      }
      observer.complete()
    }
    recur(from, 0)
  })
}

describe('Observable', function () {
  describe('fromGenerator', function () {
    it('should create an Observable from a generator', function (done) {
      const gen = function* gen() {
        yield 'hello'
        yield 'world'
      }
      const stream = Observable.fromGenerator(gen)
      const values = []
      stream.subscribe({
        next: value => values.push(value),
        complete: () => {
          try {
            assert.deepEqual(values, ['hello', 'world'])
          } catch (err) {
            done(err)
          }
        },
      })
      const values2 = []
      stream.subscribe({
        next: value => {
          values2.push(value)
        },
        complete: () => {
          try {
            assert.deepEqual(values2, ['hello', 'world'])
            done()
          } catch (err) {
            done(err)
          }
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
          try {
            assert.deepEqual(values, [['cat'], ['dog']])
            done()
          } catch (err) {
            done(err)
          }
        },
      })
      emitter.emit('test', 'cat')
      emitter.emit('test', 'dog')
      emitter.emit('end')
    })
  })

  describe('throttle', function () {
    it('should throttle a stream', function (done) {
      const stream = Observable.from([1, 2, 3])
      const values = []
      stream.throttle(50).subscribe({
        next: value => values.push(value),
        complete: () => {
          try {
            assert.deepEqual(values, [1])
            done()
          } catch (err) {
            done(err)
          }
        },
      })
    })

    it('should throttle a stream async', function (done) {
      const stream = createAsyncStream([1, 2, 3])
      const values = []
      stream.throttle(50).subscribe({
        next: value => values.push(value),
        complete: () => {
          try {
            assert.deepEqual(values, [1])
            done()
          } catch (err) {
            done(err)
          }
        },
      })
    })
  })

  describe('debounce', function () {
    it('should debounce a stream', function (done) {
      const values = []
      Observable.from([1, 2, 3])
        .debounce(10)
        .subscribe({
          next: value => values.push(value),
          complete() {
            try {
              assert.deepEqual(values, [3])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })

    it('should debounce a stream async', function (done) {
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
        try {
          assert.deepEqual(values, [1, 2, 3])
          done()
        } catch (err) {
          done(err)
        }
      }, 80)
    })
  })

  describe('map', function () {
    it('should map a stream', function (done) {
      const values = []
      Observable.from([1, 2, 3])
        .map(x => x * x)
        .subscribe({
          next: value => values.push(value),
          complete: () => {
            try {
              assert.deepEqual(values, [1, 4, 9])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
    it('should map a stream async', function (done) {
      const values = []
      createAsyncStream([1, 2, 3])
        .map(x => x * x)
        .subscribe({
          next: value => values.push(value),
          complete: () => {
            try {
              assert.deepEqual(values, [1, 4, 9])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
  })

  describe('filter', function () {
    it('should filter a stream', function (done) {
      const values = []
      Observable.from([1, 2, 3, 4, 5, 6])
        .filter(x => x % 2 === 0)
        .subscribe({
          next: value => values.push(value),
          complete: () => {
            try {
              assert.deepEqual(values, [2, 4, 6])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
    it('should filter a stream async', function (done) {
      const values = []
      createAsyncStream([1, 2, 3, 4, 5, 6])
        .filter(x => x % 2 === 0)
        .subscribe({
          next: value => values.push(value),
          complete: () => {
            try {
              assert.deepEqual(values, [2, 4, 6])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
  })

  describe('take', function () {
    it('should take from a stream', function (done) {
      const values = []
      Observable.from([1, 2, 3, 4, 5, 6])
        .take(2)
        .subscribe({
          next: value => values.push(value),
          complete: () => {
            try {
              assert.deepEqual(values, [1, 2])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
    it('should take from a stream async', function (done) {
      const values = []
      createAsyncStream([1, 2, 3, 4, 5, 6])
        .take(2)
        .subscribe({
          next: value => values.push(value),
          complete: () => {
            try {
              assert.deepEqual(values, [1, 2])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
  })

  describe('skip', function () {
    it('should permit skipping the first n', function (done) {
      const values = []
      Observable.from(['hi', 'there', 'how', 'are', 'you'])
        .skip(2)
        .subscribe({
          next: value => values.push(value),
          complete: () => {
            try {
              assert.deepEqual(values, ['how', 'are', 'you'])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
    it('should permit skipping the first n, async', function (done) {
      const values = []
      createAsyncStream(['hi', 'there', 'how', 'are', 'you'])
        .skip(2)
        .subscribe({
          next: value => values.push(value),
          complete: () => {
            try {
              assert.deepEqual(values, ['how', 'are', 'you'])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
  })

  describe('concat', function () {
    it('should concat streams', function (done) {
      const values = []
      Observable.from([1, 2, 3])
        .concat(Observable.from(['a', 'b', 'c']))
        .subscribe({
          next: value => values.push(value),
          complete() {
            try {
              assert.deepEqual(values, [1, 2, 3, 'a', 'b', 'c'])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
    it('should concat streams async', function (done) {
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
      const streamB = createAsyncStream(['a', 'b', 'c'])
      streamA.concat(streamB).subscribe({
        next: value => values.push(value),
        complete() {
          try {
            assert.deepEqual(values, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'b', 'c'])
            done()
          } catch (err) {
            done(err)
          }
        },
      })
    })
  })

  describe('combine', function () {
    it('should combine latest streams', function (done) {
      const values = []
      const streamA = Observable.from([1, 2, 3])
      const streamB = Observable.from(['a', 'b', 'c'])
      streamA.combine(streamB).subscribe({
        next: value => values.push(value),
        complete: () => {
          try {
            assert.deepEqual(values, [3, 'a'])
            done()
          } catch (err) {
            done(err)
          }
        },
      })
    })
    it('should combine latest streams async', function (done) {
      const values = []
      const streamA = createAsyncStream([1, 2, 3])
      const streamB = createAsyncStream(['a', 'b', 'c'])
      streamA.combine(streamB).subscribe({
        next: value => values.push(value),
        complete: () => {
          try {
            assert.deepEqual(values, [1, 'a', 2, 'b', 3, 'c'])
            done()
          } catch (err) {
            done(err)
          }
        },
      })
    })
  })

  describe('interval', function () {
    it('should output an interval', function (done) {
      const values = []
      let num = 1
      Observable.interval(1)
        .take(5)
        .subscribe({
          next: () => values.push(num++),
          complete: () => {
            try {
              assert.deepEqual(values, [1, 2, 3, 4, 5])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
  })

  describe('merge', function () {
    it('should merge streams', function (done) {
      const values = []
      const streamA = Observable.from([1, 2, 3])
      const streamB = Observable.from(['a', 'b', 'c'])
      Observable.merge(streamA, streamB).subscribe({
        next: value => values.push(value),
        complete: () => {
          try {
            assert.deepEqual(values, [1, 2, 3, 'a', 'b', 'c'])
            done()
          } catch (err) {
            done(err)
          }
        },
      })
    })
    it('should merge streams async', function (done) {
      const values = []
      const streamA = createAsyncStream([1, 2, 3])
      const streamB = createAsyncStream(['a', 'b', 'c'])
      Observable.merge(streamA, streamB).subscribe({
        next: value => values.push(value),
        complete: () => {
          try {
            assert.deepEqual(values, [1, 'a', 2, 'b', 3, 'c'])
            done()
          } catch (err) {
            done(err)
          }
        },
      })
    })
  })

  describe('merge promise', function () {
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
          try {
            assert.deepEqual(values, ['hello', 'world'])
            done()
          } catch (err) {
            done(err)
          }
        },
      })
    })
  })

  describe('switch', function () {
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
            try {
              assert.deepEqual(values, ['a', 'b', 'c'])
              done()
            } catch (err) {
              done(err)
            }
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
            try {
              assert.deepEqual(values2, [1, 2, 3, 4])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
  })

  describe('flatMap', function () {
    it('should flatMap', function (done) {
      const values = []
      const streamA = Observable.from([1, 2, 3])
      streamA
        .flatMap(x => Observable.from([x + x, x]))
        .subscribe({
          next: value => values.push(value),
          complete: () => {
            try {
              assert.deepEqual(values, [2, 1, 4, 2, 6, 3])
              done()
            } catch (err) {
              done(err)
            }
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
            try {
              assert.deepEqual(values, ['a', 1, 'a', 2, 'a', 3, 'a', 4])
              done()
            } catch (err) {
              done(err)
            }
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
            try {
              assert.deepEqual(values, ['hithere', 'hellothere'])
              done()
            } catch (err) {
              done(err)
            }
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
            try {
              assert.deepEqual(values, ['hithere'])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
  })

  describe('pick', function () {
    it('should pick', function (done) {
      const values = []
      Observable.from([{ name: 'tim' }, { name: 'bob' }])
        .pick('name')
        .subscribe({
          next: value => values.push(value),
          complete() {
            try {
              assert.deepEqual(values, ['tim', 'bob'])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
    it('should pick async', function (done) {
      const values = []
      createAsyncStream([{ name: 'tim' }, { name: 'bob' }])
        .pick(['name'])
        .subscribe({
          next: value => values.push(value),
          complete() {
            try {
              assert.deepEqual(values, ['tim', 'bob'])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
  })

  describe('distinct', function () {
    it('should filter distinct', function (done) {
      const values = []
      Observable.from([1, 2, 2, 2, 3, 4, 5, 5, 6])
        .distinct()
        .subscribe({
          next: value => values.push(value),
          complete() {
            try {
              assert.deepEqual(values, [1, 2, 3, 4, 5, 6])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
    it('should filter distinct async', function (done) {
      const values = []
      createAsyncStream([1, 2, 2, 2, 3, 4, 5, 5, 6])
        .distinct()
        .subscribe({
          next: value => values.push(value),
          complete() {
            try {
              assert.deepEqual(values, [1, 2, 3, 4, 5, 6])
              done()
            } catch (err) {
              done(err)
            }
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
            try {
              assert.deepEqual(values, [
                { name: 'tim', age: 2 },
                { name: 'tim', age: 3 },
                { name: 'tim', age: 2 },
              ])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
    it('should filter distinct with a function, async', function (done) {
      const values = []
      createAsyncStream([
        { name: 'tim', age: 2 },
        { name: 'tim', age: 3 },
        { name: 'tim', age: 3 },
        { name: 'tim', age: 2 },
      ])
        .distinct(x => x.age)
        .subscribe({
          next: value => values.push(value),
          complete() {
            try {
              assert.deepEqual(values, [
                { name: 'tim', age: 2 },
                { name: 'tim', age: 3 },
                { name: 'tim', age: 2 },
              ])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
  })

  describe('until', function () {
    it('should stream until', function (done) {
      const values = []
      Observable.from([1, 2, 3, 4, 5])
        .until(n => n > 3)
        .subscribe({
          next: value => values.push(value),
          complete() {
            try {
              assert.deepEqual(values, [1, 2, 3])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
    it('should stream until, async', function (done) {
      const values = []
      createAsyncStream([1, 2, 3, 4, 5])
        .until(n => n > 3)
        .subscribe({
          next: value => values.push(value),
          complete() {
            try {
              assert.deepEqual(values, [1, 2, 3])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
  })

  describe('catch', function () {
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
            try {
              assert.equal(value, 'Error: Uh oh')
              done()
            } catch (err) {
              done(err)
            }
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
            try {
              assert.equal(value, 1)
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
  })

  describe('zip', function () {
    it('should zip multiple streams', function (done) {
      const values = []
      Observable.from([1, 2, 3])
        .zip(Observable.from(['a', 'b', 'c']), Observable.from([4, 5, 6]))
        .subscribe({
          next: value => values.push(value),
          complete() {
            try {
              assert.deepEqual(values, [
                [1, 'a', 4],
                [2, 'b', 5],
                [3, 'c', 6],
              ])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
    it('should zip multiple streams, async', function (done) {
      const values = []
      createAsyncStream([1, 2, 3])
        .zip(createAsyncStream(['a', 'b', 'c']), createAsyncStream([4, 5, 6]))
        .subscribe({
          next: value => values.push(value),
          complete() {
            try {
              assert.deepEqual(values, [
                [1, 'a', 4],
                [2, 'b', 5],
                [3, 'c', 6],
              ])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
    it('should allow custom zipper function', function (done) {
      const values = []
      Observable.from([1, 2, 3])
        .zip(
          (...args) => args.reduce((acc, cv) => acc + cv, 0),
          Observable.from([2, 3, 4])
        )
        .subscribe({
          next: value => values.push(value),
          complete() {
            try {
              assert.deepEqual(values, [3, 5, 7])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
    it('should allow custom zipper function, async', function (done) {
      const values = []
      createAsyncStream([1, 2, 3])
        .zip(
          (...args) => args.reduce((acc, cv) => acc + cv, 0),
          createAsyncStream([2, 3, 4])
        )
        .subscribe({
          next: value => values.push(value),
          complete() {
            try {
              assert.deepEqual(values, [3, 5, 7])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
  })

  describe('retry', function () {
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
        .retry({ delay: 1 })
        .subscribe({
          next: value => values.push(value),
          complete() {
            try {
              assert.deepEqual(values, ['hello'])
              done()
            } catch (err) {
              done(err)
            }
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
        .retry({ delay: 1, retries: 3 })
        .subscribe({
          next: value => values.push(value),
          complete() {
            try {
              assert.deepEqual(values, ['hello'])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
  })

  describe('finally', function () {
    it('should perform cleanup function with finally', function (done) {
      const values = []
      new Observable(observer => {
        observer.next('hi')
        throw new Error('test')
      })
        .finally(() => values.push('there'))
        .subscribe({
          next: value => values.push(value),
          complete() {
            try {
              assert.deepEqual(values, ['hi', 'there'])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
  })

  describe('buffer', function () {
    it('should buffer streams', function (done) {
      const values = []
      Observable.from([1, 2, 3, 4])
        .buffer(2)
        .subscribe({
          next: value => values.push(value),
          complete() {
            try {
              assert.deepEqual(values, [
                [1, 2],
                [3, 4],
              ])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })

    it('should buffer streams async', function (done) {
      const values = []
      createAsyncStream([1, 2, 3, 4])
        .buffer(2)
        .subscribe({
          next: value => values.push(value),
          complete() {
            try {
              assert.deepEqual(values, [
                [1, 2],
                [3, 4],
              ])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
    })
  })

  describe('share', function () {
    it('should share a stream', function (done) {
      const values = []
      const values2 = []
      let completed = 0
      const stream = createAsyncStream([1, 2, 3, 4]).share()

      stream.subscribe({
        next: value => {
          values.push(value)
        },
        complete() {
          completed++
          completed === 2 && test()
        },
      })
      stream.subscribe({
        next: value => values2.push(value),
        complete() {
          completed++
          completed === 2 && test()
        },
      })

      function test() {
        try {
          assert.deepEqual(values2, values)
          assert.deepEqual(values, [1, 2, 3, 4])
          done()
        } catch (err) {
          done(err)
        }
      }
    })

    it('should share a stream, allowing map and filter', function (done) {
      const values = []
      const values2 = []
      let completed = 0
      const stream = createAsyncStream([1, 2, 3, 4]).share()

      stream
        .map(x => x * x)
        .subscribe({
          next: value => {
            values.push(value)
          },
          complete() {
            completed++
            completed === 2 && test()
          },
        })
      stream
        .filter(n => n % 2 === 0)
        .subscribe({
          next: value => values2.push(value),
          complete() {
            completed++
            completed === 2 && test()
          },
        })

      function test() {
        try {
          assert.deepEqual(values, [1, 4, 9, 16])
          assert.deepEqual(values2, [2, 4])
          done()
        } catch (err) {
          done(err)
        }
      }
    })

    it('should share a sync stream', function (done) {
      const values = []
      const values2 = []
      let completed = 0
      const stream = Observable.from([1, 2, 3, 4]).share()

      stream.subscribe({
        next: value => values.push(value),
        complete() {
          completed++
          completed === 2 && test()
        },
      })
      stream.subscribe({
        next: value => values2.push(value),
        complete() {
          completed++
          completed === 2 && test()
        },
      })

      function test() {
        try {
          assert.deepEqual(values2, values)
          assert.deepEqual(values, [1, 2, 3, 4])
          done()
        } catch (err) {
          done(err)
        }
      }
    })
  })

  describe('fromStream', function () {
    it('should make an observable from a stream', function (done) {
      const values = []
      const stream = Readable.from([1, 2, 3])
      Observable.fromStream(stream).subscribe({
        next: value => values.push(value),
        complete() {
          try {
            assert.deepEqual(values, [1, 2, 3])
            done()
          } catch (err) {
            done(err)
          }
        },
      })
    })
  })

  describe('subject', function () {
    it('should allow subscribing and pushing', function (done) {
      const values = []
      const stream = Observable.subject()
      stream.subscribe({
        next: value => {
          values.push(value)
        },
        complete() {
          try {
            assert.deepEqual(values, [1, 2, 3])
            done()
          } catch (err) {
            done(err)
          }
        },
      })
      stream.next(1)
      stream.next(2)
      stream.next(3)
      stream.complete()
    })

    it('should allow map', function (done) {
      const values = []
      const stream = Observable.subject()
      stream
        .map(x => x * x)
        .subscribe({
          next: value => values.push(value),
          complete() {
            try {
              assert.deepEqual(values, [1, 4, 9])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
      stream.next(1)
      stream.next(2)
      stream.next(3)
      stream.complete()
    })

    it('should allow filter', function (done) {
      const values = []
      const stream = Observable.subject()
      stream
        .map(x => x * x)
        .filter(x => x % 2 === 0)
        .subscribe({
          next: value => values.push(value),
          complete() {
            try {
              assert.deepEqual(values, [4, 16, 36])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
      Observable.from([1, 2, 3, 4, 5, 6]).subscribe(stream)
    })

    it('should work with async stream', function (done) {
      const values = []
      const stream = Observable.subject()
      stream
        .map(x => x.toUpperCase())
        .flatMap(x => Observable.from([1, 2].map(n => x + n)))
        .subscribe({
          next: value => values.push(value),
          complete() {
            try {
              assert.deepEqual(values, ['HELLO1', 'HELLO2', 'WORLD1', 'WORLD2'])
              done()
            } catch (err) {
              done(err)
            }
          },
        })
      createAsyncStream(['hello', 'world']).subscribe(stream)
    })
  })

  describe('makeObservable', function () {
    it('should make regular object observable', function (done) {
      const obj = { name: 'tim' }
      const observed = Observable.makeObservable(obj)

      observed.observe().subscribe(value => {
        assert.deepEqual(value, { name: 'john' })
        done()
      })

      observed.name = 'john'
    })

    it('should dispatch when making new property', function (done) {
      const obj = { name: 'tim' }
      const observed = Observable.makeObservable(obj)

      observed.observe().subscribe(value => {
        assert.deepEqual(value, { name: 'tim', age: 5 })
        done()
      })

      observed.age = 5
    })

    it('should dispatch when property deleted', function (done) {
      const obj = { name: 'tim', age: 5 }
      const observed = Observable.makeObservable(obj)

      observed.observe().subscribe(value => {
        assert.deepEqual(value, { name: 'tim' })
        done()
      })

      delete observed.age
    })

    it('should observe an array', function (done) {
      const arr = [1, 2, 3]
      const observed = Observable.makeObservable(arr)

      observed.observe().subscribe(value => {
        assert.deepEqual(value, [1, 2, 3, 4])
        done()
      })
      observed.push(4)
    })

    it('should observe method calls', function (done) {
      const obj = {
        name: 'tim',
        setName(name) {
          this.name = name
        },
      }
      const observed = Observable.makeObservable(obj)

      observed.observe().subscribe(value => {
        assert.equal(value.name, 'john')
        done()
      })

      observed.setName('john')
    })

    it('should not dispatch twice if called with same args', function (done) {
      let called = 0
      const obj = {
        name: 'tim',
        setName(name) {
          this.name = name
        },
      }
      const observed = Observable.makeObservable(obj)

      observed.observe().subscribe(value => {
        called++
        assert.deepEqual(value.name, 'john')
      })

      observed.setName('john')
      observed.setName('john')
      assert.equal(called, 1)
      done()
    })

    it('should dispatch if called with different args', function (done) {
      let called = 0
      const obj = {
        name: 'tim',
        setName(name) {
          this.name = name
        },
      }
      const observed = Observable.makeObservable(obj)

      observed.observe(['setName', 'name']).subscribe(value => {
        called++
        if (called === 1 || called === 3) {
          assert.deepEqual(value.name, 'john')
        } else {
          assert.deepEqual(value.name, 'craig')
        }
      })

      observed.setName('john')
      observed.setName('craig')
      observed.setName('john')
      assert.equal(called, 3)
      done()
    })

    it('should not dispatch if not observing prop', function (done) {
      let called = 0
      const obj = {
        name: 'tim',
        setName(name) {
          this.name = name
        },
        age: 16,
      }
      const observed = Observable.makeObservable(obj)

      observed.observe(['name', 'setName']).subscribe(value => {
        done(new Error('Should not have been called'))
      })

      observed.age = 17
      assert.equal(called, 0)
      done()
    })

    it('should not dispatch if a prop is accessed only', function (done) {
      let called = 0
      const obj = { name: 'tim' }
      const observed = Observable.makeObservable(obj)
      observed.observe().subscribe(value => {
        called++
        done(new Error('Expected not to be called'))
      })

      observed.name
      assert.equal(called, 0)
      done()
    })
  })
})
