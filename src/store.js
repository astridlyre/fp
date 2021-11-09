import { createStore } from './store/createStore.js'
import { applyMiddleware } from './store/applyMiddleware.js'
import { thunk } from './store/thunk.js'

export { bindActionCreators } from './store/bindActionCreators.js'
export { createAsyncThunk } from './store/asyncThunk.js'
export { actionListener } from './store/actionListener.js'
export { createAction } from './store/createAction.js'
export { Reducer } from './store/reducer.js'
export { createStore, applyMiddleware, thunk }

/**
 * Convenience function to create a store with thunk middleware already
 * installed
 *
 * @param {function} Reducer function
 * @param {object} Initial state
 * @returns {object} Store
 */
export const createConfiguredStore = applyMiddleware(thunk)(createStore)
