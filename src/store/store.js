import { createStore } from './createStore.js'
import { applyMiddleware } from './applyMiddleware.js'
import { thunk } from './thunk.js'

export const createConfiguredStore = applyMiddleware(thunk)(createStore)
