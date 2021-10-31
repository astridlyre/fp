export const withNext = observer => next => ({
  next,
  error: observer.error.bind(observer),
  complete: observer.complete.bind(observer),
})

export const placeholder =
  creator =>
  (...initialArgs) =>
    new Proxy(
      {},
      {
        get(_, prop) {
          return (...args) => creator(...initialArgs)[prop](...args)
        },
      }
    )
