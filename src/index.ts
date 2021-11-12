import * as rx from './observable/Observable'

export {
  accumulate,
  arity,
  binary,
  bound,
  callFirst,
  callLast,
  compose,
  constant,
  curry,
  debounce,
  deepEqual,
  demethodize,
  filterTR,
  flip2,
  flip3,
  fromJSON,
  groupBy,
  identity,
  invoke,
  keyBy,
  len,
  log,
  mapTR,
  memoize,
  negate,
  not,
  once,
  parse,
  pipe,
  send,
  stringify,
  tap,
  tee,
  ternary,
  toInteger,
  toJSON,
  toString,
  transduce,
  tryCatch,
  unary,
  unique,
} from './functions/utils'

export {
  isNumber,
  isBoolean,
  isNull,
  isUndefined,
  isString,
  isObject,
  isArray,
  isInstanceOf,
  isFunction,
  isAsyncFunction,
  isGeneratorFunction,
  isAsyncGeneratorFunction,
  isSet,
  isMap,
  isEmpty,
  isClass,
} from './functions/predicates'

export {
  composeM,
  liftA2,
  liftA3,
  liftA4,
  apply,
  flat,
  flatMap,
  fold,
  getOrElseThrow,
  head,
  last,
  every,
  some,
  find,
  sum,
  average,
  join,
  partition,
  zipMap,
  sortBy,
  forEach,
  map,
  filter,
  reduce,
  reduceRight,
  pluck,
  deepMap,
  range,
  deepJoin,
} from './functions/arrays'

export {
  composeAsync,
  pipeAsync,
  mapAsync,
  filterAsync,
  reduceAsync,
} from './functions/async'

export {
  eq,
  add,
  addRight,
  subtract,
  subtractRight,
  multiply,
  divide,
  divideRight,
  roundTo,
  pow,
} from './functions/math'

export {
  prop,
  setPropM,
  setProp,
  set,
  props,
  pick,
  deepProp,
  deepSetProp,
  deepPick,
  diff,
  aggregate,
  aggregateOn,
  merge,
  entries,
  values,
  keys,
  rename,
  deepFreeze,
  deepCopyArray,
  deepCopy,
  immutable,
} from './functions/objects'

export {
  match,
  replace,
  split,
  toLowerCase,
  toUpperCase,
  prepend,
  append,
  padStart,
  padEnd,
} from './functions/strings'

export { Append } from './decorators/Append'
export { Prepend } from './decorators/Prepend'
export { Define } from './decorators/Define'
export { Override } from './decorators/Override'
export {
  after,
  before,
  provided,
  unless,
  wrapWith,
  beforeAll,
  afterAll,
  aroundAll,
} from './decorators/methods'

export { FunctionalMixin } from './mixins/functionalMixin'
export { ClassMixin } from './mixins/classMixin'
export { withValidation } from './mixins/withValidation'
export { SubclassFactory, FactoryFactory } from './mixins/factories'

export { Maybe, Nothing, Just } from './adts/Maybe'
export { Result, Failure, Success } from './adts/Result'
export { Try, TryAsync } from './adts/Try'
export { IO, IOAsync } from './adts/IO'
export { Pair, Triple, Enum } from './adts/Records'

export { createClient } from './fetch/fetch'

export {
  compact,
  drop,
  filterWith,
  first,
  mapAllWith,
  mapWith,
  memoizeIter,
  reduceWith,
  rest,
  take,
  untilWith,
  zip,
  zipWith,
} from './iterators/iterators'
export { Lazy, Collection, Numbers, Stack } from './lazy/Lazy'

export { Observable } from './observable/Observable'
export { EventEmitter, reactivize } from './observable/reactivize'
export { rx }

export { multi, method } from './multimethod/multimethod'

export {
  createFilterStream,
  createFork,
  createMapStream,
  createMerge,
  createReduceStream,
  LimitedParallelStream,
  ParallelStream,
} from './streams/streams'

export { actionListener } from './store/actionListener'
export { createAsyncThunk } from './store/asyncThunk'
export { bindActionCreators } from './store/bindActionCreators'
export { combineReducers } from './store/combineReducers'
export { createAction } from './store/createAction'
export { createSelector } from './store/createSelector'
export { isPlainObject } from './store/isPlainObject'
export { createStore } from './store/createStore'
export { thunk } from './store/thunk'
export { Reducer } from './store/reducer'
export { createConfiguredStore } from './store/store'
