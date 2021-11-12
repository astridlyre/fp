/* eslint no-unused-vars: 0, prefer-spread: 0, prefer-rest-params: 0 */
import { isArray, isFunction } from '../functions/predicates'
import { memoize } from '../functions/utils'
import { head } from '../functions/arrays'

type Selector = (state: any) => any

/**
 * createSelector takes some function and memoizes it
 */
export function createSelector(...fns: Selector[]) {
  let recomputations = 0
  let lastResult: any
  const resultFunc = fns.pop()

  if (!isFunction(resultFunc)) {
    throw new Error(
      `createSelector expects an output function after the ` +
        `inputs, but received: ${resultFunc}`
    )
  }

  const dependencies = getDependencies(fns)

  const memoizedResultFunc = memoize(function wrappedResultFunc(/*... args*/) {
    recomputations++
    return resultFunc && resultFunc.apply(null, arguments as any)
  })

  const selector = memoize(function selector() {
    const params = []
    const length = dependencies.length

    for (let i = 0; i < length; i++) {
      params.push(dependencies[i].apply(null, arguments))
    }

    lastResult = memoizedResultFunc.apply(null, params)
    return lastResult
  })

  return Object.assign(selector, {
    resultFunc,
    memoizedResultFunc,
    dependencies,
    lastResult: () => lastResult,
    recomputations: () => recomputations,
    resetRecomputations: () => (recomputations = 0),
  })
}

function getDependencies(fns: Selector[]) {
  const dependencies = isArray(head(fns)) ? head(fns) : fns

  if (!dependencies.every(isFunction)) {
    throw new Error('createSelector expects all input-selectors to be functions')
  }

  return dependencies
}
