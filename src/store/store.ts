import { createStore } from './createStore'
import { applyMiddleware } from './applyMiddleware'
import { thunk } from './thunk'

export const createConfiguredStore = applyMiddleware(thunk)(createStore)
