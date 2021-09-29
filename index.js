/*
 * My lil functional programming collection
 */
export const identity = (x) => x;
const isTypeOf = (a) => (b) => typeof b === a;
export const isNumber = isTypeOf("number");
export const isBoolean = isTypeOf("boolean");
export const isNull = (x) => x === null;
export const isString = isTypeOf("string");
export const isObject = isTypeOf("object");
export const isArray = (a) => Array.isArray(a);
export const isInstanceOf = (a) => (b) => b instanceof a;
export const isFunction = (f) =>
  f && typeof f === "function" &&
  Object.prototype.toString.call(f) === "[object Function]";
export const compose2 = (f, g) => (...args) => f(g(...args));
export const compose = (...fns) => fns.reduce(compose2);
export const pipe = (...fns) => fns.reduceRight(compose2);
export const curry = (fn) =>
  (...args1) =>
    args1.length === fn.length ? fn(...args1) : (...args2) => {
      const args = [...args1, ...args2];
      return args.length >= fn.length ? fn(...args) : curry(fn)(...args);
    };
export const apply = (f) => (x) => f(x);
export const thrush = (x) => (f) => f(x);
export const constant = (a) => () => a;
export const flip = (f) => (a) => (b) => f(b)(a);
export const flip2 = (f) => (a, b) => f(b, a);
export const flip3 = (f) => (a, b, c) => f(b, c, a);
export const arity = (fn, n) => (...args) => fn(...args.slice(0, n));
export const unary = (fn) => arity(fn, 1);
export const binary = (fn) => arity(fn, 2);
export const ternary = (fn) => arity(fn, 3);
export const demethodize = Function.prototype.bind.bind(
  Function.prototype.call,
);
export const append = (a, b) => a.concat(b);
export const not = curry((f, a) => !f(a));
export const invert = curry((f, a) => -f(a));
export const flat = (M) => M.flat();
export const prop = curry((name, a) =>
  a[name] && isFunction(a[name]) ? a[name].call(a) : a[name]
);
export const props = curry((names, a) => names.map((n) => prop(n, a)));
export const map = curry((f, M) => M.map(f));
export const mapRight = curry((f, M) =>
  M.reduceRight((acc, v) => acc.concat(f(v)), [])
);
export const reduce = curry((acc, start, M) => M.reduce(acc, start));
export const reduceRight = curry((acc, start, M) => M.reduceRight(acc, start));
export const filter = curry((p, M) => M.filter(p));
export const composeM2 = (f, g) => (...args) => g(...args).flatMap(f);
export const composeM = (...Ms) => Ms.reduce(composeM2);
export const flatMap = curry((f, M) => M.flatMap(f));
export const fold = curry((f, M) => M.fold(f));
export const getOrElseThrow = curry((e, M) => M.getOrElseThrow(e));
export const add = curry((x, y) => x + y);
export const addRight = curry((x, y) => y + x);
export const subtract = curry((x, y) => x - y);
export const subtractRight = curry((x, y) => y - x);
export const multipy = curry((x, y) => x * y);
export const multipyRight = curry((x, y) => y * x);
export const divide = curry((x, y) => x / y);
export const divideRight = curry((x, y) => y / x);
export const every = curry((f, M) => M.every(f));
export const some = curry((f, M) => M.some(f));
export const range = (start, end, step = start < end ? 1 : -1) => {
  let index = -1;
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
  const result = new Array(length);
  while (length--) {
    result[++index] = start;
    start += step;
  }
  return result;
};
export function once(fn) {
  let done = false;
  let result = null;
  return (...args) => {
    if (!done) {
      done = true;
      result = fn(...args);
    }
    return result;
  };
}
export function memoize(fn) {
  const cache = Object.create(null);
  const toKey = (key) => JSON.stringify(key);
  const isPrimitive = (x) =>
    typeof x === "number" || typeof x === "string" || typeof x === "boolean";
  if (fn.length === 1) {
    return (arg) => {
      const key = isPrimitive(arg) ? arg : toKey(arg);
      return key in cache ? cache[key] : (cache[key] = fn(arg));
    };
  }
  return (...args) => {
    const key = toKey(args);
    return key in cache ? cache[key] : (cache[key] = fn(...args));
  };
}

// Object functions
const detectCollision = (...descriptors) =>
  descriptors
    .flatMap(Object.keys)
    .reduce(sortReducer, [])
    .reduce(collisionReducer, [])
    .forEach((c) => console.log(`[WARN] Collision found: ${c}`));
const sortReducer = (accumulator, value) => {
  const nextIndex = accumulator.findIndex((i) => value < i);
  const index = nextIndex > -1 ? nextIndex : accumulator.length;
  accumulator.splice(index, 0, value);
  return accumulator;
};
const collisionReducer = (accumulator, value, index, arr) =>
  value === arr[index + 1] ? [...accumulator, value] : accumulator;
const isDescriptor = (obj) => obj && (obj["state"] || obj["methods"]);

// extend Object
if (typeof Object.impl !== "function") {
  Object.defineProperty(Object, "impl", {
    value: (...mixins) =>
      (target) => {
        if (!Object.isExtensible(target) || Object.isSealed(target)) {
          throw new TypeError(
            "Unable to concatenate mixins into base object. Object is either not extensible or has been sealed",
          );
        }
        Object.assign(target.prototype, ...mixins);
        return target;
      },
    enumerable: false,
    writable: false,
    configurable: false,
  });
}
if (typeof Object.mixin !== "function") {
  Object.defineProperty(Object, "mixin", {
    value: function concatExtend(descriptor, ...mixins) {
      let base = Object(descriptor);
      if (isDescriptor(descriptor)) {
        base = { ...base.state, ...base.methods, ...base.interop };
      }
      detectCollision(base, ...mixins);
      if (!Object.isExtensible(base) || Object.isSealed(base)) {
        throw new TypeError(
          "Unable to concatenate mixins into base object. Object is either not extensible or has been sealed",
        );
      }
      return Object.assign({ ...base }, ...mixins);
    },
    enumerable: false,
    writable: false,
    configurable: false,
  });
}
export const deepFreeze = (obj) => {
  if (!Object.isFrozen(obj)) {
    Object.keys(obj).forEach((name) => deepFreeze(obj[name]));
    Object.freeze(obj);
  }
  return obj;
};
Object.deepFreeze = Object.deepFreeze || deepFreeze;
