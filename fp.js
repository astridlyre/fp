function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$2(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");

  return _classApplyDescriptorGet(receiver, descriptor);
}

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");

  _classApplyDescriptorSet(receiver, descriptor, value);

  return value;
}

function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}

function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}

function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);

  privateMap.set(obj, value);
}

// identity x returns x
var identity = x => x; // constant () => a

var constant = a => b => a; // fip order of arguments

var flip = f => function flip(a) {
  return b => f.call(this, b, a);
};
var flip2 = f => function flip2(a, b) {
  return f.call(this, b, a);
};
var flip3 = f => function flip3(a, b, c) {
  return f.call(this, b, c, a);
}; // arity functions

var arity = (fn, n) => function arity() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return fn.apply(this, args.slice(0, n));
};
var unary = fn => arity(fn, 1);
var binary = fn => arity(fn, 2);
var ternary = fn => arity(fn, 3); // partial application

var callFirst = (fn, larg) => function callFirst() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return fn.call(this, larg, ...args);
};
var callLast = (fn, rarg) => function callLast() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return fn.call(this, ...args, rarg);
}; // de-methodize

var demethodize = Function.prototype.bind.bind(Function.prototype.call); // typeof functions

var isTypeOf = a => b => typeof b === a;

var isNumber = isTypeOf('number');
var isBoolean = isTypeOf('boolean');
var isNull = x => x === null;
var isString = isTypeOf('string');
var isObject$7 = isTypeOf('object');
var isArray = a => Array.isArray(a);
var isInstanceOf = a => b => b instanceof a;
var isFunction = f => f && typeof f === 'function';
var isSet = s => s instanceof Set;
var isMap = m => m instanceof Map; // Len gets the length argument a

var len = a => isString(a) || isArray(a) || isFunction(a) ? a.length : isSet(a) || isMap(a) ? a.size : isObject$7(a) ? a.entries().length : void 0; // Compose and pipe

var compose2 = (f, g) => function compose() {
  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  return f.call(this, g.call(this, ...args));
};
var compose = function compose() {
  for (var _len5 = arguments.length, fns = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    fns[_key5] = arguments[_key5];
  }

  return fns.reduce(compose2);
};
var pipe = function pipe() {
  for (var _len6 = arguments.length, fns = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    fns[_key6] = arguments[_key6];
  }

  return fns.reduceRight(compose2);
}; // Autocurry

var curry = fn => function curryInner() {
  var _this = this;

  for (var _len7 = arguments.length, args1 = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args1[_key7] = arguments[_key7];
  }

  return args1.length === fn.length ? fn.apply(this, args1) : function () {
    for (var _len8 = arguments.length, args2 = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args2[_key8] = arguments[_key8];
    }

    return args1.length + args2.length >= fn.length ? fn.call(_this, ...args1, ...args2) : curry(fn)(...args1, ...args2);
  };
}; // run a side effect with tap

var tap = curry((fn, x) => (fn(x), x)); // not and invert

var not = curry((f, a) => !f(a));
var invert = curry((f, a) => -f(a)); // Logging

var tee = tap(console.log.bind(console));
var log = function log(fn) {
  var logger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : console.log.bind(console);
  return function log() {
    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }

    logger("Entering function ".concat(fn.name, "(").concat(JSON.stringify(args, null, 2), ")"));
    var result = fn.apply(this, args);
    logger("Exiting function ".concat(fn.name, " -> ").concat(JSON.stringify(result, null, 2)));
    return result;
  };
}; // creates a Transducer function

var transduce = curry((arr, fns, reducer, initial) => arr.reduce(compose(...fns)(reducer), initial)); // Transducers

var mapTR = fn => reducer => (acc, val) => reducer(acc, fn(val));
var filterTR = fn => reducer => (acc, val) => fn(val) ? reducer(acc, val) : acc; // prop & props get object properties

var prop$1 = curry((name, a) => a && (name in a ? isFunction(a[name]) ? a[name].call(a) : a[name] : void 0));
var send = function send(name) {
  for (var _len10 = arguments.length, args = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
    args[_key10 - 1] = arguments[_key10];
  }

  return instance => instance[name].apply(instance, args);
};
var bound = function bound(name) {
  for (var _len11 = arguments.length, args = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
    args[_key11 - 1] = arguments[_key11];
  }

  return args === [] ? instance => instance[name].bind(instance) : instance => Function.prototype.bind.apply(instance[name], [instance].concat(args));
};
var setPropM = curry((name, value, a) => a && name in a ? (a[name] = value, a) : a);
var setProp$1 = curry((name, value, a) => a && name in a ? _objectSpread2(_objectSpread2({}, a), {}, {
  [name]: value
}) : _objectSpread2({}, a));
var props = curry((names, a) => names.map(n => prop$1(n, a)));
var invoke = function invoke(fn) {
  for (var _len12 = arguments.length, args = new Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
    args[_key12 - 1] = arguments[_key12];
  }

  return instance => fn.apply(instance, args);
};
var instanceEval = instance => function (fn) {
  for (var _len13 = arguments.length, args = new Array(_len13 > 1 ? _len13 - 1 : 0), _key13 = 1; _key13 < _len13; _key13++) {
    args[_key13 - 1] = arguments[_key13];
  }

  return fn.apply(instance, args);
};
var deepProp = curry((path, a) => {
  if (!Array.isArray(path)) path = path.split('.');
  var [p, ...rest] = path;
  return !rest.length ? prop$1(p, a) : deepProp(rest, prop$1(p, a));
});
var toJSON = x => JSON.stringify(x);
var fromJSON = x => JSON.parse(x);
var stringify = JSON.stringify.bind(JSON);
var parse = JSON.parse.bind(JSON);
var toString$5 = String;
var toInteger = s => Number.parseInt(s, 10);
var padStart = curry((x, reps, fill) => String.prototype.padStart.call(x, reps, fill));
var padEnd = curry((x, reps, fill) => String.prototype.padEnd.call(x, reps, fill)); // map, filter, reduce

var forEach = curry((f, M) => M.forEach(f));
var map$1 = curry((f, M) => M.map(f));
var filter$1 = curry((p, M) => M.filter(p));
var reduceRight = curry((acc, start, M) => M.reduceRight(acc, start));
var pluck = compose(map$1, prop$1);
var deepMap = fn => function innerDeepMap(tree) {
  return Array.prototype.map.call(tree, element => Array.isArray(element) ? innerDeepMap(element) : fn(element));
}; // compose monads

var composeM2 = (f, g) => function innerComposeM2() {
  for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
    args[_key14] = arguments[_key14];
  }

  return g.apply(this, args).flatMap(f);
};
var composeM = function composeM() {
  for (var _len15 = arguments.length, Ms = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
    Ms[_key15] = arguments[_key15];
  }

  return Ms.reduce(composeM2);
};
var composeAsync2 = (f, g) => /*#__PURE__*/function () {
  var _innerComposeAsync = _asyncToGenerator(function* () {
    for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
      args[_key16] = arguments[_key16];
    }

    return yield f.call(this, yield g.call(this, ...args));
  });

  function innerComposeAsync() {
    return _innerComposeAsync.apply(this, arguments);
  }

  return innerComposeAsync;
}();
var liftA2 = curry((fn, a1, a2) => a1.map(fn).ap(a2));
var liftA3 = curry((fn, a1, a2, a3) => a1.map(fn).ap(a2).ap(a3));
var liftA4 = curry((fn, a1, a2, a3, a4) => a1.map(fn).ap(a2).ap(a3).ap(a4));
var apply = curry((fn, F) => map$1.call(F, fn));
var composeAsync = function composeAsync() {
  for (var _len17 = arguments.length, fns = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
    fns[_key17] = arguments[_key17];
  }

  return fns.reduce(composeAsync2);
};
var pipeAsync = function pipeAsync() {
  for (var _len18 = arguments.length, fns = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
    fns[_key18] = arguments[_key18];
  }

  return fns.reduceRight(composeAsync2);
};
var mapAsync = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (f, a) {
    return yield Promise.all(a.map(f));
  });

  return function mapAsync(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var reduceAsync = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (f, init, a) {
    return yield a.reduce((p, val) => p.then(() => f(val)), Promise.resolve(init));
  });

  return function reduceAsync(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();
var filterAsync = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (f, a) {
    return yield mapAsync(f, a).then(bools => a.filter((_, i) => Boolean(bools[i])));
  });

  return function filterAsync(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}(); // flat

var flat = M => M.flat();
var flatMap = curry((f, M) => M.flatMap(f));
var fold = curry((f, M) => M.fold(f));
var getOrElseThrow = curry((e, M) => M.getOrElseThrow(e)); // math functions

var eq = curry((a, b) => a === b);
var add = curry((x, y) => x + y);
var addRight = curry((x, y) => y + x);
var subtract = curry((x, y) => x - y);
var subtractRight = curry((x, y) => y - x);
var multipy = curry((x, y) => x * y);
var multipyRight = curry((x, y) => y * x);
var divide = curry((x, y) => x / y);
var divideRight = curry((x, y) => y / x);
var roundTo = n => x => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
var pow = (base, power) => power === 0 ? 1 : power & 1 ? base * pow(base, power - 1) : pow(base * base, power >> 1); // array functions

var head = a => a[0];
var last = a => a[a.length - 1];
var every = curry((f, arr) => arr.every(f));
var some = curry((f, arr) => arr.some(f));
var find = curry((f, arr) => arr.find(f));
var sum = function sum() {
  for (var _len19 = arguments.length, args = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
    args[_key19] = arguments[_key19];
  }

  return args.reduce((x, y) => x + y, 0);
};
var average = ns => sum(...ns) / ns.length;
var shift = arr => [arr[0], arr.slice(1)];
var pop = arr => [arr.slice(0, -1), arr[arr.length - 1]];
var unshift = curry((arr, v) => [v].concat(arr));
var push = curry((arr, v) => arr.concat(v));
var partition = (arr, a, b) => arr.reduce((acc, cv) => a(cv) ? (acc[0].push(cv), acc) : b(cv) ? (acc[1].push(cv), acc) : acc, [[], []]);
var zipMap = function zipMap(f) {
  for (var _len20 = arguments.length, iters = new Array(_len20 > 1 ? _len20 - 1 : 0), _key20 = 1; _key20 < _len20; _key20++) {
    iters[_key20 - 1] = arguments[_key20];
  }

  var min = Math.min(...pluck('length')(iters));
  var result = [];

  for (var i = 0; i < min; i++) {
    result.push(f(...pluck(i)(iters)));
  }

  return result;
};
var sortBy = curry((f, a) => [...a].sort(f));
var match$1 = curry((re, s) => re.test(s));
var replace = curry((re, rpl, s) => s.replace(re, rpl));
var split$1 = curry((sep, s) => s.split(sep));
var toLowerCase = s => s.toLowerCase();
var toUpperCase = s => s.toUpperCase();
var prepend = curry((s1, s2) => "".concat(s1).concat(s2));
var append = curry((s1, s2) => "".concat(s2).concat(s1));
var tryCatch = curry((f, g) => {
  try {
    return f();
  } catch (e) {
    return g(e);
  }
});
var maybe = fn => function maybe() {
  for (var _len21 = arguments.length, args = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
    args[_key21] = arguments[_key21];
  }

  return args.reduce((acc, cv) => acc && cv != null, true) ? fn.apply(this, args) : void 0;
}; // range

var range = function range(start, end) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : start < end ? 1 : -1;
  var index = -1;
  var length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
  var result = new Array(length);

  while (length--) {
    result[++index] = start;
    start += step;
  }

  return result;
}; // once only runs a function once, then returns cached result

function once(fn) {
  var done = false;
  var result;
  return function once() {
    for (var _len22 = arguments.length, args = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
      args[_key22] = arguments[_key22];
    }

    return !done ? (done = true, result = fn.apply(this, args), result) : result;
  };
} // memoize a function

function memoize(fn) {
  var cache = Object.create(null);

  var toKey = key => JSON.stringify(key);

  var isPrimitive = x => typeof x === 'number' || typeof x === 'string' || typeof x === 'boolean';

  return function memoize() {
    for (var _len23 = arguments.length, args = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
      args[_key23] = arguments[_key23];
    }

    var key = args.length === 1 && isPrimitive(args[0]) ? args[0] : toKey(args);
    return key in cache ? cache[key] : cache[key] = fn.apply(this, args);
  };
} // debounce

var debounce = delay => {
  var pending = false;
  return function debounce(fn) {
    if (pending) clearTimeout(pending);
    pending = setTimeout(() => fn.call(this), delay);
  };
}; // accumulate

var accumulate = delay => {
  var stack = [];
  var pending = false;
  return function accumulate(fn) {
    return event => {
      if (pending) clearTimeout(pending);
      stack.push(event);
      pending = setTimeout(() => {
        pending = false;
        fn.call(this, stack.slice());
        stack.length = 0;
      }, delay);
    };
  };
}; // Object functions

var FunctionalMixin = function FunctionalMixin(behaviour) {
  var sharedBehaviour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var instanceKeys = Reflect.ownKeys(behaviour);
  var sharedKeys = Reflect.ownKeys(sharedBehaviour);
  var typeTag = Symbol('isA');

  function mixin(target) {
    for (var property of instanceKeys) {
      if (!target[property]) {
        Object.defineProperty(target, property, {
          value: behaviour[property],
          writable: true
        });
      }
    }

    target[typeTag] = true;
    return target;
  }

  for (var property of sharedKeys) {
    Object.defineProperty(mixin, property, {
      value: sharedBehaviour[property],
      enumerable: Object.prototype.propertyIsEnumerable.call(sharedBehaviour, property)
    });
  }

  Object.defineProperty(mixin, Symbol.hasInstance, {
    value: instance => !!instance[typeTag]
  });
  return mixin;
};

var detectCollision = function detectCollision() {
  for (var _len24 = arguments.length, descriptors = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
    descriptors[_key24] = arguments[_key24];
  }

  return descriptors.flatMap(Object.keys).reduce(sortReducer, []).reduce(collisionReducer, []).forEach(c => console.log("[WARN] Collision found: ".concat(c)));
};

var sortReducer = (accumulator, value) => {
  var nextIndex = accumulator.findIndex(i => value < i);
  var index = nextIndex > -1 ? nextIndex : accumulator.length;
  accumulator.splice(index, 0, value);
  return accumulator;
};

var collisionReducer = (accumulator, value, index, arr) => value === arr[index + 1] ? [...accumulator, value] : accumulator;

var isDescriptor = obj => obj && (obj.state || obj.methods); // extend Object


if (typeof Object.impl !== 'function') {
  Object.defineProperty(Object, 'impl', {
    value: function value() {
      for (var _len25 = arguments.length, mixins = new Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
        mixins[_key25] = arguments[_key25];
      }

      return target => {
        if (!Object.isExtensible(target) || Object.isSealed(target)) {
          throw new TypeError('Unable to concatenate mixins into base object. Object is either not extensible or has been sealed');
        }

        Object.assign(target.prototype, ...mixins);
        return target;
      };
    },
    enumerable: false,
    writable: false,
    configurable: false
  });
}

if (typeof Object.mixin !== 'function') {
  Object.defineProperty(Object, 'mixin', {
    value: function concatExtend(descriptor) {
      var base = Object(descriptor);

      if (isDescriptor(descriptor)) {
        base = _objectSpread2(_objectSpread2(_objectSpread2({}, base.state), base.methods), base.interop);
      }

      for (var _len26 = arguments.length, mixins = new Array(_len26 > 1 ? _len26 - 1 : 0), _key26 = 1; _key26 < _len26; _key26++) {
        mixins[_key26 - 1] = arguments[_key26];
      }

      detectCollision(base, ...mixins);

      if (!Object.isExtensible(base) || Object.isSealed(base)) {
        throw new TypeError('Unable to concatenate mixins into base object. Object is either not extensible or has been sealed');
      }

      return Object.assign(_objectSpread2({}, base), ...mixins);
    },
    enumerable: false,
    writable: false,
    configurable: false
  });
}

var deepFreeze = obj => {
  if (obj && typeof obj === 'object' && !Object.isFrozen(obj)) {
    Object.getOwnPropertyNames(obj).forEach(name => deepFreeze(obj[name]));
    Object.freeze(obj);
  }

  return obj;
};
var deepCopy = obj => {
  var aux = obj;

  if (obj && typeof obj === 'object') {
    aux = new obj.constructor();
    Object.getOwnPropertyNames(obj).forEach(prop => aux[prop] = deepCopy(obj[prop]));
  }

  return aux;
};
Object.deepFreeze = Object.deepFreeze || deepFreeze;
var immutable = compose(Object.seal, Object.deepFreeze);

var _Symbol$toStringTag, _Symbol$toPrimitive, _Symbol$iterator, _Symbol$toPrimitive2, _Symbol$iterator2, _Symbol$toStringTag2, _Symbol$toStringTag3, _Symbol$toStringTag4, _Symbol$iterator3, _Symbol$toStringTag5, _Symbol$iterator4, _Symbol$toStringTag6, _Symbol$iterator5;

function throwError(error) {
  throw error;
}

function errorWith(str) {
  throw new TypeError(str);
}

var _value$1 = /*#__PURE__*/new WeakMap();

_Symbol$toStringTag = Symbol.toStringTag;
_Symbol$toPrimitive = Symbol.toPrimitive;
_Symbol$iterator = Symbol.iterator;
class Maybe {
  constructor(v) {
    _classPrivateFieldInitSpec(this, _value$1, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, _Symbol$toStringTag, 'Maybe');

    _classPrivateFieldSet(this, _value$1, v);
  }

  get() {
    var _this$value;

    return (_this$value = this.value) !== null && _this$value !== void 0 ? _this$value : errorWith('Unable to get from a Maybe#Nothing');
  }

  getOrElse(defaultValue) {
    var _this$value2;

    return (_this$value2 = this.value) !== null && _this$value2 !== void 0 ? _this$value2 : defaultValue;
  }

  getOrElseThrow(error) {
    var _this$value3;

    return (_this$value3 = this.value) !== null && _this$value3 !== void 0 ? _this$value3 : throwError(error);
  }

  get value() {
    return _classPrivateFieldGet(this, _value$1);
  }

  static of(v) {
    return v == null ? new Nothing(v) : new Just(v);
  }

  static fromEmpty(v) {
    return Maybe.of(v).map(x => x.length === 0 ? null : x);
  }

  [_Symbol$toPrimitive](hint) {
    switch (hint) {
      case 'string':
        return this.toString();

      case 'number':
      default:
        return this.get();
    }
  }

  *[_Symbol$iterator]() {
    yield this.isNothing ? new Nothing(_classPrivateFieldGet(this, _value$1)) : undefined;
    yield this.isJust ? new Just(_classPrivateFieldGet(this, _value$1)) : undefined;
  }

}
class Just extends Maybe {
  get isJust() {
    return true;
  }

  get isNothing() {
    return false;
  }

  fold() {
    var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x => x;
    return fn(this.value);
  }

  filter() {
    var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x => x;
    return fn(this.value) ? new Just(a) : new Nothing();
  }

  map(fn) {
    return Maybe.of(fn(this.value));
  }

  flatMap(fn) {
    return Maybe.of(fn(this.value).merge());
  }

  ap(Ma) {
    return Ma.isNothing ? Ma : isFunction(this.value) ? Maybe.of(isFunction(Ma.merge()) ? Ma.merge().call(Ma, this.value) : this.value(Ma.merge())) : Maybe.of(Ma.merge().call(Ma, this.value));
  }

  merge() {
    return this.value;
  }

  toString() {
    return "Maybe#Just (".concat(this.value, ")");
  }

  toJSON() {
    return {
      type: 'Maybe#Just',
      value: this.value
    };
  }

}
class Nothing extends Maybe {
  get isJust() {
    return false;
  }

  get isNothing() {
    return true;
  }

  map() {
    return this;
  }

  flatMap() {
    return this;
  }

  ap() {
    return this;
  }

  fold() {
    return this;
  }

  toString() {
    return "Maybe#Nothing ()";
  }

  toJSON() {
    return {
      type: 'Maybe#Nothing',
      value: {}
    };
  }

}

var _value2$1 = /*#__PURE__*/new WeakMap();

_Symbol$toPrimitive2 = Symbol.toPrimitive;
_Symbol$iterator2 = Symbol.iterator;
class Result$1 {
  constructor(v) {
    _classPrivateFieldInitSpec(this, _value2$1, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _value2$1, v);
  }

  get value() {
    return _classPrivateFieldGet(this, _value2$1);
  }

  static of(v) {
    var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Null argument provided';
    return v == null ? new Failure(error) : new Success(v);
  }

  static fromEmpty(a) {
    return Result$1.of(a).map(x => x.length === 0 ? null : x);
  }

  static fromPromise(p) {
    return p.then(result => new Success(result)).catch(err => new Failure(err.message));
  }

  [_Symbol$toPrimitive2](hint) {
    switch (hint) {
      case 'string':
        return this.toString();

      case 'number':
      default:
        return this.get();
    }
  }

  *[_Symbol$iterator2]() {
    yield this.isFailure ? new Failure(_classPrivateFieldGet(this, _value2$1)) : undefined;
    yield this.isSuccess ? new Success(_classPrivateFieldGet(this, _value2$1)) : undefined;
  }

}
class Failure extends Result$1 {
  get isSuccess() {
    return false;
  }

  get isFailure() {
    return true;
  }

  map() {
    return this;
  }

  flatMap() {
    return this;
  }

  ap() {
    return this;
  }

  get() {
    errorWith('Unable to get from a Result#Failure');
  }

  merge() {
    errorWith('Unable to merge from a Result#Failure');
  }

  getOrElse(defaultValue) {
    return defaultValue;
  }

  getOrElseThrow() {
    throw new Error(this.value);
  }

  toString() {
    return "Result#Failure (".concat(this.value, ")");
  }

  toJSON() {
    return {
      type: 'Result#Failure',
      value: this.value
    };
  }

}
class Success extends Result$1 {
  get isSuccess() {
    return true;
  }

  get isFailure() {
    return false;
  }

  map(fn) {
    return Result$1.of(fn(this.value));
  }

  flatMap(fn) {
    return Result$1.of(fn(this.value).merge());
  }

  ap(Rs) {
    return Rs.isFailure ? Rs : isFunction(this.value) ? Result$1.of(isFunction(Rs.merge()) ? Rs.merge().call(Rs, this.value) : this.value(Rs.merge())) : Result$1.of(Rs.merge().call(Rs, this.value));
  }

  get() {
    return this.value;
  }

  getOrElse() {
    return this.value;
  }

  getOrElseThrow() {
    return this.value;
  }

  merge() {
    return this.value;
  }

  toString() {
    return "Result#Success (".concat(this.value, ")");
  }

  toJSON() {
    return {
      type: 'Result#Success',
      value: this.value
    };
  }

}
class Try {
  constructor(fn, msg) {
    try {
      return new Success(fn());
    } catch (e) {
      return new Failure(msg || e.message);
    }
  }

  static of(fn, msg) {
    return new Try(fn, msg);
  }

}
class TryAsync {
  constructor() {
    throw new Error('Must use static method of');
  }

  static of(fn, msg) {
    return _asyncToGenerator(function* () {
      try {
        var result = yield fn();
        return new Success(result);
      } catch (e) {
        return new Failure(msg || e.message);
      }
    })();
  }

}
_Symbol$toStringTag2 = Symbol.toStringTag;
class IO {
  constructor(fn) {
    _defineProperty(this, _Symbol$toStringTag2, 'IO');

    this.unsafePerformIO = fn;
  }

  map(fn) {
    return new IO(compose(fn, this.unsafePerformIO));
  }

  flatMap(fn) {
    return this.map(fn).merge();
  }

  ap(f) {
    return this.flatMap(fn => f.map(fn));
  }

  merge() {
    return new IO(() => this.unsafePerformIO().unsafePerformIO());
  }

  toString() {
    return "IO#(".concat(this.unsafePerformIO.name, ")");
  }

  toJSON() {
    return {
      type: 'IO',
      value: this.unsafePerformIO
    };
  }

  static of(x) {
    return new IO(() => x);
  }

}
_Symbol$toStringTag3 = Symbol.toStringTag;
class IOAsync {
  constructor(fn) {
    _defineProperty(this, _Symbol$toStringTag3, 'IOAsync');

    this.unsafePerformIO = fn;
  }

  map(fn) {
    var _this = this;

    return _asyncToGenerator(function* () {
      return new IO(composeAsync(fn, _this.unsafePerformIO));
    })();
  }

  flatMap(fn) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      return yield _this2.map(fn).merge();
    })();
  }

  merge() {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      return new IOAsync( /*#__PURE__*/_asyncToGenerator(function* () {
        return yield _this3.unsafePerformIO().unsafePerformIO();
      }));
    })();
  }

  toString() {
    return "IOAsync#(".concat(this.unsafePerformIO.name, ")");
  }

  toJSON() {
    return {
      type: 'IOAsync',
      value: this.unsafePerformIO
    };
  }

  static of(fn) {
    return new IOAsync( /*#__PURE__*/_asyncToGenerator(function* () {
      return yield fn;
    }));
  }

}

var _left = /*#__PURE__*/new WeakMap();

var _right = /*#__PURE__*/new WeakMap();

_Symbol$toStringTag4 = Symbol.toStringTag;
_Symbol$iterator3 = Symbol.iterator;
class Pair$1 {
  constructor(left, right) {
    _classPrivateFieldInitSpec(this, _left, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _right, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, _Symbol$toStringTag4, 'Pair');

    _classPrivateFieldSet(this, _left, left);

    _classPrivateFieldSet(this, _right, right);
  }

  get left() {
    return _classPrivateFieldGet(this, _left);
  }

  get right() {
    return _classPrivateFieldGet(this, _right);
  }

  get() {
    return {
      left: _classPrivateFieldGet(this, _left),
      right: _classPrivateFieldGet(this, _right)
    };
  }

  map(fn) {
    return new Pair$1(fn(_classPrivateFieldGet(this, _left)), fn(_classPrivateFieldGet(this, _right)));
  }

  flatMap(fn) {
    return new Pair$1(...fn(_classPrivateFieldGet(this, _left), _classPrivateFieldGet(this, _right)));
  }

  toString() {
    return "Pair {".concat(_classPrivateFieldGet(this, _left), ", ").concat(_classPrivateFieldGet(this, _right), "}");
  }

  toJSON() {
    return {
      type: 'Pair',
      value: this.get()
    };
  }

  *[_Symbol$iterator3]() {
    yield _classPrivateFieldGet(this, _left);
    yield _classPrivateFieldGet(this, _right);
  }

  static of(left, right) {
    return new Pair$1(left, right);
  }

  static eq(pairA, pairB) {
    return pairA.left === pairB.left && pairA.right === pairB.right;
  }

}

var _left2 = /*#__PURE__*/new WeakMap();

var _middle = /*#__PURE__*/new WeakMap();

var _right2 = /*#__PURE__*/new WeakMap();

_Symbol$toStringTag5 = Symbol.toStringTag;
_Symbol$iterator4 = Symbol.iterator;
class Triple {
  constructor(left, middle, right) {
    _classPrivateFieldInitSpec(this, _left2, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _middle, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _right2, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, _Symbol$toStringTag5, 'Triple');

    _classPrivateFieldSet(this, _left2, left);

    _classPrivateFieldSet(this, _middle, middle);

    _classPrivateFieldSet(this, _right2, right);
  }

  get left() {
    return _classPrivateFieldGet(this, _left2);
  }

  get middle() {
    return _classPrivateFieldGet(this, _middle);
  }

  get right() {
    return _classPrivateFieldGet(this, _right2);
  }

  get() {
    return {
      left: _classPrivateFieldGet(this, _left2),
      middle: _classPrivateFieldGet(this, _middle),
      right: _classPrivateFieldGet(this, _right2)
    };
  }

  map(fn) {
    return new Triple(fn(_classPrivateFieldGet(this, _left2)), fn(_classPrivateFieldGet(this, _middle)), fn(_classPrivateFieldGet(this, _right2)));
  }

  flatMap(fn) {
    return new Triple(...fn(_classPrivateFieldGet(this, _left2), _classPrivateFieldGet(this, _middle), _classPrivateFieldGet(this, _right2)));
  }

  toString() {
    return "Triple {".concat(_classPrivateFieldGet(this, _left2), ", ").concat(_classPrivateFieldGet(this, _middle), ", ").concat(_classPrivateFieldGet(this, _right2), "}");
  }

  toJSON() {
    return {
      type: 'Triple',
      value: this.get()
    };
  }

  *[_Symbol$iterator4]() {
    yield _classPrivateFieldGet(this, _left2);
    yield _classPrivateFieldGet(this, _middle);
    yield _classPrivateFieldGet(this, _right2);
  }

  static of(left, middle, right) {
    return new Triple(left, middle, right);
  }

  static eq(tripleA, tripleB) {
    return tripleA.left === tripleB.left && tripleA.middle === tripleB.middle && tripleA.right === tripleB.right;
  }

}

var _types = /*#__PURE__*/new WeakMap();

_Symbol$toStringTag6 = Symbol.toStringTag;
_Symbol$iterator5 = Symbol.iterator;
class Enum {
  constructor(types) {
    _classPrivateFieldInitSpec(this, _types, {
      writable: true,
      value: new Set()
    });

    _defineProperty(this, _Symbol$toStringTag6, 'Enum');

    types.forEach(type => _classPrivateFieldGet(this, _types).add(type));
  }

  has(type) {
    return _classPrivateFieldGet(this, _types).has(type);
  }

  toString() {
    return "Enum [".concat([..._classPrivateFieldGet(this, _types)].join(', '), "]");
  }

  toJSON() {
    return {
      type: 'Enum',
      value: [..._classPrivateFieldGet(this, _types)]
    };
  }

  [_Symbol$iterator5]() {
    return _classPrivateFieldGet(this, _types)[Symbol.iterator];
  }

  static of() {
    for (var _len = arguments.length, types = new Array(_len), _key = 0; _key < _len; _key++) {
      types[_key] = arguments[_key];
    }

    return new Enum(types);
  }

}

function createClient(apiEndpoint) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    storageKey: "".concat(Math.round(Math.random() * 100000), "_client_key"),
    toJSON: true
  };

  function isError(_x) {
    return _isError.apply(this, arguments);
  }

  function _isError() {
    _isError = _asyncToGenerator(function* (res) {
      if (!res.ok) throw new Error((yield res.text()) || "HTTP response was not ok: ".concat(res.status));
      return res;
    });
    return _isError.apply(this, arguments);
  }

  function isJson(_x2) {
    return _isJson.apply(this, arguments);
  }

  function _isJson() {
    _isJson = _asyncToGenerator(function* (res) {
      if (!options.toJSON) return res;

      if (res.headers.has('Content-Type') && res.headers.get('Content-Type').includes('application/json')) {
        return yield res.json();
      }

      throw new TypeError('Response is not JSON');
    });
    return _isJson.apply(this, arguments);
  }

  function client(endpoint, method) {
    var customConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var controller = new AbortController();
    var token = localStorage.getItem(options.storageKey);
    var headers = {
      'Content-Type': 'application/json'
    };
    if (token) headers.Authorization = "Bearer ".concat(token);

    var config = _objectSpread2(_objectSpread2({
      signal: controller.signal,
      method
    }, customConfig), {}, {
      headers: _objectSpread2(_objectSpread2({}, headers), customConfig.headers)
    });

    return {
      req: fetch("".concat(apiEndpoint).concat(endpoint), config).then(isError).then(isJson),
      abort: controller.abort.bind(controller)
    };
  }

  return {
    get(url, options) {
      return client(url, 'GET', options);
    },

    post(url, body, options) {
      return client(url, 'POST', _objectSpread2(_objectSpread2({}, options), {}, {
        body: JSON.stringify(body)
      }));
    },

    put(url, body, options) {
      return client(url, 'PUT', _objectSpread2(_objectSpread2({}, options), {}, {
        body: JSON.stringify(body)
      }));
    },

    delete(url, options) {
      return client(url, 'DELETE', options);
    }

  };
}

// Iterables
function* mapWith(fn, iterable) {
  for (var element of iterable) {
    yield fn(element);
  }
}
function* mapAllWith(fn, iterable) {
  for (var element of iterable) {
    yield* fn(element);
  }
}
function* filterWith(fn, iterable) {
  for (var element of iterable) {
    if (!fn(element)) yield element;
  }
}
function* compact(iterable) {
  for (var element of iterable) {
    if (element != null) yield element;
  }
}
function* untilWith(fn, iterable) {
  for (var element of iterable) {
    if (fn(element)) break;
    yield element;
  }
}
var first = iterable => iterable[Symbol.iterator]().next().value;
function* rest(iterable) {
  var iterator = iterable[Symbol.iterator]();
  iterator.next();
  yield* iterator;
}
function* take(numberToTake, iterable) {
  var iterator = iterable[Symbol.iterator]();

  for (var i = 0; i < numberToTake; ++i) {
    var {
      done,
      value
    } = iterator.next();
    if (!done) yield value;
  }
}
function* zip() {
  for (var _len = arguments.length, iterables = new Array(_len), _key = 0; _key < _len; _key++) {
    iterables[_key] = arguments[_key];
  }

  var iterators = iterables.map(i => i[Symbol.iterator]());

  var _loop = function* _loop() {
    var pairs = iterators.map(j => j.next());
    var dones = [];
    var values = [];
    pairs.forEach(p => (dones.push(p.done), values.push(p.value)));
    if (dones.indexOf(true) >= 0) return "break";
    yield values;
  };

  while (true) {
    var _ret = yield* _loop();

    if (_ret === "break") break;
  }
}
function* zipWith(zipper) {
  for (var _len2 = arguments.length, iterables = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    iterables[_key2 - 1] = arguments[_key2];
  }

  var iterators = iterables.map(i => i[Symbol.iterator]());

  var _loop2 = function* _loop2() {
    var pairs = iterators.map(j => j.next());
    var dones = [];
    var values = [];
    pairs.forEach(p => (dones.push(p.done), values.push(p.value)));
    if (dones.indexOf(true) >= 0) return "break";
    yield zipper(...values);
  };

  while (true) {
    var _ret2 = yield* _loop2();

    if (_ret2 === "break") break;
  }
}
function reduceWith(fn, seed, iterable) {
  var accumulator = seed;

  for (var element of iterable) {
    accumulator = fn(accumulator, element);
  }

  return accumulator;
}
function memoizeIter(generator) {
  var memos = Object.create(null);
  var iters = Object.create(null);
  return function* memoize() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var key = JSON.stringify(args);
    var i = 0;

    if (memos[key] == null) {
      memos[key] = [];
      iters[key] = generator(...args);
    }

    while (true) {
      if (i < memos[key].length) {
        yield memos[key][i++];
      } else {
        var {
          done,
          value
        } = iters[key].next();
        if (done) return;else yield memos[key][i++] = value;
      }
    }
  };
}

var ClassMixin = function ClassMixin(behaviour) {
  var sharedBehaviour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var instanceKeys = Reflect.ownKeys(behaviour);
  var sharedKeys = Reflect.ownKeys(sharedBehaviour);
  var typeTag = Symbol('isA');

  function mixin(classs) {
    for (var property of instanceKeys) {
      if (!classs.prototype[property]) {
        Object.defineProperty(classs.prototype, property, {
          value: behaviour[property],
          writable: true
        });
      }
    }

    classs.prototype[typeTag] = true;
    return classs;
  }

  for (var property of sharedKeys) {
    Object.defineProperty(mixin, property, {
      value: sharedBehaviour[property],
      enumerable: Object.prototype.propertyIsEnumerable.call(sharedBehaviour, property)
    });
  }

  Object.defineProperty(mixin, Symbol.hasInstance, {
    value: instance => !!instance[typeTag]
  });
  return mixin;
}; // Class decorators

function Define(behaviour) {
  var instanceKeys = Reflect.ownKeys(behaviour);
  return function define(clazz) {
    for (var prop of instanceKeys) {
      if (!clazz.prototype[prop]) {
        Object.defineProperty(clazz.prototype, prop, {
          value: behaviour[prop],
          writable: true
        });
      } else throw new Error("Illegal attempt to override ".concat(prop, ", which already exists."));
    }
  };
}
function Override(behaviour) {
  var instanceKeys = Reflect.ownKeys(behaviour);
  return function override(clazz) {
    var _loop = function _loop(prop) {
      if (clazz.prototype[prop]) {
        var overriddenMethodFunction = clazz.prototype[prop];
        Object.defineProperty(clazz.prototype, prop, {
          value() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            return behaviour[prop].call(this, overriddenMethodFunction.bind(this, ...args));
          },

          writable: true
        });
      } else throw new Error("Attempt to override non-existant method".concat(prop));
    };

    for (var prop of instanceKeys) {
      _loop(prop);
    }

    return clazz;
  };
}
function Prepend(behaviour) {
  var instanceKeys = Reflect.ownKeys(behaviour);
  return function prepend(clazz) {
    var _loop2 = function _loop2(prop) {
      if (clazz.prototype[prop]) {
        var overriddenMethodFunction = clazz.prototype[prop];
        Object.defineProperty(clazz.prototype, prop, {
          value() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            var prependValue = behaviour[prop].apply(this, args);

            if (prependValue === undefined || !!prependValue) {
              return overriddenMethodFunction.apply(this, args);
            }
          },

          writable: true
        });
      } else throw new Error("Attempt to override non-existant method ".concat(prop));
    };

    for (var prop of instanceKeys) {
      _loop2(prop);
    }

    return clazz;
  };
}
function Append(behaviour) {
  var instanceKeys = Reflect.ownKeys(behaviour);
  return function append(clazz) {
    var _loop3 = function _loop3(prop) {
      if (clazz.prototype[prop]) {
        var overriddenMethodFunction = clazz.prototype[prop];
        Object.defineProperty(clazz.prototype, prop, {
          value() {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            var returnedValue = overriddenMethodFunction.apply(this, args);
            behaviour[prop].apply(this, args);
            return returnedValue;
          },

          writable: true
        });
      } else throw new Error("Attempt to override non-existant method ".concat(prop));
    };

    for (var prop of instanceKeys) {
      _loop3(prop);
    }

    return clazz;
  };
} // Method Decorators
// Calls fns after method invocation

var after = function after() {
  for (var _len4 = arguments.length, fns = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    fns[_key4] = arguments[_key4];
  }

  return function after(target, name, descriptor) {
    var method = descriptor.value;

    descriptor.value = function withAfter() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      var value = method.apply(this, args);

      for (var fn of fns) {
        fn.apply(this, args);
      }

      return value;
    };
  };
}; // Calls fns before method invocation

var before = function before() {
  for (var _len6 = arguments.length, fns = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    fns[_key6] = arguments[_key6];
  }

  return function before(target, name, descriptor) {
    var method = descriptor.value;

    descriptor.value = function withBefore() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      for (var fn of fns) {
        fn.apply(this, args);
      }

      return method.apply(this, args);
    };
  };
}; // Calls method if all fns return truthy

var provided = function provided() {
  for (var _len8 = arguments.length, fns = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    fns[_key8] = arguments[_key8];
  }

  return function provided(target, name, descriptor) {
    var method = descriptor.value;

    descriptor.value = function withProvided() {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      for (var fn of fns) {
        if (!fn.apply(this, args)) return;
      }

      return method.apply(this, args);
    };
  };
}; // Does not call method if any fn returns truthy

var unless = function unless() {
  for (var _len10 = arguments.length, fns = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    fns[_key10] = arguments[_key10];
  }

  return function unless(target, name, descriptor) {
    var method = descriptor.value;

    descriptor.value = function withUnless() {
      for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        args[_key11] = arguments[_key11];
      }

      for (var fn of fns) {
        if (fn.apply(this, args)) return;
      }

      return method.apply(this, args);
    };
  };
}; // Wrap a method with a decorator (turns ordinary decorator into ES.later)

var wrapWith = decorator => function wrapWith(target, name, descriptor) {
  descriptor.value = decorator(descriptor.value);
}; // Cross-cutting methods "provided method advice"

var aroundAll = function aroundAll(behaviour) {
  for (var _len12 = arguments.length, methodNames = new Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
    methodNames[_key12 - 1] = arguments[_key12];
  }

  return clazz => {
    for (var methodName of methodNames) {
      Object.defineProperty(clazz.prototype, methodName, {
        value: behaviour(clazz.prototype[methodName]),
        writable: true
      });
    }

    return clazz;
  };
};
var beforeAll = function beforeAll(behaviour) {
  for (var _len13 = arguments.length, methodNames = new Array(_len13 > 1 ? _len13 - 1 : 0), _key13 = 1; _key13 < _len13; _key13++) {
    methodNames[_key13 - 1] = arguments[_key13];
  }

  return clazz => {
    var _loop4 = function _loop4(methodName) {
      var method = clazz.prototype[methodName];
      Object.defineProperty(clazz.prototype, methodName, {
        value() {
          for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
            args[_key14] = arguments[_key14];
          }

          behaviour.apply(this, args);
          return method.apply(this, args);
        },

        writable: true
      });
    };

    for (var methodName of methodNames) {
      _loop4(methodName);
    }

    return clazz;
  };
};
var afterAll = function afterAll(behaviour) {
  for (var _len15 = arguments.length, methodNames = new Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
    methodNames[_key15 - 1] = arguments[_key15];
  }

  return clazz => {
    var _loop5 = function _loop5(methodName) {
      var method = clazz.prototype[methodName];
      Object.defineProperty(clazz.prototype, methodName, {
        value() {
          for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
            args[_key16] = arguments[_key16];
          }

          var returnedValue = method.apply(this, args);
          behaviour.apply(this, args);
          return returnedValue;
        },

        writable: true
      });
    };

    for (var methodName of methodNames) {
      _loop5(methodName);
    }

    return clazz;
  };
};
var SubclassFactory = behaviour => superclass => ClassMixin(behaviour)(class extends superclass {});
var FactoryFactory = c => function () {
  for (var _len17 = arguments.length, args = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
    args[_key17] = arguments[_key17];
  }

  return new c(...args);
};

var LazyCollection = {
  map(fn) {
    return Object.assign({
      [Symbol.iterator]: () => {
        var iterator = this[Symbol.iterator]();
        return {
          next: () => {
            var {
              done,
              value
            } = iterator.next();
            return {
              done,
              value: done ? undefined : fn(value)
            };
          }
        };
      }
    }, LazyCollection);
  },

  reduce(fn, seed) {
    var iterator = this[Symbol.iterator]();
    var iterationResult;
    var accumulator = seed;

    while (iterationResult = iterator.next(), !iterationResult.done) {
      accumulator = fn(accumulator, iterationResult.value);
    }

    return accumulator;
  },

  filter(fn) {
    return Object.assign({
      [Symbol.iterator]: () => {
        var iterator = this[Symbol.iterator]();
        return {
          next: () => {
            var done, value;

            do {
              ({
                done,
                value
              } = iterator.next());
            } while (!done && !fn(value));

            return {
              done,
              value
            };
          }
        };
      }
    }, LazyCollection);
  },

  find(fn) {
    return Object.assign({
      [Symbol.iterator]: () => {
        var iterator = this[Symbol.iterator]();
        return {
          next: () => {
            var done, value;

            do {
              ({
                done,
                value
              } = iterator.next());
            } while (!done && !fn(value));

            return {
              done,
              value
            };
          }
        };
      }
    }, LazyCollection);
  },

  until(fn) {
    return Object.assign({
      [Symbol.iterator]: () => {
        var iterator = this[Symbol.iterator]();
        return {
          next: () => {
            var {
              done,
              value
            } = iterator.next();
            done = done || fn(value);
            return {
              done,
              value: done ? undefined : value
            };
          }
        };
      }
    }, LazyCollection);
  },

  first() {
    return this[Symbol.iterator]().next().value;
  },

  rest() {
    return Object.assign({
      [Symbol.iterator]: () => {
        var iterator = this[Symbol.iterator]();
        iterator.next();
        return iterator;
      }
    }, LazyCollection);
  },

  take(numberToTake) {
    return Object.assign({
      [Symbol.iterator]: () => {
        var iterator = this[Symbol.iterator]();
        var remainingElements = numberToTake;
        return {
          next: () => {
            var {
              done,
              value
            } = iterator.next();
            done = done || remainingElements-- <= 0;
            return {
              done,
              value: done ? undefined : value
            };
          }
        };
      }
    }, LazyCollection);
  }

};
var Numbers = Object.assign({
  *[Symbol.iterator]() {
    var n = 0;

    while (true) {
      yield n++;
    }
  }

}, LazyCollection);
var EMPTY = {
  isEmpty: () => true
};

var Pair = function Pair(car) {
  var cdr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EMPTY;
  return Object.assign({
    car,
    cdr,
    isEmpty: () => false,

    [Symbol.iterator]() {
      var currentPair = this;
      return {
        next: () => {
          if (currentPair.isEmpty()) return {
            done: true
          };else {
            var value = currentPair.car;
            currentPair = currentPair.cdr;
            return {
              done: false,
              value
            };
          }
        }
      };
    }

  }, LazyCollection);
};

Pair.from = iterable => function iterationToList(iteration) {
  var {
    done,
    value
  } = iteration.next();
  return done ? EMPTY : Pair(value, iterationToList(iteration));
}(iterable[Symbol.iterator]());

var Stack = () => Object.assign({
  array: [],
  index: -1,

  push(value) {
    return this.array[this.index += 1] = value;
  },

  pop() {
    var value = this.array[this.index];
    this.array[this.index] = undefined;
    if (this.index >= 0) this.index -= 1;
    return value;
  },

  isEmpty() {
    return this.index < 0;
  },

  [Symbol.iterator]() {
    var iteractionIndex = this.index;
    return {
      next: () => {
        if (iteractionIndex > this.index) iteractionIndex = this.index;
        if (iteractionIndex < 0) return {
          done: true
        };else return {
          done: false,
          value: this.array[iteractionIndex--]
        };
      }
    };
  }

}, LazyCollection);

Stack.from = function from(iterable) {
  var stack = this();

  for (var element of iterable) {
    stack.push(element);
  }

  return stack;
};

var lazy = /*#__PURE__*/Object.freeze({
  __proto__: null,
  LazyCollection: LazyCollection,
  Numbers: Numbers,
  Pair: Pair,
  Stack: Stack
});

var _value = /*#__PURE__*/new WeakMap();

class Constant {
  constructor(v) {
    _classPrivateFieldInitSpec(this, _value, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _value, Maybe.of(v));

    this.map = () => this;
  }

  get value() {
    return _classPrivateFieldGet(this, _value);
  }

}

var _value2 = /*#__PURE__*/new WeakMap();

class Variable {
  constructor(v) {
    _classPrivateFieldInitSpec(this, _value2, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _value2, Maybe.of(v));

    this.map = fn => new Variable(fn(v));
  }

  get value() {
    return _classPrivateFieldGet(this, _value2);
  }

}

var lens = (getter, setter) => fn => obj => fn(getter(obj)).map(value => setter(value, obj));
var view = curry((lensAttr, obj) => lensAttr(x => new Constant(x))(obj).value);
var set$1 = curry((lensAttr, newVal, obj) => lensAttr(() => new Variable(newVal))(obj).value);
var over = curry((lensAttr, mapfn, obj) => lensAttr(x => new Variable(mapfn(x)))(obj).value);
var lensProp = p => lens(prop(p), setProp(p));

var lens$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  lens: lens,
  view: view,
  set: set$1,
  over: over,
  lensProp: lensProp
});

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function check(it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global$e = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$8 = function fails(exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$7 = fails$8; // Detect IE8's incomplete defineProperty implementation

var descriptors = !fails$7(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function get() {
      return 7;
    }
  })[1] != 7;
});

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$3 = function createPropertyDescriptor(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString$4 = {}.toString;

var classofRaw$1 = function classofRaw(it) {
  return toString$4.call(it).slice(8, -1);
};

var fails$6 = fails$8;
var classof$5 = classofRaw$1;
var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails$6(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$5(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

// https://tc39.es/ecma262/#sec-requireobjectcoercible

var requireObjectCoercible$3 = function requireObjectCoercible(it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

var IndexedObject = indexedObject;
var requireObjectCoercible$2 = requireObjectCoercible$3;

var toIndexedObject$4 = function toIndexedObject(it) {
  return IndexedObject(requireObjectCoercible$2(it));
};

// https://tc39.es/ecma262/#sec-iscallable

var isCallable$g = function isCallable(argument) {
  return typeof argument === 'function';
};

var isCallable$f = isCallable$g;

var isObject$6 = function isObject(it) {
  return typeof it === 'object' ? it !== null : isCallable$f(it);
};

var global$d = global$e;
var isCallable$e = isCallable$g;

var aFunction = function aFunction(argument) {
  return isCallable$e(argument) ? argument : undefined;
};

var getBuiltIn$6 = function getBuiltIn(namespace, method) {
  return arguments.length < 2 ? aFunction(global$d[namespace]) : global$d[namespace] && global$d[namespace][method];
};

var getBuiltIn$5 = getBuiltIn$6;
var engineUserAgent = getBuiltIn$5('navigator', 'userAgent') || '';

var global$c = global$e;
var userAgent = engineUserAgent;
var process = global$c.process;
var Deno = global$c.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

var engineV8Version = version && +version;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = engineV8Version;
var fails$5 = fails$8; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$5(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$1 = nativeSymbol;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var isCallable$d = isCallable$g;
var getBuiltIn$4 = getBuiltIn$6;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$4('Symbol');
  return isCallable$d($Symbol) && Object(it) instanceof $Symbol;
};

var tryToString$1 = function tryToString(argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$c = isCallable$g;
var tryToString = tryToString$1; // `Assert: IsCallable(argument) is true`

var aCallable$4 = function aCallable(argument) {
  if (isCallable$c(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};

var aCallable$3 = aCallable$4; // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod

var getMethod$4 = function getMethod(V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable$3(func);
};

var isCallable$b = isCallable$g;
var isObject$5 = isObject$6; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

var ordinaryToPrimitive$1 = function ordinaryToPrimitive(input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$b(fn = input.toString) && !isObject$5(val = fn.call(input))) return val;
  if (isCallable$b(fn = input.valueOf) && !isObject$5(val = fn.call(input))) return val;
  if (pref !== 'string' && isCallable$b(fn = input.toString) && !isObject$5(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var shared$3 = {exports: {}};

var global$b = global$e;

var setGlobal$3 = function setGlobal(key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global$b, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$b[key] = value;
  }

  return value;
};

var global$a = global$e;
var setGlobal$2 = setGlobal$3;
var SHARED = '__core-js_shared__';
var store$3 = global$a[SHARED] || setGlobal$2(SHARED, {});
var sharedStore = store$3;

var store$2 = sharedStore;
(shared$3.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.18.3',
  mode: 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

var requireObjectCoercible$1 = requireObjectCoercible$3; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

var toObject$2 = function toObject(argument) {
  return Object(requireObjectCoercible$1(argument));
};

var toObject$1 = toObject$2;
var hasOwnProperty = {}.hasOwnProperty; // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty

var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject$1(it), key);
};

var id = 0;
var postfix = Math.random();

var uid$2 = function uid(key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

var global$9 = global$e;
var shared$2 = shared$3.exports;
var hasOwn$9 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var WellKnownSymbolsStore = shared$2('wks');
var Symbol$1 = global$9.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$d = function wellKnownSymbol(name) {
  if (!hasOwn$9(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && hasOwn$9(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  }

  return WellKnownSymbolsStore[name];
};

var isObject$4 = isObject$6;
var isSymbol$1 = isSymbol$2;
var getMethod$3 = getMethod$4;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$c = wellKnownSymbol$d;
var TO_PRIMITIVE = wellKnownSymbol$c('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

var toPrimitive$1 = function toPrimitive(input, pref) {
  if (!isObject$4(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$3(input, TO_PRIMITIVE);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject$4(result) || isSymbol$1(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2; // `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey

var toPropertyKey$2 = function toPropertyKey(argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : String(key);
};

var global$8 = global$e;
var isObject$3 = isObject$6;
var document$1 = global$8.document; // typeof document.createElement is 'object' in old IE

var EXISTS$1 = isObject$3(document$1) && isObject$3(document$1.createElement);

var documentCreateElement$2 = function documentCreateElement(it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$7 = descriptors;
var fails$4 = fails$8;
var createElement = documentCreateElement$2; // Thank's IE8 for his funny defineProperty

var ie8DomDefine = !DESCRIPTORS$7 && !fails$4(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

var DESCRIPTORS$6 = descriptors;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$3 = toIndexedObject$4;
var toPropertyKey$1 = toPropertyKey$2;
var hasOwn$8 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

objectGetOwnPropertyDescriptor.f = DESCRIPTORS$6 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$3(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwn$8(O, P)) return createPropertyDescriptor$2(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

var objectDefineProperty = {};

var isObject$2 = isObject$6; // `Assert: Type(argument) is Object`

var anObject$9 = function anObject(argument) {
  if (isObject$2(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};

var DESCRIPTORS$5 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var anObject$8 = anObject$9;
var toPropertyKey = toPropertyKey$2; // eslint-disable-next-line es/no-object-defineproperty -- safe

var $defineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

objectDefineProperty.f = DESCRIPTORS$5 ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$8(O);
  P = toPropertyKey(P);
  anObject$8(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$4 = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;
var createNonEnumerableProperty$5 = DESCRIPTORS$4 ? function (object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$6 = {exports: {}};

var isCallable$a = isCallable$g;
var store$1 = sharedStore;
var functionToString = Function.toString; // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable$a(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$7 = global$e;
var isCallable$9 = isCallable$g;
var inspectSource$2 = inspectSource$3;
var WeakMap$2 = global$7.WeakMap;
var nativeWeakMap = isCallable$9(WeakMap$2) && /native code/.test(inspectSource$2(WeakMap$2));

var shared$1 = shared$3.exports;
var uid = uid$2;
var keys = shared$1('keys');

var sharedKey$3 = function sharedKey(key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$6 = global$e;
var isObject$1 = isObject$6;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
var hasOwn$7 = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$3 = hiddenKeys$4;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap$1 = global$6.WeakMap;
var set, get, has;

var enforce = function enforce(it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function getterFor(TYPE) {
  return function (it) {
    var state;

    if (!isObject$1(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap$1());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;

  set = function set(it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };

  get = function get(it) {
    return wmget.call(store, it) || {};
  };

  has = function has(it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey$2('state');
  hiddenKeys$3[STATE] = true;

  set = function set(it, metadata) {
    if (hasOwn$7(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$4(it, STATE, metadata);
    return metadata;
  };

  get = function get(it) {
    return hasOwn$7(it, STATE) ? it[STATE] : {};
  };

  has = function has(it) {
    return hasOwn$7(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var DESCRIPTORS$3 = descriptors;
var hasOwn$6 = hasOwnProperty_1;
var FunctionPrototype = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getDescriptor = DESCRIPTORS$3 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$6(FunctionPrototype, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER = EXISTS && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE = EXISTS && (!DESCRIPTORS$3 || DESCRIPTORS$3 && getDescriptor(FunctionPrototype, 'name').configurable);
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var global$5 = global$e;
var isCallable$8 = isCallable$g;
var hasOwn$5 = hasOwnProperty_1;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$5;
var setGlobal$1 = setGlobal$3;
var inspectSource$1 = inspectSource$3;
var InternalStateModule$3 = internalState;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var getInternalState$3 = InternalStateModule$3.get;
var enforceInternalState = InternalStateModule$3.enforce;
var TEMPLATE = String(String).split('String');
(redefine$6.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;

  if (isCallable$8(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }

    if (!hasOwn$5(value, 'name') || CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name) {
      createNonEnumerableProperty$3(value, 'name', name);
    }

    state = enforceInternalState(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }

  if (O === global$5) {
    if (simple) O[key] = value;else setGlobal$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty$3(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable$8(this) && getInternalState$3(this).source || inspectSource$1(this);
});

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor = Math.floor; // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity

var toIntegerOrInfinity$3 = function toIntegerOrInfinity(argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- safe

  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;
var max = Math.max;
var min$1 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex$1 = function toAbsoluteIndex(index, length) {
  var integer = toIntegerOrInfinity$2(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;
var min = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

var toLength$1 = function toLength(argument) {
  return argument > 0 ? min(toIntegerOrInfinity$1(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength = toLength$1; // `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike

var lengthOfArrayLike$2 = function lengthOfArrayLike(obj) {
  return toLength(obj.length);
};

var toIndexedObject$2 = toIndexedObject$4;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$2; // `Array.prototype.{ indexOf, includes }` methods implementation

var createMethod$1 = function createMethod(IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$2($this);
    var length = lengthOfArrayLike$1(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$1(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$1(false)
};

var hasOwn$4 = hasOwnProperty_1;
var toIndexedObject$1 = toIndexedObject$4;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var objectKeysInternal = function objectKeysInternal(object, names) {
  var O = toIndexedObject$1(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    !hasOwn$4(hiddenKeys$2, key) && hasOwn$4(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (hasOwn$4(O, key = names[i++])) {
      ~indexOf(result, key) || result.push(key);
    }
  }

  return result;
};

var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;
var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$3 = getBuiltIn$6;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$7 = anObject$9; // all object keys, includes non-enumerable and symbols

var ownKeys$1 = getBuiltIn$3('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$7(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

var hasOwn$3 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$3 = objectDefineProperty;

var copyConstructorProperties$1 = function copyConstructorProperties(target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$3.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$3(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var fails$3 = fails$8;
var isCallable$7 = isCallable$g;
var replacement = /#|\.prototype\./;

var isForced$1 = function isForced(feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable$7(detection) ? fails$3(detection) : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';
var isForced_1 = isForced$1;

var global$4 = global$e;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;
var redefine$5 = redefine$6.exports;
var setGlobal = setGlobal$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/

var _export = function _export(options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global$4;
  } else if (STATIC) {
    target = global$4[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$4[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty$2(sourceProperty, 'sham', true);
    } // extend global


    redefine$5(target, key, sourceProperty, options);
  }
};

var getBuiltIn$2 = getBuiltIn$6;
var definePropertyModule$2 = objectDefineProperty;
var wellKnownSymbol$b = wellKnownSymbol$d;
var DESCRIPTORS$2 = descriptors;
var SPECIES = wellKnownSymbol$b('species');

var setSpecies$1 = function setSpecies(CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$2(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule$2.f;

  if (DESCRIPTORS$2 && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function get() {
        return this;
      }
    });
  }
};

var wellKnownSymbol$a = wellKnownSymbol$d;
var TO_STRING_TAG$3 = wellKnownSymbol$a('toStringTag');
var test = {};
test[TO_STRING_TAG$3] = 'z';
var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$6 = isCallable$g;
var classofRaw = classofRaw$1;
var wellKnownSymbol$9 = wellKnownSymbol$d;
var TO_STRING_TAG$2 = wellKnownSymbol$9('toStringTag'); // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


var classof$4 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$2)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && isCallable$6(O.callee) ? 'Arguments' : result;
};

var fails$2 = fails$8;
var isCallable$5 = isCallable$g;
var classof$3 = classof$4;
var getBuiltIn$1 = getBuiltIn$6;
var inspectSource = inspectSource$3;
var empty = [];
var construct = getBuiltIn$1('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = constructorRegExp.exec;
var INCORRECT_TO_STRING = !constructorRegExp.exec(function () {
  /* empty */
});

var isConstructorModern = function isConstructorModern(argument) {
  if (!isCallable$5(argument)) return false;

  try {
    construct(Object, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructorLegacy(argument) {
  if (!isCallable$5(argument)) return false;

  switch (classof$3(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
    // we can't check .prototype since constructors produced by .bind haven't it
  }

  return INCORRECT_TO_STRING || !!exec.call(constructorRegExp, inspectSource(argument));
}; // `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor


var isConstructor$1 = !construct || fails$2(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

var anInstance$1 = function anInstance(it, Constructor, name) {
  if (it instanceof Constructor) return it;
  throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
};

var redefine$4 = redefine$6.exports;

var redefineAll$1 = function redefineAll(target, src, options) {
  for (var key in src) {
    redefine$4(target, key, src[key], options);
  }

  return target;
};

var iterators = {};

var classof$2 = classof$4;
var getMethod$2 = getMethod$4;
var Iterators$4 = iterators;
var wellKnownSymbol$8 = wellKnownSymbol$d;
var ITERATOR$4 = wellKnownSymbol$8('iterator');

var getIteratorMethod$2 = function getIteratorMethod(it) {
  if (it != undefined) return getMethod$2(it, ITERATOR$4) || getMethod$2(it, '@@iterator') || Iterators$4[classof$2(it)];
};

var aCallable$2 = aCallable$4;
var anObject$6 = anObject$9;
var getIteratorMethod$1 = getIteratorMethod$2;

var getIterator$2 = function getIterator(argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable$2(iteratorMethod)) return anObject$6(iteratorMethod.call(argument));
  throw TypeError(String(argument) + ' is not iterable');
};

var wellKnownSymbol$7 = wellKnownSymbol$d;
var Iterators$3 = iterators;
var ITERATOR$3 = wellKnownSymbol$7('iterator');
var ArrayPrototype$1 = Array.prototype; // check on default Array iterator

var isArrayIteratorMethod$1 = function isArrayIteratorMethod(it) {
  return it !== undefined && (Iterators$3.Array === it || ArrayPrototype$1[ITERATOR$3] === it);
};

var aCallable$1 = aCallable$4; // optional / simple context binding

var functionBindContext = function functionBindContext(fn, that, length) {
  aCallable$1(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 0:
      return function () {
        return fn.call(that);
      };

    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function () {
    return fn.apply(that, arguments);
  };
};

var anObject$5 = anObject$9;
var getMethod$1 = getMethod$4;

var iteratorClose$1 = function iteratorClose(iterator, kind, value) {
  var innerResult, innerError;
  anObject$5(iterator);

  try {
    innerResult = getMethod$1(iterator, 'return');

    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }

    innerResult = innerResult.call(iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }

  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$5(innerResult);
  return value;
};

var anObject$4 = anObject$9;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike = lengthOfArrayLike$2;
var bind = functionBindContext;
var getIterator$1 = getIterator$2;
var getIteratorMethod = getIteratorMethod$2;
var iteratorClose = iteratorClose$1;

var Result = function Result(stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate$1 = function iterate(iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function stop(condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function callFn(value) {
    if (AS_ENTRIES) {
      anObject$4(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }

    return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw TypeError(String(iterable) + ' is not iterable'); // optimisation for array iterators

    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      }

      return new Result(false);
    }

    iterator = getIterator$1(iterable, iterFn);
  }

  next = iterator.next;

  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }

    if (typeof result == 'object' && result && result instanceof Result) return result;
  }

  return new Result(false);
};

var global$3 = global$e;

var hostReportErrors$1 = function hostReportErrors(a, b) {
  var console = global$3.console;

  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};

var $$1 = _export;
var DESCRIPTORS$1 = descriptors;
var setSpecies = setSpecies$1;
var aCallable = aCallable$4;
var isCallable$4 = isCallable$g;
var isConstructor = isConstructor$1;
var anObject$3 = anObject$9;
var isObject = isObject$6;
var anInstance = anInstance$1;
var defineProperty$2 = objectDefineProperty.f;
var redefine$3 = redefine$6.exports;
var redefineAll = redefineAll$1;
var getIterator = getIterator$2;
var getMethod = getMethod$4;
var iterate = iterate$1;
var hostReportErrors = hostReportErrors$1;
var wellKnownSymbol$6 = wellKnownSymbol$d;
var InternalStateModule$2 = internalState;
var OBSERVABLE = wellKnownSymbol$6('observable');
var getInternalState$2 = InternalStateModule$2.get;
var setInternalState$2 = InternalStateModule$2.set;

var cleanupSubscription = function cleanupSubscription(subscriptionState) {
  var cleanup = subscriptionState.cleanup;

  if (cleanup) {
    subscriptionState.cleanup = undefined;

    try {
      cleanup();
    } catch (error) {
      hostReportErrors(error);
    }
  }
};

var subscriptionClosed = function subscriptionClosed(subscriptionState) {
  return subscriptionState.observer === undefined;
};

var close = function close(subscriptionState) {
  var subscription = subscriptionState.facade;

  if (!DESCRIPTORS$1) {
    subscription.closed = true;
    var subscriptionObserver = subscriptionState.subscriptionObserver;
    if (subscriptionObserver) subscriptionObserver.closed = true;
  }

  subscriptionState.observer = undefined;
};

var Subscription = function Subscription(observer, subscriber) {
  var subscriptionState = setInternalState$2(this, {
    cleanup: undefined,
    observer: anObject$3(observer),
    subscriptionObserver: undefined
  });
  var start;
  if (!DESCRIPTORS$1) this.closed = false;

  try {
    if (start = getMethod(observer, 'start')) start.call(observer, this);
  } catch (error) {
    hostReportErrors(error);
  }

  if (subscriptionClosed(subscriptionState)) return;
  var subscriptionObserver = subscriptionState.subscriptionObserver = new SubscriptionObserver(this);

  try {
    var cleanup = subscriber(subscriptionObserver);
    var subscription = cleanup;
    if (cleanup != null) subscriptionState.cleanup = isCallable$4(cleanup.unsubscribe) ? function () {
      subscription.unsubscribe();
    } : aCallable(cleanup);
  } catch (error) {
    subscriptionObserver.error(error);
    return;
  }

  if (subscriptionClosed(subscriptionState)) cleanupSubscription(subscriptionState);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() {
    var subscriptionState = getInternalState$2(this);

    if (!subscriptionClosed(subscriptionState)) {
      close(subscriptionState);
      cleanupSubscription(subscriptionState);
    }
  }
});
if (DESCRIPTORS$1) defineProperty$2(Subscription.prototype, 'closed', {
  configurable: true,
  get: function get() {
    return subscriptionClosed(getInternalState$2(this));
  }
});

var SubscriptionObserver = function SubscriptionObserver(subscription) {
  setInternalState$2(this, {
    subscription: subscription
  });
  if (!DESCRIPTORS$1) this.closed = false;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscriptionState = getInternalState$2(getInternalState$2(this).subscription);

    if (!subscriptionClosed(subscriptionState)) {
      var observer = subscriptionState.observer;

      try {
        var nextMethod = getMethod(observer, 'next');
        if (nextMethod) nextMethod.call(observer, value);
      } catch (error) {
        hostReportErrors(error);
      }
    }
  },
  error: function error(value) {
    var subscriptionState = getInternalState$2(getInternalState$2(this).subscription);

    if (!subscriptionClosed(subscriptionState)) {
      var observer = subscriptionState.observer;
      close(subscriptionState);

      try {
        var errorMethod = getMethod(observer, 'error');
        if (errorMethod) errorMethod.call(observer, value);else hostReportErrors(value);
      } catch (err) {
        hostReportErrors(err);
      }

      cleanupSubscription(subscriptionState);
    }
  },
  complete: function complete() {
    var subscriptionState = getInternalState$2(getInternalState$2(this).subscription);

    if (!subscriptionClosed(subscriptionState)) {
      var observer = subscriptionState.observer;
      close(subscriptionState);

      try {
        var completeMethod = getMethod(observer, 'complete');
        if (completeMethod) completeMethod.call(observer);
      } catch (error) {
        hostReportErrors(error);
      }

      cleanupSubscription(subscriptionState);
    }
  }
});
if (DESCRIPTORS$1) defineProperty$2(SubscriptionObserver.prototype, 'closed', {
  configurable: true,
  get: function get() {
    return subscriptionClosed(getInternalState$2(getInternalState$2(this).subscription));
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable');
  setInternalState$2(this, {
    subscriber: aCallable(subscriber)
  });
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    var length = arguments.length;
    return new Subscription(isCallable$4(observer) ? {
      next: observer,
      error: length > 1 ? arguments[1] : undefined,
      complete: length > 2 ? arguments[2] : undefined
    } : isObject(observer) ? observer : {}, getInternalState$2(this).subscriber);
  }
});
redefineAll($Observable, {
  from: function from(x) {
    var C = isConstructor(this) ? this : $Observable;
    var observableMethod = getMethod(anObject$3(x), OBSERVABLE);

    if (observableMethod) {
      var observable = anObject$3(observableMethod.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }

    var iterator = getIterator(x);
    return new C(function (observer) {
      iterate(iterator, function (it, stop) {
        observer.next(it);
        if (observer.closed) return stop();
      }, {
        IS_ITERATOR: true,
        INTERRUPTED: true
      });
      observer.complete();
    });
  },
  of: function of() {
    var C = isConstructor(this) ? this : $Observable;
    var length = arguments.length;
    var items = new Array(length);
    var index = 0;

    while (index < length) {
      items[index] = arguments[index++];
    }

    return new C(function (observer) {
      for (var i = 0; i < length; i++) {
        observer.next(items[i]);
        if (observer.closed) return;
      }

      observer.complete();
    });
  }
});
redefine$3($Observable.prototype, OBSERVABLE, function () {
  return this;
});
$$1({
  global: true
}, {
  Observable: $Observable
});
setSpecies('Observable');

var global$2 = global$e;
var path$2 = global$2;

var wellKnownSymbolWrapped = {};

var wellKnownSymbol$5 = wellKnownSymbol$d;
wellKnownSymbolWrapped.f = wellKnownSymbol$5;

var path$1 = path$2;
var hasOwn$2 = hasOwnProperty_1;
var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
var defineProperty$1 = objectDefineProperty.f;

var defineWellKnownSymbol$1 = function defineWellKnownSymbol(NAME) {
  var Symbol = path$1.Symbol || (path$1.Symbol = {});
  if (!hasOwn$2(Symbol, NAME)) defineProperty$1(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};

var defineWellKnownSymbol = defineWellKnownSymbol$1; // `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable

defineWellKnownSymbol('observable');

var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$1 = classof$4; // `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring

var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
  return '[object ' + classof$1(this) + ']';
};

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var redefine$2 = redefine$6.exports;
var toString$3 = objectToString; // `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring

if (!TO_STRING_TAG_SUPPORT) {
  redefine$2(Object.prototype, 'toString', toString$3, {
    unsafe: true
  });
}

var classof = classof$4;

var toString$2 = function toString(argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};

var toIntegerOrInfinity = toIntegerOrInfinity$3;
var toString$1 = toString$2;
var requireObjectCoercible = requireObjectCoercible$3;

var createMethod = function createMethod(CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$1(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3; // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe

var objectKeys$1 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS = descriptors;
var definePropertyModule$1 = objectDefineProperty;
var anObject$2 = anObject$9;
var objectKeys = objectKeys$1; // `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe

var objectDefineProperties = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$2(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) {
    definePropertyModule$1.f(O, key = keys[index++], Properties[key]);
  }

  return O;
};

var getBuiltIn = getBuiltIn$6;
var html$1 = getBuiltIn('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */
var anObject$1 = anObject$9;
var defineProperties = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html = html$1;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$1 = sharedKey$3;
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$1('IE_PROTO');

var EmptyConstructor = function EmptyConstructor() {
  /* empty */
};

var scriptTag = function scriptTag(content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement$1('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var _NullProtoObject = function NullProtoObject() {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  _NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
  : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH

  var length = enumBugKeys.length;

  while (length--) {
    delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  }

  return _NullProtoObject();
};

hiddenKeys[IE_PROTO$1] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create

var objectCreate = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$1(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO$1] = O;
  } else result = _NullProtoObject();

  return Properties === undefined ? result : defineProperties(result, Properties);
};

var fails$1 = fails$8;
var correctPrototypeGetter = !fails$1(function () {
  function F() {
    /* empty */
  }

  F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$1 = hasOwnProperty_1;
var isCallable$3 = isCallable$g;
var toObject = toObject$2;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe

var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn$1(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;

  if (isCallable$3(constructor) && object instanceof constructor) {
    return constructor.prototype;
  }

  return object instanceof Object ? ObjectPrototype : null;
};

var fails = fails$8;
var isCallable$2 = isCallable$g;
var getPrototypeOf$1 = objectGetPrototypeOf;
var redefine$1 = redefine$6.exports;
var wellKnownSymbol$4 = wellKnownSymbol$d;
var ITERATOR$2 = wellKnownSymbol$4('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false; // `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object

var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
/* eslint-disable es/no-array-prototype-keys -- safe */

if ([].keys) {
  arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails(function () {
  var test = {}; // FF44- legacy iterators case

  return IteratorPrototype$2[ITERATOR$2].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {}; // `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

if (!isCallable$2(IteratorPrototype$2[ITERATOR$2])) {
  redefine$1(IteratorPrototype$2, ITERATOR$2, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty = objectDefineProperty.f;
var hasOwn = hasOwnProperty_1;
var wellKnownSymbol$3 = wellKnownSymbol$d;
var TO_STRING_TAG$1 = wellKnownSymbol$3('toStringTag');

var setToStringTag$2 = function setToStringTag(it, TAG, STATIC) {
  if (it && !hasOwn(it = STATIC ? it : it.prototype, TO_STRING_TAG$1)) {
    defineProperty(it, TO_STRING_TAG$1, {
      configurable: true,
      value: TAG
    });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$1 = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$3;
var setToStringTag$1 = setToStringTag$2;
var Iterators$2 = iterators;

var returnThis$1 = function returnThis() {
  return this;
};

var createIteratorConstructor$1 = function createIteratorConstructor(IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$1(IteratorPrototype$1, {
    next: createPropertyDescriptor(1, next)
  });
  setToStringTag$1(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$2[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var isCallable$1 = isCallable$g;

var aPossiblePrototype$1 = function aPossiblePrototype(argument) {
  if (typeof argument === 'object' || isCallable$1(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */
var anObject = anObject$9;
var aPossiblePrototype = aPossiblePrototype$1; // `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe

var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;

  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {
    /* empty */
  }

  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $ = _export;
var FunctionName = functionName;
var isCallable = isCallable$g;
var createIteratorConstructor = createIteratorConstructor$1;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$2;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;
var redefine = redefine$6.exports;
var wellKnownSymbol$2 = wellKnownSymbol$d;
var Iterators$1 = iterators;
var IteratorsCore = iteratorsCore;
var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$1 = wellKnownSymbol$2('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function returnThis() {
  return this;
};

var defineIterator$2 = function defineIterator(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function getIterationMethod(KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS:
        return function keys() {
          return new IteratorConstructor(this, KIND);
        };

      case VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };

      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }

    return function () {
      return new IteratorConstructor(this);
    };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$1] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY; // fix native

  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));

    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR$1])) {
          redefine(CurrentIteratorPrototype, ITERATOR$1, returnThis);
        }
      } // Set @@toStringTag to native iterators


      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$1(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;

      defaultIterator = function values() {
        return nativeIterator.call(this);
      };
    }
  } // export additional methods


  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({
      target: NAME,
      proto: true,
      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
    }, methods);
  } // define iterator


  if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR$1, defaultIterator, {
      name: DEFAULT
    });
  }

  Iterators$1[NAME] = defaultIterator;
  return methods;
};

var charAt = stringMultibyte.charAt;
var toString = toString$2;
var InternalStateModule$1 = internalState;
var defineIterator$1 = defineIterator$2;
var STRING_ITERATOR = 'String Iterator';
var setInternalState$1 = InternalStateModule$1.set;
var getInternalState$1 = InternalStateModule$1.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator

defineIterator$1(String, 'String', function (iterated) {
  setInternalState$1(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  }); // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState$1(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return {
    value: undefined,
    done: true
  };
  point = charAt(string, index);
  state.index += point.length;
  return {
    value: point,
    done: false
  };
});

// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods

var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

var documentCreateElement = documentCreateElement$2;
var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;
var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

var wellKnownSymbol$1 = wellKnownSymbol$d;
var create = objectCreate;
var definePropertyModule = objectDefineProperty;
var UNSCOPABLES = wellKnownSymbol$1('unscopables');
var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
} // add a key to Array.prototype[@@unscopables]


var addToUnscopables$1 = function addToUnscopables(key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var toIndexedObject = toIndexedObject$4;
var addToUnscopables = addToUnscopables$1;
var Iterators = iterators;
var InternalStateModule = internalState;
var defineIterator = defineIterator$2;
var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator

var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated),
    // target
    index: 0,
    // next index
    kind: kind // kind

  }); // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;

  if (!target || index >= target.length) {
    state.target = undefined;
    return {
      value: undefined,
      done: true
    };
  }

  if (kind == 'keys') return {
    value: index,
    done: false
  };
  if (kind == 'values') return {
    value: target[index],
    done: false
  };
  return {
    value: [index, target[index]],
    done: false
  };
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject

Iterators.Arguments = Iterators.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var global$1 = global$e;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty = createNonEnumerableProperty$5;
var wellKnownSymbol = wellKnownSymbol$d;
var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function handlePrototype(CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }

    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }

    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global$1[COLLECTION_NAME] && global$1[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

var path = path$2;
path.Observable;

var {
  Observable: Observable$1,
  ReadableStream: ReadableStream$1
} = globalThis;

var withNext = observer => next => ({
  next,

  error(e) {
    observer.error(e);
  },

  complete() {
    observer.complete();
  }

});

if (Observable$1.fromGenerator === undefined || typeof Observable$1.fromGenerator !== 'function') {
  if (ReadableStream$1 === undefined) {
    var {
      Readable
    } = await import('stream');
    Object.defineProperty(Observable$1, 'fromGenerator', {
      value(generator) {
        return new Observable$1(observer => {
          Readable.from(generator).on('data', observer.next.bind(observer)).on('end', observer.complete.bind(observer));
        });
      },

      enumerable: false,
      writable: false,
      configurable: false
    });
  } else {
    await Promise.resolve().then(function () { return webStreams; });
    Object.defineProperty(Observable$1, 'fromGenerator', {
      value(generator) {
        return new Observable$1(observer => {
          ReadableStream$1.from(generator).on('data', observer.next.bind(observer)).on('end', observer.complete.bind(observer));
        });
      },

      enumerable: false,
      writable: false,
      configurable: false
    });
  }
}

var listen$ = curry((eventName, element) => {
  return new Observable$1(observer => {
    var handler = event => observer.next(event);

    element.addEventListener(eventName, handler, true);
    return () => element.removeEventListener(eventName, handler, true);
  });
});
var throttle = curry((limit, stream) => {
  var lastRan = 0;
  var lastInterval = 0;
  return new Observable$1(observer => {
    var subs = stream.subscribe(withNext(observer)(value => {
      if (!lastRan) {
        observer.next(value);
        lastRan = Date.now();
      } else {
        clearTimeout(lastInterval);
        lastInterval = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            observer.next(value);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    }));
    return () => subs.unsubscribe();
  });
});
var map = curry((fn, stream) => new Observable$1(observer => {
  var subs = stream.subscribe(withNext(observer)(value => {
    try {
      observer.next(fn(value));
    } catch (err) {
      observer.error(err);
    }
  }));
  return () => subs.unsubscribe();
}));
var filter = curry((predicate, stream) => new Observable$1(observer => {
  var subs = stream.subscribe(withNext(observer)(value => {
    if (predicate(value)) {
      observer.next(value);
    }
  }));
  return () => subs.unsubscribe();
}));
var buffer = curry((count, stream) => {
  var _internalStorage = [];
  return new Observable$1(observer => {
    var subs = stream.subscribe(withNext(observer)(value => {
      _internalStorage.push(value);

      if (_internalStorage.length >= count) {
        observer.next(_internalStorage.slice());
        _internalStorage.length = 0;
      }
    }));
    return () => subs.unsubscribe();
  });
});
var skip = curry((count, stream) => {
  var skipped = 0;
  return new Observable$1(observer => {
    var subs = stream.subscribe(withNext(observer)(value => {
      if (skipped++ >= count) {
        observer.next(value);
      }
    }));
    return () => subs.unsubscribe();
  });
});
var reduce = curry((reducer, initialValue, stream) => {
  var accumulator = initialValue !== null && initialValue !== void 0 ? initialValue : {};
  return new Observable$1(observer => {
    var subs = stream.subscribe({
      next(value) {
        accumulator = reducer(accumulator, value);
      },

      error(e) {
        observer.error(e);
      },

      complete() {
        observer.next(accumulator);
        observer.complete();
      }

    });
    return () => subs.unsubscribe();
  });
});
var mapTo = curry((value, stream) => new Observable$1(observer => {
  var subs = stream.subscribe(withNext(observer)(() => observer.next(value)));
  return () => subs.unsubscribe();
}));
var ReactiveExtensions = {
  filter(predicate) {
    return filter(predicate, this);
  },

  map(fn) {
    return map(fn, this);
  },

  buffer(count) {
    return buffer(count, this);
  },

  skip(count) {
    return skip(count, this);
  },

  reduce(reducer) {
    var initialValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return reduce(reducer, initialValue, this);
  },

  mapTo(value) {
    return mapTo(value, this);
  },

  throttle(limit) {
    return throttle(limit, this);
  }

};
Object.assign(Observable$1.prototype, ReactiveExtensions);

var rx = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Observable: Observable$1,
  ReadableStream: ReadableStream$1,
  listen$: listen$,
  throttle: throttle,
  map: map,
  filter: filter,
  buffer: buffer,
  skip: skip,
  reduce: reduce,
  mapTo: mapTo,
  ReactiveExtensions: ReactiveExtensions
});

var {
  Observable
} = rx;

ReadableStream.from = function from(iterator) {
  return new ReadableStream({
    pull(controller) {
      return _asyncToGenerator(function* () {
        var {
          value,
          done
        } = yield iterator.next();

        if (done) {
          controller.close();
        } else {
          controller.enqueue(value);
        }
      })();
    }

  });
};

function createMapStream(fn) {
  return new TransformStream({
    transform(chunk, controller) {
      return _asyncToGenerator(function* () {
        controller.enqueue(fn(yield chunk));
      })();
    }

  });
}
function createReduceStream(reducer, initialValue) {
  var accumulator = initialValue;
  return new TransformStream({
    transform(chunk) {
      return _asyncToGenerator(function* () {
        var value = yield chunk;
        accumulator = reducer(accumulator, value);
      })();
    },

    flush(controller) {
      controller.enqueue(accumulator);
      controller.terminate();
    }

  });
}
function createFilterStream(fn) {
  return new TransformStream({
    transform(chunk, controller) {
      return _asyncToGenerator(function* () {
        if (fn(yield chunk)) {
          controller.enqueue(chunk);
        }
      })();
    }

  });
}

var webStreams = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createMapStream: createMapStream,
  createReduceStream: createReduceStream,
  createFilterStream: createFilterStream
});

export { Append, ClassMixin, Define, Enum, FactoryFactory, Failure, FunctionalMixin, IO, IOAsync, Just, Maybe, Nothing, Observable, Override, Pair$1 as Pair, Prepend, Result$1 as Result, SubclassFactory, Success, Triple, Try, TryAsync, accumulate, add, addRight, after, afterAll, append, apply, arity, aroundAll, average, before, beforeAll, binary, bound, callFirst, callLast, compact, compose, compose2, composeAsync, composeAsync2, composeM, composeM2, constant, createClient, curry, debounce, deepCopy, deepFreeze, deepMap, deepProp, demethodize, divide, divideRight, eq, every, filter$1 as filter, filterAsync, filterTR, filterWith, find, first, flat, flatMap, flip, flip2, flip3, fold, forEach, fromJSON, getOrElseThrow, head, identity, immutable, instanceEval, invert, invoke, isArray, isBoolean, isFunction, isInstanceOf, isMap, isNull, isNumber, isObject$7 as isObject, isSet, isString, last, lazy, len, lens$1 as lens, liftA2, liftA3, liftA4, log, map$1 as map, mapAllWith, mapAsync, mapTR, mapWith, match$1 as match, maybe, memoize, memoizeIter, multipy, multipyRight, not, once, padEnd, padStart, parse, partition, pipe, pipeAsync, pluck, pop, pow, prepend, prop$1 as prop, props, provided, push, range, reduceAsync, reduceRight, reduceWith, replace, rest, roundTo, rx, send, setProp$1 as setProp, setPropM, shift, some, sortBy, split$1 as split, stringify, subtract, subtractRight, sum, take, tap, tee, ternary, toInteger, toJSON, toLowerCase, toString$5 as toString, toUpperCase, transduce, tryCatch, unary, unless, unshift, untilWith, wrapWith, zip, zipMap, zipWith };