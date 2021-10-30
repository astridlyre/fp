export const withNext = observer => next => ({
  next,
  error: observer.error.bind(observer),
  complete: observer.complete.bind(observer),
})
