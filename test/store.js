import { describe, it } from 'mocha'
import { strict as assert } from 'assert'
import {
  createStore,
  Reducer,
  createAction,
  thunk,
  createAsyncThunk,
  createSelector,
  applyMiddleware,
} from '../dist/index.js'

const createConfiguredStore = applyMiddleware(thunk)(createStore)

const testReducer = Reducer.builder()
  .case('ADD', (state, action) => ({
    ...state,
    values: state.values.concat(action.payload),
  }))
  .case('REMOVE', (state, action) => ({
    ...state,
    values: state.values.filter((v) => v !== action.payload),
  }))
  .init({ values: [] })
  .build()

describe('Reducer', function () {
  describe('Builder', function () {
    it('should create a reducer function', function () {
      const reducer = Reducer.builder()
        .case('TEST', (state, action) => ({ ...state, test: true }))
        .init({ test: false })
        .build()

      assert.deepEqual(reducer(undefined, { type: 'INIT' }), { test: false })
      assert.deepEqual(reducer({ test: false }, { type: 'TEST' }), {
        test: true,
      })
    })
  })

  describe('combineReducers', function () {
    it('should combine reducers', function () {
      const reducer = Reducer.builder()
        .case('TEST1', (state, action) => ({ ...state, test1: true }))
        .init({ test1: false })
        .build()

      const reducer2 = Reducer.builder()
        .case('TEST2', (state, action) => ({ ...state, test2: true }))
        .init({ test2: false })
        .build()

      const combinedReducer = Reducer.combineReducers({
        a: reducer,
        b: reducer2,
      })

      assert.deepEqual(combinedReducer(undefined, { type: 'INIT' }), {
        a: { test1: false },
        b: { test2: false },
      })

      assert.deepEqual(
        combinedReducer(
          { a: { test1: false }, b: { test2: false } },
          { type: 'TEST2' },
        ),
        { a: { test1: false }, b: { test2: true } },
      )
    })
  })
})

describe('Store', function () {
  describe('createStore', function () {
    it('should create a store', function () {
      const store = createStore(testReducer, { values: [] })
      assert.deepEqual(store.getState(), { values: [] })
    })
  })

  describe('dispatch', function () {
    it('should allow dispatching actions', function () {
      const store = createStore(testReducer, { values: [] })
      store.dispatch({ type: 'ADD', payload: 'hello' })
      assert.deepEqual(store.getState(), { values: ['hello'] })
      store.dispatch({ type: 'REMOVE', payload: 'hello' })
      assert.deepEqual(store.getState(), { values: [] })
    })
  })

  describe('observe', function () {
    it('should allow listening for actions', function (done) {
      const store = createStore(testReducer, { values: [] })
      store
        .observe((state) => state.values)
        .map((values) => values.map((value) => value.toUpperCase()))
        .subscribe((value) => {
          assert.deepEqual(value, ['HELLO'])
          done()
        })

      store.dispatch({ type: 'ADD', payload: 'hello' })
    })

    it('should allow not trigger observer for actions not specified', function (done) {
      const reducer = Reducer.builder()
        .case('CHANGE_NAME', (state, action) => ({
          ...state,
          name: action.payload,
        }))
        .case('ADD_VALUE', (state, action) => ({
          ...state,
          values: state.values.concat(action.payload),
        }))
        .init({ name: '', values: [] })
        .build()

      const store = createStore(reducer)
      store
        .observe((state) => state.values)
        .map((values) => values.map((value) => value.toUpperCase()))
        .subscribe((values) => {
          assert.deepEqual(values, ['HELLO'])
          done()
        })

      store.dispatch({ type: 'CHANGE_NAME', payload: 'tim' })
      store.dispatch({ type: 'ADD_VALUE', payload: 'hello' })
    })
  })

  describe('subscribe', function () {
    it('should allow subscribing to updates', function (done) {
      const store = createConfiguredStore(testReducer, { values: [] })
      store.subscribe(
        (state) => 'values' in state,
        () => {
          const state = store.getState()
          assert.deepEqual(state, { values: ['cat', 'dog'] })
          done()
        },
      )
      store.dispatch({ type: 'ADD', payload: ['cat', 'dog'] })
    })

    it('should allow unsubscribing', function (done) {
      const store = createConfiguredStore(testReducer, { values: [] })
      let count = 0
      const handler = () => {
        const state = store.getState()
        assert.deepEqual(state, { values: ['cat', 'dog'] })
        count++
      }
      const unsub = store.subscribe((state) => 'values' in state, handler)
      store.dispatch({ type: 'ADD', payload: ['cat', 'dog'] })
      unsub()
      store.dispatch({ type: 'ADD', payload: ['snake', 'plance'] })
      assert.equal(count, 1)
      done()
    })
  })
})

describe('createAction', function () {
  describe('Creating an action', function () {
    it('should create an action', function () {
      const action = createAction('TEST')
      assert.deepEqual(action('hello'), { type: 'TEST', payload: 'hello' })
    })

    it('should create an action with a prepareAction function', function () {
      const action = createAction('TEST', (...args) => ({
        payload: args.map((x) => x.toUpperCase()),
      }))
      assert.deepEqual(action('hello world'), {
        type: 'TEST',
        payload: ['HELLO WORLD'],
      })
    })

    it('should let you see the action type', function () {
      const action = createAction('TEST')
      assert.equal(action.type, 'TEST')
    })
  })
})

describe('asyncThunk', function () {
  describe('Creating a thunk', function () {
    it('should create a thunk', function (done) {
      const thunk = createAsyncThunk(
        'ADD',
        (arg) => new Promise((resolve) => setTimeout(() => resolve(arg), 1)),
      )
      const initialState = { values: [] }

      const reducer = Reducer.builder()
        .case(thunk.fulfilled.type, (state = initialState, action) => ({
          ...state,
          values: state.values.concat(action.payload),
        }))
        .init({ values: [] })
        .build()

      const store = createConfiguredStore(reducer)

      let pending = 0
      store.dispatch(thunk('hello'))
      store
        .observe((state) => state.values)
        .subscribe((values) => {
          try {
            if (pending) {
              assert.deepEqual(values, [])
              pending++
            } else {
              assert.deepEqual(values, ['hello'])
              done()
            }
          } catch (err) {
            done(err)
          }
        })
    })
  })

  describe('createSelector', function () {
    it('should create a selector', function () {
      let called = 0
      const store = createConfiguredStore(testReducer)
      const values = (state) => state.values
      const s = createSelector(values, (values) => {
        called++
        return values.map((x) => x.toUpperCase())
      })

      const a = store.getState()
      assert.deepEqual(a, { values: [] })
      store.dispatch({ type: 'ADD', payload: 'kitten' })

      assert.deepEqual(s(store.getState()), ['KITTEN'])
      s(store.getState())
      s(store.getState())
      assert.equal(called, 1)
    })
  })
})
