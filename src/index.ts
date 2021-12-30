import * as rx from './observable/Observable'

export {
  accumulate,
  and,
  arity,
  binary,
  binarySearch,
  bound,
  callFirst,
  callLast,
  compose,
  constant,
  createSearcher,
  curry,
  debounce,
  deepEqual,
  demethodize,
  filterTR,
  flip2,
  flip3,
  fromJSON,
  groupBy,
  groupByF,
  groupByFMap,
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
  or,
  parse,
  pipe,
  reduced,
  send,
  stringify,
  takeN,
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
  whileTR,
} from './functions/utils'

export {
  isArray,
  isAsyncFunction,
  isAsyncGeneratorFunction,
  isBoolean,
  isClass,
  isEmpty,
  isFunction,
  isGeneratorFunction,
  isInstanceOf,
  isMap,
  isNull,
  isNumber,
  isObject,
  isReduced,
  isSet,
  isString,
  isUndefined,
} from './functions/predicates'

export {
  apply,
  average,
  cat,
  composeM,
  deepJoin,
  deepMap,
  every,
  filter,
  find,
  flat,
  flatMap,
  fold,
  forEach,
  getOrElseThrow,
  head,
  join,
  last,
  liftA2,
  liftA3,
  liftA4,
  map,
  partition,
  pluck,
  range,
  reduce,
  reduceRight,
  some,
  sortBy,
  sum,
  zipMap,
} from './functions/arrays'

export {
  composeAsync,
  filterAsync,
  mapAsync,
  pipeAsync,
  reduceAsync,
} from './functions/async'

export {
  add,
  addRight,
  divide,
  divideRight,
  eq,
  multiply,
  pow,
  roundTo,
  subtract,
  subtractRight,
} from './functions/math'

export {
  aggregate,
  aggregateOn,
  deepCopy,
  deepCopyArray,
  deepFreeze,
  deepPick,
  deepProp,
  deepSetProp,
  deepUpdate,
  diff,
  entries,
  immutable,
  keys,
  merge,
  pick,
  prop,
  props,
  rename,
  set,
  setProp,
  setPropM,
  update,
  values,
} from './functions/objects'

export {
  append,
  match,
  padEnd,
  padStart,
  prepend,
  replace,
  split,
  toLowerCase,
  toUpperCase,
} from './functions/strings'

export { Append } from './decorators/Append'
export { Prepend } from './decorators/Prepend'
export { Define } from './decorators/Define'
export { Override } from './decorators/Override'
export {
  after,
  afterAll,
  aroundAll,
  before,
  beforeAll,
  provided,
  unless,
  wrapWith,
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
export { nanoid } from './store/nanoid'
export { thunk } from './store/thunk'
export { Reducer } from './store/reducer'
export { createConfiguredStore } from './store/store'
