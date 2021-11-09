import { describe, it } from 'mocha'
import { strict as assert } from 'assert'
import { store } from '../src/index.js'

const {
  createStore,
  Reducer,
  createAction,
  createAsyncThunk,
  createConfiguredStore,
  createSelector,
} = store

const testReducer = Reducer.builder()
  .case('ADD', (state, action) => ({
    ...state,
    values: state.values.concat(action.payload),
  }))
  .case('REMOVE', (state, action) => ({
    ...state,
    values: state.values.filter(v => v !== action.payload),
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
      assert.deepEqual(reducer({ test: false }, { type: 'TEST' }), { test: true })
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
        combinedReducer({ a: { test1: false }, b: { test2: false } }, { type: 'TEST2' }),
        { a: { test1: false }, b: { test2: true } }
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
        .observe()
        .map(state => ({
          ...state,
          values: state.values.map(value => value.toUpperCase()),
        }))
        .subscribe(value => {
          assert.deepEqual(value, { values: ['HELLO'] })
          done()
        })

      store.dispatch({ type: 'ADD', payload: 'hello' })
    })
  })

  describe('subscribe', function () {
    it('should allow subscribing to updates', function (done) {
      const store = createConfiguredStore(testReducer, { values: [] })
      store.subscribe(() => {
        const state = store.getState()
        assert.deepEqual(state, { values: ['cat', 'dog'] })
        done()
      })
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
      const unsub = store.subscribe(handler)
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
        payload: args.map(x => x.toUpperCase()),
      }))
      assert.deepEqual(action('hello world'), { type: 'TEST', payload: ['HELLO WORLD'] })
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
      const thunk = createAsyncThunk('ADD', arg => {
        return new Promise(resolve => setTimeout(() => resolve(arg), 1))
      })

      const initalState = { values: [] }
      const reducer = Reducer.builder()
        .case(thunk.fulfilled.type, (state = initalState, action) => ({
          ...state,
          values: state.values.concat(action.payload),
        }))
        .init({ values: [] })
        .build()

      const store = createConfiguredStore(reducer)

      let pending = 0
      store.dispatch(thunk('hello'))
      store.observe().subscribe(state => {
        try {
          if (pending) {
            assert.deepEqual(state, { values: [] })
            pending++
          } else {
            assert.deepEqual(state, { values: ['hello'] })
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
      const values = state => state.values
      const s = createSelector(values, values => {
        called++
        return values.map(x => x.toUpperCase())
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
