import { isArray, isFunction } from '../functions/predicates'
import { memoize } from '../functions/utils'
import { head } from '../functions/arrays'

/**
 * createSelector takes some function and memoizes it
 */
export function createSelector(...fns: Function[]) {
  let recomputations = 0
  let lastResult: any
  let resultFunc = fns.pop()

  if (!isFunction(resultFunc)) {
    throw new Error(
      `createSelector expects an output function after the ` +
        `inputs, but received: ${resultFunc}`
    )
  }

  const dependencies = getDependencies(fns)

  const memoizedResultFunc = memoize(function wrappedResultFunc() {
    recomputations++
    return resultFunc!.apply(null, arguments)
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

function getDependencies(fns: Function[]) {
  const dependencies = isArray(head(fns)) ? head(fns) : fns

  if (!dependencies.every(isFunction)) {
    throw new Error('createSelector expects all input-selectors to be functions')
  }

  return dependencies
}
