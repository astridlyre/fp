/**
 * IsEmpty
 * @param {any} x
 * @returns {boolean}
 */
export function isEmpty(x: any): boolean;
/**
 * Diff, get the naive difference between a and b
 * Only diffs simple objects, arrays and primitives. Maybe I'll extend it to
 * support Maps and Sets later.
 * @param {object} a - Object to compare
 * @param {object} b - Object to compare
 * @returns {object} c - Object that is difference between a and b
 */
export function diff(a: object, b: object): object;
/**
 * Aggregate, deep merge a and b
 * @param {object} a - Object to merge into
 * @param {object} b - Object with diffs to merge
 * @return {object} c - Result of aggregation
 */
export function aggregate(a: object, b: object): object;
/**
 * AggregateOn, combine many objects into one with aggregated keys
 * TODO: Try to improve the algorithm
 * @param {string} key to Aggregate
 * @param {object} Objects to aggregate
 * @returns {object} Result of Aggregating on key
 */
export function aggregateOn(keyMap: any, ...objects: any[]): object;
/**
 * Merge, combine all keys
 * @param {object} a - Object one
 * @param {object} b - Object two
 * @returns {object} c - Result of merger
 */
export function merge(a: object, b: object): object;
/**
 * Entries, eagerly get entries of an object or iterable
 * @param {iterable} {object} Object that implements entries() or is iterable
 * @returns {array} Array of [key, value] entries
 */
export function entries(iterable: any): any;
/**
 * Values, eagerly get values of an object or iterable
 * @param {iterable} {object} Object that implements values() or is iterable
 * @returns {array} Array of values
 */
export function values(iterable: any): any;
/**
 * Keys, eagerly get keys of an object or iterable
 * @param {iterable} {object} Object that implements keys() or is iterable
 * @returns {array} Array of keys
 */
export function keys(iterable: any): any;
/**
 * Once
 * @param {function} fn - Function to run only once
 * @returns {function} once - Function fn will be called once, and thereafter
 * will return the cached result of the call
 */
export function once(fn: Function): Function;
/**
 * Memoize
 * @param {function} fn - Function to memoize
 * @returns {function} memorize - Memoized function fn
 */
export function memoize(fn: Function): Function;
/**
 * FunctionalMixin
 * @param {object} behaviour - Desired mixin behaviour
 * @param {object} sharedBehaviour - Desired behaviour to add to prototype
 * @returns {function} mixin - Function which takes argument target, which is
 * the object to mix behaviour into
 */
export function FunctionalMixin(behaviour: object, sharedBehaviour?: object): Function;
/**
 * DeepFreeze
 * @param {object} obj - Object to deep freeze
 * @returns {object} obj - Object that was deep frozen
 */
export function deepFreeze(obj: object): object;
/**
 * DeepCopy
 * @param {object} obj - Object to deep copy
 * @returns {object} aux - Copy of Object obj
 */
export function deepCopy(obj: object): object;
/**
 * DeepEqual
 * @param {any} a
 * @param {any} b
 */
export function deepEqual(a: any, b: any): boolean;
export function identity(x: any): any;
export function constant(a: any): any;
export function arity(fn: Function, n: number): Function;
export function unary(fn: Function): Function;
export function binary(fn: Function): Function;
export function ternary(fn: Function): Function;
export function callFirst(fn: Function, larg: any): Function;
export function callLast(fn: Function, rarg: any): Function;
/**
 * Demethodize, convert a method to a standalone function
 * @param {method} method - Method to demethodize
 * @returns {function} method bound to use as regular function
 */
export const demethodize: (thisArg: any, ...argArray: any[]) => any;
export function len(a: any): number;
export function compose(...fns: any[]): Function;
export function pipe(...fns: Function): Function;
export function curry(fn: Function): Function;
export function isNumber(b: any): boolean;
export function isBoolean(b: any): boolean;
export function isNull(x: any): boolean;
export function isString(b: any): boolean;
export function isObject(x: any): boolean;
export function isArray(a: any): boolean;
/**
 * IsInstanceOf, checks if a is instanceof b
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
export const isInstanceOf: Function;
export function isFunction(f: any): boolean;
export function isSet(s: any): boolean;
export function isMap(m: any): boolean;
/**
 * Tap, run a side effect fn and then return x
 * @param {function} fn - Side effect to run
 * @param {any} x - Value to return
 */
export const tap: Function;
/**
 * Not, negate the result of a function
 * @param {function} f - Function to negate
 * @param {any} a - Argument for function f
 */
export const not: Function;
/**
 * Invert, reverse the sign of a numerical result of a function
 * @param {function} f - Function to reverse the sign of result
 * @param {any} a - Argument for function f
 */
export const invert: Function;
export function flip2(f: Function): Function;
export function flip3(f: Function): Function;
/**
 * Tee, logs argument and returns it
 * @param {any}
 * @returns {any}
 */
export const tee: any;
export function log(fn: Function, logger?: Function): Function;
/**
 * Transduce, combine multiple maps, filters, into a more efficient operation
 * @param {array} arr - Array to reduce
 * @param {array} fns - Array of functions to apply to arr
 * @param {function} reducer - Reducer function to apply to arr
 * @param {any} initial - Initial value to pass to reducer
 */
export const transduce: Function;
export function mapTR(fn: Function): Function;
export function filterTR(fn: Function): Function;
/**
 * Prop, access a property in an object
 * @param {string} name - Property name
 * @param {object} a - Object to get property in
 */
export const prop: Function;
export function send(name: string, ...args: any): Function;
export function bound(name: string, ...args: any): Function;
/**
 * SetPropM, sets a property in an object **MUTATES**
 * @param {string} name - Property name
 * @param {value} value - New value to set
 * @param {object} a - Object to mutate with new value
 * @returns {object} a
 */
export const setPropM: Function;
/**
 * SetProp, returns a copy of an object with new property name set to value
 * @param {name} name - Property name
 * @param {value} value - New value to set
 * @param {object} a - Object to set value in
 * @returns {object} Copy of a with new value set
 */
export const setProp: Function;
/**
 * Set, set key in object a to value
 * @param {string} Key name
 * @param {any} Value
 * @returns {object} Object with new value set
 */
export const set: Function;
/**
 * Props, gets an array of property names from an object, shallow
 * @param {array} names - Array of property names
 * @param {object} a - Object to get property names from
 * @returns {array} Array of values
 */
export const props: Function;
/**
 * Pick, returns an object with only the selected property names, shallow
 * @param {array} names - Array of property names
 * @param {object} a - Object to get property names from
 * @returns {object} A new object with only properties names
 */
export const pick: Function;
export function invoke(fn: Function, ...args: any): Function;
/**
 * DeepProp, get a property from any object, deep
 * @param {string | array} path - A path of properties or an Array of
 * properties to get
 * @param {object} a - Object to get properties from
 * @returns {any} Value of property access
 */
export const deepProp: Function;
/**
 * DeepSetProp, set a property in an object, returns a copy, deep
 * @param {string | array} path - A path of properties or an Array of
 * properties to set
 * @param {any} value - The value to set
 * @param {object} a - Object to set new property in
 * @returns {object} A copy of Object a, with new property set
 */
export const deepSetProp: Function;
/**
 * DeepPick, returns an object with only deep properties paths
 * @param {array} paths - An array of string paths of property names
 * @param {object} a - The Object to pick properties from
 * @returns {object} A copy of Object a with only properties paths
 */
export const deepPick: Function;
export function unique(...items: any[]): any;
/**
 * GroupBy, group a collection of objects into a multi-dimensional array by key
 * @param {string} key - Property to group by
 * @param {array} arr - Array of objects to group
 * @returns {array} entries grouped by key
 */
export const groupBy: Function;
/**
 * KeyBy, convert array into object, assumes each key is unique otherwise the
 * last object wins
 * @param {string} key - Property to key by
 * @param {array} arr - Array of objects to key
 * @returns {object} Array arr mapped to an object by key
 */
export const keyBy: Function;
/**
 * deepJoin, deep join two arrays on keyA and keyB
 * @param {string} keyA
 * @param {string} keyB
 * @param {array} array a
 * @param {array} array b
 * @returns {object} The result of keying both arrays
 */
export const deepJoin: Function;
export function toJSON(x: any): string;
export function fromJSON(x: any): any;
export const stringify: {
    (value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string;
    (value: any, replacer?: (string | number)[] | null | undefined, space?: string | number | undefined): string;
};
export const parse: (text: string, reviver?: ((this: any, key: string, value: any) => any) | undefined) => any;
export const toString: StringConstructor;
export function toInteger(s: any): any;
/**
 * PadStart
 * @param {any} x - Base to stringify
 * @param {number} reps - Length to pad up to
 * @param {string} fill - Fill characters
 * @returns {string}
 */
export const padStart: Function;
/**
 * PadEnd
 * @param {any} x - Base to stringify
 * @param {number} reps - Length to pad up to
 * @param {string} fill - Fill characters
 * @returns {string}
 */
export const padEnd: Function;
/**
 * ForEach
 * @param {function} f - Function to run on value(s) of M
 * @param {array} M - Monad / iterable that implements forEach
 * @returns {undefined}
 */
export const forEach: Function;
/**
 * Map
 * @param {function} f - Mapper function
 * @param {array} M - Monad / iterable that implements map
 * @returns {array}
 */
export const map: Function;
/**
 * Filter
 * @param {function} p - Predicate to filter with
 * @param {array} M - Monad / iterable to filter
 * @returns {array}
 */
export const filter: Function;
/**
 * Reduce
 * @param {function} reducer - Reducer function
 * @param {any} seed - Initial value
 * @param {array} M - Monad / iterable to reduce
 * @returns {any}
 */
export const reduce: Function;
/**
 * ReduceRight
 * @param {function} reducer - Reducer function
 * @param {any} seed - Initial value
 * @param {array} M - Monad / iterable to reduce
 * @returns {any}
 */
export const reduceRight: Function;
/**
 * Pluck
 * @param {string} prop - Property to pluck
 * @param {array} M - Monad / iterable to pluck prop out of
 * @returns {array}
 */
export const pluck: Function;
/**
 * Rename
 * @param {object} Key map of keys to rename
 * @param {object} a - Object to rename
 * @returns {object} Copy of a with renamed keys
 */
export const rename: Function;
export function deepMap(fn: Function): Function;
export function composeM(...Ms: any[]): Function;
export const liftA2: Function;
export const liftA3: Function;
export const liftA4: Function;
export const apply: Function;
export function composeAsync(...fns: any[]): Function;
export function pipeAsync(...fns: any[]): Function;
export function mapAsync(f: any, a: any): any;
export function reduceAsync(f: Function, init: any, a: any): any;
export function filterAsync(f: Function, a: any): any;
export function flat(M: any): any;
export const flatMap: Function;
export const fold: Function;
export const getOrElseThrow: Function;
/**
 * Math functions
 * Provides a set of functions for common math operations
 */
export const eq: Function;
export const add: Function;
export const addRight: Function;
export const subtract: Function;
export const subtractRight: Function;
export const multiply: Function;
export const multiplyRight: Function;
export const divide: Function;
export const divideRight: Function;
export function roundTo(n: any): (x: any) => number;
export function pow(base: any, power: any): any;
export function head(a: any): any;
export function last(a: any): any;
export const every: Function;
export const some: Function;
export const find: Function;
export function sum(...args: any[]): any;
export function average(ns: any): number;
export const join: Function;
export function partition(arr: any, a: Function, b: Function): any;
export function zipMap(f: Function, ...iters: any[]): any;
/**
 * SortBy
 * @param {function} f - Sorter function (a, b) => a - b
 * @param {array} a - Array to sort
 * @returns {array} Copy of array a, sorted with f
 */
export const sortBy: Function;
/**
 * Match
 * @param {regexp} re - Matcher RegExp
 * @param {string} s - String to test
 * @returns {boolean}
 */
export const match: Function;
/**
 * Replace
 * @param {regexp} {string} - Regexp or String to match and replace
 * @param {string} Replacer string
 * @param {string} s - String to perform search and replace on
 * @returns {string}
 */
export const replace: Function;
/**
 * Split
 * @param {string} sep - Separater string
 * @param {string} s - String to split
 * @returns {array}
 */
export const split: Function;
export function toLowerCase(s: any): any;
export function toUpperCase(s: any): any;
export const prepend: Function;
export const append: Function;
/**
 * TryCatch
 * @param {function} f - Try function, may throw
 * @param {function} g - Catch function, to catch error
 * @returns {any} Calls g if function f throws
 */
export const tryCatch: Function;
export function range(start: number, end: number, step?: number): any;
export function debounce(delay: number): Function;
export function accumulate(delay: number): Function;
/**
 * Immutable
 * @param {object} Object to seal and deep freeze
 * @returns {object} Object that is sealed and deep frozen
 */
export const immutable: Function;
/**
 * Applies various middleware function to the store dispatch
 *
 * @param {function} Middleware functions
 * @returns {function} A store enhancer that applies middleware
 */
export function applyMiddleware(...middlewares: any[]): Function;
export const Observable: any;
/**
 * Checks to see if something appears to be a plain object
 *
 * @param {object} Object to check
 * @returns {boolean}
 */
export function isPlainObject(obj: any): boolean;
/**
 * Create a stateful store for managing application state
 *
 * @param {function} Reducer function
 * @param {object} Initial state
 * @returns {object} State store
 */
export function createStore(reducer: any, initialState: any, enhancer: any): object;
export function thunk({ dispatch, getState }: {
    dispatch: any;
    getState: any;
}): (next: any) => (action: any) => any;
export class Maybe {
    static of(v: any): Nothing | Just;
    static fromEmpty(v: any): Nothing | Just;
    constructor(v: any);
    get(): any;
    getOrElse(defaultValue: any): any;
    getOrElseThrow(error: any): any;
    get value(): any;
    #private;
}
export class Just extends Maybe {
    get isJust(): boolean;
    get isNothing(): boolean;
    fold(fn?: (x: any) => any): any;
    filter(fn?: (x: any) => any): Nothing | Just;
    map(fn: any): Nothing | Just;
    flatMap(fn: any): Nothing | Just;
    ap(Ma: any): any;
    merge(): any;
    toJSON(): {
        type: string;
        value: any;
    };
    #private;
}
export class Nothing extends Maybe {
    get isJust(): boolean;
    get isNothing(): boolean;
    map(): Nothing;
    flatMap(): Nothing;
    ap(): Nothing;
    fold(): Nothing;
    toJSON(): {
        type: string;
        value: {};
    };
    #private;
}
export class Result {
    static of(v: any, error?: string): any;
    static fromEmpty(a: any): any;
    static fromPromise(p: any): any;
    constructor(v: any);
    get value(): any;
    #private;
}
export class Failure extends Result {
    get isSuccess(): boolean;
    get isFailure(): boolean;
    map(): Failure;
    flatMap(): Failure;
    ap(): Failure;
    get(): void;
    merge(): void;
    getOrElse(defaultValue: any): any;
    getOrElseThrow(): void;
    toJSON(): {
        type: string;
        value: any;
    };
    #private;
}
export class Success extends Result {
    get isSuccess(): boolean;
    get isFailure(): boolean;
    map(fn: any): any;
    flatMap(fn: any): any;
    ap(Rs: any): any;
    get(): any;
    getOrElse(): any;
    getOrElseThrow(): any;
    merge(): any;
    toJSON(): {
        type: string;
        value: any;
    };
    #private;
}
export class Try {
    static of(fn: any, msg: any): Try;
    constructor(fn: any, msg: any);
}
export class TryAsync {
    static of(fn: any, msg: any): Promise<Failure | Success>;
}
export class IO {
    static of(x: any): IO;
    constructor(fn: any);
    unsafePerformIO: any;
    map(fn: any): IO;
    flatMap(fn: any): IO;
    ap(f: any): IO;
    merge(): IO;
    toString(): string;
    toJSON(): {
        type: string;
        value: any;
    };
}
export class IOAsync {
    static of(fn: any): IOAsync;
    constructor(fn: any);
    unsafePerformIO: any;
    map(fn: any): Promise<IO>;
    flatMap(fn: any): Promise<any>;
    merge(): Promise<IOAsync>;
    toString(): string;
    toJSON(): {
        type: string;
        value: any;
    };
}
export class Pair {
    static of(left: any, right: any): Pair;
    static eq(pairA: any, pairB: any): boolean;
    constructor(left: any, right: any);
    get left(): any;
    get right(): any;
    get(): {
        left: any;
        right: any;
    };
    map(fn: any): Pair;
    flatMap(fn: any): Pair;
    toString(): string;
    toJSON(): {
        type: string;
        value: {
            left: any;
            right: any;
        };
    };
    #private;
}
export class Triple {
    static of(left: any, middle: any, right: any): Triple;
    static eq(tripleA: any, tripleB: any): boolean;
    constructor(left: any, middle: any, right: any);
    get left(): any;
    get middle(): any;
    get right(): any;
    get(): {
        left: any;
        middle: any;
        right: any;
    };
    map(fn: any): Triple;
    flatMap(fn: any): Triple;
    toString(): string;
    toJSON(): {
        type: string;
        value: {
            left: any;
            middle: any;
            right: any;
        };
    };
    #private;
}
export class Enum {
    static of(...types: any[]): Enum;
    constructor(types: any);
    has(type: any): any;
    toString(): string;
    toJSON(): {
        type: string;
        value: any[];
    };
    #private;
}
export function createClient(apiEndpoint: any, options?: {
    storageKey: string;
    toJSON: boolean;
}): {
    get(url: any, options: any): {
        req: Promise<any>;
        abort: () => void;
    };
    post(url: any, body: any, options: any): {
        req: Promise<any>;
        abort: () => void;
    };
    put(url: any, body: any, options: any): {
        req: Promise<any>;
        abort: () => void;
    };
    delete(url: any, options: any): {
        req: Promise<any>;
        abort: () => void;
    };
};
/**
 * Rest
 * @param {iterable} iterable
 * @returns {function} Generator iterator function skipping the first element
 */
export function rest(iterable: any): Function;
/**
 * Zip
 * @param {iterable} iterables
 * @returns {function} Generator iterator function that yields an array of
 * the combined values of each iterator of iterables
 */
export function zip(...iterables: any): Function;
/**
 * ZipWith
 * @param {function} zipper - Function to apply to values
 * @param {iterable} iterables - Iterables to zip
 * @returns {function} Generator iterator function that yields the result
 * of applying zipper function to elements of iterables
 */
export function zipWith(zipper: Function, ...iterables: any): Function;
/**
 * MemoizeIter
 * @param {function} generator - Iterator function
 * @returns {function} Memoized generator function
 */
export function memoizeIter(generator: Function): Function;
/**
 * MapWith
 * @param {function} fn - Mapper function
 * @param {iterable} iterable
 * @returns {function} Generator iterator function
 */
export const mapWith: Function;
/**
 * MapAllWith
 * @param {function} fn - Mapper function
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that applies mapper to all
 * elements and then yields the result of their individual iteration
 */
export const mapAllWith: Function;
/**
 * FilterWith
 * @param {function} fn - Filter function
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that filters elements by
 * function fn
 */
export const filterWith: Function;
/**
 * Compact
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that removes nullable
 * values
 */
export const compact: Function;
/**
 * UntilWith
 * @param {function} fn - Tester function
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that returns elements until
 * the result of fn(element) is true
 */
export const untilWith: Function;
export function first(iterable: any): any;
/**
 * Take
 * @param {number} numberToTake
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that yields numberToTake
 * number elements from iteratable
 */
export const take: Function;
/**
 * Drop
 * @param {number} numberToDrop
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that yields elements once
 * numberToDrop elements have been dropped
 */
export const drop: Function;
/**
 * ReduceWith
 * @param {function} fn - Reducer function
 * @param {any} seed - Initial value
 * @param {iterable} iterable
 * @returns {any} Result of reducing iterable with reducer
 */
export const reduceWith: Function;
export function Define(behaviour: any): (clazz: any) => void;
export function Override(behaviour: any): (clazz: any) => any;
export function Prepend(behaviour: any): (clazz: any) => any;
export function Append(behaviour: any): (clazz: any) => any;
export function ClassMixin(behaviour: any, sharedBehaviour?: {}): (classs: any) => any;
export function after(...fns: any[]): (target: any, name: any, descriptor: any) => void;
export function before(...fns: any[]): (target: any, name: any, descriptor: any) => void;
export function provided(...fns: any[]): (target: any, name: any, descriptor: any) => void;
export function unless(...fns: any[]): (target: any, name: any, descriptor: any) => void;
export function wrapWith(decorator: any): (target: any, name: any, descriptor: any) => void;
export function aroundAll(behaviour: any, ...methodNames: any[]): (clazz: any) => any;
export function beforeAll(behaviour: any, ...methodNames: any[]): (clazz: any) => any;
export function afterAll(behaviour: any, ...methodNames: any[]): (clazz: any) => any;
export function SubclassFactory(behaviour: any): (superclass: any) => any;
export function FactoryFactory(c: any): (...args: any[]) => any;
export function Lazy(target: any): any;
export { EventEmitter };
export function reactivize(obj: any): any;
/**
 * Method, create a method inside a call to multi()
 * @param {function} {any} key / function key
 * @param {function} {any} handler / value to return)
 * @returns {array} [key, handler]
 */
export function method(key: any, handler: any): any;
/**
 * multi, create a multimethod function
 * @param {function} dispatch - Optional custom dispatch function
 * @param {function} initialMethods - Method functions (args, handler)
 * @returns {function} dispatch function
 */
export function multi(...initialMethods: Function): Function;
export class ValidationError {
    constructor(message: any, errors: any);
    errors: any;
    get messages(): any;
}
/**
 * WithValidation
 * @param {function} validator - Function to validate data
 * @param {function} fn - Function to wrap with validation
 * @returns {function} Wrapped function fn with validation logic
 */
export const withValidation: Function;
export function createFilterStream(fn: any): any;
export function createMapStream(fn: any): any;
export function createReduceStream(reducer: any, initialValue: any): any;
export function createFork(stream: any): (...streams: any[]) => void;
export function createMerge(...sources: any[]): (dest: any) => any[];
export class ParallelStream {
    constructor(userTransform: any, options?: {});
    userTransform: any;
    running: number;
    terminate: any;
    _transform(chunk: any, encoding: any, callback: any): void;
    _flush(callback: any): void;
    _onComplete(err: any): void;
}
export class LimitedParallelStream {
    constructor(concurrency: any, userTransform: any, options?: {});
    concurrency: any;
    userTransform: any;
    running: number;
    continue: any;
    terminate: any;
    _transform(chunk: any, encoding: any, callback: any): void;
    _flush(callback: any): void;
    _onComplete(err: any): void;
}
export const actionListener: object;
/**
 * A utility function for making an action creator for a given type
 *
 * @param {string} Type of action
 * @param {function} Optional variadic prepare function used to return
 *  a payload
 *
 * @returns {function} Action Creator function
 */
export function createAction(type: any, prepareAction: any): Function;
/**
 * Creates an async thunk
 *
 * @param {string} typePrefix
 * @param {function} payloadCreator
 * @param {object} Options object
 * @returns {function} Action creator
 */
export function createAsyncThunk(typePrefix: string, payloadCreator: Function, options: any): Function;
/**
 * Turns an action creator object into one whose values are wrapped in
 * a dispatch call so as to enable them to be invoked directly
 *
 * @param {object} Action Creators
 * @param {function} Dispatch function
 * @returns {object} Bound action creator object
 */
export function bindActionCreators(actionCreators: any, dispatch: any): object;
/**
 * Turns an object with various reducer functions into a single reducer
 * function.
 *
 * @param {object} Reducers object, with values corresponding to reducers
 * @returns {function} A reducer function that invokes each reducer
 */
export function combineReducers(reducers: any): Function;
/**
 * createSelector takes some function and memoizes it
 *
 * @param {function} Result function
 * @returns {function} Selector function
 */
export function createSelector(...fns: any[]): Function;
export const createConfiguredStore: any;

//# sourceMappingURL=index.d.ts.map
