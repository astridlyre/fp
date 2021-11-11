export const Observable: any;
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
export function aggregate(a: any, b: any): any;
/**
 * AggregateOn, combine many objects into one with aggregated keys
 * TODO: Try to improve the algorithm
 */
export function aggregateOn(keyMap: any, ...objects: any[]): any;
/**
 * Merge, combine all keys
 */
export function merge(a: any, b: any): any;
/**
 * Entries, eagerly get entries of an object or iterable
 */
export function entries(iterable: any[]): [number, any][] | [string, any][];
/**
 * Values, eagerly get values of an object or iterable
 */
export function values(iterable: any[]): any[];
/**
 * Keys, eagerly get keys of an object or iterable
 */
export function keys(iterable: any[]): string[] | number[];
/**
 * Rename object's keys using a keymap
 */
export const rename: (this: any, ...args: any[]) => any;
/**
 * DeepFreeze
 */
export function deepFreeze(obj: any): any;
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
export const immutable: Function;
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
/**
 * Identity, x => x
 */
export const identity: (x: any) => any;
/**
 * Constant, x => y => x
 */
export const constant: (a: any) => (b: any) => any;
/**
 * Arity, turn a function into one with n arguments
 */
export const arity: (fn: Function, n: number) => (this: any, ...args: any[]) => any;
/**
 * Unary, turn a function into one with 1 argument
 */
export const unary: (fn: Function) => (this: any, ...args: any[]) => any;
/**
 * Binary, turn a function into one with 2 arguments
 */
export const binary: (fn: Function) => (this: any, ...args: any[]) => any;
/**
 * Ternary, turn a function into one with 3 arguments
 */
export const ternary: (fn: Function) => (this: any, ...args: any[]) => any;
/**
 * Call First, partially apply a function's leftmost argument
 */
export const callFirst: (fn: Function, larg: any) => (this: any, ...args: any) => any;
/**
 * Call Last, partially apply a function's rightmost argument
 */
export const callLast: (fn: Function, rarg: any) => (this: any, ...args: any) => any;
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
export function compose(...fns: Function[]): Function;
/**
 * Pipe, combine any number of functions together, left to right
 * fns to pipe
 * A function pipe of fns
 */
export function pipe(...fns: Function[]): Function;
/**
 * Curry, automatically curry a function, only works with non-variadic functions
 *
 * Takes fn - Function to curry
 * Returns partially applied function, or result of calling
 * function fn if arguments are greater than or equal to total arity of function fn.
 */
export function curry(fn: Function): (this: any, ...args: any[]) => any;
/**
 * Tap, run a side effect fn and then return x
 */
export const tap: (this: any, ...args: any[]) => any;
/**
 * Not, negate the result of a function
 */
export const not: (this: any, ...args: any[]) => any;
/**
 * Negate, reverse the sign of a numerical result of a function
 */
export const negate: (this: any, ...args: any[]) => any;
/**
 * Flip2, flip the position of a function's arguments
 */
export const flip2: (f: Function) => (this: any, ...args: any[]) => any;
/**
 * Flip3, flip the first argument to the last argument
 */
export const flip3: (f: Function) => (this: any, ...args: any[]) => any;
/**
 * Tee, logs argument and returns it
 * @param {any}
 * @returns {any}
 */
export const tee: any;
/**
 * Log, spy on the execution of a function fn with logger
 */
export const log: (fn: Function, logger?: (...data: any[]) => void) => (this: any, ...args: any[]) => any;
/**
 * Transduce, combine multiple maps, filters, into a more efficient operation
 */
export const transduce: (this: any, ...args: any[]) => any;
/**
 * MapTR, create a map transducer
 */
export const mapTR: (fn: Function) => (reducer: Function) => (acc: any, val: any) => any;
/**
 * filterTR, create a filter transducer
 */
export const filterTR: (fn: Function) => (reducer: Function) => (acc: any, val: any) => any;
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
export const invoke: (fn: Function, ...args: any[]) => (instance: any) => any;
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
export function once(fn: Function): (this: any, ...args: any[]) => any;
/**
 * Memoize a function
 */
export function memoize(fn: Function): {
    (this: any, ...args: any[]): any;
    clearCache(): any;
};
/**
 * Debounce a function
 */
export const debounce: (delay: number) => (this: any, fn: Function) => void;
/**
 * Accumulate returns a function that will be called with all accumulated events after delay
 */
export const accumulate: (delay: number) => (this: any, fn: Function) => (event: any) => void;
/**
 * DeepEqual
 * @param {any} a
 * @param {any} b
 */
export function deepEqual(a: any, b: any): boolean;
/**
 * ComposeM
 */
export function composeM(...Ms: any): any;
export const liftA2: (this: any, ...args: any[]) => any;
export const liftA3: (this: any, ...args: any[]) => any;
export const liftA4: (this: any, ...args: any[]) => any;
export const apply: (this: any, ...args: any[]) => any;
export const flat: (M: any) => any;
export const flatMap: (this: any, ...args: any[]) => any;
export const fold: (this: any, ...args: any[]) => any;
export const getOrElseThrow: (this: any, ...args: any[]) => any;
/**
 * Array functions
 * Provides a set of functions for common array operations
 */
export const head: (a: string | any[]) => any;
export const last: (a: string | any[]) => any;
export const every: (this: any, ...args: any[]) => any;
export const some: (this: any, ...args: any[]) => any;
export const find: (this: any, ...args: any[]) => any;
export const sum: (...args: number[]) => number;
export const average: (ns: number[]) => number;
export const join: (this: any, ...args: any[]) => any;
/**
 * Partition, divide an array into two
 */
export const partition: (arr: any[], a: (value: any) => boolean, b: (value: any) => boolean) => any;
/**
 * ZipMap
 */
export const zipMap: <X>(f: Function, ...iters: Iterable<X>[]) => any[];
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
export const pluck: Function;
/**
 * DeepMap
 */
export const deepMap: (fn: Function) => (tree: any[]) => any[];
/**
 * Range
 */
export const range: (start: number, end: number, step?: number) => any[];
/**
 * deepJoin, deep join two arrays on keyA and keyB
 */
export const deepJoin: (this: any, ...args: any[]) => any;
/**
 * ComposeAsync
 */
export const composeAsync: (...fns: Function[]) => Function;
/**
 * PipeAsync
 */
export const pipeAsync: (...fns: Function[]) => Function;
/**
 * MapAsync
 */
export const mapAsync: (f: <X>(value: any) => Promise<X>, a: any[]) => Promise<unknown[]>;
/**
 * ReduceAsync
 */
export const reduceAsync: (f: <X>(value: any) => Promise<X>, init: any, a: any[]) => Promise<any>;
/**
 * FilterAsync
 */
export const filterAsync: (f: <X>(value: any) => Promise<X>, a: any) => Promise<any>;
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
/**
 * FunctionalMixin takes a behaviour object and a target, which is the object to mix behaviour into
 */
export function FunctionalMixin(behaviour: any, sharedBehaviour?: {}): (target: any) => any;
/**
 * WithValidation
 * @param {function} validator - Function to validate data
 * @param {function} fn - Function to wrap with validation
 * @returns {function} Wrapped function fn with validation logic
 */
export const withValidation: (this: any, ...args: any[]) => any;
export interface Maybe {
    isJust: boolean;
    isNothing: boolean;
    merge(): Maybe;
    call(content: Maybe, ...args: any): Function;
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
    fold(fn?: (x: any) => any): any;
    filter(fn?: (x: any) => any): Maybe;
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
export class IO {
    unsafePerformIO: Function;
    [Symbol.toStringTag]: string;
    constructor(fn: Function);
    map(fn: (value: Function) => Function): IO;
    flatMap(fn: (value: Function) => Function): IO;
    ap(f: any): IO;
    merge(): IO;
    toString(): string;
    toJSON(): {
        type: string;
        value: Function;
    };
    static of(x: any): IO;
}
export class IOAsync {
    unsafePerformIO: Function;
    [Symbol.toStringTag]: string;
    constructor(fn: Function);
    map(fn: (value: Function) => Function): Promise<IO>;
    flatMap(fn: (value: Function) => Function): Promise<any>;
    merge(): Promise<IOAsync>;
    toString(): string;
    toJSON(): {
        type: string;
        value: Function;
    };
    static of<X>(fn: Promise<X>): IOAsync;
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
    flatMap(fn: (left: any, right: any) => [left: any, right: any]): Pair;
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
    flatMap(fn: (left: any, middle: any, right: any) => [left: any, middle: any, right: any]): Triple;
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
export function zipWith<X>(zipper: (...elements: any) => any, ...iterables: Iterable<X>[]): Iterable<X>;
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
export const Stack: {
    (): IStack;
    from<X>(iterable: Iterable<X>): IStack;
};
export function Lazy<X>(target: Iterable<X>): ICollection;
export { EventEmitter };
export function reactivize(obj: any): any;
declare const handlersKey: unique symbol;
declare const dispatchKey: unique symbol;
declare const isMethodObject: unique symbol;
interface IHandler {
    key: any;
    handler: (...args: any) => any;
    [isMethodObject]: boolean;
}
type MultiMethod = {
    [dispatchKey]: (...args: any) => any;
    [handlersKey]: IHandler[];
    map: (...args: any) => any;
};
/**
 * Method, create a method inside a call to multi()
 * Param key / function key
 * Param handler / value to return)
 * Returns Handler
 */
export function method(key: any, handler: (...args: any) => any | undefined): IHandler;
/**
 * multi, create a multimethod function
 * Takes a dispatch - Optional custom dispatch function
 * And initialMethods - Method functions (args, handler)
 * Returns dispatch function
 */
export function multi(...initialMethods: any[]): MultiMethod;
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
 * Checks to see if something appears to be a plain object
 *
 * @param {object} Object to check
 * @returns {boolean}
 */
export function isPlainObject(obj: any): boolean;
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
 * Create a stateful store for managing application state
 *
 * @param {function} Reducer function
 * @param {object} Initial state
 * @returns {object} State store
 */
export function createStore(reducer: any, initialState: any, enhancer: any): object;
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
export function thunk({ dispatch, getState }: {
    dispatch: any;
    getState: any;
}): (next: any) => (action: any) => any;
export const createConfiguredStore: any;

//# sourceMappingURL=index.d.ts.map
