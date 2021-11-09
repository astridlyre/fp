import { describe, it } from 'mocha'
import { strict as assert } from 'assert'
import { store } from '../src/index.js'

const { createStore, applyMiddleware, combineReducers } = store

const testReducer = (state = { values: [] }, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, values: state.values.concat(action.payload) }
    case 'REMOVE':
      return { ...state, values: state.values.filter(v => v !== action.payload) }
    default:
      return state
  }
}

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
})
