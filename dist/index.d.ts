import { EventEmitter } from "events";
import { Transform } from "stream";
/**
 * IsNumber, checks if x is a Number
 */
export const isNumber: (b: any) => boolean;
/**
 * IsBoolean, checks if x is a Boolean
 */
export const isBoolean: (b: any) => boolean;
/**
 * IsNull, checks if x is null
 */
export const isNull: (x: any) => boolean;
/**
 * IsUndefined, checks if x is undefined
 */
export const isUndefined: (x: any) => boolean;
/**
 * IsString, checks if x is a String
 */
export const isString: (b: any) => boolean;
/**
 * IsObject, checks if x is an Object
 */
export const isObject: (x: any) => boolean;
/**
 * IsArray, checks if x is an Array
 */
export const isArray: (a: any) => boolean;
/**
 * IsInstanceOf, checks if a is instanceof b
 */
export const isInstanceOf: (this: any, ...args: any[]) => any;
/**
 * IsFunction, checks if f is a Function
 */
export const isFunction: (f: any) => any;
/**
 * IsAsyncFunction, checks if f is an async function
 */
export const isAsyncFunction: (f: any) => any;
/**
 * IsGeneratorFunction, checks if f is a generator function
 */
export const isGeneratorFunction: (f: any) => any;
/**
 * isAsyncGeneratorFunction, checks if f is an async generator
 */
export const isAsyncGeneratorFunction: (f: any) => any;
/**
 * IsSet, checks if s is a Set
 */
export const isSet: (s: any) => boolean;
/**
 * IsMap, checks if m is a Map
 */
export const isMap: (m: any) => boolean;
/**
 * IsEmpty
 */
export function isEmpty(x: any): boolean;
/**
 * IsClass
 */
export function isClass(obj: any): any;
declare const ReducedSymbol: unique symbol;
export const isReduced: (thing: any) => boolean;
type GenericFunction = (...args: any[]) => any;
/**
 * Identity, x => x
 */
export const identity: <T>(x: T) => T;
/**
 * Constant, x => y => x
 */
export const constant: <T>(a: T) => () => T;
/**
 * Arity, turn a function into one with n arguments
 */
export const arity: (fn: GenericFunction, n: number) => (this: any, ...args: any[]) => any;
/**
 * Unary, turn a function into one with 1 argument
 */
export const unary: (fn: GenericFunction) => (this: any, ...args: any[]) => any;
/**
 * Binary, turn a function into one with 2 arguments
 */
export const binary: (fn: GenericFunction) => (this: any, ...args: any[]) => any;
/**
 * Ternary, turn a function into one with 3 arguments
 */
export const ternary: (fn: GenericFunction) => (this: any, ...args: any[]) => any;
/**
 * Call First, partially apply a function's leftmost argument
 */
export const callFirst: (fn: GenericFunction, larg: any) => (this: any, ...args: any) => any;
/**
 * Call Last, partially apply a function's rightmost argument
 */
export const callLast: (fn: GenericFunction, rarg: any) => (this: any, ...args: any) => any;
/**
 * Demethodize, convert a method to a standalone function
 */
export const demethodize: (thisArg: any, ...argArray: any[]) => any;
/**
 * Len, provides a simple way to get the length/size of something
 */
export const len: (a: any) => any;
/**
 * Compose, combine any number of functions together, right to left
 * Any number of functions fns to compose
 *  A function composed of fns
 */
export function compose(...fns: GenericFunction[]): GenericFunction;
/**
 * Pipe, combine any number of functions together, left to right
 * fns to pipe
 * A function pipe of fns
 */
export function pipe(...fns: GenericFunction[]): GenericFunction;
/**
 * Curry, automatically curry a function, only works with non-variadic functions
 *
 * Takes fn - Function to curry
 * Returns partially applied function, or result of calling
 * function fn if arguments are greater than or equal to total arity of function fn.
 */
export function curry(fn: GenericFunction): (this: any, ...args: any[]) => any;
/**
 * Tap, run a side effect fn and then return x
 */
export const tap: (this: any, ...args: any[]) => any;
/**
 * Not, negate the result of a function
 */
export const not: (this: any, ...args: any[]) => any;
/**
 * And, satisfy both functions
 */
export const and: (this: any, ...args: any[]) => any;
/**
 * Or, satisfy one or the other functions
 */
export const or: (this: any, ...args: any[]) => any;
/**
 * Negate, reverse the sign of a numerical result of a function
 */
export const negate: (this: any, ...args: any[]) => any;
/**
 * Flip2, flip the position of a function's arguments
 */
export const flip2: (f: GenericFunction) => (this: any, ...args: any[]) => any;
/**
 * Flip3, flip the first argument to the last argument
 */
export const flip3: (f: GenericFunction) => (this: any, ...args: any[]) => any;
/**
 * Tee, logs argument and returns it
 * @param {any}
 * @returns {any}
 */
export const tee: any;
/**
 * Log, spy on the execution of a function fn with logger
 */
export const log: (fn: GenericFunction, logger?: (...data: any[]) => void) => (this: any, ...args: any[]) => any;
/**
 * Transduce, combine multiple maps, filters, into a more efficient operation
 * @param {array} transducer functions
 * @param {function} Reducer function
 * @param {any} Initial value
 * @param {array} Array to transduce
 */
export const transduce: (this: any, ...args: any[]) => any;
/**
 * Reduced wrapper
 */
export function reduced(value: any): {
    value: any;
    [ReducedSymbol]: boolean;
};
/**
 * MapTR, create a map transducer
 */
export const mapTR: (fn: GenericFunction) => (reducer: (accumulator: any, value: any) => any) => (acc: any, val: any) => any;
/**
 * filterTR, create a filter transducer
 */
export const filterTR: (fn: GenericFunction) => (reducer: (accumulator: any, value: any) => any) => (acc: any, val: any) => any;
/**
 * WhileTR, create a while transducer
 */
export const whileTR: (fn: GenericFunction) => (reducer: (accumulator: any, value: any) => any) => (acc: any, val: any) => any;
export const takeN: (n: number) => () => boolean;
/**
 * Send, returns a function that applies instance method name with args
 */
export const send: (name: string, ...args: any[]) => (instance: any) => any;
/**
 * Bound, returns a bound method or calls method with args
 */
export const bound: (name: string, ...args: any[]) => (instance: any) => any;
/**
 * Invoke, returns a function that takes a context to call function fn with args in
 */
export const invoke: (fn: GenericFunction, ...args: any[]) => (instance: any) => any;
/**
 * Unique, get only unique items
 */
export function unique(...items: any[]): any[];
/**
 * GroupBy, group a collection of objects into a multi-dimensional array by key
 */
export const groupBy: (this: any, ...args: any[]) => any;
/**
 * KeyBy, convert array into object, assumes each key is unique otherwise the
 * last object wins
 */
export const keyBy: (this: any, ...args: any[]) => any;
/**
 * Stringifying functions
 * Provides helper functions to stringify and parse JSON, along with numbers
 * and strings
 */
export const toJSON: (x: any) => string;
export const fromJSON: (x: any) => any;
export const stringify: {
    (value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string;
    (value: any, replacer?: (string | number)[] | null | undefined, space?: string | number | undefined): string;
};
export const parse: (text: string, reviver?: ((this: any, key: string, value: any) => any) | undefined) => any;
export const toString: StringConstructor;
export const toInteger: (s: string) => number;
/**
 * TryCatch
 */
export const tryCatch: (this: any, ...args: any[]) => any;
/**
 * Once will return the cached result of the call
 */
export function once(fn: GenericFunction): (this: any, ...args: any[]) => any;
/**
 * Memoize a function
 */
export function memoize(fn: GenericFunction): {
    (this: any, ...args: any[]): any;
    clearCache(): any;
};
/**
 * Debounce a function
 */
export const debounce: (delay: number) => (this: any, fn: GenericFunction) => void;
/**
 * Accumulate returns a function that will be called with all accumulated events after delay
 */
export const accumulate: (delay: number) => (this: any, fn: GenericFunction) => (event: any) => void;
/**
 * DeepEqual
 * @param {any} a
 * @param {any} b
 */
export function deepEqual(a: any, b: any): boolean;
interface GenericObject {
    [propKey: PropertyKey]: any;
}
/**
 * Prop, access a property in an object
 */
export const prop: (this: any, ...args: any[]) => any;
/**
 * SetPropM, sets a property in an object **MUTATES**
 */
export const setPropM: (this: any, ...args: any[]) => any;
/**
 * SetProp, returns a copy of an object with new property name set to value
 */
export const setProp: (this: any, ...args: any[]) => any;
/**
 * Set, set key in object a to value
 */
export const set: (this: any, ...args: any[]) => any;
/**
 * Update, updates a key of an object with an updator function
 */
export const update: (this: any, ...args: any[]) => any;
/**
 * Props, gets an array of property names from an object, shallow
 */
export const props: (this: any, ...args: any[]) => any;
/**
 * Pick, returns an object with only the selected property names, shallow
 */
export const pick: (this: any, ...args: any[]) => any;
/**
 * DeepProp, get a property from any object, deep
 */
export const deepProp: (this: any, ...args: any[]) => any;
/**
 * DeepSetProp, set a property in an object, returns a copy, deep
 */
export const deepSetProp: (this: any, ...args: any[]) => any;
/**
 * DeepUpdate, updates a property in an object with an updater function
 */
export const deepUpdate: (this: any, ...args: any[]) => any;
/**
 * DeepPick, returns an object with only deep properties paths
 */
export const deepPick: (this: any, ...args: any[]) => any;
/**
 * Diff, get the naive difference between a and b
 * Only diffs simple objects, arrays and primitives. Maybe I'll extend it to
 * support Maps and Sets later.
 */
export function diff(a: any, b: any): any;
/**
 * Aggregate, deep merge a and b
 */
export function aggregate<T extends GenericObject>(a: T, b: T): T;
/**
 * AggregateOn, combine many objects into one with aggregated keys
 * TODO: Try to improve the algorithm
 */
export function aggregateOn(keyMap: any, ...objects: GenericObject[]): GenericObject;
/**
 * Merge, combine all keys
 */
export function merge(a: GenericObject, b: GenericObject): any;
/**
 * Entries, eagerly get entries of an object or iterable
 */
export function entries(iterable: any): any[];
/**
 * Values, eagerly get values of an object or iterable
 */
export function values(iterable: any): any[];
/**
 * Keys, eagerly get keys of an object or iterable
 */
export function keys(iterable: any): any[];
/**
 * Rename object's keys using a keymap
 */
export const rename: (this: any, ...args: any[]) => any;
/**
 * DeepFreeze
 */
export function deepFreeze(obj: GenericObject): GenericObject;
/**
 * DeepCopyArray
 */
export function deepCopyArray(arr: any[], offset?: number): any[];
/**
 * DeepCopy
 */
export function deepCopy(obj: any): any;
/**
 * Immutable
 * @param {object} Object to seal and deep freeze
 * @returns {object} Object that is sealed and deep frozen
 */
export const immutable: (...args: any[]) => any;
/**
 * Buffer
 * @param {number} count - Size of events to buffer
 * @param {observable} stream - Stream to buffer
 * @returns {observable}
 */
declare const buffer: (...initialArgs: any[]) => {};
/**
 * Concat, append streams
 * @param {observable} Streams to append
 * @returns {observable} Concatenated stream
 */
declare const concat: (...initialArgs: any[]) => {};
/**
 * combine, combine the latest output of each stream
 * @param {observable} Stream a
 * @param {observable} Stream b
 * @returns {observable} Latest combined output of stream a and b
 */
declare const combine: (...initialArgs: any[]) => {};
type _GenericFunction1 = (...args: any[]) => any;
interface Flatable {
    flat(): any;
}
/**
 * ComposeM
 */
export function composeM(...Ms: any): any;
export const liftA2: (this: any, ...args: any[]) => any;
export const liftA3: (this: any, ...args: any[]) => any;
export const liftA4: (this: any, ...args: any[]) => any;
export const apply: (this: any, ...args: any[]) => any;
export const flat: <F extends Flatable>(M: F) => any;
export const flatMap: (this: any, ...args: any[]) => any;
export const fold: (this: any, ...args: any[]) => any;
export const getOrElseThrow: (this: any, ...args: any[]) => any;
/**
 * Array functions
 * Provides a set of functions for common array operations
 */
export const head: <T extends {
    [index: number]: any;
}>(a: T) => T;
export const last: <T>(a: T[]) => T;
export const cat: (a: any[], b: any) => any[];
export const every: (this: any, ...args: any[]) => any;
export const some: (this: any, ...args: any[]) => any;
export const find: (this: any, ...args: any[]) => any;
export const sum: (...args: number[]) => number;
export const average: (ns: number[]) => number;
export const join: (this: any, ...args: any[]) => any;
/**
 * Partition, divide an array into two
 */
export const partition: <T>(arr: T[], a: (value: T) => boolean, b: (value: T) => boolean) => T[][];
/**
 * ZipMap
 */
export const zipMap: <T>(f: _GenericFunction1, ...iters: Iterable<T>[]) => any[];
/**
 * SortBy
 */
export const sortBy: (this: any, ...args: any[]) => any;
/**
 * ForEach
 * @param {function} f - Function to run on value(s) of M
 * @param {array} M - Monad / iterable that implements forEach
 * @returns {undefined}
 */
export const forEach: (this: any, ...args: any[]) => any;
/**
 * Map
 */
export const map: (this: any, ...args: any[]) => any;
/**
 * Filter
 */
export const filter: (this: any, ...args: any[]) => any;
/**
 * Reduce
 */
export const reduce: (this: any, ...args: any[]) => any;
/**
 * ReduceRight
 */
export const reduceRight: (this: any, ...args: any[]) => any;
/**
 * Pluck
 */
export const pluck: (...args: any[]) => any;
/**
 * DeepMap
 */
export const deepMap: <T>(fn: (element: T) => any) => (tree: T[]) => any[];
/**
 * Range
 */
export const range: (start: number, end: number, step?: number) => any[];
/**
 * deepJoin, deep join two arrays on keyA and keyB
 */
export const deepJoin: (this: any, ...args: any[]) => any;
/**
 * Debounce
 * @param {number} time to aggregate events for
 * @param {observable} stream - stream to debounce
 * @returns {observable}
 */
declare const _debounce1: (...initialArgs: any[]) => {};
/**
 * Distinct, filter only unique consecutive events
 * @param {observable} Stream to filter distinct
 * @returns {observable} Stream with unique values only
 */
declare const distinct: (...initialArgs: any[]) => {};
/**
 * Effect
 * @param {function} fn - Side effect function to run on each event
 * @param {observable} stream
 * @returns {observable}
 */
declare const effect: (...initialArgs: any[]) => {};
/**
 * Filter
 * @param {function} predicate - Filter function
 * @param {observable} stream - Stream to filter
 * @returns {observable}
 */
declare const _filter1: (...initialArgs: any[]) => {};
/**
 * ForEach, syntactic sugar for Observable.subscribe()
 * @param {function} fn - Function to run on each event
 * @param {observable} stream
 * @returns {object} unsubscribe object
 */
declare const _forEach1: (this: any, ...args: any[]) => any;
/**
 * Listen
 * @param {string} eventName - Event to listen on
 * @param {HTMLElement} element
 * @returns {observable}
 */
declare const listen: (...initialArgs: any[]) => {};
/**
 * Map
 * @param {function} fn - Mapper function
 * @parma {observable} stream - Stream to map
 * @returns {observable}
 */
declare const _map1: (...initialArgs: any[]) => {};
/**
 * MapTo, map a stream to only output value
 * @param {any} value
 * @param {observable} stream
 * @returns {observable}
 */
declare const mapTo: (...initialArgs: any[]) => {};
/**
 * Merge, interleave two streams
 * @param {observable} Stream a
 * @param {observable} Stream b
 * @returns {observable} Interleaving stream of a and b
 */
declare const _merge1: (...initialArgs: any[]) => {};
/**
 * FlatMap
 * @param {function} fn - Mapping function
 * @param {observable} stream
 * @returns {observable}
 */
declare const _flatMap1: (...initialArgs: any[]) => {};
/**
 * Pick, pick keys from objects of stream
 * @param {string} key
 * @param {observable} stream
 * @returns {observable}
 */
declare const _pick1: (...initialArgs: any[]) => {};
/**
 * Reduce
 * @param {function} reducer
 * @param {any} initialValue
 * @param {observable} stream
 * @returns {observable}
 */
declare const _reduce1: (...initialArgs: any[]) => {};
/**
 * Retry
 * @param {object} {number}
 * Configuration object { method: 'linear' | 'expo', retries: n }
 * @param {observable} Stream to retry incase of errors
 * @returns {observable}
 */
declare const retry: (...initialArgs: any[]) => {};
/**
 * Skip
 */
declare const skip: (...initialArgs: any[]) => {};
/**
 * Share, buffers 100 events by default
 */
declare const share: (bufferSize: number | undefined, stream: Observable) => {};
/**
 * Subject
 */
declare const subject: () => {};
/**
 * Take
 * @param {number} numberToTake - Items to take from stream
 * @param {observable} stream
 * @returns {observable}
 */
declare const _take1: (...initialArgs: any[]) => {};
/**
 * Throttle
 * @param {number} limit - Delay between function calls
 * @param {observable} stream - Stream to throttle to
 * @returns {observable}
 */
declare const throttle: (...initialArgs: any[]) => {};
/**
 * Until, subscribe to a stream until Comparator returns true
 * @param {function} Comparator function
 * @param {observable} Stream
 * @returns {observable} Stream that ends when comparator function returns true
 */
declare const until: (...initialArgs: any[]) => {};
/**
 * Zip
 * @param {observable} Streams
 * @returns {observable} One-to-one zipped streams
 */
declare const _zip1: (...initialArgs: any[]) => {};
export const Observable: any;
interface Observer {
    next(value: any): void;
    error(err: Error): void;
    complete(): void;
}
type _GenericFunction2 = (...args: any[]) => any;
export interface Observable {
    fromEvent(emitter: any, event: string, handler: _GenericFunction2): Observable;
    fromGenerator(generator: GeneratorFunction): Observable;
    fromPromise<X>(promise: Promise<X>): Observable;
    fromStream(stream: any): Observable;
    listen(eventName: string, element: any): Observable;
    subject(): Observable;
    wrap(obj: any): Observable;
    _filter1(fn: (value: any) => boolean): Observable;
    _map1(fn: (value: any) => any): Observable;
    buffer(size: number): Observable;
    skip(numberToSkip: number): Observable;
    _take1(numberToTake: number): Observable;
    _reduce1(reducer: (accumulator: any, value: any) => any, initialValue: any): Observable;
    mapTo(value: any): Observable;
    throttle(limit: number): Observable;
    _forEach1(f: (value: any) => void): any;
    effect(f: (value: any) => void): Observable;
    _pick1(prop: PropertyKey): Observable;
    _debounce1(limit: number): Observable;
    catch(err: Error): Observable;
    concat(...streams: Observable[]): Observable;
    combine(stream: Observable): Observable;
    _merge1(stream: Observable): Observable;
    share(bufferSize: number): Observable;
    switch(): Observable;
    _flatMap1(fn: (value: any) => any): Observable;
    distinct(fn: (value: any) => any): Observable;
    until(fn: (value: any) => boolean): Observable;
    _zip1(zipper: (...args: any[]) => any, ...streams: Observable[]): Observable;
    retry(config: any): Observable;
    finally(f: (err?: Error) => void): Observable;
    subscribe(observer: Observer): Subscription;
}
interface Subscription {
    unsubscribe(): void;
}
type _GenericFunction3 = (...args: any[]) => any;
/**
 * ComposeAsync
 */
export const composeAsync: (...fns: _GenericFunction3[]) => _GenericFunction3;
/**
 * PipeAsync
 */
export const pipeAsync: (...fns: _GenericFunction3[]) => _GenericFunction3;
/**
 * MapAsync
 */
export const mapAsync: <T>(f: <X>(value: T) => Promise<X>, a: T[]) => Promise<unknown[]>;
/**
 * ReduceAsync
 */
export const reduceAsync: <T>(f: <X>(value: T) => Promise<X>, init: any, a: T[]) => Promise<any>;
/**
 * FilterAsync
 */
export const filterAsync: <T>(f: <X>(value: T) => Promise<X>, a: T[]) => Promise<T[]>;
/**
 * Math functions
 * Provides a set of functions for common math operations
 */
export const eq: (this: any, ...args: any[]) => any;
export const add: (this: any, ...args: any[]) => any;
export const addRight: (this: any, ...args: any[]) => any;
export const subtract: (this: any, ...args: any[]) => any;
export const subtractRight: (this: any, ...args: any[]) => any;
export const multiply: (this: any, ...args: any[]) => any;
export const divide: (this: any, ...args: any[]) => any;
export const divideRight: (this: any, ...args: any[]) => any;
export const roundTo: (n: number) => (x: number) => number;
export const pow: (base: number, power: number) => number;
/**
 * Match
 */
export const match: (this: any, ...args: any[]) => any;
/**
 * Replace
 */
export const replace: (this: any, ...args: any[]) => any;
/**
 * Split
 */
export const split: (this: any, ...args: any[]) => any;
export const toLowerCase: (s: string) => string;
export const toUpperCase: (s: string) => string;
export const prepend: (this: any, ...args: any[]) => any;
export const append: (this: any, ...args: any[]) => any;
/**
 * PadStart
 */
export const padStart: (this: any, ...args: any[]) => any;
/**
 * PadEnd
 */
export const padEnd: (this: any, ...args: any[]) => any;
interface IGenericFunction {
    (...args: any[]): any;
}
interface IBehaviour {
    [propKey: PropertyKey]: IGenericFunction;
}
export function Append(behaviour: IBehaviour): (clazz: any) => any;
export function Prepend(behaviour: IBehaviour): (clazz: any) => any;
export function Define(behaviour: IBehaviour): (clazz: any) => void;
export function Override(behaviour: IBehaviour): (clazz: any) => any;
interface IDecorator {
    (target: any, name: string, descriptor: PropertyDescriptor): any;
}
export const after: (...fns: IGenericFunction[]) => IDecorator;
export const before: (...fns: IGenericFunction[]) => IDecorator;
export const provided: (...fns: IGenericFunction[]) => IDecorator;
export const unless: (...fns: IGenericFunction[]) => IDecorator;
export const wrapWith: (decorator: IGenericFunction) => IDecorator;
export const aroundAll: (behaviour: IGenericFunction, ...methodNames: string[]) => (clazz: any) => any;
export const beforeAll: (behaviour: IGenericFunction, ...methodNames: string[]) => (clazz: any) => any;
export const afterAll: (behaviour: IGenericFunction, ...methodNames: string[]) => (clazz: any) => any;
/**
 * FunctionalMixin takes a behaviour object and a target, which is the object to mix behaviour into
 */
export function FunctionalMixin(behaviour: any, sharedBehaviour?: {}): (target: any) => any;
export const ClassMixin: (behaviour: any, sharedBehaviour?: any) => (classs: any) => any;
/**
 * WithValidation
 * @param {function} validator - Function to validate data
 * @param {function} fn - Function to wrap with validation
 * @returns {function} Wrapped function fn with validation logic
 */
export const withValidation: (this: any, ...args: any[]) => any;
export const SubclassFactory: (behaviour: any) => (superclass: any) => any;
export const FactoryFactory: (c: any) => (...args: any[]) => any;
export interface Maybe {
    isJust: boolean;
    isNothing: boolean;
    merge(): any;
    map(mapper: (value: any) => any): Maybe;
}
export class Maybe {
    #private;
    [Symbol.toStringTag]: string;
    constructor(v?: any);
    get(): any;
    getOrElse(defaultValue: any): any;
    getOrElseThrow(error: Error): any;
    get value(): any;
    static of(v: any): Maybe;
    static fromEmpty(v: any): Maybe;
    [Symbol.toPrimitive](hint: string): any;
    [Symbol.iterator](): Generator<Nothing | Just | undefined, void, unknown>;
}
export class Just extends Maybe {
    get isJust(): boolean;
    get isNothing(): boolean;
    fold(fn?: <T>(x: T) => T): any;
    filter(fn?: <T>(x: T) => T): Maybe;
    map(fn: (x: any) => any): Maybe;
    flatMap(fn: (x: any) => Maybe): Maybe;
    ap(Ma: Maybe): Maybe;
    merge(): any;
    toString(): string;
    toJSON(): {
        type: string;
        value: any;
    };
}
export class Nothing extends Maybe {
    get isJust(): boolean;
    get isNothing(): boolean;
    map(): this;
    flatMap(): this;
    ap(): this;
    fold(): this;
    toString(): string;
    toJSON(): {
        type: string;
        value: {};
    };
}
export interface Result {
    map(mapper: (value: any) => any): Result;
    get(): any;
    isFailure: boolean;
    isSuccess: boolean;
    merge(): any;
}
export class Result {
    #private;
    constructor(v?: any);
    get value(): any;
    static of(v: any, error?: string): Result;
    static fromEmpty(a: any): Result;
    static fromPromise<X>(p: Promise<X>): Promise<Failure | Success>;
    [Symbol.toPrimitive](hint: string): any;
    [Symbol.iterator](): Generator;
}
export class Failure extends Result {
    get isSuccess(): boolean;
    get isFailure(): boolean;
    map(): this;
    flatMap(): this;
    ap(): this;
    get(): void;
    merge(): void;
    getOrElse(defaultValue: any): any;
    getOrElseThrow(): void;
    toString(): string;
    toJSON(): {
        type: string;
        value: any;
    };
}
export class Success extends Result {
    get isSuccess(): boolean;
    get isFailure(): boolean;
    map(fn: (value: any) => any): Result;
    flatMap(fn: (value: any) => Result): Result;
    ap(Rs: Result): Result;
    get(): any;
    getOrElse(): any;
    getOrElseThrow(): any;
    merge(): any;
    toString(): string;
    toJSON(): {
        type: string;
        value: any;
    };
}
export class Try {
    constructor(fn: () => any, msg: string);
    static of(fn: () => any, msg: string): Try;
}
export class TryAsync {
    constructor();
    static of(fn: <X>() => Promise<X>, msg: string): Promise<Failure | Success>;
}
type IOFunction = () => any;
export class IO {
    unsafePerformIO: IOFunction;
    [Symbol.toStringTag]: string;
    constructor(fn: IOFunction);
    map(fn: (value: IOFunction) => IOFunction): IO;
    flatMap(fn: (value: IOFunction) => IOFunction): IO;
    ap(f: any): IO;
    merge(): IO;
    toString(): string;
    toJSON(): {
        type: string;
        value: IOFunction;
    };
    static of(x: any): IO;
}
type IOAsyncFunction = <X>() => Promise<X>;
export class IOAsync {
    unsafePerformIO: IOAsyncFunction;
    [Symbol.toStringTag]: string;
    constructor(fn: IOAsyncFunction);
    map(fn: (value: IOAsyncFunction) => IOAsyncFunction): Promise<IO>;
    flatMap(fn: (value: IOAsyncFunction) => IOAsyncFunction): Promise<IOAsync>;
    merge(): Promise<IOAsync>;
    toString(): string;
    toJSON(): {
        type: string;
        value: IOAsyncFunction;
    };
    static of(fn: IOAsyncFunction): IOAsync;
}
export class Pair {
    #private;
    [Symbol.toStringTag]: string;
    constructor(left: any, right: any);
    get left(): any;
    get right(): any;
    get(): {
        left: any;
        right: any;
    };
    map(fn: (value: any) => any): Pair;
    flatMap(fn: (left: any, right: any) => [any, any]): Pair;
    toString(): string;
    toJSON(): {
        type: string;
        value: {
            left: any;
            right: any;
        };
    };
    [Symbol.iterator](): Generator<any, void, unknown>;
    static of(left: any, right: any): Pair;
    static eq(pairA: Pair, pairB: Pair): boolean;
}
export class Triple {
    #private;
    [Symbol.toStringTag]: string;
    constructor(left: any, middle: any, right: any);
    get left(): any;
    get middle(): any;
    get right(): any;
    get(): {
        left: any;
        middle: any;
        right: any;
    };
    map(fn: (value: any) => any): Triple;
    flatMap(fn: (left: any, middle: any, right: any) => [any, any, any]): Triple;
    toString(): string;
    toJSON(): {
        type: string;
        value: {
            left: any;
            middle: any;
            right: any;
        };
    };
    [Symbol.iterator](): Generator<any, void, unknown>;
    static of(left: any, middle: any, right: any): Triple;
    static eq(tripleA: Triple, tripleB: Triple): boolean;
}
export class Enum {
    #private;
    [Symbol.toStringTag]: string;
    constructor(types: string[]);
    has(type: string): boolean;
    toString(): string;
    toJSON(): {
        type: string;
        value: unknown[];
    };
    [Symbol.iterator](): () => IterableIterator<unknown>;
    static of(...types: string[]): Enum;
}
export function createClient(apiEndpoint: string, options?: {
    storageKey: string;
    toJSON: boolean;
}): {
    get(url: string, options: any): {
        req: Promise<unknown>;
        abort: () => void;
    };
    post(url: string, body: any, options: any): {
        req: Promise<unknown>;
        abort: () => void;
    };
    put(url: string, body: any, options: any): {
        req: Promise<unknown>;
        abort: () => void;
    };
    patch(url: string, body: any, options: any): {
        req: Promise<unknown>;
        abort: () => void;
    };
    delete(url: string, options: any): {
        req: Promise<unknown>;
        abort: () => void;
    };
};
/**
 * MapWith
 * @param {function} fn - Mapper function
 * @param {iterable} iterable
 * @returns {function} Generator iterator function
 */
export const mapWith: (this: any, ...args: any[]) => any;
/**
 * MapAllWith
 * @param {function} fn - Mapper function
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that applies mapper to all
 * elements and then yields the result of their individual iteration
 */
export const mapAllWith: (this: any, ...args: any[]) => any;
/**
 * FilterWith
 * @param {function} fn - Filter function
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that filters elements by
 * function fn
 */
export const filterWith: (this: any, ...args: any[]) => any;
/**
 * Compact
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that removes nullable
 * values
 */
export const compact: (this: any, ...args: any[]) => any;
/**
 * UntilWith
 * @param {function} fn - Tester function
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that returns elements until
 * the result of fn(element) is true
 */
export const untilWith: (this: any, ...args: any[]) => any;
/**
 * First
 * @param {iterable} iterable
 * @returns {any} First element of iterable
 */
export const first: <X>(iterable: Iterable<X>) => any;
/**
 * Rest
 * @param {iterable} iterable
 * @returns {function} Generator iterator function skipping the first element
 */
export function rest<X>(iterable: Iterable<X>): Iterable<X>;
/**
 * Take
 * @param {number} numberToTake
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that yields numberToTake
 * number elements from iteratable
 */
export const take: (this: any, ...args: any[]) => any;
/**
 * Drop
 * @param {number} numberToDrop
 * @param {iterable} iterable
 * @returns {function} Generator iterator function that yields elements once
 * numberToDrop elements have been dropped
 */
export const drop: (this: any, ...args: any[]) => any;
/**
 * Zip
 * @param {iterable} iterables
 * @returns {function} Generator iterator function that yields an array of
 * the combined values of each iterator of iterables
 */
export function zip<X>(...iterables: Iterable<X>[]): Iterable<X>;
/**
 * ZipWith
 * @param {function} zipper - Function to apply to values
 * @param {iterable} iterables - Iterables to zip
 * @returns {function} Generator iterator function that yields the result
 * of applying zipper function to elements of iterables
 */
export function zipWith<X>(zipper: (...elements: X[]) => any, ...iterables: Iterable<X>[]): Iterable<any>;
/**
 * ReduceWith
 * @param {function} fn - Reducer function
 * @param {any} seed - Initial value
 * @param {iterable} iterable
 * @returns {any} Result of reducing iterable with reducer
 */
export const reduceWith: (this: any, ...args: any[]) => any;
/**
 * MemoizeIter
 * @param {function} generator - Iterator function
 * @returns {function} Memoized generator function
 */
export function memoizeIter(generator: (...args: any) => Generator): (...args: any) => Generator;
/**
 * Lazy Collection is a Collection data-type that is essentially just mapping
 * Symbol.iterator. It can be mixed in to any existing iterable object, such as
 * an Array.
 */
interface ICollection {
    map: (mapper: (element: any) => any) => ICollection;
    reduce: (reducer: (accumulator: any, element: any) => any, seed: any) => any;
    filter: (predicate: (element: any) => boolean) => ICollection;
    find: (searcher: (element: any) => boolean) => ICollection;
    until: (searcher: (element: any) => boolean) => ICollection;
    first: () => any;
    rest: () => ICollection;
    take: (numberToTake: number) => ICollection;
    drop: (numberToDrop: number) => ICollection;
}
/**
 * Lazy Collection is a Collection data-type that is essentially just mapping
 * Symbol.iterator. It can be mixed in to any existing iterable object, such as
 * an Array.
 */
export const Collection: ICollection;
export const Numbers: {
    [Symbol.iterator](): Generator<number, never, unknown>;
} & ICollection;
interface IStack extends ICollection {
    array: any[];
    index: number;
    push: (value: any) => any;
    pop: () => any;
    isEmpty: () => boolean;
}
/**
 * Lazy Stack is a Stack data-type that is essentially just mapping
 * Symbol.iterator. It features the most common stack methods, such as
 * push() and pop()
 */
export const Stack: {
    (): IStack;
    from<X>(iterable: Iterable<X>): IStack;
};
/**
 * Lazy Collection is a Collection data-type that is essentially just mapping
 * Symbol.iterator. It can be mixed in to any existing iterable object, such as
 * an Array.
 */
export function Lazy<X>(target: Iterable<X>): ICollection;
export { EventEmitter };
export const reactivize: (obj: any) => any;
declare const handlersKey: unique symbol;
declare const dispatchKey: unique symbol;
declare const isMethodObject: unique symbol;
interface IHandler {
    key: any;
    handler: ((...args: any) => any) | any;
    [isMethodObject]: boolean;
}
interface MultiMethod extends Function {
    [dispatchKey]: dispatchFunction;
    [handlersKey]: IHandler[];
    map: (...args: any) => any;
}
type dispatchFunction = (...args: any[]) => any;
/**
 * Method, create a method inside a call to multi()
 * Param key / function key
 * Param handler / value to return)
 * Returns Handler
 */
export function method(handler: (...args: any) => any): IHandler;
export function method(key: any, handler: (...args: any) => any): IHandler;
/**
 * multi, create a multimethod function
 * Takes a dispatch - Optional custom dispatch function
 * And initialMethods - Method functions (args, handler)
 * Returns dispatch function
 */
export function multi(...initialMethods: IHandler[]): MultiMethod;
export function createFilterStream(fn: (value: any) => boolean): any;
export function createMapStream(fn: (value: any) => any): any;
export function createReduceStream(reducer: (accumulator: any, value: any) => any, initialValue: any): any;
export interface ParallelStream {
    emit(event: string, ...args: any): any;
    push(value: any): any;
}
export class ParallelStream extends Transform {
    userTransform: (chunk: any, encoding: string, push: (value: any) => any, onComplete: (err: Error) => any) => void;
    running: number;
    terminate: (() => void) | null;
    constructor(userTransform: (chunk: any, encoding: string, push: (value: any) => any, onComplete: (err: Error) => any) => void, options?: {});
    _transform(chunk: any, encoding: string, callback: () => void): void;
    _flush(callback: () => void): void;
    _onComplete(err: Error): void;
}
export interface LimitedParallelStream {
    emit(event: string, ...args: any): any;
    push(chunk: any): any;
}
export class LimitedParallelStream extends Transform {
    concurrency: number;
    userTransform: (chunk: any, encoding: string, push: (value: any) => any, onComplete: (err: Error) => any) => void;
    running: number;
    continue: (() => void) | null;
    terminate: (() => void) | null;
    constructor(concurrency: number, userTransform: (chunk: any, encoding: string, push: (value: any) => any, onComplete: (err: Error) => any) => void, options?: {});
    _transform(chunk: any, encoding: string, callback: () => void): void;
    _flush(callback: () => void): void;
    _onComplete(err: Error): void;
}
export function createFork(stream: any): (...streams: any[]) => void;
export function createMerge(...sources: any[]): (dest: any) => any[];
/**
 * Checks to see if something appears to be a plain object
 */
export function isPlainObject(obj: any): boolean;
interface IAction {
    type: string;
    payload?: any;
    meta?: any;
    error?: any;
}
interface IActionCreator extends Function {
    match(action: IAction): boolean;
    toString(): string;
    type: string;
}
/**
 * A utility function for making an action creator for a given type
 */
export function createAction(type: string, prepareAction: (...args: any[]) => any): {
    (...args: any[]): IAction;
    toString(): string;
    type: string;
    match(action: IAction): boolean;
};
interface IMiddlewareAPI {
    getState(): any;
    dispatch(action: IAction, ...args: any[]): any;
}
type Middleware = (api: IMiddlewareAPI) => any;
type IListener = (action: IAction, middlewareAPI: IMiddlewareAPI) => any;
export const actionListener: {
    middleware(middlewareAPI: IMiddlewareAPI): (next: (action: IAction) => any) => (action: IAction) => any;
    addListener: (actionCreator: IActionCreator, listener: IListener) => void;
    removeListener: (actionCreator: IActionCreator, listener: IListener) => void;
};
/**
 * Creates an async thunk
 */
export function createAsyncThunk(typePrefix: string, payloadCreator: (...args: any[]) => any, options: any): ((arg: any) => (dispatch: (action: IAction) => any, getState: () => any, extra: any) => Promise<any> & {
    abort(reason: any): void;
    arg: any;
    requestId: string;
    unwrap(): Promise<any>;
}) & {
    pending: {
        (...args: any[]): IAction;
        toString(): string;
        type: string;
        match(action: IAction): boolean;
    };
    rejected: {
        (...args: any[]): IAction;
        toString(): string;
        type: string;
        match(action: IAction): boolean;
    };
    fulfilled: {
        (...args: any[]): IAction;
        toString(): string;
        type: string;
        match(action: IAction): boolean;
    };
    typePrefix: string;
};
interface IActionCreatorObject {
    [propKey: PropertyKey]: IActionCreator;
}
/**
 * Turns an action creator object into one whose values are wrapped in
 * a dispatch call so as to enable them to be invoked directly
 */
export function bindActionCreators(actionCreators: IActionCreatorObject | IActionCreator, dispatch: (action: IAction) => any): IActionCreator | IActionCreatorObject;
interface IReducerFunction {
    (state: any, action: IAction): any;
}
export interface Reducer {
    builder(): IReducerBuilder;
    combineReducers: (...reducers: IReducerFunction[]) => IReducerFunction;
}
interface IReducerBuilder {
    case(type: string, handler: (state: any, action: IAction) => any): IReducerBuilder;
    init(initialState: any): IReducerBuilder;
    build(): MultiMethod;
}
/**
 * Reducer offers an easy way to create a reducer function
 */
export const Reducer: {
    builder(): {
        case(type: any, handler: IReducerFunction): any;
        init(initialState: any): any;
        build(): MultiMethod;
    };
    combineReducers: typeof combineReducers;
};
/**
 * Create a stateful store for managing application state
 */
export function createStore(reducer: IReducerFunction, initialState?: any, enhancer?: (createStore: any) => (reducer: IReducerFunction, initialState: any) => any): any;
interface IReducerObject {
    [propKey: PropertyKey]: IReducerFunction;
}
/**
 * Turns an object with various reducer functions into a single reducer
 * function.
 */
export function combineReducers(reducers: IReducerObject): IReducerFunction;
type Selector = (state: {
    [propKey: PropertyKey]: any;
}) => any;
/**
 * createSelector takes some function and memoizes it
 */
export function createSelector(...fns: Selector[]): {
    (this: any, ...args: any[]): any;
    clearCache(): any;
} & {
    resultFunc: Selector | undefined;
    memoizedResultFunc: {
        (this: any, ...args: any[]): any;
        clearCache(): any;
    };
    dependencies: any;
    lastResult: () => any;
    recomputations: () => number;
    resetRecomputations: () => 0;
};
/**
 * Creates a middleware function that accepts an optional 'extra argument' to
 * be injected later.
 */
declare function createThunkMiddleware(extraArgument?: any): {
    ({ dispatch, getState }: IMiddlewareAPI): (next: Middleware) => (action: IAction | any) => any;
    withExtraArgument: typeof createThunkMiddleware;
};
export const thunk: {
    ({ dispatch, getState }: IMiddlewareAPI): (next: Middleware) => (action: IAction | any) => any;
    withExtraArgument: typeof createThunkMiddleware;
};
export const createConfiguredStore: (reducer: (state: any, action: import("store/createAction").IAction) => any, initialState: any) => any;

//# sourceMappingURL=index.d.ts.map
