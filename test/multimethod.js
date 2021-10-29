import { method, multi } from '../src/multimethod.js'
import { describe, it } from 'mocha'
import { strict as assert } from 'assert'

describe('Multi', function () {
  describe('method', function () {
    it('should register multiple handlers', function () {
      const dispatch = multi(method(['red', 'green'], 'blue'), method(['blue'], 'red'))
      assert.deepEqual(dispatch('red', 'green'), 'blue')
    })

    it('should allow custom dispatch', function () {
      const store = {
        todos: [],
        add(todo) {
          this.todos.push({ text: todo, id: this.todos.length + 1 })
          return this
        },
        remove(id) {
          this.todos = this.todos.filter(td => td.id !== id)
          return this
        },
      }
      const dispatch = multi(
        (action, store) => action.type,
        method('ADD_TODO', (action, store) => store.add(action.text)),
        method('REMOVE_TODO', (action, store) => store.remove(action.id))
      )
      dispatch({ type: 'ADD_TODO', text: 'Hello world' }, store)
      assert.deepEqual(store.todos, [{ text: 'Hello world', id: 1 }])
      dispatch({ type: 'REMOVE_TODO', id: 1 }, store)
      assert.deepEqual(store.todos, [])
    })

    it('should allow extending multimethod', function () {
      const a = multi(method('hi', () => 'there'))
      assert.deepEqual(a('hi'), 'there')
      const b = multi.extend(
        a,
        method('a', () => 'b')
      )
      assert.deepEqual(b('a'), 'b')
      assert.throws(() => a('a'), 'b')
    })

    it('should allow map', function () {
      const a = multi(method('a', () => 'b'))
      const upper = a.map(s => s.toUpperCase())
      assert.deepEqual(upper('a'), 'B')
    })

    it('should set a default handler', function () {
      const a = multi(
        method('a', () => 'b'),
        method(() => 'c')
      )
      assert.deepEqual(a(), 'c')
      assert.deepEqual(a('a'), 'b')
    })

    it('should handle keys that are functions', function () {
      const router = multi(
        method(req => ['GET'].includes(req.method) && req.url === '/', 'Hello world!'),
        method(
          req => ['GET', 'POST'].includes(req.method) && req.url === '/users',
          [{ id: 1, name: 'John' }]
        ),
        method('Oops!')
      )
      assert.deepEqual(router({ method: 'GET', url: '/' }), 'Hello world!')
    })
    it('should handle classes', function () {
      class A {
        sayHi() {
          return 'a'
        }
      }
      class B {
        sayHi() {
          return 'b'
        }
      }
      const handler = multi(
        x => x.constructor,
        method(A, a => a.sayHi() + '!'),
        method(B, b => b.sayHi())
      )
      assert.deepEqual(handler(new B()), 'b')
      assert.deepEqual(handler(new A()), 'a!')
    })

    it('should throw an error if no handlers', function () {
      const mm = multi(method('a', 'b'))
      assert.throws(() => mm('b'), 'No handlers for args (["b"])')
    })
  })
})
