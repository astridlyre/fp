import "core-js/features/observable/index.js";
import {Readable as $f3Ts0$Readable, Transform as $f3Ts0$Transform} from "stream";
import {EventEmitter as $0c9909adc8cd4fb7$import$4bf9923669ad6c63$4fae95256245c8c0} from "events";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $73296c0bdeea98f6$exports = {};

$parcel$export($73296c0bdeea98f6$exports, "Observable", () => $73296c0bdeea98f6$export$77cea355fa80b5f4);
$parcel$export($73296c0bdeea98f6$exports, "$$observable", () => $73296c0bdeea98f6$export$a7c40509ff863847);
$parcel$export($73296c0bdeea98f6$exports, "ReactiveExtensions", () => $73296c0bdeea98f6$export$9a935b903d7a019b);
$parcel$export($73296c0bdeea98f6$exports, "buffer", () => $dd337f375f3dc55e$export$ab1029bcae9ddb4a);
$parcel$export($73296c0bdeea98f6$exports, "catchError", () => $561d6b2f2c3ef0b1$export$3dede90624df3ba9);
$parcel$export($73296c0bdeea98f6$exports, "concat", () => $580a3429826ec134$export$ee1b3e54f0441b22);
$parcel$export($73296c0bdeea98f6$exports, "combine", () => $df35fb34eb1c0945$export$1be1fc439b849fdf);
$parcel$export($73296c0bdeea98f6$exports, "debounce", () => $eee5aafb1721df8b$export$61fc7d43ac8f84b0);
$parcel$export($73296c0bdeea98f6$exports, "distinct", () => $4f4315ba055523b2$export$983a3b5fb2f7202e);
$parcel$export($73296c0bdeea98f6$exports, "effect", () => $aa6c012ebab8baaf$export$dc573d8a6576cdb3);
$parcel$export($73296c0bdeea98f6$exports, "filter", () => $2984cc88b9ef0081$export$3dea766d36a8935f);
$parcel$export($73296c0bdeea98f6$exports, "finallyEffect", () => $a06ae5872f3d77b1$export$c4c7e81705f70958);
$parcel$export($73296c0bdeea98f6$exports, "forEach", () => $73700d689dadd2aa$export$4b80e395e36b5a56);
$parcel$export($73296c0bdeea98f6$exports, "interval", () => $045d703d5486ef6d$export$3174cdbf0a0cbc84);
$parcel$export($73296c0bdeea98f6$exports, "listen", () => $babdc44c7ce00a1f$export$63174c828edd6ff8);
$parcel$export($73296c0bdeea98f6$exports, "map", () => $3008f9ade943295a$export$871de8747c9eaa88);
$parcel$export($73296c0bdeea98f6$exports, "mapTo", () => $74dfda0eeadc7572$export$e0eaf3a86c03b2ad);
$parcel$export($73296c0bdeea98f6$exports, "merge", () => $9b5d65fce739a5b9$export$4950aa0f605343fb);
$parcel$export($73296c0bdeea98f6$exports, "flatMap", () => $4e37af8185b84714$export$5b8affa63fc6df16);
$parcel$export($73296c0bdeea98f6$exports, "pick", () => $62c4fc8803ef21e0$export$357523c63a2253b9);
$parcel$export($73296c0bdeea98f6$exports, "reduce", () => $708bbd81e1938339$export$533b26079ad0b4b);
$parcel$export($73296c0bdeea98f6$exports, "retry", () => $7eb9071dd240358d$export$9369b12211e1fce4);
$parcel$export($73296c0bdeea98f6$exports, "skip", () => $6fe08750fda2500d$export$955fc4a6c4be454d);
$parcel$export($73296c0bdeea98f6$exports, "share", () => $5632623b19485d90$export$ed80d9de1d9df928);
$parcel$export($73296c0bdeea98f6$exports, "switchStream", () => $4300a049feedd341$export$1a62af6d099a1e7c);
$parcel$export($73296c0bdeea98f6$exports, "subject", () => $480770cf9bfd508e$export$c49781290a0a7ce3);
$parcel$export($73296c0bdeea98f6$exports, "take", () => $63d411a1f0f5d390$export$b7df5d561049483a);
$parcel$export($73296c0bdeea98f6$exports, "throttle", () => $63b24c46c626e8be$export$de363e709c412c8a);
$parcel$export($73296c0bdeea98f6$exports, "until", () => $170a8d1ff933b765$export$a40009bd2c363351);
$parcel$export($73296c0bdeea98f6$exports, "zip", () => $5c3849ba7478ebbf$export$8901015135f2fb22);


/**
 * Typeof Functions
 * Provides several functions to test whether x is of type y
 */ const $77d07aef6f69d2ce$var$isTypeOf = (a)=>(b)=>typeof b === a
;
const $77d07aef6f69d2ce$export$7e4aa119212bc614 = $77d07aef6f69d2ce$var$isTypeOf('number');
const $77d07aef6f69d2ce$export$f9ce7b637dfbe238 = $77d07aef6f69d2ce$var$isTypeOf('boolean');
const $77d07aef6f69d2ce$export$630801d484da15df = (x)=>x === null
;
const $77d07aef6f69d2ce$export$fce6876652108ab = (x)=>typeof x === 'undefined'
;
const $77d07aef6f69d2ce$export$844ec244b1367d54 = $77d07aef6f69d2ce$var$isTypeOf('string');
const $77d07aef6f69d2ce$export$a6cdc56e425d0d0a = (x)=>x !== null && typeof x === 'object'
;
const $77d07aef6f69d2ce$export$43bee75e5e14138e = (a)=>Array.isArray(a)
;
const $77d07aef6f69d2ce$export$49034edbe6b62415 = $a0a27525818bb962$export$c3095a23b368d1f2((a, b)=>b instanceof a
);
const $77d07aef6f69d2ce$export$f6e2535fb5126e54 = (f)=>f && typeof f === 'function'
;
const $77d07aef6f69d2ce$export$cb3f0f7ea9814480 = (f)=>$77d07aef6f69d2ce$export$f6e2535fb5126e54(f) && f[Symbol.toStringTag] === 'AsyncFunction'
;
const $77d07aef6f69d2ce$export$111f0b41304fc890 = (f)=>$77d07aef6f69d2ce$export$f6e2535fb5126e54(f) && f[Symbol.toStringTag] === 'GeneratorFunction'
;
const $77d07aef6f69d2ce$export$a9ef8c9fdb631810 = (f)=>$77d07aef6f69d2ce$export$f6e2535fb5126e54(f) && f[Symbol.toStringTag] === 'AsyncGeneratorFunction'
;
const $77d07aef6f69d2ce$export$6750766a7c7ec627 = (s)=>s instanceof Set
;
const $77d07aef6f69d2ce$export$5c90113a285f2241 = (m)=>m instanceof Map
;
function $77d07aef6f69d2ce$export$dd1bc94b04021eeb(x) {
    if (x === '' || x == null || $77d07aef6f69d2ce$export$43bee75e5e14138e(x) && x.length === 0 || !$77d07aef6f69d2ce$export$5578ef75f4140928(x) && ($77d07aef6f69d2ce$export$6750766a7c7ec627(x) || $77d07aef6f69d2ce$export$5c90113a285f2241(x) || $77d07aef6f69d2ce$export$a6cdc56e425d0d0a(x)) && $fd9dc580cc166db4$export$68c286be0e7e55b7(x).length === 0 || Number.isNaN(x)) return true;
    return false;
}
function $77d07aef6f69d2ce$export$5578ef75f4140928(obj) {
    const isCtorClass = obj.constructor && obj.constructor.toString().substring(0, 5) === 'class';
    if (obj.prototype === undefined) return isCtorClass;
    const isPrototypeCtorClass = obj.prototype.constructor && obj.prototype.constructor.toString && obj.prototype.constructor.toString().substring(0, 5) === 'class';
    return isCtorClass || isPrototypeCtorClass;
}
const $77d07aef6f69d2ce$export$67c1ce03820f762d = Symbol('reduced');
const $77d07aef6f69d2ce$export$ebab785f9ea33473 = (thing)=>!!thing?.[$77d07aef6f69d2ce$export$67c1ce03820f762d]
;



const $a0a27525818bb962$export$f0954fd7d5368655 = (x)=>x
;
const $a0a27525818bb962$export$c983f826f44ff86 = (a)=>()=>a
;
const $a0a27525818bb962$export$2b74374111f56d9e = (fn, n)=>function arity(...args) {
        return fn.apply(this, args.slice(0, n));
    }
;
const $a0a27525818bb962$export$a7e49f78f97b1037 = (fn)=>$a0a27525818bb962$export$2b74374111f56d9e(fn, 1)
;
const $a0a27525818bb962$export$33902b7329277358 = (fn)=>$a0a27525818bb962$export$2b74374111f56d9e(fn, 2)
;
const $a0a27525818bb962$export$b0d4470bfb62c4eb = (fn)=>$a0a27525818bb962$export$2b74374111f56d9e(fn, 3)
;
const $a0a27525818bb962$export$9e58c10e5cf1295d = (fn, larg)=>function callFirst(...args) {
        return fn.call(this, larg, ...args);
    }
;
const $a0a27525818bb962$export$3d41a7c27165bfa3 = (fn, rarg)=>function callLast(...args) {
        return fn.call(this, ...args, rarg);
    }
;
const $a0a27525818bb962$export$e775f2ca58d379f0 = Function.prototype.bind.bind(Function.prototype.call);
const $a0a27525818bb962$export$fc1400facf92c78 = (a)=>$77d07aef6f69d2ce$export$844ec244b1367d54(a) || $77d07aef6f69d2ce$export$43bee75e5e14138e(a) || $77d07aef6f69d2ce$export$f6e2535fb5126e54(a) ? a.length : $77d07aef6f69d2ce$export$6750766a7c7ec627(a) || $77d07aef6f69d2ce$export$5c90113a285f2241(a) ? a.size : $77d07aef6f69d2ce$export$a6cdc56e425d0d0a(a) ? Object.entries(a).length : void 0
;
function $a0a27525818bb962$var$compose2(f, g) {
    return function compose(...args) {
        return f.call(this, g.apply(this, args));
    };
}
function $a0a27525818bb962$export$f672e0b6f7222cd7(...fns) {
    return fns.reduce($a0a27525818bb962$var$compose2);
}
function $a0a27525818bb962$export$a4627e546088548d(...fns) {
    return fns.reduceRight($a0a27525818bb962$var$compose2);
}
function $a0a27525818bb962$export$c3095a23b368d1f2(fn) {
    return function curryInner(...args) {
        return args.length >= fn.length ? fn.apply(this, args) : (...args2)=>args.length + args2.length >= fn.length ? fn.call(this, ...args, ...args2) : $a0a27525818bb962$export$c3095a23b368d1f2(fn)(...args, ...args2)
        ;
    };
}
const $a0a27525818bb962$export$3f23594af5f37336 = $a0a27525818bb962$export$c3095a23b368d1f2((fn, x)=>(fn(x), x)
);
const $a0a27525818bb962$export$6003a5f097c73977 = $a0a27525818bb962$export$c3095a23b368d1f2((f, a)=>!f(a)
);
const $a0a27525818bb962$export$21c0ac7fe1cef1b8 = $a0a27525818bb962$export$c3095a23b368d1f2((f, g, x)=>f(x) && g(x)
);
const $a0a27525818bb962$export$252bb8b3bbdf6749 = $a0a27525818bb962$export$c3095a23b368d1f2((f, g, x)=>f(x) || g(x)
);
const $a0a27525818bb962$export$aef51622e549b8b0 = $a0a27525818bb962$export$c3095a23b368d1f2((f, a)=>-f(a)
);
const $a0a27525818bb962$export$d8f18b68abd220dc = (f)=>$a0a27525818bb962$export$c3095a23b368d1f2(function flip(a, b) {
        return f.call(this, b, a);
    })
;
const $a0a27525818bb962$export$c993f2f7dfcc6a25 = (f)=>$a0a27525818bb962$export$c3095a23b368d1f2(function flip(a, b, c) {
        return f.call(this, b, c, a);
    })
;
const $a0a27525818bb962$export$b4d6a1a804dab06c = $a0a27525818bb962$export$3f23594af5f37336(console.log.bind(console));
const $a0a27525818bb962$export$bef1f36f5486a6a3 = (fn, logger = console.log.bind(console))=>function log(...args) {
        logger(`Entering function ${fn.name}(${args.map((a)=>JSON.stringify(a)
        ).join(',')})`);
        const result = fn.apply(this, args);
        logger(`\nExiting function ${fn.name} -> ${JSON.stringify(result)}`);
        return result;
    }
;
const $a0a27525818bb962$export$9608d0eacffd6284 = $a0a27525818bb962$export$c3095a23b368d1f2((fns, reducer, initial, arr)=>{
    const result = arr.reduce($a0a27525818bb962$export$f672e0b6f7222cd7(...fns)(reducer), initial);
    return $77d07aef6f69d2ce$export$ebab785f9ea33473(result) ? result.value : result;
});
function $a0a27525818bb962$export$447808b60b7559bd(value) {
    return {
        value: value,
        [$77d07aef6f69d2ce$export$67c1ce03820f762d]: true
    };
}
const $a0a27525818bb962$export$29deb6b34088de51 = (fn)=>(reducer)=>(acc, val)=>$77d07aef6f69d2ce$export$ebab785f9ea33473(acc) ? acc : reducer(acc, fn(val))
;
const $a0a27525818bb962$export$5ddcd2c2c8d9736f = (fn)=>(reducer)=>(acc, val)=>$77d07aef6f69d2ce$export$ebab785f9ea33473(acc) ? acc : fn(val) ? reducer(acc, val) : acc
;
const $a0a27525818bb962$export$dd4bdc97aa5225d9 = (fn)=>(reducer)=>(acc, val)=>$77d07aef6f69d2ce$export$ebab785f9ea33473(acc) ? acc : fn(val) ? reducer(acc, val) : $a0a27525818bb962$export$447808b60b7559bd(acc)
;
const $a0a27525818bb962$export$7634b617e2c58e32 = (n)=>(function take() {
        let taken = n;
        return ()=>taken-- > 0
        ;
    })()
;
const $a0a27525818bb962$export$89db4734f6c919c4 = (name, ...args)=>(instance)=>instance[name](...args)
;
const $a0a27525818bb962$export$adf7c0fe6059d774 = (name, ...args)=>args === [] ? (instance)=>instance[name].bind(instance)
     : (instance)=>Function.prototype.bind.apply(instance[name], [
            instance
        ].concat(args))
;
const $a0a27525818bb962$export$468cda29b159ee5d = (fn, ...args)=>(instance)=>fn.apply(instance, args)
;
function $a0a27525818bb962$export$7a5d5c156e7dc406(...items) {
    return Array.from(new Set(items.flat()));
}
const $a0a27525818bb962$export$3f063810d7bf01bd = $a0a27525818bb962$export$c3095a23b368d1f2((key, arr)=>{
    const result = {
    };
    for (const item of arr)(result[item[key]] || (result[item[key]] = [])).push(item);
    return $fd9dc580cc166db4$export$68c286be0e7e55b7(result);
});
const $a0a27525818bb962$export$cf4d2554e2b9373d = $a0a27525818bb962$export$c3095a23b368d1f2((fn, arr)=>{
    const result = {
    };
    for(let i = 0; i < arr.length; i++){
        const key = fn(arr[i], i, arr);
        const values = result[key] ?? [];
        values.push(arr[i]);
        result[key] = values;
    }
    return result;
});
const $a0a27525818bb962$export$341c6a2f7bf0591b = $a0a27525818bb962$export$c3095a23b368d1f2((fn, arr)=>{
    const result = new Map();
    for(let i = 0; i < arr.length; i++){
        const key = fn(arr[i], i, arr);
        const values = result.get(key) ?? [];
        values.push(arr[i]);
        result.set(key, values);
    }
    return result;
});
const $a0a27525818bb962$export$e439fc32198f78c5 = $a0a27525818bb962$export$c3095a23b368d1f2((key, arr)=>arr.reduce((result, item)=>(result[item[key]] = item, result)
    , {
    })
);
const $a0a27525818bb962$export$54fd2c36b5cc6731 = (x)=>JSON.stringify(x)
;
const $a0a27525818bb962$export$21625637effda04 = (x)=>JSON.parse(x)
;
const $a0a27525818bb962$export$fac44ee5b035f737 = JSON.stringify.bind(JSON);
const $a0a27525818bb962$export$98e6a39c04603d36 = JSON.parse.bind(JSON);
const $a0a27525818bb962$export$f84e8e69fd4488a5 = String;
const $a0a27525818bb962$export$f728be4ab20cbf1f = (s)=>Number.parseInt(s, 10)
;
const $a0a27525818bb962$export$d234c058d1d4e435 = $a0a27525818bb962$export$c3095a23b368d1f2((f, g)=>{
    try {
        return f();
    } catch (e) {
        return g(e);
    }
});
function $a0a27525818bb962$export$d2de3aaeafa91619(fn) {
    let done = false;
    let result;
    return function once(...args) {
        return !done ? (done = true, result = fn.apply(this, args), result) : result;
    };
}
function $a0a27525818bb962$export$fc10aeed3a532e2a(fn) {
    let cache = Object.create(null);
    const isPrimitive = (x)=>typeof x === 'number' || typeof x === 'string' || typeof x === 'boolean'
    ;
    function memoize(...args) {
        const key = args.length === 1 && isPrimitive(args[0]) ? args[0] : JSON.stringify(args);
        return key in cache ? cache[key] : cache[key] = fn.apply(this, args);
    }
    memoize.clearCache = function clearCache() {
        cache = Object.create(null);
        return memoize;
    };
    return memoize;
}
const $a0a27525818bb962$export$61fc7d43ac8f84b0 = (delay)=>{
    let pending = false;
    return function debounce(fn) {
        if (pending) clearTimeout(pending);
        pending = setTimeout(()=>fn.call(this)
        , delay);
    };
};
const $a0a27525818bb962$export$63fce1f81095ac4f = (delay)=>{
    const stack = [];
    let pending = false;
    return function accumulate(fn) {
        return (event)=>{
            if (pending) clearTimeout(pending);
            stack.push(event);
            pending = setTimeout(()=>{
                pending = false;
                fn.call(this, stack.slice());
                stack.length = 0;
            }, delay);
        };
    };
};
const $a0a27525818bb962$export$7a5838dcc95df55f = $a0a27525818bb962$export$c3095a23b368d1f2((fn, targetValue)=>{
    return (value)=>{
        const result = fn(value);
        return result === targetValue ? 0 : result > targetValue ? 1 : -1;
    };
});
const $a0a27525818bb962$export$2e0ae67339d5f1ac = (arr, fn)=>{
    let first = 0, mid, last = arr.length - 1;
    while(first <= last){
        mid = Math.floor((first + last) / 2);
        const result = fn(arr[mid]);
        if (result === 0) return arr[mid];
        else if (result > 0) last = mid - 1;
        else first = mid + 1;
    }
    return null;
};
function $a0a27525818bb962$export$9cb4719e2e525b7a(a, b) {
    if (a === b) return true;
    if (a && b && $77d07aef6f69d2ce$export$a6cdc56e425d0d0a(a) && $77d07aef6f69d2ce$export$a6cdc56e425d0d0a(b)) {
        if (a.constructor !== b.constructor) return false;
        let length, i;
        if ($77d07aef6f69d2ce$export$43bee75e5e14138e(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; (i--) !== 0;)if (!$a0a27525818bb962$export$9cb4719e2e525b7a(a[i], b[i])) return false;
            return true;
        }
        if ($77d07aef6f69d2ce$export$5c90113a285f2241(a) && $77d07aef6f69d2ce$export$5c90113a285f2241(b)) {
            if (a.size !== b.size) return false;
            for (i of a.entries())if (!b.has(i[0])) return false;
            for (i of a.entries())if (!$a0a27525818bb962$export$9cb4719e2e525b7a(i[1], b.get(i[0]))) return false;
            return true;
        }
        if ($77d07aef6f69d2ce$export$6750766a7c7ec627(a) && $77d07aef6f69d2ce$export$6750766a7c7ec627(b)) {
            if (a.size !== b.size) return false;
            for (i of a.entries())if (!b.has(i[0])) return false;
            return true;
        }
        if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; (i--) !== 0;)if (a[i] !== b[i]) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        const keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; (i--) !== 0;){
            if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        }
        for(i = length; (i--) !== 0;){
            const key = keys[i];
            if (!$a0a27525818bb962$export$9cb4719e2e525b7a(a[key], b[key])) return false;
        }
        return true;
    }
    return a !== a && b !== b;
}



const $fd9dc580cc166db4$export$977f3f6a9323c0f6 = $a0a27525818bb962$export$c3095a23b368d1f2((name, a)=>a && (name in a ? $77d07aef6f69d2ce$export$f6e2535fb5126e54(a[name]) ? a[name].call(a) : a[name] : void 0)
);
const $fd9dc580cc166db4$export$f45dfcb5efeffdb3 = $a0a27525818bb962$export$c3095a23b368d1f2((name, value, a)=>$77d07aef6f69d2ce$export$a6cdc56e425d0d0a(a) ? (a[name] = value, a) : a
);
const $fd9dc580cc166db4$export$8a39838a0f735648 = $a0a27525818bb962$export$c3095a23b368d1f2((name, value, a)=>a && name in a ? {
        ...a,
        [name]: value
    } : {
        ...a
    }
);
const $fd9dc580cc166db4$export$adaa4cf7ef1b65be = $a0a27525818bb962$export$c3095a23b368d1f2((key, value, a)=>($77d07aef6f69d2ce$export$5c90113a285f2241(a) ? a.set(key, value) : a[key] = value, a)
);
const $fd9dc580cc166db4$export$722fbec263ad908a = $a0a27525818bb962$export$c3095a23b368d1f2((key, updater, a)=>$77d07aef6f69d2ce$export$5c90113a285f2241(a) ? a.set(key, updater(a.get(key))) : (a[key] = updater(a[key]), a)
);
const $fd9dc580cc166db4$export$8128bb6492cf3de7 = $a0a27525818bb962$export$c3095a23b368d1f2((names, a)=>names.map((n)=>$fd9dc580cc166db4$export$977f3f6a9323c0f6(n, a)
    )
);
const $fd9dc580cc166db4$export$357523c63a2253b9 = $a0a27525818bb962$export$c3095a23b368d1f2((names, a)=>names.reduce((result, key)=>key in a ? (result[key] = a[key], result) : result
    , {
    })
);
const $fd9dc580cc166db4$export$52be3e7c3b913516 = $a0a27525818bb962$export$c3095a23b368d1f2((path, a)=>{
    if (!Array.isArray(path)) path = path.split('.');
    const [p, ...rest] = path;
    return !rest.length ? $fd9dc580cc166db4$export$977f3f6a9323c0f6(p, a) : $fd9dc580cc166db4$export$52be3e7c3b913516(rest, $fd9dc580cc166db4$export$977f3f6a9323c0f6(p, a));
});
const $fd9dc580cc166db4$export$112aad15b1fe0c19 = $a0a27525818bb962$export$c3095a23b368d1f2((path1, value1, a)=>{
    if (!Array.isArray(path1)) path1 = path1.split('.');
    function innerDeepSetProp(path, value, obj) {
        if (path.length === 1) {
            obj[path[0]] = value;
            return obj;
        }
        if (path[0] in obj && $77d07aef6f69d2ce$export$a6cdc56e425d0d0a(obj[path[0]])) {
            const newObj = obj[path[0]];
            return innerDeepSetProp(path.slice(1), value, newObj);
        }
        const newObj = {
        };
        obj[path[0]] = newObj;
        return innerDeepSetProp(path.slice(1), value, newObj);
    }
    const aux = $fd9dc580cc166db4$export$6c40052bed430212(a);
    return innerDeepSetProp(path1, value1, aux), aux;
});
const $fd9dc580cc166db4$export$87779c0c97a6c3df = $a0a27525818bb962$export$c3095a23b368d1f2((path2, updater1, a)=>{
    if (!Array.isArray(path2)) path2 = path2.split('.');
    function innerDeepSetProp(path, updater, obj) {
        if (path.length === 1) {
            obj[path[0]] = updater(obj[path[0]]);
            return obj;
        }
        if (path[0] in obj && $77d07aef6f69d2ce$export$a6cdc56e425d0d0a(obj[path[0]])) {
            const newObj = obj[path[0]];
            return innerDeepSetProp(path.slice(1), updater, newObj);
        }
        const newObj = {
        };
        obj[path[0]] = newObj;
        return innerDeepSetProp(path.slice(1), updater, newObj);
    }
    return innerDeepSetProp(path2, updater1, a), a;
});
const $fd9dc580cc166db4$export$dc56a6be17ec932e = $a0a27525818bb962$export$c3095a23b368d1f2((paths, a)=>paths.reduce((result, path)=>$fd9dc580cc166db4$export$112aad15b1fe0c19(path, $fd9dc580cc166db4$export$52be3e7c3b913516(path)(a), result)
    , {
    })
);
/**
 * DiffObject, returns the changed values from newObj that are not in oldObj
 */ function $fd9dc580cc166db4$var$diffObjects(oldObj1, newObj1) {
    if (oldObj1 === newObj1) return {
    };
    if (!oldObj1) return newObj1;
    if (!newObj1) return oldObj1;
    function innerDiffObjects(oldObj, newObj, result) {
        if (oldObj === newObj) return result;
        for (const key of Reflect.ownKeys(newObj)){
            if (oldObj[key] === newObj[key]) continue;
            if ($77d07aef6f69d2ce$export$43bee75e5e14138e(newObj[key])) {
                result[key] = $fd9dc580cc166db4$var$diffArrays(oldObj[key], newObj[key]);
                if (result[key].length === 0) delete result[key];
            } else if ($77d07aef6f69d2ce$export$a6cdc56e425d0d0a(newObj[key])) {
                result[key] = {
                };
                innerDiffObjects(oldObj[key], newObj[key], result[key]);
            } else result[key] = newObj[key];
        }
        return result;
    }
    return innerDiffObjects(oldObj1, newObj1, {
    });
}
/**
 * DiffArray, returns the changed items from newArr, that are not in oldArr
 */ function $fd9dc580cc166db4$var$diffArrays(oldArr, newArr) {
    const result = [];
    if (oldArr === newArr) return result;
    for(let i = 0; i < newArr.length; i++)if (!(oldArr[i] === newArr[i])) result.push($fd9dc580cc166db4$export$a37e3c603d7117e5(oldArr[i], newArr[i]));
    return result;
}
function $fd9dc580cc166db4$export$a37e3c603d7117e5(a, b) {
    return $77d07aef6f69d2ce$export$43bee75e5e14138e(b) ? $fd9dc580cc166db4$var$diffArrays(a, b) : $77d07aef6f69d2ce$export$a6cdc56e425d0d0a(b) ? $fd9dc580cc166db4$var$diffObjects(a, b) : b;
}
function $fd9dc580cc166db4$export$258f7bf0e3a9da18(a, b) {
    if (!a && b) return b;
    if ($77d07aef6f69d2ce$export$43bee75e5e14138e(b)) return b.map((value, i)=>$fd9dc580cc166db4$export$258f7bf0e3a9da18(a[i], value)
    );
    if ($77d07aef6f69d2ce$export$a6cdc56e425d0d0a(b)) {
        const result = $fd9dc580cc166db4$export$6c40052bed430212(a);
        for (const key of Reflect.ownKeys(b))result[key] = $fd9dc580cc166db4$export$258f7bf0e3a9da18(a[key], b[key]);
        return result;
    }
    return b;
}
function $fd9dc580cc166db4$export$ce9688d12180c837(keyMap, ...objects) {
    let result = {
    };
    for (const current of objects){
        result = $fd9dc580cc166db4$export$258f7bf0e3a9da18(result, current);
        for (const [oldKey, newKey] of $fd9dc580cc166db4$export$3e9f948b41964866(keyMap)){
            if (!current[oldKey]) continue;
            result[newKey] = result[newKey] ? $a0a27525818bb962$export$7a5d5c156e7dc406(result[newKey], current[oldKey]) : $a0a27525818bb962$export$7a5d5c156e7dc406(result[oldKey], current[oldKey]);
            delete result[oldKey];
        }
    }
    return result;
}
function $fd9dc580cc166db4$export$4950aa0f605343fb(a, b) {
    if (!a && b) return $fd9dc580cc166db4$export$6c40052bed430212(b);
    if (!b && a) return $fd9dc580cc166db4$export$6c40052bed430212(a);
    if ($77d07aef6f69d2ce$export$43bee75e5e14138e(a) && $77d07aef6f69d2ce$export$43bee75e5e14138e(b)) return $a0a27525818bb962$export$7a5d5c156e7dc406(a, b).map((value)=>$fd9dc580cc166db4$export$6c40052bed430212(value)
    );
    if (!$77d07aef6f69d2ce$export$43bee75e5e14138e(a) && $77d07aef6f69d2ce$export$43bee75e5e14138e(b)) return b.map((value)=>$fd9dc580cc166db4$export$6c40052bed430212(value)
    );
    if ($77d07aef6f69d2ce$export$a6cdc56e425d0d0a(a) && $77d07aef6f69d2ce$export$a6cdc56e425d0d0a(b)) {
        const result = {
        };
        const keys = $a0a27525818bb962$export$7a5d5c156e7dc406([
            ...Reflect.ownKeys(a),
            ...Reflect.ownKeys(b)
        ]);
        for (const key of keys){
            const [aVal, bVal] = [
                a[key],
                b[key]
            ];
            // If a === b just deepCopy b
            if (aVal === bVal) result[key] = $fd9dc580cc166db4$export$6c40052bed430212(bVal);
            else if ($77d07aef6f69d2ce$export$43bee75e5e14138e(aVal) && $77d07aef6f69d2ce$export$43bee75e5e14138e(bVal)) result[key] = $fd9dc580cc166db4$export$4950aa0f605343fb(aVal, bVal);
            else if ($77d07aef6f69d2ce$export$a6cdc56e425d0d0a(aVal) && $77d07aef6f69d2ce$export$a6cdc56e425d0d0a(bVal)) result[key] = $fd9dc580cc166db4$export$4950aa0f605343fb(aVal, bVal);
            else if (bVal === undefined) result[key] = $fd9dc580cc166db4$export$6c40052bed430212(aVal);
            else result[key] = $fd9dc580cc166db4$export$6c40052bed430212(bVal);
        }
        return result;
    }
    return b;
}
function $fd9dc580cc166db4$export$3e9f948b41964866(iterable) {
    if (iterable.entries && $77d07aef6f69d2ce$export$f6e2535fb5126e54(iterable.entries)) return [
        ...iterable.entries()
    ];
    return Object.entries(iterable);
}
function $fd9dc580cc166db4$export$68c286be0e7e55b7(iterable) {
    if (iterable.values && $77d07aef6f69d2ce$export$f6e2535fb5126e54(iterable.values)) return [
        ...iterable.values()
    ];
    return Object.values(iterable);
}
function $fd9dc580cc166db4$export$ed97f33186d4b816(iterable) {
    if (iterable.keys && $77d07aef6f69d2ce$export$f6e2535fb5126e54(iterable.keys)) return [
        ...iterable.keys()
    ];
    return Object.keys(iterable);
}
const $fd9dc580cc166db4$export$7ac989ec0c9c279 = $a0a27525818bb962$export$c3095a23b368d1f2((keyMap, a)=>{
    const result = $fd9dc580cc166db4$export$6c40052bed430212(a);
    for (const [oldKey, newKey] of $fd9dc580cc166db4$export$3e9f948b41964866(keyMap))if ($77d07aef6f69d2ce$export$5c90113a285f2241(result)) {
        result.set(newKey, a.get(oldKey));
        result.delete(oldKey);
    } else {
        result[newKey] = a[oldKey];
        delete result[oldKey];
    }
    return result;
});
const $fd9dc580cc166db4$var$detectCollision = (...descriptors)=>descriptors.flatMap(Object.keys).reduce($fd9dc580cc166db4$var$sortReducer, []).reduce($fd9dc580cc166db4$var$collisionReducer, []).forEach((c)=>console.log(`[WARN] Collision found: ${c}`)
    )
;
const $fd9dc580cc166db4$var$sortReducer = (accumulator, value)=>{
    const nextIndex = accumulator.findIndex((i)=>value < i
    );
    const index = nextIndex > -1 ? nextIndex : accumulator.length;
    accumulator.splice(index, 0, value);
    return accumulator;
};
const $fd9dc580cc166db4$var$collisionReducer = (accumulator, value, index, arr)=>value === arr[index + 1] ? [
        ...accumulator,
        value
    ] : accumulator
;
const $fd9dc580cc166db4$var$isDescriptor = (obj)=>obj && (obj.state || obj.methods)
;
// extend Object
if (typeof Object.impl !== 'function') Object.defineProperty(Object, 'impl', {
    value: (...mixins)=>(target)=>{
            if (!Object.isExtensible(target) || Object.isSealed(target)) throw new TypeError('Unable to concatenate mixins into base object. Object is either not extensible or has been sealed');
            Object.assign(target.prototype, ...mixins);
            return target;
        }
    ,
    enumerable: false,
    writable: false,
    configurable: false
});
if (typeof Object.mixin !== 'function') Object.defineProperty(Object, 'mixin', {
    value: function concatExtend(descriptor, ...mixins) {
        let base = Object(descriptor);
        if ($fd9dc580cc166db4$var$isDescriptor(descriptor)) base = {
            ...base.state,
            ...base.methods,
            ...base.interop
        };
        $fd9dc580cc166db4$var$detectCollision(base, ...mixins);
        if (!Object.isExtensible(base) || Object.isSealed(base)) throw new TypeError('Unable to concatenate mixins into base object. Object is either not extensible or has been sealed');
        return Object.assign({
            ...base
        }, ...mixins);
    },
    enumerable: false,
    writable: false,
    configurable: false
});
function $fd9dc580cc166db4$export$7e32b29e1cb162e1(obj) {
    if (obj && typeof obj === 'object' && !Object.isFrozen(obj)) {
        Object.getOwnPropertyNames(obj).forEach((name)=>$fd9dc580cc166db4$export$7e32b29e1cb162e1(obj[name])
        );
        Object.freeze(obj);
    }
    return obj;
}
function $fd9dc580cc166db4$export$77ca992757d61efd(arr, offset = 0) {
    const len = Math.max(0, arr.length - offset);
    const newArray = new Array(len);
    for(let i = 0; i < len; i++)newArray[i] = $fd9dc580cc166db4$export$6c40052bed430212(arr[i + offset]);
    return newArray;
}
function $fd9dc580cc166db4$export$6c40052bed430212(obj) {
    if ($77d07aef6f69d2ce$export$43bee75e5e14138e(obj)) return $fd9dc580cc166db4$export$77ca992757d61efd(obj);
    let aux = obj;
    if (obj && typeof obj === 'object') {
        aux = new obj.constructor();
        if ($77d07aef6f69d2ce$export$5c90113a285f2241(aux)) for (const key of obj.keys()){
            const keyCopy = $fd9dc580cc166db4$export$6c40052bed430212(key);
            aux.set(keyCopy, obj.get(key));
        }
        else if ($77d07aef6f69d2ce$export$6750766a7c7ec627(aux)) for (const val of obj.values())aux.add(val);
        else Object.getOwnPropertyNames(obj).forEach((prop)=>aux[prop] = $fd9dc580cc166db4$export$6c40052bed430212(obj[prop])
        );
    }
    return aux;
}
Object.deepFreeze = Object.deepFreeze || $fd9dc580cc166db4$export$7e32b29e1cb162e1;
const $fd9dc580cc166db4$export$fc3a40dec7b33bf = $a0a27525818bb962$export$f672e0b6f7222cd7(Object.seal, Object.deepFreeze);





const $68379df254bd8d65$export$fbd2e1a2b7cf8f98 = (observer)=>(next)=>({
            next: next,
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
        })
;
const $68379df254bd8d65$export$c7187bbd1a7a9244 = (creator)=>(...initialArgs)=>new Proxy({
        }, {
            get (_, prop) {
                return (...args)=>creator(...initialArgs)[prop](...args)
                ;
            }
        })
;



const $dd337f375f3dc55e$export$ab1029bcae9ddb4a = $68379df254bd8d65$export$c7187bbd1a7a9244((count, stream)=>{
    const internalStorage = [];
    return new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        const subs = stream.subscribe($68379df254bd8d65$export$fbd2e1a2b7cf8f98(observer)((value)=>{
            internalStorage.push(value);
            if (internalStorage.length >= count) {
                observer.next(internalStorage.slice());
                internalStorage.length = 0;
            }
        }));
        return ()=>subs.unsubscribe()
        ;
    });
});




const $561d6b2f2c3ef0b1$export$3dede90624df3ba9 = $68379df254bd8d65$export$c7187bbd1a7a9244((handler, stream)=>{
    const sub = [];
    return new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        $561d6b2f2c3ef0b1$var$retry(handler, stream, sub, observer);
        return ()=>sub.map((s)=>s.unsubscribe()
            )
        ;
    });
});
function $561d6b2f2c3ef0b1$var$retry(handler, stream, sub, observer) {
    sub.pop()?.unsubscribe();
    return sub.push(stream.subscribe({
        next: (value)=>observer.next(value)
        ,
        error: (err)=>{
            try {
                const capture = handler(err, stream);
                if (capture === stream) return $561d6b2f2c3ef0b1$var$retry(handler, stream, sub, observer);
                return observer.next(capture);
            } catch (err1) {
                return observer.error(err1);
            }
        },
        complete: ()=>observer.complete()
    }));
}




const $580a3429826ec134$export$ee1b3e54f0441b22 = $68379df254bd8d65$export$c7187bbd1a7a9244((...streams)=>{
    const subs = [];
    return new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        $580a3429826ec134$var$subNextStream(streams, 0, subs, observer);
        return ()=>subs.forEach((sub)=>sub.unsubscribe()
            )
        ;
    });
});
function $580a3429826ec134$var$subNextStream(streams, i, subs, observer) {
    subs.push(streams[i].subscribe({
        next: (value)=>observer.next(value)
        ,
        error: observer.error.bind(observer),
        complete () {
            if (i === streams.length - 1) return observer.complete();
            return $580a3429826ec134$var$subNextStream(streams, i + 1, subs, observer);
        }
    }));
}





const $df35fb34eb1c0945$export$1be1fc439b849fdf = $68379df254bd8d65$export$c7187bbd1a7a9244((...streams)=>{
    let done = 0;
    const store = Object.fromEntries(streams.map((_, i)=>[
            i,
            []
        ]
    ));
    const buffers = $fd9dc580cc166db4$export$68c286be0e7e55b7(store);
    function pushResults(event, observer) {
        store[event.stream].push(event.value);
        if (buffers.every((buffer)=>buffer.length
        )) buffers.forEach((buffer)=>{
            observer.next(buffer.pop());
            buffer.length = 0;
        });
    }
    return new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        const subscriptions = streams.map((stream, i)=>stream.subscribe({
                next: (value)=>pushResults({
                        stream: i,
                        value: value
                    }, observer)
                ,
                error: observer.error.bind(observer),
                complete: ()=>++done === streams.length && observer.complete()
            })
        );
        return ()=>subscriptions.forEach((subs)=>subs.unsubscribe()
            )
        ;
    });
});




function $ae35ae7cbce3cb3b$var$composeM2(f, g) {
    return function innerComposeM2(...args) {
        return g.apply(this, args).flatMap(f);
    };
}
function $ae35ae7cbce3cb3b$export$fe41fac84f1fd82f(...Ms) {
    return Ms.reduce($ae35ae7cbce3cb3b$var$composeM2);
}
const $ae35ae7cbce3cb3b$export$4e54ff84c97bdc0c = $a0a27525818bb962$export$c3095a23b368d1f2((fn, a1, a2)=>a1.map(fn).ap(a2)
);
const $ae35ae7cbce3cb3b$export$8402e5acf634c0df = $a0a27525818bb962$export$c3095a23b368d1f2((fn, a1, a2, a3)=>a1.map(fn).ap(a2).ap(a3)
);
const $ae35ae7cbce3cb3b$export$3a582736e2273011 = $a0a27525818bb962$export$c3095a23b368d1f2((fn, a1, a2, a3, a4)=>a1.map(fn).ap(a2).ap(a3).ap(a4)
);
const $ae35ae7cbce3cb3b$export$5635d7ef4b8fee1c = $a0a27525818bb962$export$c3095a23b368d1f2((fn, F)=>$ae35ae7cbce3cb3b$export$871de8747c9eaa88.call(F, fn)
);
const $ae35ae7cbce3cb3b$export$40fa977508bcf282 = (M)=>M.flat()
;
const $ae35ae7cbce3cb3b$export$5b8affa63fc6df16 = $a0a27525818bb962$export$c3095a23b368d1f2((f, M)=>M.flatMap(f)
);
const $ae35ae7cbce3cb3b$export$93e2b83da34ff82a = $a0a27525818bb962$export$c3095a23b368d1f2((f, M)=>M.fold(f)
);
const $ae35ae7cbce3cb3b$export$2a722db47863bac2 = $a0a27525818bb962$export$c3095a23b368d1f2((e, M)=>M.getOrElseThrow(e)
);
const $ae35ae7cbce3cb3b$export$5fd5031fecdacec3 = (a)=>a && a[0]
;
const $ae35ae7cbce3cb3b$export$4c7897fafd92b108 = (a)=>a && a[a.length - 1]
;
const $ae35ae7cbce3cb3b$export$99aaa11fb71d263 = (a, b)=>a.concat(b)
;
const $ae35ae7cbce3cb3b$export$7ecc1a3b11b57dab = $a0a27525818bb962$export$c3095a23b368d1f2((f, arr)=>arr.every(f)
);
const $ae35ae7cbce3cb3b$export$ad14ef4001db2bcd = $a0a27525818bb962$export$c3095a23b368d1f2((f, arr)=>arr.some(f)
);
const $ae35ae7cbce3cb3b$export$71aa6c912b956294 = $a0a27525818bb962$export$c3095a23b368d1f2((f, arr)=>arr.find(f)
);
const $ae35ae7cbce3cb3b$export$8a63f25cc62965f1 = (...args)=>args.reduce((x, y)=>x + y
    , 0)
;
const $ae35ae7cbce3cb3b$export$cc6710ee5f037d57 = (ns)=>$ae35ae7cbce3cb3b$export$8a63f25cc62965f1(...ns) / ns.length
;
const $ae35ae7cbce3cb3b$export$f7e2c8231c57a8bd = $a0a27525818bb962$export$c3095a23b368d1f2((sep, a)=>a.join(sep)
);
const $ae35ae7cbce3cb3b$export$b29f828819edca8d = (arr, a, b)=>arr.reduce((acc, cv)=>a(cv) ? (acc[0].push(cv), acc) : b(cv) ? (acc[1].push(cv), acc) : acc
    , [
        [],
        []
    ])
;
const $ae35ae7cbce3cb3b$export$66b4a470e4119e42 = (f, ...iters)=>{
    const min = Math.min(...$ae35ae7cbce3cb3b$export$c44985b87d605eff('length')(iters));
    const result = [];
    for(let i = 0; i < min; i++)result.push(f(...$ae35ae7cbce3cb3b$export$c44985b87d605eff(i)(iters)));
    return result;
};
const $ae35ae7cbce3cb3b$export$b035e44d7bb4278f = $a0a27525818bb962$export$c3095a23b368d1f2((f, a)=>[
        ...a
    ].sort(f)
);
const $ae35ae7cbce3cb3b$export$4b80e395e36b5a56 = $a0a27525818bb962$export$c3095a23b368d1f2((f, M)=>M.forEach(f)
);
const $ae35ae7cbce3cb3b$export$871de8747c9eaa88 = $a0a27525818bb962$export$c3095a23b368d1f2((f, M)=>M.map(f)
);
const $ae35ae7cbce3cb3b$export$3dea766d36a8935f = $a0a27525818bb962$export$c3095a23b368d1f2((p, M)=>M.filter(p)
);
const $ae35ae7cbce3cb3b$export$533b26079ad0b4b = $a0a27525818bb962$export$c3095a23b368d1f2((reducer, seed, M)=>M.reduce(reducer, seed)
);
const $ae35ae7cbce3cb3b$export$7fef8bcdbb34f435 = $a0a27525818bb962$export$c3095a23b368d1f2((reducer, seed, M)=>M.reduceRight(reducer, seed)
);
const $ae35ae7cbce3cb3b$export$c44985b87d605eff = $a0a27525818bb962$export$f672e0b6f7222cd7($ae35ae7cbce3cb3b$export$871de8747c9eaa88, $fd9dc580cc166db4$export$977f3f6a9323c0f6);
const $ae35ae7cbce3cb3b$export$ce7eaaed37329a1b = (fn)=>function innerDeepMap(tree) {
        return Array.prototype.map.call(tree, (element)=>Array.isArray(element) ? innerDeepMap(element) : fn(element)
        );
    }
;
const $ae35ae7cbce3cb3b$export$d02631cccf789723 = (start, end, step = start < end ? 1 : -1)=>{
    let index = -1;
    let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
    const result = new Array(length);
    while(length--){
        result[++index] = start;
        start += step;
    }
    return result;
};
const $ae35ae7cbce3cb3b$export$50b5b478b69a347c = $a0a27525818bb962$export$c3095a23b368d1f2((keyA, keyB, a, b)=>{
    const objA = $a0a27525818bb962$export$e439fc32198f78c5(keyA, a);
    const objB = $a0a27525818bb962$export$e439fc32198f78c5(keyB, b);
    return $fd9dc580cc166db4$export$68c286be0e7e55b7($fd9dc580cc166db4$export$258f7bf0e3a9da18(objA, objB));
});




const $eee5aafb1721df8b$export$61fc7d43ac8f84b0 = $68379df254bd8d65$export$c7187bbd1a7a9244((limit, stream)=>{
    const stack = [];
    let lastInterval = 0;
    let wantsComplete = false;
    return new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        const subs = stream.subscribe({
            next: (value)=>{
                stack.push(value);
                clearTimeout(lastInterval);
                lastInterval = setTimeout(()=>{
                    observer.next($ae35ae7cbce3cb3b$export$4c7897fafd92b108(stack));
                    stack.length = 0;
                    if (wantsComplete) observer.complete();
                }, limit);
            },
            error: observer.error.bind(observer),
            complete: ()=>wantsComplete = true
        });
        return ()=>subs.unsubscribe()
        ;
    });
});





const $4f4315ba055523b2$export$983a3b5fb2f7202e = $68379df254bd8d65$export$c7187bbd1a7a9244((fn, stream)=>{
    let lastSent = null;
    return new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        const subs = stream.subscribe($68379df254bd8d65$export$fbd2e1a2b7cf8f98(observer)((value)=>{
            try {
                const a = fn(lastSent);
                const b = fn(value);
                if (!$a0a27525818bb962$export$9cb4719e2e525b7a(a, b)) observer.next(value);
            } catch  {
                observer.next(value);
            }
            lastSent = value;
        }));
        return ()=>subs.unsubscribe()
        ;
    });
});




const $aa6c012ebab8baaf$export$dc573d8a6576cdb3 = $68379df254bd8d65$export$c7187bbd1a7a9244((fn, stream)=>new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        const subs = stream.subscribe($68379df254bd8d65$export$fbd2e1a2b7cf8f98(observer)((value)=>{
            try {
                fn(value);
                observer.next(value);
            } catch (err) {
                observer.error(err);
            }
        }));
        return ()=>subs.unsubscribe()
        ;
    })
);




const $a06ae5872f3d77b1$export$c4c7e81705f70958 = $68379df254bd8d65$export$c7187bbd1a7a9244((fn, stream)=>new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        const subs = stream.subscribe({
            next: (value)=>observer.next(value)
            ,
            error: (err)=>{
                try {
                    fn(err);
                    observer.complete();
                } catch (err1) {
                    observer.error(err1);
                    observer.complete();
                }
            },
            complete () {
                try {
                    fn();
                    observer.complete();
                } catch (err) {
                    observer.error(err);
                    observer.complete();
                }
            }
        });
        return ()=>subs.unsubscribe()
        ;
    })
);




const $2984cc88b9ef0081$export$3dea766d36a8935f = $68379df254bd8d65$export$c7187bbd1a7a9244((predicate, stream)=>new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        const subs = stream.subscribe($68379df254bd8d65$export$fbd2e1a2b7cf8f98(observer)((value)=>{
            try {
                if (predicate(value)) observer.next(value);
            } catch (err) {
                observer.error(err);
            }
        }));
        return ()=>subs.unsubscribe()
        ;
    })
);



const $73700d689dadd2aa$export$4b80e395e36b5a56 = $a0a27525818bb962$export$c3095a23b368d1f2((fn, stream)=>{
    const subs = stream.subscribe({
        next: fn,
        error: fn
    });
    return {
        unsubscribe: subs.unsubscribe.bind(subs)
    };
});




const $045d703d5486ef6d$export$3174cdbf0a0cbc84 = $68379df254bd8d65$export$c7187bbd1a7a9244((time)=>{
    let n = 0;
    return new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        const id = setInterval(()=>observer.next(++n)
        , time);
        observer.next(++n);
        return ()=>{
            observer.complete();
            clearInterval(id);
        };
    });
});




const $babdc44c7ce00a1f$export$63174c828edd6ff8 = $68379df254bd8d65$export$c7187bbd1a7a9244((eventName, element)=>{
    return new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        const handler = (event)=>observer.next(event)
        ;
        element.addEventListener(eventName, handler, true);
        return ()=>element.removeEventListener(eventName, handler, true)
        ;
    });
});




const $3008f9ade943295a$export$871de8747c9eaa88 = $68379df254bd8d65$export$c7187bbd1a7a9244((fn, stream)=>new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        const subs = stream.subscribe($68379df254bd8d65$export$fbd2e1a2b7cf8f98(observer)((value)=>{
            try {
                observer.next(fn(value));
            } catch (err) {
                observer.error(err);
            }
        }));
        return ()=>subs.unsubscribe()
        ;
    })
);




const $74dfda0eeadc7572$export$e0eaf3a86c03b2ad = $68379df254bd8d65$export$c7187bbd1a7a9244((value, stream)=>new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        const subs = stream.subscribe($68379df254bd8d65$export$fbd2e1a2b7cf8f98(observer)(()=>observer.next(value)
        ));
        return ()=>subs.unsubscribe()
        ;
    })
);




function $24e29b24ec18ec3c$export$4997ffc0176396a6(object) {
    const subs = [];
    let cache = Object.create(null);
    function dispatchChanged(target, prop) {
        for(let i = 0; i < subs.length; i++){
            const { props: props , observer: observer  } = subs[i];
            if (!props?.length || props.includes(prop)) {
                observer.next(target);
            }
        }
    }
    return new Proxy(object, {
        set (target, prop, value) {
            if (target[prop] === value) return value;
            const result = Reflect.set(target, prop, value);
            dispatchChanged(target, prop);
            return result;
        },
        get (target, prop, receiver) {
            if (prop === 'observe') /**
         * Returns an observe function that takes an optional array of props
         * to observe
         */ return (props = [])=>new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
                    const sub = {
                        props: props,
                        observer: observer
                    };
                    subs.push(sub);
                    return ()=>subs.splice(subs.indexOf(sub), 1)
                    ;
                })
            ;
            if ($77d07aef6f69d2ce$export$cb3f0f7ea9814480(target[prop])) return async function wrappedMethod() {
                const result = await target[prop]?.apply(target, arguments);
                const currentArgs = JSON.stringify(arguments);
                const lastArgs = cache[prop];
                if (currentArgs !== lastArgs) {
                    cache[prop] = currentArgs;
                    dispatchChanged(target, prop);
                }
                return result;
            };
            if ($77d07aef6f69d2ce$export$111f0b41304fc890(target[prop])) return function* wrappedMethod() {
                const generator = target[prop]?.apply(target, arguments);
                let { done: done , value: value  } = generator.next();
                while(!done){
                    ({ done: done , value: value  } = generator.next());
                    dispatchChanged(target, prop);
                    yield {
                        done: done,
                        value: value
                    };
                }
            };
            if ($77d07aef6f69d2ce$export$a9ef8c9fdb631810(target[prop])) return async function* wrappedMethod() {
                const generator = target[prop]?.apply(target, arguments);
                let { done: done , value: value  } = await generator.next();
                while(!done){
                    ({ done: done , value: value  } = await generator.next());
                    dispatchChanged(target, prop);
                    yield {
                        done: done,
                        value: value
                    };
                }
            };
            if ($77d07aef6f69d2ce$export$f6e2535fb5126e54(target[prop])) return function wrappedMethod() {
                const result = target[prop]?.apply(target, arguments);
                const currentArgs = JSON.stringify(arguments);
                const lastArgs = cache[prop];
                if (currentArgs !== lastArgs) {
                    cache[prop] = currentArgs;
                    dispatchChanged(target, prop);
                }
                return result;
            };
            if ($77d07aef6f69d2ce$export$a6cdc56e425d0d0a(target[prop])) {
                const cached = cache[prop] ?? {
                };
                let { observed: observed , original: original  } = cached;
                // The target object must have changed, resub
                if (original !== target[prop]) {
                    observed?.unsubscribe();
                    observed = undefined;
                    original = target[prop];
                }
                if (!observed) {
                    observed = $73296c0bdeea98f6$export$77cea355fa80b5f4.wrap(target[prop]);
                    observed.observe().subscribe(()=>dispatchChanged(target, prop)
                    );
                }
                return observed;
            }
            if (prop === 'clearCache') return ()=>cache = Object.create(null)
            ;
            if (prop === 'isObserved') return ()=>subs.length > 0
            ;
            return Reflect.get(target, prop, receiver);
        },
        deleteProperty (target, key) {
            if (!(key in target)) return false;
            delete target[key];
            if ($77d07aef6f69d2ce$export$a6cdc56e425d0d0a(cache[key])) {
                cache[key].observed?.unsubscribe();
                delete cache[key].observed;
                delete cache[key].original;
                delete cache[key];
            }
            dispatchChanged(target, key);
            return true;
        }
    });
}




const $9b5d65fce739a5b9$export$4950aa0f605343fb = $68379df254bd8d65$export$c7187bbd1a7a9244((...streams)=>{
    let done = 0;
    return new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        const subscriptions = streams.map((stream)=>stream.subscribe({
                next: (value)=>observer.next(value)
                ,
                error: observer.error.bind(observer),
                complete: ()=>++done === streams.length && observer.complete()
            })
        );
        return ()=>subscriptions.forEach((subs)=>subs.unsubscribe()
            )
        ;
    });
});




const $4e37af8185b84714$export$5b8affa63fc6df16 = $68379df254bd8d65$export$c7187bbd1a7a9244((fn, stream)=>new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        let done = false;
        let pending = 0;
        const subs = [];
        const initialSub = stream.subscribe({
            next: (value)=>{
                try {
                    handleNext(fn(value));
                } catch (err) {
                    observer.error(err);
                }
            },
            complete: ()=>{
                done = true;
                if (!pending) observer.complete();
            }
        });
        function handleNext(nextObs) {
            pending++;
            subs.push(nextObs.subscribe({
                next: (value)=>observer.next(value)
                ,
                complete: ()=>{
                    pending -= 1;
                    if (done && pending === 0) observer.complete();
                }
            }));
        }
        return ()=>(initialSub.unsubscribe(), subs.forEach((sub)=>sub.unsubscribe()
            ), observer.complete())
        ;
    })
);





const $62c4fc8803ef21e0$export$357523c63a2253b9 = $68379df254bd8d65$export$c7187bbd1a7a9244((key, stream)=>new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        const subs = stream.subscribe($68379df254bd8d65$export$fbd2e1a2b7cf8f98(observer)((obj)=>observer.next($fd9dc580cc166db4$export$52be3e7c3b913516(key, obj))
        ));
        return ()=>subs.unsubscribe()
        ;
    })
);




const $708bbd81e1938339$export$533b26079ad0b4b = $68379df254bd8d65$export$c7187bbd1a7a9244((reducer, initialValue, stream)=>{
    let accumulator = initialValue ?? {
    };
    return new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        const subs = stream.subscribe({
            next (value) {
                try {
                    accumulator = reducer(accumulator, value);
                } catch (err) {
                    observer.error(err);
                }
            },
            error (e) {
                observer.error(e);
            },
            complete () {
                observer.next(accumulator);
                observer.complete();
            }
        });
        return ()=>subs.unsubscribe()
        ;
    });
});





// Defaults: method 'expo' for exponential time increase, anything else for
// linear time increase.
const $7eb9071dd240358d$var$defaultConfig = {
    method: 'expo',
    delay: 100,
    retries: 3
};
const $7eb9071dd240358d$export$9369b12211e1fce4 = $68379df254bd8d65$export$c7187bbd1a7a9244((config, stream)=>{
    if ($77d07aef6f69d2ce$export$7e4aa119212bc614(config)) config = Object.assign($7eb9071dd240358d$var$defaultConfig, {
        retries: config
    });
    else config = Object.assign($7eb9071dd240358d$var$defaultConfig, config);
    const sub = [];
    return new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        $7eb9071dd240358d$var$retryInner(stream, observer, sub, config, 1);
        return ()=>sub.map((s)=>s.unsubscribe()
            )
        ;
    });
});
function $7eb9071dd240358d$var$retryInner(stream, observer, sub, config, i) {
    sub.pop()?.unsubscribe();
    sub.push(stream.subscribe({
        next: (value)=>observer.next(value)
        ,
        error: ()=>{
            if (i <= config.retries) return setTimeout(()=>$7eb9071dd240358d$var$retryInner(stream, observer, sub, config, i + 1)
            , config.method === 'expo' ? config.delay * Math.pow(i, 2) : config.delay * i);
            return observer.complete();
        },
        complete: ()=>observer.complete()
    }));
}




const $6fe08750fda2500d$export$955fc4a6c4be454d = $68379df254bd8d65$export$c7187bbd1a7a9244((count, stream)=>{
    let skipped = 0;
    return new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        const subs = stream.subscribe($68379df254bd8d65$export$fbd2e1a2b7cf8f98(observer)((value)=>{
            if ((skipped++) >= count) observer.next(value);
        }));
        return ()=>subs.unsubscribe()
        ;
    });
});




const $5632623b19485d90$export$8f47889efeb7c68c = 100;
const $5632623b19485d90$export$ed80d9de1d9df928 = (bufferSize = $5632623b19485d90$export$8f47889efeb7c68c, stream)=>{
    const store = {
        values: [],
        errors: [],
        wantsComplete: false,
        observers: [],
        addObserver (o) {
            this.observers.push(o);
        },
        removeObserver (o) {
            this.observers = this.observers.filter((ob)=>ob !== o
            );
        }
    };
    const subs = stream.subscribe({
        next: (value)=>{
            if (store.values.length >= bufferSize) store.values.shift();
            store.values.push(value);
            queueMicrotask(()=>broadcast()
            );
        },
        error: (error)=>{
            if (store.errors.length >= bufferSize) store.errors.shift();
            store.errors.push(error);
        },
        complete: ()=>store.wantsComplete = true
    });
    function broadcast() {
        const { values: values , errors: errors , observers: observers , wantsComplete: wantsComplete  } = store;
        if (errors.length) {
            observers.forEach((observer)=>{
                errors.forEach((value)=>{
                    observer.error(value);
                });
            });
            errors.length = 0;
        } else {
            observers.forEach((observer)=>{
                values.forEach((value)=>{
                    observer.next(value);
                });
            });
            values.length = 0;
        }
        if (wantsComplete) {
            observers.forEach((observer)=>observer.complete()
            );
            subs.unsubscribe();
        }
    }
    return $68379df254bd8d65$export$c7187bbd1a7a9244(()=>new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
            store.addObserver(observer);
            return ()=>{
                store.removeObserver(observer);
                observer.complete();
                if (store.observers.length === 0) subs.unsubscribe();
            };
        })
    )();
};




const $4300a049feedd341$export$1a62af6d099a1e7c = $68379df254bd8d65$export$c7187bbd1a7a9244((stream)=>new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        let done = false;
        let subs = stream.subscribe({
            next: (nextStream)=>queueMicrotask(()=>{
                    if (!done) {
                        subs.unsubscribe();
                        subs = nextStream.subscribe({
                            next: (value)=>observer.next(value)
                            ,
                            complete: ()=>observer.complete()
                        });
                    }
                })
        });
        return ()=>{
            done = true;
            subs.unsubscribe();
        };
    })
);




const $480770cf9bfd508e$export$c49781290a0a7ce3 = ()=>{
    const subs = [];
    return new Proxy({
    }, {
        get (_, prop) {
            if ([
                'error',
                'next',
                'complete'
            ].includes(prop)) return (...args)=>subs.forEach((observer)=>observer[prop](...args)
                )
            ;
            if (prop === 'subscribe') return (observer)=>{
                if ($77d07aef6f69d2ce$export$f6e2535fb5126e54(observer)) observer = {
                    next: observer,
                    error: observer,
                    complete: observer
                };
                subs.push(observer);
                return {
                    unsubscribe: ()=>subs.slice(subs.indexOf(observer), 1)
                };
            };
            return new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
                subs.push({
                    next: observer.next.bind(observer),
                    error: observer.error.bind(observer),
                    complete: observer.complete.bind(observer)
                });
                return ()=>subs.slice(subs.indexOf(observer), 1)
                ;
            })[prop];
        }
    });
};




const $63d411a1f0f5d390$export$b7df5d561049483a = $68379df254bd8d65$export$c7187bbd1a7a9244((numberToTake, stream)=>{
    let taken = 0;
    return new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        const subs = stream.subscribe($68379df254bd8d65$export$fbd2e1a2b7cf8f98(observer)((value)=>{
            if ((taken++) >= numberToTake) return observer.complete();
            return observer.next(value);
        }));
        return ()=>subs.unsubscribe()
        ;
    });
});




const $63b24c46c626e8be$export$de363e709c412c8a = $68379df254bd8d65$export$c7187bbd1a7a9244((limit, stream)=>{
    let lastRan = 0;
    let lastInterval = 0;
    return new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        const subs = stream.subscribe($68379df254bd8d65$export$fbd2e1a2b7cf8f98(observer)((value)=>{
            if (!lastRan) {
                observer.next(value);
                lastRan = Date.now();
            } else {
                clearTimeout(lastInterval);
                lastInterval = setTimeout(()=>{
                    if (Date.now() - lastRan >= limit) {
                        observer.next(value);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        }));
        return ()=>subs.unsubscribe()
        ;
    });
});




const $170a8d1ff933b765$export$a40009bd2c363351 = $68379df254bd8d65$export$c7187bbd1a7a9244((comparator, stream)=>new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        const subs = stream.subscribe({
            next: (value)=>{
                try {
                    if (comparator(value)) observer.complete();
                } catch (err) {
                    observer.error(err);
                }
                observer.next(value);
            }
        });
        return ()=>subs.unsubscribe()
        ;
    })
);







const $5c3849ba7478ebbf$export$8901015135f2fb22 = $68379df254bd8d65$export$c7187bbd1a7a9244((...streams)=>{
    let zipper = (...args)=>args
    ;
    if ($77d07aef6f69d2ce$export$f6e2535fb5126e54($ae35ae7cbce3cb3b$export$5fd5031fecdacec3(streams))) zipper = streams.shift();
    let done = 0;
    const store = Object.fromEntries(streams.map((_, i)=>[
            i,
            []
        ]
    ));
    const buffers = $fd9dc580cc166db4$export$68c286be0e7e55b7(store);
    function pushValue(event, observer) {
        buffers[event.n].unshift(event.value);
        if (buffers.every((buffer)=>buffer.length > 0
        )) try {
            observer.next(zipper(...buffers.map((buffer)=>buffer.pop()
            )));
        } catch (err) {
            observer.error(err);
        }
    }
    return new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
        const subscriptions = streams.map((stream, i)=>stream.subscribe({
                next: (value)=>pushValue({
                        n: i,
                        value: value
                    }, observer)
                ,
                error: observer.error.bind(observer),
                complete: ()=>++done === streams.length && observer.complete()
            })
        );
        return ()=>subscriptions.forEach((subs)=>subs.unsubscribe()
            )
        ;
    });
});



const { Observable: $73296c0bdeea98f6$export$77cea355fa80b5f4  } = globalThis;
const $73296c0bdeea98f6$export$a7c40509ff863847 = /* #__PURE__ */ (()=>typeof Symbol === 'function' && Symbol.observable || '@@observable'
)();
const $73296c0bdeea98f6$var$additionalProperties = {
    fromEvent: $68379df254bd8d65$export$c7187bbd1a7a9244((emitter, event1, handler1)=>new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
            const group = new Map([
                [
                    event1,
                    (...args)=>observer.next(handler1(...args))
                ],
                [
                    'error',
                    observer.error.bind(observer)
                ],
                [
                    'end',
                    observer.complete.bind(observer)
                ], 
            ]);
            $fd9dc580cc166db4$export$3e9f948b41964866(group).forEach(([event, handler])=>emitter.on(event, handler)
            );
            return ()=>$fd9dc580cc166db4$export$3e9f948b41964866(group).forEach(([event, handler])=>emitter.removeListener(event, handler)
                )
            ;
        })
    ),
    fromGenerator: $68379df254bd8d65$export$c7187bbd1a7a9244((generator)=>new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
            $f3Ts0$Readable.from(generator()).on('data', observer.next.bind(observer)).on('end', observer.complete.bind(observer)).on('error', observer.error.bind(observer));
        })
    ),
    fromPromise: $68379df254bd8d65$export$c7187bbd1a7a9244((promise)=>new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
            promise.then((value)=>observer.next(value)
            ).catch((err)=>observer.error(err)
            ).finally(()=>observer.complete()
            );
        })
    ),
    fromStream: $68379df254bd8d65$export$c7187bbd1a7a9244((stream)=>new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
            stream.on('data', observer.next.bind(observer));
            stream.on('end', observer.complete.bind(observer));
            stream.on('error', observer.error.bind(observer));
        })
    ),
    combine: $df35fb34eb1c0945$export$1be1fc439b849fdf,
    interval: $045d703d5486ef6d$export$3174cdbf0a0cbc84,
    listen: $babdc44c7ce00a1f$export$63174c828edd6ff8,
    merge: $9b5d65fce739a5b9$export$4950aa0f605343fb,
    subject: $480770cf9bfd508e$export$c49781290a0a7ce3,
    wrap: $24e29b24ec18ec3c$export$4997ffc0176396a6
};
for (const [prop, value1] of Object.entries($73296c0bdeea98f6$var$additionalProperties))if (!$73296c0bdeea98f6$export$77cea355fa80b5f4[prop]) Object.defineProperty($73296c0bdeea98f6$export$77cea355fa80b5f4, prop, {
    value: value1,
    enumerable: false,
    writable: false,
    configurable: false
});
const $73296c0bdeea98f6$export$9a935b903d7a019b = {
    filter (predicate) {
        return $2984cc88b9ef0081$export$3dea766d36a8935f(predicate, this);
    },
    map (fn) {
        return $3008f9ade943295a$export$871de8747c9eaa88(fn, this);
    },
    buffer (count) {
        return $dd337f375f3dc55e$export$ab1029bcae9ddb4a(count, this);
    },
    skip (count) {
        return $6fe08750fda2500d$export$955fc4a6c4be454d(count, this);
    },
    take (numberToTake) {
        return $63d411a1f0f5d390$export$b7df5d561049483a(numberToTake, this);
    },
    reduce (reducer, initialValue = {
    }) {
        return $708bbd81e1938339$export$533b26079ad0b4b(reducer, initialValue, this);
    },
    mapTo (value) {
        return $74dfda0eeadc7572$export$e0eaf3a86c03b2ad(value, this);
    },
    throttle (limit) {
        return $63b24c46c626e8be$export$de363e709c412c8a(limit, this);
    },
    forEach (fn) {
        return $73700d689dadd2aa$export$4b80e395e36b5a56(fn, this);
    },
    effect (fn) {
        return $aa6c012ebab8baaf$export$dc573d8a6576cdb3(fn, this);
    },
    pick (key) {
        return $62c4fc8803ef21e0$export$357523c63a2253b9(key, this);
    },
    debounce (limit) {
        return $eee5aafb1721df8b$export$61fc7d43ac8f84b0(limit, this);
    },
    catch (handler) {
        return $561d6b2f2c3ef0b1$export$3dede90624df3ba9(handler, this);
    },
    concat (...streams) {
        return $580a3429826ec134$export$ee1b3e54f0441b22(this, ...streams);
    },
    combine (stream) {
        return $df35fb34eb1c0945$export$1be1fc439b849fdf(this, stream);
    },
    merge (stream) {
        return $9b5d65fce739a5b9$export$4950aa0f605343fb(this, stream);
    },
    share (bufferSize = $5632623b19485d90$export$8f47889efeb7c68c) {
        return $5632623b19485d90$export$ed80d9de1d9df928(bufferSize, this);
    },
    switch () {
        return $4300a049feedd341$export$1a62af6d099a1e7c(this);
    },
    flatMap (fn) {
        return $4e37af8185b84714$export$5b8affa63fc6df16(fn, this);
    },
    distinct (fn = (x)=>x
    ) {
        return $4f4315ba055523b2$export$983a3b5fb2f7202e(fn, this);
    },
    until (fn) {
        return $170a8d1ff933b765$export$a40009bd2c363351(fn, this);
    },
    zip (zipper, ...streams) {
        if (!$77d07aef6f69d2ce$export$f6e2535fb5126e54(zipper)) return $5c3849ba7478ebbf$export$8901015135f2fb22(this, zipper, ...streams);
        return $5c3849ba7478ebbf$export$8901015135f2fb22(zipper, this, ...streams);
    },
    retry (config) {
        return $7eb9071dd240358d$export$9369b12211e1fce4(config, this);
    },
    finally (fn) {
        return $a06ae5872f3d77b1$export$c4c7e81705f70958(fn, this);
    },
    subject () {
        return $480770cf9bfd508e$export$c49781290a0a7ce3();
    }
};
Object.assign($73296c0bdeea98f6$export$77cea355fa80b5f4.prototype, $73296c0bdeea98f6$export$9a935b903d7a019b);





const $d9d8bb93d5f86a8b$var$composeAsync2 = (f, g)=>async function innerComposeAsync(...args) {
        return await f.call(this, await g.apply(this, args));
    }
;
const $d9d8bb93d5f86a8b$export$9dbe56a5aba4f4b4 = (...fns)=>fns.reduce($d9d8bb93d5f86a8b$var$composeAsync2)
;
const $d9d8bb93d5f86a8b$export$507da1b08fb8a738 = (...fns)=>fns.reduceRight($d9d8bb93d5f86a8b$var$composeAsync2)
;
const $d9d8bb93d5f86a8b$export$a939ddd3409bd57a = async (f, a)=>await Promise.all(a.map(f))
;
const $d9d8bb93d5f86a8b$export$b720f6c8e101da88 = async (f, init, a)=>await a.reduce((p, val)=>p.then(()=>f(val)
        )
    , Promise.resolve(init))
;
const $d9d8bb93d5f86a8b$export$30ee5c6810ce1ce2 = async (f, a)=>await $d9d8bb93d5f86a8b$export$a939ddd3409bd57a(f, a).then((bools)=>a.filter((_, i)=>Boolean(bools[i])
        )
    )
;



const $6e79c5d4246ed8f1$export$9663ddc1cf085b32 = $a0a27525818bb962$export$c3095a23b368d1f2((a, b)=>a === b
);
const $6e79c5d4246ed8f1$export$e16d8520af44a096 = $a0a27525818bb962$export$c3095a23b368d1f2((x, y)=>x + y
);
const $6e79c5d4246ed8f1$export$ecceddf365c72028 = $a0a27525818bb962$export$c3095a23b368d1f2((x, y)=>y + x
);
const $6e79c5d4246ed8f1$export$4e2d2ead65e5f7e3 = $a0a27525818bb962$export$c3095a23b368d1f2((x, y)=>x - y
);
const $6e79c5d4246ed8f1$export$4ed4137bff330a54 = $a0a27525818bb962$export$c3095a23b368d1f2((x, y)=>y - x
);
const $6e79c5d4246ed8f1$export$2060d2db72cce88f = $a0a27525818bb962$export$c3095a23b368d1f2((x, y)=>x * y
);
const $6e79c5d4246ed8f1$export$cd007d971a5a2143 = $a0a27525818bb962$export$c3095a23b368d1f2((x, y)=>x / y
);
const $6e79c5d4246ed8f1$export$7e7fa3dcb6d62f31 = $a0a27525818bb962$export$c3095a23b368d1f2((x, y)=>y / x
);
const $6e79c5d4246ed8f1$export$7978a6ddf29f4374 = (n)=>(x)=>Math.round(x * Math.pow(10, n)) / Math.pow(10, n)
;
const $6e79c5d4246ed8f1$export$9c297f60e22e3389 = (base, power)=>power === 0 ? 1 : power & 1 ? base * $6e79c5d4246ed8f1$export$9c297f60e22e3389(base, power - 1) : $6e79c5d4246ed8f1$export$9c297f60e22e3389(base * base, power >> 1)
;




const $99b162b43be264d7$export$4659b591c19bdf3d = $a0a27525818bb962$export$c3095a23b368d1f2((re, s)=>re.test(s)
);
const $99b162b43be264d7$export$77ad94ebf1c2b9ed = $a0a27525818bb962$export$c3095a23b368d1f2((re, rpl, s)=>s.replace(re, rpl)
);
const $99b162b43be264d7$export$65980d18b75784e2 = $a0a27525818bb962$export$c3095a23b368d1f2((sep, s)=>s.split(sep)
);
const $99b162b43be264d7$export$84b9399c77df0edf = (s)=>s.toLowerCase()
;
const $99b162b43be264d7$export$d80c591a9e16646 = (s)=>s.toUpperCase()
;
const $99b162b43be264d7$export$68159836694e22c1 = $a0a27525818bb962$export$c3095a23b368d1f2((s1, s2)=>`${s1}${s2}`
);
const $99b162b43be264d7$export$10d8903dec122b9d = $a0a27525818bb962$export$c3095a23b368d1f2((s1, s2)=>`${s2}${s1}`
);
const $99b162b43be264d7$export$36cf564d487b5178 = $a0a27525818bb962$export$c3095a23b368d1f2((x, reps, fill)=>String.prototype.padStart.call(x, reps, fill)
);
const $99b162b43be264d7$export$23a07ddfce9fad49 = $a0a27525818bb962$export$c3095a23b368d1f2((x, reps, fill)=>String.prototype.padEnd.call(x, reps, fill)
);


function $32b5ef271b1e1a46$export$cf1a5a0c68d6e80b(behaviour) {
    const instanceKeys = Reflect.ownKeys(behaviour);
    return function append(clazz) {
        for (const prop of instanceKeys){
            if (clazz.prototype[prop]) {
                const overriddenMethodFunction = clazz.prototype[prop];
                Object.defineProperty(clazz.prototype, prop, {
                    value (...args) {
                        const returnedValue = overriddenMethodFunction.apply(this, args);
                        behaviour[prop].apply(this, args);
                        return returnedValue;
                    },
                    writable: true
                });
            } else throw new Error(`Attempt to override non-existant method ${prop}`);
        }
        return clazz;
    };
}


function $4b09b9c34303257d$export$530764fd6bf3e88b(behaviour) {
    const instanceKeys = Reflect.ownKeys(behaviour);
    return function prepend(clazz) {
        for (const prop of instanceKeys){
            if (clazz.prototype[prop]) {
                const overriddenMethodFunction = clazz.prototype[prop];
                Object.defineProperty(clazz.prototype, prop, {
                    value (...args) {
                        const prependValue = behaviour[prop].apply(this, args);
                        if (prependValue === undefined || !!prependValue) return overriddenMethodFunction.apply(this, args);
                        return void 0;
                    },
                    writable: true
                });
            } else throw new Error(`Attempt to override non-existant method ${prop}`);
        }
        return clazz;
    };
}


function $e96247e1f8aae188$export$487514b351402d1b(behaviour) {
    const instanceKeys = Reflect.ownKeys(behaviour);
    return function define(clazz) {
        for (const prop of instanceKeys){
            if (!clazz.prototype[prop]) Object.defineProperty(clazz.prototype, prop, {
                value: behaviour[prop],
                writable: true
            });
            else throw new Error(`Illegal attempt to override ${prop}, which already exists.`);
        }
    };
}


function $9a821ebd6428d862$export$f6afc91249163ff2(behaviour) {
    const instanceKeys = Reflect.ownKeys(behaviour);
    return function override(clazz) {
        for (const prop of instanceKeys){
            if (clazz.prototype[prop]) {
                const overriddenMethodFunction = clazz.prototype[prop];
                Object.defineProperty(clazz.prototype, prop, {
                    value (...args) {
                        return behaviour[prop].call(this, overriddenMethodFunction.bind(this, ...args));
                    },
                    writable: true
                });
            } else throw new Error(`Attempt to override non-existant method${prop}`);
        }
        return clazz;
    };
}


const $e3473fb7a7ac863f$export$742acabee3dd6465 = (...fns)=>function after(target, name, descriptor) {
        const method = descriptor.value;
        descriptor.value = function withAfter(...args) {
            const value = method.apply(this, args);
            for (const fn of fns)fn.apply(this, args);
            return value;
        };
    }
;
const $e3473fb7a7ac863f$export$1c4c1e3098bf5ebe = (...fns)=>function before(target, name, descriptor) {
        const method = descriptor.value;
        descriptor.value = function withBefore(...args) {
            for (const fn of fns)fn.apply(this, args);
            return method.apply(this, args);
        };
    }
;
const $e3473fb7a7ac863f$export$c597e4e4259c9301 = (...fns)=>function provided(target, name, descriptor) {
        const method = descriptor.value;
        descriptor.value = function withProvided(...args) {
            for (const fn of fns)if (!fn.apply(this, args)) return void 0;
            return method.apply(this, args);
        };
    }
;
const $e3473fb7a7ac863f$export$6f0673371501d6b6 = (...fns)=>function unless(target, name, descriptor) {
        const method = descriptor.value;
        descriptor.value = function withUnless(...args) {
            for (const fn of fns)if (fn.apply(this, args)) return void 0;
            return method.apply(this, args);
        };
    }
;
const $e3473fb7a7ac863f$export$4636581650fd0e55 = (decorator)=>function wrapWith(target, name, descriptor) {
        descriptor.value = decorator(descriptor.value);
    }
;
const $e3473fb7a7ac863f$export$a253cce80efe6b1c = (behaviour, ...methodNames)=>(clazz)=>{
        for (const methodName of methodNames)Object.defineProperty(clazz.prototype, methodName, {
            value: behaviour(clazz.prototype[methodName]),
            writable: true
        });
        return clazz;
    }
;
const $e3473fb7a7ac863f$export$8fd4d608a3485fcf = (behaviour, ...methodNames)=>(clazz)=>{
        for (const methodName of methodNames){
            const method = clazz.prototype[methodName];
            Object.defineProperty(clazz.prototype, methodName, {
                value (...args) {
                    behaviour.apply(this, args);
                    return method.apply(this, args);
                },
                writable: true
            });
        }
        return clazz;
    }
;
const $e3473fb7a7ac863f$export$c7fd1518a7cbf3dd = (behaviour, ...methodNames)=>(clazz)=>{
        for (const methodName of methodNames){
            const method = clazz.prototype[methodName];
            Object.defineProperty(clazz.prototype, methodName, {
                value (...args) {
                    const returnedValue = method.apply(this, args);
                    behaviour.apply(this, args);
                    return returnedValue;
                },
                writable: true
            });
        }
        return clazz;
    }
;


function $86ec25492d6e4c28$export$67b2770bcd4c0853(behaviour, sharedBehaviour = {
}) {
    const instanceKeys = Reflect.ownKeys(behaviour);
    const sharedKeys = Reflect.ownKeys(sharedBehaviour);
    const typeTag = Symbol('isA');
    function mixin(target) {
        for (const property of instanceKeys)if (!target[property]) Object.defineProperty(target, property, {
            value: behaviour[property],
            writable: true
        });
        target[typeTag] = true;
        return target;
    }
    for (const property1 of sharedKeys)Object.defineProperty(mixin, property1, {
        value: sharedBehaviour[property1],
        enumerable: Object.prototype.propertyIsEnumerable.call(sharedBehaviour, property1)
    });
    Object.defineProperty(mixin, Symbol.hasInstance, {
        value: (instance)=>!!instance[typeTag]
    });
    return mixin;
}


const $49104b3675bca96a$export$53ebe40b44acc773 = (behaviour, sharedBehaviour = {
})=>{
    const instanceKeys = Reflect.ownKeys(behaviour);
    const sharedKeys = Reflect.ownKeys(sharedBehaviour);
    const typeTag = Symbol('isA');
    function mixin(classs) {
        for (const property of instanceKeys)if (!classs.prototype[property]) Object.defineProperty(classs.prototype, property, {
            value: behaviour[property],
            writable: true
        });
        classs.prototype[typeTag] = true;
        return classs;
    }
    for (const property1 of sharedKeys)Object.defineProperty(mixin, property1, {
        value: sharedBehaviour[property1],
        enumerable: Object.prototype.propertyIsEnumerable.call(sharedBehaviour, property1)
    });
    Object.defineProperty(mixin, Symbol.hasInstance, {
        value: (instance)=>!!instance[typeTag]
    });
    return mixin;
};



class $99d0e6444599337d$export$2191b9da168c6cf0 extends Error {
    constructor(message, errors){
        super(message);
        this.errors = errors;
        Object.setPrototypeOf(this, $99d0e6444599337d$export$2191b9da168c6cf0.prototype);
    }
    get messages() {
        return this.errors.map((e)=>e.message
        );
    }
}
const $99d0e6444599337d$export$30c1bf1f6ea900a5 = $a0a27525818bb962$export$c3095a23b368d1f2((validator, selector, onSucces, onFailure)=>function validate(...args) {
        if (!validator(selector.apply(this, args))) return onFailure(new $99d0e6444599337d$export$2191b9da168c6cf0('Validation failed', validator.errors));
        return onSucces.apply(this, args);
    }
);



const $1077db733ac57492$export$8f64980a2e163c7f = (behaviour)=>(superclass)=>$49104b3675bca96a$export$53ebe40b44acc773(behaviour)(class extends superclass {
        })
;
const $1077db733ac57492$export$6e6fbaf3ea747b50 = (c)=>(...args)=>new c(...args)
;




function $e74beeb8ffe6e42a$export$8bf7aba4a9e09055(err) {
    throw err;
}
function $e74beeb8ffe6e42a$export$6671091435002ea2(str) {
    throw new TypeError(str);
}


var _key;
class $55ccf17b11417d57$export$ad3bd6e4e1ec5d06 {
    #value;
    constructor(v){
        this[_key] = 'Maybe';
        this.#value = v;
    }
    get() {
        return this.value ?? $e74beeb8ffe6e42a$export$6671091435002ea2('Unable to get from a Maybe#Nothing');
    }
    getOrElse(defaultValue) {
        return this.value ?? defaultValue;
    }
    getOrElseThrow(error) {
        return this.value ?? $e74beeb8ffe6e42a$export$8bf7aba4a9e09055(error);
    }
    get value() {
        return this.#value;
    }
    static of(v1) {
        return v1 == null ? new $55ccf17b11417d57$export$bebe9059409a0d04(v1) : new $55ccf17b11417d57$export$8a67b48435b5d073(v1);
    }
    static fromEmpty(v2) {
        return $55ccf17b11417d57$export$ad3bd6e4e1ec5d06.of(v2).map((x)=>x.length === 0 ? null : x
        );
    }
    [(_key = Symbol.toStringTag, Symbol.toPrimitive)](hint) {
        switch(hint){
            case 'string':
                return this.toString();
            case 'number':
            default:
                return this.get();
        }
    }
    *[Symbol.iterator]() {
        yield this.isNothing ? new $55ccf17b11417d57$export$bebe9059409a0d04(this.#value) : undefined;
        yield this.isJust ? new $55ccf17b11417d57$export$8a67b48435b5d073(this.#value) : undefined;
    }
}
class $55ccf17b11417d57$export$8a67b48435b5d073 extends $55ccf17b11417d57$export$ad3bd6e4e1ec5d06 {
    get isJust() {
        return true;
    }
    get isNothing() {
        return false;
    }
    fold(fn = $a0a27525818bb962$export$f0954fd7d5368655) {
        return fn(this.value);
    }
    filter(fn1 = $a0a27525818bb962$export$f0954fd7d5368655) {
        return fn1(this.value) ? new $55ccf17b11417d57$export$8a67b48435b5d073(this.value) : new $55ccf17b11417d57$export$bebe9059409a0d04();
    }
    map(fn2) {
        return $55ccf17b11417d57$export$ad3bd6e4e1ec5d06.of(fn2(this.value));
    }
    flatMap(fn3) {
        return $55ccf17b11417d57$export$ad3bd6e4e1ec5d06.of(fn3(this.value).merge());
    }
    ap(Ma) {
        return Ma.isNothing ? Ma : $77d07aef6f69d2ce$export$f6e2535fb5126e54(this.value) ? $55ccf17b11417d57$export$ad3bd6e4e1ec5d06.of($77d07aef6f69d2ce$export$f6e2535fb5126e54(Ma.merge()) ? Ma.merge().call(Ma, this.value) : this.value(Ma.merge())) : $55ccf17b11417d57$export$ad3bd6e4e1ec5d06.of(Ma.merge().call(Ma, this.value));
    }
    merge() {
        return this.value;
    }
    toString() {
        return `Maybe#Just (${this.value})`;
    }
    toJSON() {
        return {
            type: 'Maybe#Just',
            value: this.value
        };
    }
}
class $55ccf17b11417d57$export$bebe9059409a0d04 extends $55ccf17b11417d57$export$ad3bd6e4e1ec5d06 {
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
        return `Maybe#Nothing ()`;
    }
    toJSON() {
        return {
            type: 'Maybe#Nothing',
            value: {
            }
        };
    }
}




class $bef356c6dea1b6d9$export$8fdcabde73f49165 {
    #value;
    constructor(v){
        this.#value = v;
    }
    get value() {
        return this.#value;
    }
    static of(v1, error = 'Null argument provided') {
        return v1 == null ? new $bef356c6dea1b6d9$export$5ebc9a4af3ac0850(error) : new $bef356c6dea1b6d9$export$ffa3d9fee6fd705a(v1);
    }
    static fromEmpty(a) {
        return $bef356c6dea1b6d9$export$8fdcabde73f49165.of(a).map((x)=>x.length === 0 ? null : x
        );
    }
    static fromPromise(p) {
        return p.then((result)=>new $bef356c6dea1b6d9$export$ffa3d9fee6fd705a(result)
        ).catch((err)=>new $bef356c6dea1b6d9$export$5ebc9a4af3ac0850(err.message)
        );
    }
    [Symbol.toPrimitive](hint) {
        switch(hint){
            case 'string':
                return this.toString();
            case 'number':
            default:
                return this.get();
        }
    }
    *[Symbol.iterator]() {
        yield this.isFailure ? new $bef356c6dea1b6d9$export$5ebc9a4af3ac0850(this.#value) : undefined;
        yield this.isSuccess ? new $bef356c6dea1b6d9$export$ffa3d9fee6fd705a(this.#value) : undefined;
    }
}
class $bef356c6dea1b6d9$export$5ebc9a4af3ac0850 extends $bef356c6dea1b6d9$export$8fdcabde73f49165 {
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
        $e74beeb8ffe6e42a$export$6671091435002ea2('Unable to get from a Result#Failure');
    }
    merge() {
        $e74beeb8ffe6e42a$export$6671091435002ea2('Unable to merge from a Result#Failure');
    }
    getOrElse(defaultValue) {
        return defaultValue;
    }
    getOrElseThrow() {
        throw new Error(this.value);
    }
    toString() {
        return `Result#Failure (${this.value})`;
    }
    toJSON() {
        return {
            type: 'Result#Failure',
            value: this.value
        };
    }
}
class $bef356c6dea1b6d9$export$ffa3d9fee6fd705a extends $bef356c6dea1b6d9$export$8fdcabde73f49165 {
    get isSuccess() {
        return true;
    }
    get isFailure() {
        return false;
    }
    map(fn) {
        return $bef356c6dea1b6d9$export$8fdcabde73f49165.of(fn(this.value));
    }
    flatMap(fn1) {
        return $bef356c6dea1b6d9$export$8fdcabde73f49165.of(fn1(this.value).merge());
    }
    ap(Rs) {
        return Rs.isFailure ? Rs : $77d07aef6f69d2ce$export$f6e2535fb5126e54(this.value) ? $bef356c6dea1b6d9$export$8fdcabde73f49165.of($77d07aef6f69d2ce$export$f6e2535fb5126e54(Rs.merge()) ? Rs.merge().call(Rs, this.value) : this.value(Rs.merge())) : $bef356c6dea1b6d9$export$8fdcabde73f49165.of(Rs.merge().call(Rs, this.value));
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
        return `Result#Success (${this.value})`;
    }
    toJSON() {
        return {
            type: 'Result#Success',
            value: this.value
        };
    }
}



class $cd856c97e400f0e3$export$fa957d01b0310fd7 {
    constructor(fn, msg){
        try {
            return new $bef356c6dea1b6d9$export$ffa3d9fee6fd705a(fn());
        } catch (e) {
            return new $bef356c6dea1b6d9$export$5ebc9a4af3ac0850(msg || e.message);
        }
    }
    static of(fn1, msg1) {
        return new $cd856c97e400f0e3$export$fa957d01b0310fd7(fn1, msg1);
    }
}
class $cd856c97e400f0e3$export$17de313a76857e4a {
    constructor(){
        throw new Error('Must use static method of');
    }
    static async of(fn2, msg2) {
        try {
            const result = await fn2();
            return new $bef356c6dea1b6d9$export$ffa3d9fee6fd705a(result);
        } catch (e) {
            return new $bef356c6dea1b6d9$export$5ebc9a4af3ac0850(msg2 || e.message);
        }
    }
}




var _key, _key1;
class $8d3d6d5ace7c4fdc$export$8f8422ac5947a789 {
    constructor(fn3){
        this[_key] = 'IO';
        this.unsafePerformIO = fn3;
    }
    map(fn1) {
        return new $8d3d6d5ace7c4fdc$export$8f8422ac5947a789($a0a27525818bb962$export$f672e0b6f7222cd7(fn1, this.unsafePerformIO));
    }
    flatMap(fn2) {
        return this.map(fn2).merge();
    }
    ap(f) {
        return this.flatMap((fn)=>f.map(fn)
        );
    }
    merge() {
        return new $8d3d6d5ace7c4fdc$export$8f8422ac5947a789(()=>this.unsafePerformIO().unsafePerformIO()
        );
    }
    toString() {
        return `IO#(${this.unsafePerformIO.name})`;
    }
    toJSON() {
        return {
            type: 'IO',
            value: this.unsafePerformIO
        };
    }
    static of(x) {
        return new $8d3d6d5ace7c4fdc$export$8f8422ac5947a789(()=>x
        );
    }
}
_key = Symbol.toStringTag;
class $8d3d6d5ace7c4fdc$export$d8552d785efb2cb8 {
    constructor(fn){
        this[_key1] = 'IOAsync';
        this.unsafePerformIO = fn;
    }
    async map(fn4) {
        return new $8d3d6d5ace7c4fdc$export$8f8422ac5947a789($d9d8bb93d5f86a8b$export$9dbe56a5aba4f4b4(fn4, this.unsafePerformIO));
    }
    async flatMap(fn5) {
        return await this.map(fn5).merge();
    }
    async merge() {
        return new $8d3d6d5ace7c4fdc$export$d8552d785efb2cb8(async ()=>await this.unsafePerformIO().unsafePerformIO()
        );
    }
    toString() {
        return `IOAsync#(${this.unsafePerformIO.name})`;
    }
    toJSON() {
        return {
            type: 'IOAsync',
            value: this.unsafePerformIO
        };
    }
    static of(fn6) {
        return new $8d3d6d5ace7c4fdc$export$d8552d785efb2cb8(fn6);
    }
}
_key1 = Symbol.toStringTag;


var _key, _key1, _key2;
class $fae46c4c04415224$export$d63d7cff08fe4dc9 {
    #left;
    #right;
    constructor(left, right){
        this[_key] = 'Pair';
        this.#left = left;
        this.#right = right;
    }
    get left() {
        return this.#left;
    }
    get right() {
        return this.#right;
    }
    get() {
        return {
            left: this.#left,
            right: this.#right
        };
    }
    map(fn) {
        return new $fae46c4c04415224$export$d63d7cff08fe4dc9(fn(this.#left), fn(this.#right));
    }
    flatMap(fn1) {
        return new $fae46c4c04415224$export$d63d7cff08fe4dc9(...fn1(this.#left, this.#right));
    }
    toString() {
        return `Pair {${this.#left}, ${this.#right}}`;
    }
    toJSON() {
        return {
            type: 'Pair',
            value: this.get()
        };
    }
    *[(_key = Symbol.toStringTag, Symbol.iterator)]() {
        yield this.#left;
        yield this.#right;
    }
    static of(left1, right1) {
        return new $fae46c4c04415224$export$d63d7cff08fe4dc9(left1, right1);
    }
    static eq(pairA, pairB) {
        return pairA.left === pairB.left && pairA.right === pairB.right;
    }
}
class $fae46c4c04415224$export$cb55c7e8798604bb {
    #left;
    #middle;
    #right;
    constructor(left2, middle, right2){
        this[_key1] = 'Triple';
        this.#left = left2;
        this.#middle = middle;
        this.#right = right2;
    }
    get left() {
        return this.#left;
    }
    get middle() {
        return this.#middle;
    }
    get right() {
        return this.#right;
    }
    get() {
        return {
            left: this.#left,
            middle: this.#middle,
            right: this.#right
        };
    }
    map(fn2) {
        return new $fae46c4c04415224$export$cb55c7e8798604bb(fn2(this.#left), fn2(this.#middle), fn2(this.#right));
    }
    flatMap(fn3) {
        return new $fae46c4c04415224$export$cb55c7e8798604bb(...fn3(this.#left, this.#middle, this.#right));
    }
    toString() {
        return `Triple {${this.#left}, ${this.#middle}, ${this.#right}}`;
    }
    toJSON() {
        return {
            type: 'Triple',
            value: this.get()
        };
    }
    *[(_key1 = Symbol.toStringTag, Symbol.iterator)]() {
        yield this.#left;
        yield this.#middle;
        yield this.#right;
    }
    static of(left3, middle1, right3) {
        return new $fae46c4c04415224$export$cb55c7e8798604bb(left3, middle1, right3);
    }
    static eq(tripleA, tripleB) {
        return tripleA.left === tripleB.left && tripleA.middle === tripleB.middle && tripleA.right === tripleB.right;
    }
}
class $fae46c4c04415224$export$deb82508dd66d288 {
    #types = new Set();
    constructor(types){
        this[_key2] = 'Enum';
        types.forEach((type)=>this.#types.add(type)
        );
    }
    has(type) {
        return this.#types.has(type);
    }
    toString() {
        return `Enum [${[
            ...this.#types
        ].join(', ')}]`;
    }
    toJSON() {
        return {
            type: 'Enum',
            value: [
                ...this.#types
            ]
        };
    }
    [(_key2 = Symbol.toStringTag, Symbol.iterator)]() {
        return this.#types[Symbol.iterator];
    }
    static of(...types1) {
        return new $fae46c4c04415224$export$deb82508dd66d288(types1);
    }
}


/* eslint no-magic-numbers: 0, no-param-reassign: 0 */ const $433ae9372a2d1530$var$urlAlphabet = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW';
function $433ae9372a2d1530$export$ac4959f4f1338dfc(size = 21) {
    let id = '';
    while(size--)id += $433ae9372a2d1530$var$urlAlphabet[Math.random() * 64 | 0];
    return id;
}


var $32e315e717aaa0ad$var$HTTPMethod;
(function(HTTPMethod) {
    HTTPMethod["GET"] = "GET";
    HTTPMethod["POST"] = "POST";
    HTTPMethod["PUT"] = "PUT";
    HTTPMethod["PATCH"] = "PATCH";
    HTTPMethod["DELETE"] = "DELETE";
})($32e315e717aaa0ad$var$HTTPMethod || ($32e315e717aaa0ad$var$HTTPMethod = {
}));
function $32e315e717aaa0ad$export$5d730b7aed1a3eb0(apiEndpoint, options1 = {
    storageKey: `${$433ae9372a2d1530$export$ac4959f4f1338dfc()}_client_key`,
    toJSON: true
}) {
    async function isError(res) {
        if (!res.ok) throw new Error(await res.text() || `HTTP response was not ok: ${res.status}`);
        return res;
    }
    async function isJson(res) {
        if (!options1.toJSON) return res;
        if (res.headers.has('Content-Type') && res.headers.get('Content-Type').includes('application/json')) return await res.json();
        throw new TypeError('Response is not JSON');
    }
    function client(endpoint, method, customConfig = {
    }) {
        const controller = new AbortController();
        const token = localStorage.getItem(options1.storageKey);
        const headers = {
            'Content-Type': 'application/json'
        };
        if (token) headers.Authorization = `Bearer ${token}`;
        const config = {
            signal: controller.signal,
            method: method,
            ...customConfig,
            headers: {
                ...headers,
                ...customConfig.headers
            }
        };
        return {
            req: fetch(`${apiEndpoint}${endpoint}`, config).then(isError).then(isJson),
            abort: controller.abort.bind(controller)
        };
    }
    return {
        get (url, options) {
            return client(url, $32e315e717aaa0ad$var$HTTPMethod.GET, options);
        },
        post (url, body, options) {
            return client(url, $32e315e717aaa0ad$var$HTTPMethod.POST, {
                ...options,
                body: JSON.stringify(body)
            });
        },
        put (url, body, options) {
            return client(url, $32e315e717aaa0ad$var$HTTPMethod.PUT, {
                ...options,
                body: JSON.stringify(body)
            });
        },
        patch (url, body, options) {
            return client(url, $32e315e717aaa0ad$var$HTTPMethod.PATCH, {
                ...options,
                body: JSON.stringify(body)
            });
        },
        delete (url, options) {
            return client(url, $32e315e717aaa0ad$var$HTTPMethod.DELETE, options);
        }
    };
}



const $e1a2e76f546efe52$export$f580247ac376296f = $a0a27525818bb962$export$c3095a23b368d1f2(function* mapWith(fn, iterable) {
    for (const element of iterable)yield fn(element);
});
const $e1a2e76f546efe52$export$6162ac8ba603caa9 = $a0a27525818bb962$export$c3095a23b368d1f2(function* mapAllWith(fn, iterable) {
    for (const element of iterable)yield* fn(element);
});
const $e1a2e76f546efe52$export$7c961d426bc3e8f3 = $a0a27525818bb962$export$c3095a23b368d1f2(function* filterWith(fn, iterable) {
    for (const element of iterable)if (fn(element)) yield element;
});
const $e1a2e76f546efe52$export$8e16b83750b44988 = $a0a27525818bb962$export$c3095a23b368d1f2(function* compact(iterable) {
    for (const element of iterable)if (element != null) yield element;
});
const $e1a2e76f546efe52$export$404d2aad5e5c5508 = $a0a27525818bb962$export$c3095a23b368d1f2(function* untilWith(fn, iterable) {
    for (const element of iterable){
        if (fn(element)) break;
        yield element;
    }
});
const $e1a2e76f546efe52$export$43128fadae87b74a = (iterable)=>iterable[Symbol.iterator]().next().value
;
function* $e1a2e76f546efe52$export$c58417706a208278(iterable) {
    const iterator = iterable[Symbol.iterator]();
    iterator.next();
    yield* iterator;
}
const $e1a2e76f546efe52$export$b7df5d561049483a = $a0a27525818bb962$export$c3095a23b368d1f2(function* take(numberToTake, iterable) {
    const iterator = iterable[Symbol.iterator]();
    for(let i = 0; i < numberToTake; ++i){
        const { done: done , value: value  } = iterator.next();
        if (!done) yield value;
    }
});
const $e1a2e76f546efe52$export$663103110d94aac9 = $a0a27525818bb962$export$c3095a23b368d1f2(function* drop(numberToDrop, iterable) {
    if (numberToDrop >= iterable.length) return;
    const iterator = iterable[Symbol.iterator]();
    let i = 0;
    while((i++) < numberToDrop)iterator.next();
    do {
        const { done: done , value: value  } = iterator.next();
        if (!done) yield value;
    }while (++i <= iterable.length)
});
function* $e1a2e76f546efe52$export$8901015135f2fb22(...iterables) {
    const iterators = iterables.map((i)=>i[Symbol.iterator]()
    );
    while(true){
        const pairs = iterators.map((j)=>j.next()
        );
        const dones = [];
        const values = [];
        pairs.forEach((p)=>(dones.push(p.done), values.push(p.value))
        );
        if (dones.indexOf(true) >= 0) break;
        yield values;
    }
}
function* $e1a2e76f546efe52$export$b634740ce272acb5(zipper, ...iterables) {
    const iterators = iterables.map((i)=>i[Symbol.iterator]()
    );
    while(true){
        const pairs = iterators.map((j)=>j.next()
        );
        const dones = [];
        const values = [];
        pairs.forEach((p)=>(dones.push(p.done), values.push(p.value))
        );
        if (dones.indexOf(true) >= 0) break;
        yield zipper(...values);
    }
}
const $e1a2e76f546efe52$export$287c6381f647675d = $a0a27525818bb962$export$c3095a23b368d1f2(function reduceWith(fn, seed, iterable) {
    let accumulator = seed;
    for (const element of iterable)accumulator = fn(accumulator, element);
    return accumulator;
});
function $e1a2e76f546efe52$export$34e2bedfca0f76a9(generator) {
    const memos = Object.create(null);
    const iters = Object.create(null);
    return function* memoize(...args) {
        const key = JSON.stringify(args);
        let i = 0;
        if (memos[key] == null) {
            memos[key] = [];
            iters[key] = generator(...args);
        }
        while(true)if (i < memos[key].length) yield memos[key][i++];
        else {
            const { done: done , value: value  } = iters[key].next();
            if (done) return;
            else yield memos[key][i++] = value;
        }
    };
}


const $2d4bdfa1f9f44653$export$fb8073518f34e6ec = {
    map (fn) {
        return Object.assign({
            [Symbol.iterator]: ()=>{
                const iterator = this[Symbol.iterator]();
                return {
                    next: ()=>{
                        const { done: done , value: value  } = iterator.next();
                        return {
                            done: done,
                            value: done ? undefined : fn(value)
                        };
                    }
                };
            }
        }, $2d4bdfa1f9f44653$export$fb8073518f34e6ec);
    },
    reduce (reducer, seed) {
        const iterator = this[Symbol.iterator]();
        let iterationResult;
        let accumulator = seed;
        while(iterationResult = iterator.next(), !iterationResult.done)accumulator = reducer(accumulator, iterationResult.value);
        return accumulator;
    },
    filter (predicate) {
        return Object.assign({
            [Symbol.iterator]: ()=>{
                const iterator = this[Symbol.iterator]();
                return {
                    next: ()=>{
                        let done, value;
                        do ({ done: done , value: value  } = iterator.next());
                        while (!done && !predicate(value))
                        return {
                            done: done,
                            value: value
                        };
                    }
                };
            }
        }, $2d4bdfa1f9f44653$export$fb8073518f34e6ec);
    },
    find (searcher) {
        return Object.assign({
            [Symbol.iterator]: ()=>{
                const iterator = this[Symbol.iterator]();
                return {
                    next: ()=>{
                        let done, value;
                        do ({ done: done , value: value  } = iterator.next());
                        while (!done && !searcher(value))
                        return {
                            done: done,
                            value: value
                        };
                    }
                };
            }
        }, $2d4bdfa1f9f44653$export$fb8073518f34e6ec);
    },
    until (searcher) {
        return Object.assign({
            [Symbol.iterator]: ()=>{
                const iterator = this[Symbol.iterator]();
                return {
                    next: ()=>{
                        let { done: done , value: value  } = iterator.next();
                        done = done || searcher(value);
                        return {
                            done: done,
                            value: done ? undefined : value
                        };
                    }
                };
            }
        }, $2d4bdfa1f9f44653$export$fb8073518f34e6ec);
    },
    first () {
        return this[Symbol.iterator]().next().value;
    },
    rest () {
        return Object.assign({
            [Symbol.iterator]: ()=>{
                const iterator = this[Symbol.iterator]();
                iterator.next();
                return iterator;
            }
        }, $2d4bdfa1f9f44653$export$fb8073518f34e6ec);
    },
    take (numberToTake) {
        return Object.assign({
            [Symbol.iterator]: ()=>{
                const iterator = this[Symbol.iterator]();
                let remainingElements = numberToTake;
                return {
                    next: ()=>{
                        let { done: done , value: value  } = iterator.next();
                        done = done || remainingElements-- <= 0;
                        return {
                            done: done,
                            value: done ? undefined : value
                        };
                    }
                };
            }
        }, $2d4bdfa1f9f44653$export$fb8073518f34e6ec);
    },
    drop (numberToDrop) {
        return Object.assign({
            [Symbol.iterator]: ()=>{
                const iterator = this[Symbol.iterator]();
                while(numberToDrop-- > 0)iterator.next();
                return {
                    next: ()=>{
                        const { done: done , value: value  } = iterator.next();
                        return {
                            done: done,
                            value: done ? undefined : value
                        };
                    }
                };
            }
        });
    }
};
const $2d4bdfa1f9f44653$export$bc00d4d99d9c6e7d = Object.assign({
    *[Symbol.iterator] () {
        let n = 0;
        while(true)yield n++;
    }
}, $2d4bdfa1f9f44653$export$fb8073518f34e6ec);
const $2d4bdfa1f9f44653$export$694e0d28c7ffc90c = ()=>Object.assign({
        array: [],
        index: -1,
        push (value) {
            return this.array[this.index += 1] = value;
        },
        pop () {
            const value = this.array[this.index];
            this.array[this.index] = undefined;
            if (this.index >= 0) this.index -= 1;
            return value;
        },
        isEmpty () {
            return this.index < 0;
        },
        [Symbol.iterator] () {
            let iteractionIndex = this.index;
            return {
                next: ()=>{
                    if (iteractionIndex > this.index) iteractionIndex = this.index;
                    if (iteractionIndex < 0) return {
                        done: true
                    };
                    else return {
                        done: false,
                        value: this.array[iteractionIndex--]
                    };
                }
            };
        }
    }, $2d4bdfa1f9f44653$export$fb8073518f34e6ec)
;
$2d4bdfa1f9f44653$export$694e0d28c7ffc90c.from = function from(iterable) {
    const stack = this();
    for (const element of iterable)stack.push(element);
    return stack;
};
function $2d4bdfa1f9f44653$export$b624eff549462981(target) {
    return Object.assign(target, $2d4bdfa1f9f44653$export$fb8073518f34e6ec);
}
$2d4bdfa1f9f44653$export$b624eff549462981.Collection = $2d4bdfa1f9f44653$export$fb8073518f34e6ec;
$2d4bdfa1f9f44653$export$b624eff549462981.Stack = $2d4bdfa1f9f44653$export$694e0d28c7ffc90c;
$2d4bdfa1f9f44653$export$b624eff549462981.Numbers = $2d4bdfa1f9f44653$export$bc00d4d99d9c6e7d;





function $0c9909adc8cd4fb7$var$implementsPushProtocol(obj) {
    return obj && Symbol.iterator in Object(obj) && typeof obj.push === 'function' && typeof obj[Symbol.iterator] === 'function';
}
const $0c9909adc8cd4fb7$var$ON_EVENT = 'on';
const $0c9909adc8cd4fb7$var$END_EVENT = 'end';
const $0c9909adc8cd4fb7$export$ea9ec650125d8707 = (obj)=>{
    if (!$0c9909adc8cd4fb7$var$implementsPushProtocol(obj)) throw new TypeError('Object does not implement a push protocol');
    const emitter = new $0c9909adc8cd4fb7$import$4bf9923669ad6c63$4fae95256245c8c0();
    const pushProxy = new Proxy(obj, {
        get (...args) {
            const [target, key] = args;
            if (key === 'push') {
                const pushRef = target[key];
                return (...capturedArgs)=>{
                    const result = pushRef.call(target, ...capturedArgs);
                    emitter.emit($0c9909adc8cd4fb7$var$ON_EVENT, ...capturedArgs);
                    return result;
                };
            }
            return Reflect.get(...args);
        }
    });
    const observable = {
        [$73296c0bdeea98f6$export$a7c40509ff863847] () {
            return new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
                emitter.on($0c9909adc8cd4fb7$var$ON_EVENT, (newValue)=>{
                    observer.next(newValue);
                });
                emitter.on($0c9909adc8cd4fb7$var$END_EVENT, ()=>observer.complete()
                );
                for (const value of obj)observer.next(value);
                return ()=>{
                    emitter.removeAllListeners($0c9909adc8cd4fb7$var$ON_EVENT);
                    emitter.removeAllListeners($0c9909adc8cd4fb7$var$END_EVENT);
                };
            });
        }
    };
    return Object.assign(pushProxy, observable);
};





// Helper functions
const $d76f3352348d1758$var$handlersKey = Symbol('handlers key');
const $d76f3352348d1758$var$dispatchKey = Symbol('dispatch key');
const $d76f3352348d1758$var$isMethodObject = Symbol('is method object');
const $d76f3352348d1758$var$DEFAULT_METHOD = 'MULTI:DEFAULT_METHOD';
class $d76f3352348d1758$var$NoHandlerError extends Error {
    constructor(message){
        super(message);
        Object.setPrototypeOf(this, $d76f3352348d1758$var$NoHandlerError.prototype);
    }
}
const $d76f3352348d1758$var$defaultDispatch = function defaultDispatch() {
    return arguments.length === 1 ? arguments[0] : Array.from(arguments);
};
const $d76f3352348d1758$var$initialHandler = (handlers)=>$ae35ae7cbce3cb3b$export$4c7897fafd92b108(handlers).key === $d76f3352348d1758$var$DEFAULT_METHOD ? $ae35ae7cbce3cb3b$export$4c7897fafd92b108(handlers).handler : null
;
function $d76f3352348d1758$export$26f73335cc2e7868(key, handler) {
    if (handler === undefined) return {
        key: $d76f3352348d1758$var$DEFAULT_METHOD,
        handler: key,
        [$d76f3352348d1758$var$isMethodObject]: true
    };
    return {
        key: key,
        handler: handler,
        [$d76f3352348d1758$var$isMethodObject]: true
    };
}
function $d76f3352348d1758$export$13e2537ceeaf8a3a(...initialMethods) {
    // multiMethod function takes variable arguments and returns the result of
    // calling any handler that can handle the arguments
    function multiMethod() {
        let method = $d76f3352348d1758$var$initialHandler(multiMethod[$d76f3352348d1758$var$handlersKey]);
        for(let i = 0; i < multiMethod[$d76f3352348d1758$var$handlersKey].length; i++){
            const { key: key , handler: handler  } = multiMethod[$d76f3352348d1758$var$handlersKey][i];
            if ($77d07aef6f69d2ce$export$f6e2535fb5126e54(key) && arguments[0]?.constructor === key || $77d07aef6f69d2ce$export$f6e2535fb5126e54(key) && !$77d07aef6f69d2ce$export$5578ef75f4140928(key) && key.apply(null, arguments) || $a0a27525818bb962$export$9cb4719e2e525b7a(multiMethod[$d76f3352348d1758$var$dispatchKey].apply(null, arguments), key)) {
                method = handler;
                break;
            }
        }
        if (method) return typeof method === 'function' ? method.apply(null, arguments) : method;
        throw new $d76f3352348d1758$var$NoHandlerError(`No handlers for args (${JSON.stringify(arguments)})`);
    }
    const dispatchers = [];
    const methods = [];
    let defaultMethod = null;
    for(let i1 = 0; i1 < initialMethods.length; i1++){
        const method = initialMethods[i1];
        if (typeof method === 'function') dispatchers.push(method);
        else if (method.key === $d76f3352348d1758$var$DEFAULT_METHOD) defaultMethod = method;
        else methods.push(method);
    }
    const dispatch = $ae35ae7cbce3cb3b$export$4c7897fafd92b108(dispatchers) ?? $d76f3352348d1758$var$defaultDispatch;
    multiMethod[$d76f3352348d1758$var$dispatchKey] = dispatch;
    multiMethod[$d76f3352348d1758$var$handlersKey] = defaultMethod ? methods.concat(defaultMethod) : methods;
    multiMethod.map = function map(fn) {
        return $d76f3352348d1758$export$13e2537ceeaf8a3a(multiMethod[$d76f3352348d1758$var$dispatchKey], ...multiMethod[$d76f3352348d1758$var$handlersKey].map(({ key: key , handler: handler  })=>({
                key: key,
                handler: function mappedHandler() {
                    return fn(handler.apply(null, arguments));
                }
            })
        ));
    };
    return multiMethod;
}
$d76f3352348d1758$export$13e2537ceeaf8a3a.extend = function extend(multiMethod, ...methods) {
    return $d76f3352348d1758$export$13e2537ceeaf8a3a(multiMethod[$d76f3352348d1758$var$dispatchKey], ...methods.concat(multiMethod[$d76f3352348d1758$var$handlersKey]));
};



function $8245692ab466d592$export$1cac73d0be9e5f93(fn) {
    return new $f3Ts0$Transform({
        objectMode: true,
        transform (chunk, encoding, callback) {
            if (fn(chunk)) this.push(chunk);
            callback();
        }
    });
}
function $8245692ab466d592$export$65a2d40914bef387(fn) {
    return new $f3Ts0$Transform({
        objectMode: true,
        transform (chunk, encoding, callback) {
            this.push(fn(chunk));
            callback();
        }
    });
}
function $8245692ab466d592$export$81b289dc713f2731(reducer, initialValue) {
    let accumulator = initialValue;
    return new $f3Ts0$Transform({
        objectMode: true,
        transform (chunk, encoding, callback) {
            accumulator = reducer(accumulator, chunk);
            callback();
        },
        flush (callback) {
            this.push(accumulator);
            callback();
        }
    });
}
class $8245692ab466d592$export$5a49216eb02d2a7b extends $f3Ts0$Transform {
    constructor(userTransform, options = {
    }){
        super({
            ...options,
            objectMode: true
        });
        this.running = 0;
        this.terminate = null;
        this.userTransform = userTransform;
    }
    _transform(chunk, encoding, callback) {
        this.running++;
        this.userTransform(chunk, encoding, this.push.bind(this), this._onComplete.bind(this));
        callback();
    }
    _flush(callback1) {
        if (this.running > 0) this.terminate = callback1;
        else callback1();
    }
    _onComplete(err) {
        this.running--;
        if (err) {
            this.emit('error', err);
            return;
        }
        if (this.running === 0) this.terminate && typeof this.terminate === 'function' && this.terminate();
    }
}
class $8245692ab466d592$export$14202ce6ebc470bb extends $f3Ts0$Transform {
    constructor(concurrency, userTransform1, options1 = {
    }){
        super({
            ...options1,
            objectMode: true
        });
        this.running = 0;
        this.continue = null;
        this.terminate = null;
        this.concurrency = concurrency;
        this.userTransform = userTransform1;
    }
    _transform(chunk1, encoding1, callback2) {
        this.running++;
        this.userTransform(chunk1, encoding1, this.push.bind(this), this._onComplete.bind(this));
        if (this.running < this.concurrency) callback2();
        else this.continue = callback2;
    }
    _flush(callback3) {
        if (this.running > 0) this.terminate = callback3;
        else callback3();
    }
    _onComplete(err1) {
        this.running--;
        if (err1) {
            this.emit('error', err1);
            return;
        }
        const tmp = this.continue;
        this.continue = null;
        tmp && typeof tmp === 'function' && tmp();
        if (this.running === 0) this.terminate && typeof this.terminate === 'function' && this.terminate();
    }
}
function $8245692ab466d592$export$e27394c20d18d2a8(stream) {
    return (...streams)=>streams.forEach((s)=>stream.pipe(s)
        )
    ;
}
function $8245692ab466d592$export$ebab2c558c013279(...sources) {
    return (dest)=>{
        let endCount = 0;
        return sources.map((source)=>{
            source.on('end', ()=>{
                if (++endCount === sources.length) dest.end();
            });
            return source.pipe(dest, {
                end: false
            });
        });
    };
}



/**
 * Creates a middleware function that accepts an optional 'extra argument' to
 * be injected later.
 */ function $c95847a3a73fb4f7$var$createActionListenerMiddleware() {
    const listeners = new Map();
    /**
   * Add a listener
   * @param Action creator function or action.type
   */ function addListener(actionCreator, listener) {
        const currentListeners = listeners.get(actionCreator) || [];
        listeners.set(actionCreator, currentListeners.concat(listener));
    }
    /**
   * Remove a listener
   * @param Action creator function or action.type
   */ function removeListener(actionCreator, listener) {
        const currentListeners = listeners.get(actionCreator) || [];
        listeners.set(actionCreator, currentListeners.filter((currentListener)=>currentListener !== listener
        ));
    }
    return {
        middleware (middlewareAPI) {
            return (next)=>(action)=>{
                    if ($77d07aef6f69d2ce$export$f6e2535fb5126e54(action)) {
                        const currentListeners = listeners.get(action) || [];
                        for (const listener of currentListeners)try {
                            listener(action, middlewareAPI);
                        } catch (err) {
                            console.error(err);
                        }
                    } else {
                        const { type: type  } = action;
                        const currentListeners = listeners.get(type) || [];
                        for (const listener of currentListeners)try {
                            listener(action, middlewareAPI);
                        } catch (err) {
                            console.error(err);
                        }
                    }
                    return next(action);
                }
            ;
        },
        addListener: addListener,
        removeListener: removeListener
    };
}
const $c95847a3a73fb4f7$export$d977db1e2c3d2800 = $c95847a3a73fb4f7$var$createActionListenerMiddleware();




function $bf2d0c59e3fec5c6$export$53b83ca8eaab0383(obj) {
    if (!$77d07aef6f69d2ce$export$a6cdc56e425d0d0a(obj)) return false;
    let proto = obj;
    while(Object.getPrototypeOf(proto) !== null)proto = Object.getPrototypeOf(proto);
    return Object.getPrototypeOf(obj) === proto;
}



function $6b5149b706d59645$export$309c7a02b0b0bc62(type, prepareAction) {
    function actionCreator(...args) {
        if (prepareAction) {
            const prepared = prepareAction(...args);
            if (!prepared) throw new Error('prepareAction did not return an object');
            return {
                type: type,
                payload: prepared.payload,
                ...'meta' in prepared && {
                    meta: prepared.meta
                },
                ...'error' in prepared && {
                    error: prepared.error
                }
            };
        }
        return {
            type: type,
            payload: args[0]
        };
    }
    actionCreator.toString = function toString() {
        return `${type}`;
    };
    actionCreator.type = type;
    actionCreator.match = function match(action) {
        return action.type === type;
    };
    return actionCreator;
}
function $6b5149b706d59645$export$47865c7da002be09(key) {
    return [
        'type',
        'payload',
        'error',
        'meta'
    ].indexOf(key) > -1;
}
function $6b5149b706d59645$export$e2b5c5db9e2009fd(actionCreator) {
    return `${actionCreator}`;
}
function $6b5149b706d59645$export$ef5dae67073b687(action) {
    return $bf2d0c59e3fec5c6$export$53b83ca8eaab0383(action) && $77d07aef6f69d2ce$export$844ec244b1367d54(action.type) && Object.keys(action).every($6b5149b706d59645$export$47865c7da002be09);
}


const $9fdb620204b35b03$var$STATUS_FULFILLED = 'fulfilled';
const $9fdb620204b35b03$var$STATUS_REJECTED = 'rejected';
const $9fdb620204b35b03$var$STATUS_PENDING = 'pending';
class $9fdb620204b35b03$var$AbortError extends Error {
    constructor(message){
        super(message);
        Object.setPrototypeOf(this, $9fdb620204b35b03$var$AbortError.prototype);
    }
}
function $9fdb620204b35b03$export$6abd22dc03e5063f(typePrefix, payloadCreator, options) {
    // Create thunk states
    const pending = $9fdb620204b35b03$var$createPending(typePrefix);
    const fulfilled = $9fdb620204b35b03$var$createFulfilled(typePrefix);
    const rejected = $9fdb620204b35b03$var$createRejected(typePrefix);
    // perform an actionCreator with the arg provided, returns a thunk
    function actionCreator(arg) {
        /**
     * Async Thunk
     */ return function asyncThunk(dispatch, getState, extra) {
            const requestId = $433ae9372a2d1530$export$ac4959f4f1338dfc();
            if (typeof AbortController === 'undefined') throw new Error('This environment does not support AbortController');
            const abortController = new AbortController();
            let abortReason;
            let started = false;
            const abortedPromise = new Promise((_, reject)=>{
                abortController.signal.addEventListener('abort', ()=>reject(new $9fdb620204b35b03$var$AbortError(abortReason || 'Aborted'))
                );
            });
            const promise = async function createPromise() {
                let finalAction;
                try {
                    // If there is an option.condition() callback, verify the arg, if
                    // condition fails, bail
                    if (options?.condition?.(arg, {
                        getState: getState,
                        extra: extra
                    }) === false) throw {
                        name: 'ConditionError',
                        message: 'Aborted due to condition callback returning false'
                    };
                    started = true;
                    // Dispatch initial pending action
                    dispatch(pending(requestId, arg, options?.getPendingMeta?.({
                        requestId: requestId,
                        arg: arg
                    }, {
                        getState: getState,
                        extra: extra
                    })));
                    const actionPromise = Promise.resolve(payloadCreator(arg, {
                        dispatch: dispatch,
                        getState: getState,
                        extra: extra,
                        requestId: requestId,
                        signal: abortController.signal,
                        rejectWithValue: (value, meta)=>({
                                value: value,
                                meta: meta,
                                status: $9fdb620204b35b03$var$STATUS_REJECTED
                            })
                        ,
                        fulfillWithValue: (value, meta)=>({
                                value: value,
                                meta: meta,
                                status: $9fdb620204b35b03$var$STATUS_FULFILLED
                            })
                    }).then((result)=>{
                        if (result.status === $9fdb620204b35b03$var$STATUS_REJECTED) throw result;
                        if (result.status === $9fdb620204b35b03$var$STATUS_FULFILLED) return fulfilled(result.payload, requestId, arg, result.meta);
                        return fulfilled(result, requestId, arg);
                    }));
                    finalAction = await Promise.race([
                        abortedPromise,
                        actionPromise
                    ]);
                } catch (err) {
                    finalAction = err.status === $9fdb620204b35b03$var$STATUS_REJECTED ? rejected(null, requestId, arg, err.payload, err.meta) : rejected(err, requestId, arg);
                }
                const skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                if (!skipDispatch) dispatch(finalAction);
                return finalAction;
            }();
            return Object.assign(promise, {
                abort (reason) {
                    if (started) {
                        abortReason = reason;
                        abortController.abort();
                    }
                },
                arg: arg,
                requestId: requestId,
                unwrap () {
                    return promise.then($9fdb620204b35b03$var$unwrapResult);
                }
            });
        };
    }
    return Object.assign(actionCreator, {
        pending: pending,
        rejected: rejected,
        fulfilled: fulfilled,
        typePrefix: typePrefix
    });
}
/**
 * Unwrap an action
 */ function $9fdb620204b35b03$var$unwrapResult(action) {
    if (action.meta && action.meta.rejectedWithValue) throw action.payload;
    if (action.error) throw action.error;
    return action.payload;
}
/**
 * Create a fulfilled action
 */ function $9fdb620204b35b03$var$createFulfilled(typePrefix) {
    /**
   * Returns a *fulfilled* actionCreator
   *
   * @param {any} Payload
   * @param {string} Request ID
   * @param {any} Arg
   * @param {object} Metadata
   *
   * @returns {object} Action object
   */ return $6b5149b706d59645$export$309c7a02b0b0bc62(typePrefix + '/' + $9fdb620204b35b03$var$STATUS_FULFILLED, (payload, requestId, arg, meta)=>({
            payload: payload,
            meta: {
                ...meta || {
                },
                arg: arg,
                requestId: requestId,
                requestStatus: $9fdb620204b35b03$var$STATUS_FULFILLED
            }
        })
    );
}
/**
 * Create a pending action
 */ function $9fdb620204b35b03$var$createPending(typePrefix) {
    /**
   * Returns a *pending* actionCreator
   *
   * @param {string} Request ID
   * @param {any} Arg
   * @param {object} Metadata
   *
   * @returns {object} Action object
   */ return $6b5149b706d59645$export$309c7a02b0b0bc62(typePrefix + '/' + $9fdb620204b35b03$var$STATUS_PENDING, (requestId, arg, meta)=>({
            payload: undefined,
            meta: {
                ...meta || {
                },
                arg: arg,
                requestId: requestId,
                requestStatus: $9fdb620204b35b03$var$STATUS_PENDING
            }
        })
    );
}
/**
 * Create a rejected action
 */ function $9fdb620204b35b03$var$createRejected(typePrefix) {
    /**
   * Returns a *rejected* actionCreator
   *
   * @param {error} Error or reason for rejection
   * @param {string} Request ID
   * @param {any} Arg
   * @param {any} Payload
   * @param {object} Metadata
   *
   * @returns {object} Action object
   */ return $6b5149b706d59645$export$309c7a02b0b0bc62(typePrefix + '/' + $9fdb620204b35b03$var$STATUS_REJECTED, (error, requestId, arg, payload, meta)=>({
            payload: payload,
            error: error || 'Rejected',
            meta: {
                ...meta || {
                },
                arg: arg,
                requestId: requestId,
                rejectedWithValue: !!payload,
                requestStatus: $9fdb620204b35b03$var$STATUS_REJECTED,
                aborted: error?.name === 'AbortError',
                condition: error?.name === 'ConditionError'
            }
        })
    );
}




function $3faa38f8209de142$export$aea084d96e84da92(actionCreators, dispatch) {
    if ($77d07aef6f69d2ce$export$f6e2535fb5126e54(actionCreators)) return $3faa38f8209de142$var$bindActionCreator(actionCreators, dispatch);
    if (!$77d07aef6f69d2ce$export$a6cdc56e425d0d0a(actionCreators)) throw new Error('Expected an object or function, but got: ' + $a0a27525818bb962$export$fac44ee5b035f737(actionCreators));
    const boundActionCreators = {
    };
    for (const key of Reflect.ownKeys(actionCreators)){
        const actionCreator = actionCreators[key];
        if ($77d07aef6f69d2ce$export$f6e2535fb5126e54(actionCreator)) boundActionCreators[key] = $3faa38f8209de142$var$bindActionCreator(actionCreator, dispatch);
    }
    return boundActionCreators;
}
function $3faa38f8209de142$var$bindActionCreator(actionCreator, dispatch) {
    return Object.assign(function boundCreator(...args) {
        return dispatch(actionCreator.apply(this, args));
    }, {
        match (type) {
            return actionCreator.match(type);
        },
        get type () {
            return actionCreator.type;
        }
    });
}









const $43ccf82f9e934521$export$d788bc089976c004 = '@@ACTION/INIT';
function $43ccf82f9e934521$export$f51a9068ac82ea43(reducer, initialState, enhancer) {
    if ($77d07aef6f69d2ce$export$f6e2535fb5126e54(initialState) && $77d07aef6f69d2ce$export$f6e2535fb5126e54(enhancer)) throw new Error('Passing multiple enhancers is not supported');
    if ($77d07aef6f69d2ce$export$f6e2535fb5126e54(initialState) && $77d07aef6f69d2ce$export$fce6876652108ab(enhancer)) {
        enhancer = initialState;
        initialState = undefined;
    }
    if (!$77d07aef6f69d2ce$export$fce6876652108ab(enhancer)) {
        if (!$77d07aef6f69d2ce$export$f6e2535fb5126e54(enhancer)) throw new Error('Expected enhancer to be a function, got: ' + $a0a27525818bb962$export$fac44ee5b035f737(enhancer));
        return enhancer && enhancer($43ccf82f9e934521$export$f51a9068ac82ea43)(reducer, initialState);
    }
    if (!$77d07aef6f69d2ce$export$f6e2535fb5126e54(reducer)) throw new Error('Expected reducer to be a function, got: ' + $a0a27525818bb962$export$fac44ee5b035f737(reducer));
    let previousState = initialState;
    let currentState = initialState;
    let isDispatching = false;
    let currentListeners = [];
    let nextListeners = currentListeners;
    /**
   * Ensure that listeners that might be added during dispatch do not interfere
   * with the current broadcast
   */ function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) nextListeners = currentListeners.slice();
    }
    /**
   * Get the current state of the store
   */ function getState() {
        if (isDispatching) throw new Error('Unable to get state while reducer is executing');
        return currentState;
    }
    /**
   * Subscribe a listener to store updates
   */ function subscribe(selector, listener) {
        if (!$77d07aef6f69d2ce$export$f6e2535fb5126e54(selector)) throw new Error('Expected selector to be a function, got: ' + $a0a27525818bb962$export$fac44ee5b035f737(selector));
        if (!$77d07aef6f69d2ce$export$f6e2535fb5126e54(listener)) throw new Error('Expected listener to be a function, got: ' + $a0a27525818bb962$export$fac44ee5b035f737(listener));
        if (isDispatching) throw new Error('Cannot call subscribe() while reducer is executing');
        ensureCanMutateNextListeners();
        nextListeners.push({
            selector: selector,
            listener: listener
        });
        let isSubscribed = true;
        return function unsubscribe() {
            if (!isSubscribed) return;
            if (isDispatching) throw new Error('Cannot call unsubscribe() while reducer is executing');
            isSubscribed = false;
            ensureCanMutateNextListeners();
            const index = nextListeners.findIndex((obj)=>obj.listener === listener
            );
            nextListeners.splice(index, 1);
            currentListeners = null;
        };
    }
    /**
   * Dispatch an action to update the state
   */ function dispatch(action) {
        if (!$bf2d0c59e3fec5c6$export$53b83ca8eaab0383(action)) throw new Error('Actions must be plain objects');
        if (!action.type) throw new Error('Actions must have a type property');
        if (isDispatching) throw new Error('Reducers may not dispatch actions');
        try {
            isDispatching = true;
            previousState = currentState;
            currentState = reducer(currentState, action);
        } finally{
            isDispatching = false;
        }
        const changed = $fd9dc580cc166db4$export$a37e3c603d7117e5(previousState, currentState);
        const listeners = currentListeners = nextListeners;
        for(let i = 0; i < listeners.length; i++){
            const { selector: selector , listener: listener  } = listeners[i];
            try {
                if (selector(changed)) listener();
            } catch  {
                continue;
            }
        }
        return action;
    }
    /**
   * Creates a simple observable from state updates, compatible with the
   * Observable proposal
   */ function observe(selector = $a0a27525818bb962$export$f0954fd7d5368655) {
        return new $73296c0bdeea98f6$export$77cea355fa80b5f4((observer)=>{
            return subscribe(selector, ()=>observer.next(selector(getState()))
            );
        });
    }
    /**
   * Initialize the store to allow populating initalState
   */ dispatch({
        type: $43ccf82f9e934521$export$d788bc089976c004
    });
    return {
        dispatch: dispatch,
        subscribe: subscribe,
        getState: getState,
        [$73296c0bdeea98f6$export$a7c40509ff863847]: observe,
        observe: observe
    };
}


function $3623cbcc48511068$export$66e4520cdb265d18(reducers) {
    const reducerKeys = Reflect.ownKeys(reducers);
    const finalReducers = {
    };
    for (const key1 of reducerKeys)if ($77d07aef6f69d2ce$export$f6e2535fb5126e54(reducers[key1])) finalReducers[key1] = reducers[key1];
    const finalReducerKeys = $fd9dc580cc166db4$export$ed97f33186d4b816(finalReducers);
    let shapeAssertionError;
    try {
        $3623cbcc48511068$var$assertReducerShape(finalReducers);
    } catch (err) {
        shapeAssertionError = err;
    }
    /**
   * Combined reducer
   */ return function combinedReducers(state, action) {
        if (shapeAssertionError) throw shapeAssertionError;
        if ($77d07aef6f69d2ce$export$fce6876652108ab(state)) state = {
        };
        let hasChanged = false;
        const nextState = {
        };
        for(let i = 0; i < finalReducerKeys.length; i++){
            const key = finalReducerKeys[i];
            const reducer = finalReducers[key];
            const previousStateForKey = state[key];
            const nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === 'undefined') {
                const actionType = action && action.type;
                throw new Error(`When called with action of type ${actionType} ` + `the reducer for key ${key} returned undefined.`);
            }
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        hasChanged = hasChanged || finalReducerKeys.length !== $fd9dc580cc166db4$export$ed97f33186d4b816(state).length;
        return hasChanged ? nextState : state;
    };
}
function $3623cbcc48511068$var$assertReducerShape(reducers) {
    const keys = Reflect.ownKeys(reducers);
    for (const key of keys){
        const reducer = reducers[key];
        const initialState = reducer(undefined, {
            type: $43ccf82f9e934521$export$d788bc089976c004
        });
        if (typeof initialState === 'undefined') throw new Error(`Reducer for key ${key} returned undefined. ` + 'Set null for the return value if you do not ' + 'want to set a value for this reducer.');
    }
}






function $57a2bf34e3c8a2fe$export$595d22ed68ca2841(...fns) {
    let recomputations = 0;
    let lastResult;
    const resultFunc = fns.pop();
    if (!$77d07aef6f69d2ce$export$f6e2535fb5126e54(resultFunc)) throw new Error(`createSelector expects an output function after the ` + `inputs, but received: ${resultFunc}`);
    const dependencies = $57a2bf34e3c8a2fe$var$getDependencies(fns);
    const memoizedResultFunc = $a0a27525818bb962$export$fc10aeed3a532e2a(function wrappedResultFunc() {
        recomputations++;
        return resultFunc && resultFunc.apply(null, arguments);
    });
    const selector = $a0a27525818bb962$export$fc10aeed3a532e2a(function selector() {
        const params = [];
        const length = dependencies.length;
        for(let i = 0; i < length; i++)params.push(dependencies[i].apply(null, arguments));
        lastResult = memoizedResultFunc.apply(null, params);
        return lastResult;
    });
    return Object.assign(selector, {
        resultFunc: resultFunc,
        memoizedResultFunc: memoizedResultFunc,
        dependencies: dependencies,
        lastResult: ()=>lastResult
        ,
        recomputations: ()=>recomputations
        ,
        resetRecomputations: ()=>recomputations = 0
    });
}
function $57a2bf34e3c8a2fe$var$getDependencies(fns) {
    const dependencies = $77d07aef6f69d2ce$export$43bee75e5e14138e($ae35ae7cbce3cb3b$export$5fd5031fecdacec3(fns)) ? $ae35ae7cbce3cb3b$export$5fd5031fecdacec3(fns) : fns;
    if (!dependencies.every($77d07aef6f69d2ce$export$f6e2535fb5126e54)) throw new Error('createSelector expects all input-selectors to be functions');
    return dependencies;
}





/**
 * Creates a middleware function that accepts an optional 'extra argument' to
 * be injected later.
 */ function $70bde6dd28a4bd67$var$createThunkMiddleware(extraArgument) {
    function middleware({ dispatch: dispatch , getState: getState  }) {
        return (next)=>(action)=>$77d07aef6f69d2ce$export$f6e2535fb5126e54(action) ? action(dispatch, getState, extraArgument) : next(action)
        ;
    }
    middleware.withExtraArgument = $70bde6dd28a4bd67$var$createThunkMiddleware;
    return middleware;
}
const $70bde6dd28a4bd67$export$dd164f5517779f15 = $70bde6dd28a4bd67$var$createThunkMiddleware();





const $cb35ebeb67d331f1$export$9fe743c6906fa583 = {
    builder () {
        const cases = [];
        return {
            case (type, handler) {
                if ($77d07aef6f69d2ce$export$f6e2535fb5126e54(type)) cases.push($d76f3352348d1758$export$26f73335cc2e7868(type, handler));
                else cases.push($d76f3352348d1758$export$26f73335cc2e7868((state, action)=>action.type === type
                , handler));
                return this;
            },
            init (initialState) {
                cases.push($d76f3352348d1758$export$26f73335cc2e7868((state = initialState)=>state
                ));
                return this;
            },
            build () {
                return $d76f3352348d1758$export$13e2537ceeaf8a3a(...cases);
            }
        };
    },
    combineReducers: $3623cbcc48511068$export$66e4520cdb265d18
};




function $77f905ef13c2918d$export$9ff26e0402cc7b7(...middlewares) {
    return (createStore)=>(reducer, initialState)=>{
            const store = createStore(reducer, initialState);
            let dispatch = (...args)=>{
                throw new Error('Cannot dispatch while constructing middleware');
            };
            const middlewareAPI = {
                getState: store.getState,
                dispatch: (action, ...args)=>dispatch(action, ...args)
            };
            const chain = middlewares.map((middleware)=>middleware(middlewareAPI)
            );
            dispatch = $a0a27525818bb962$export$f672e0b6f7222cd7(...chain)(store.dispatch);
            return {
                ...store,
                dispatch: dispatch
            };
        }
    ;
}



const $61526c4a1ea16b2c$export$da91ee5d258bba9d = $77f905ef13c2918d$export$9ff26e0402cc7b7($70bde6dd28a4bd67$export$dd164f5517779f15)($43ccf82f9e934521$export$f51a9068ac82ea43);




export {$a0a27525818bb962$export$63fce1f81095ac4f as accumulate, $a0a27525818bb962$export$21c0ac7fe1cef1b8 as and, $a0a27525818bb962$export$2b74374111f56d9e as arity, $a0a27525818bb962$export$33902b7329277358 as binary, $a0a27525818bb962$export$2e0ae67339d5f1ac as binarySearch, $a0a27525818bb962$export$adf7c0fe6059d774 as bound, $a0a27525818bb962$export$9e58c10e5cf1295d as callFirst, $a0a27525818bb962$export$3d41a7c27165bfa3 as callLast, $a0a27525818bb962$export$f672e0b6f7222cd7 as compose, $a0a27525818bb962$export$c983f826f44ff86 as constant, $a0a27525818bb962$export$7a5838dcc95df55f as createSearcher, $a0a27525818bb962$export$c3095a23b368d1f2 as curry, $a0a27525818bb962$export$61fc7d43ac8f84b0 as debounce, $a0a27525818bb962$export$9cb4719e2e525b7a as deepEqual, $a0a27525818bb962$export$e775f2ca58d379f0 as demethodize, $a0a27525818bb962$export$5ddcd2c2c8d9736f as filterTR, $a0a27525818bb962$export$d8f18b68abd220dc as flip2, $a0a27525818bb962$export$c993f2f7dfcc6a25 as flip3, $a0a27525818bb962$export$21625637effda04 as fromJSON, $a0a27525818bb962$export$3f063810d7bf01bd as groupBy, $a0a27525818bb962$export$cf4d2554e2b9373d as groupByF, $a0a27525818bb962$export$341c6a2f7bf0591b as groupByFMap, $a0a27525818bb962$export$f0954fd7d5368655 as identity, $a0a27525818bb962$export$468cda29b159ee5d as invoke, $a0a27525818bb962$export$e439fc32198f78c5 as keyBy, $a0a27525818bb962$export$fc1400facf92c78 as len, $a0a27525818bb962$export$bef1f36f5486a6a3 as log, $a0a27525818bb962$export$29deb6b34088de51 as mapTR, $a0a27525818bb962$export$fc10aeed3a532e2a as memoize, $a0a27525818bb962$export$aef51622e549b8b0 as negate, $a0a27525818bb962$export$6003a5f097c73977 as not, $a0a27525818bb962$export$d2de3aaeafa91619 as once, $a0a27525818bb962$export$252bb8b3bbdf6749 as or, $a0a27525818bb962$export$98e6a39c04603d36 as parse, $a0a27525818bb962$export$a4627e546088548d as pipe, $a0a27525818bb962$export$447808b60b7559bd as reduced, $a0a27525818bb962$export$89db4734f6c919c4 as send, $a0a27525818bb962$export$fac44ee5b035f737 as stringify, $a0a27525818bb962$export$7634b617e2c58e32 as takeN, $a0a27525818bb962$export$3f23594af5f37336 as tap, $a0a27525818bb962$export$b4d6a1a804dab06c as tee, $a0a27525818bb962$export$b0d4470bfb62c4eb as ternary, $a0a27525818bb962$export$f728be4ab20cbf1f as toInteger, $a0a27525818bb962$export$54fd2c36b5cc6731 as toJSON, $a0a27525818bb962$export$f84e8e69fd4488a5 as toString, $a0a27525818bb962$export$9608d0eacffd6284 as transduce, $a0a27525818bb962$export$d234c058d1d4e435 as tryCatch, $a0a27525818bb962$export$a7e49f78f97b1037 as unary, $a0a27525818bb962$export$7a5d5c156e7dc406 as unique, $a0a27525818bb962$export$dd4bdc97aa5225d9 as whileTR, $77d07aef6f69d2ce$export$43bee75e5e14138e as isArray, $77d07aef6f69d2ce$export$cb3f0f7ea9814480 as isAsyncFunction, $77d07aef6f69d2ce$export$a9ef8c9fdb631810 as isAsyncGeneratorFunction, $77d07aef6f69d2ce$export$f9ce7b637dfbe238 as isBoolean, $77d07aef6f69d2ce$export$5578ef75f4140928 as isClass, $77d07aef6f69d2ce$export$dd1bc94b04021eeb as isEmpty, $77d07aef6f69d2ce$export$f6e2535fb5126e54 as isFunction, $77d07aef6f69d2ce$export$111f0b41304fc890 as isGeneratorFunction, $77d07aef6f69d2ce$export$49034edbe6b62415 as isInstanceOf, $77d07aef6f69d2ce$export$5c90113a285f2241 as isMap, $77d07aef6f69d2ce$export$630801d484da15df as isNull, $77d07aef6f69d2ce$export$7e4aa119212bc614 as isNumber, $77d07aef6f69d2ce$export$a6cdc56e425d0d0a as isObject, $77d07aef6f69d2ce$export$ebab785f9ea33473 as isReduced, $77d07aef6f69d2ce$export$6750766a7c7ec627 as isSet, $77d07aef6f69d2ce$export$844ec244b1367d54 as isString, $77d07aef6f69d2ce$export$fce6876652108ab as isUndefined, $ae35ae7cbce3cb3b$export$5635d7ef4b8fee1c as apply, $ae35ae7cbce3cb3b$export$cc6710ee5f037d57 as average, $ae35ae7cbce3cb3b$export$99aaa11fb71d263 as cat, $ae35ae7cbce3cb3b$export$fe41fac84f1fd82f as composeM, $ae35ae7cbce3cb3b$export$50b5b478b69a347c as deepJoin, $ae35ae7cbce3cb3b$export$ce7eaaed37329a1b as deepMap, $ae35ae7cbce3cb3b$export$7ecc1a3b11b57dab as every, $ae35ae7cbce3cb3b$export$3dea766d36a8935f as filter, $ae35ae7cbce3cb3b$export$71aa6c912b956294 as find, $ae35ae7cbce3cb3b$export$40fa977508bcf282 as flat, $ae35ae7cbce3cb3b$export$5b8affa63fc6df16 as flatMap, $ae35ae7cbce3cb3b$export$93e2b83da34ff82a as fold, $ae35ae7cbce3cb3b$export$4b80e395e36b5a56 as forEach, $ae35ae7cbce3cb3b$export$2a722db47863bac2 as getOrElseThrow, $ae35ae7cbce3cb3b$export$5fd5031fecdacec3 as head, $ae35ae7cbce3cb3b$export$f7e2c8231c57a8bd as join, $ae35ae7cbce3cb3b$export$4c7897fafd92b108 as last, $ae35ae7cbce3cb3b$export$4e54ff84c97bdc0c as liftA2, $ae35ae7cbce3cb3b$export$8402e5acf634c0df as liftA3, $ae35ae7cbce3cb3b$export$3a582736e2273011 as liftA4, $ae35ae7cbce3cb3b$export$871de8747c9eaa88 as map, $ae35ae7cbce3cb3b$export$b29f828819edca8d as partition, $ae35ae7cbce3cb3b$export$c44985b87d605eff as pluck, $ae35ae7cbce3cb3b$export$d02631cccf789723 as range, $ae35ae7cbce3cb3b$export$533b26079ad0b4b as reduce, $ae35ae7cbce3cb3b$export$7fef8bcdbb34f435 as reduceRight, $ae35ae7cbce3cb3b$export$ad14ef4001db2bcd as some, $ae35ae7cbce3cb3b$export$b035e44d7bb4278f as sortBy, $ae35ae7cbce3cb3b$export$8a63f25cc62965f1 as sum, $ae35ae7cbce3cb3b$export$66b4a470e4119e42 as zipMap, $d9d8bb93d5f86a8b$export$9dbe56a5aba4f4b4 as composeAsync, $d9d8bb93d5f86a8b$export$30ee5c6810ce1ce2 as filterAsync, $d9d8bb93d5f86a8b$export$a939ddd3409bd57a as mapAsync, $d9d8bb93d5f86a8b$export$507da1b08fb8a738 as pipeAsync, $d9d8bb93d5f86a8b$export$b720f6c8e101da88 as reduceAsync, $6e79c5d4246ed8f1$export$e16d8520af44a096 as add, $6e79c5d4246ed8f1$export$ecceddf365c72028 as addRight, $6e79c5d4246ed8f1$export$cd007d971a5a2143 as divide, $6e79c5d4246ed8f1$export$7e7fa3dcb6d62f31 as divideRight, $6e79c5d4246ed8f1$export$9663ddc1cf085b32 as eq, $6e79c5d4246ed8f1$export$2060d2db72cce88f as multiply, $6e79c5d4246ed8f1$export$9c297f60e22e3389 as pow, $6e79c5d4246ed8f1$export$7978a6ddf29f4374 as roundTo, $6e79c5d4246ed8f1$export$4e2d2ead65e5f7e3 as subtract, $6e79c5d4246ed8f1$export$4ed4137bff330a54 as subtractRight, $fd9dc580cc166db4$export$258f7bf0e3a9da18 as aggregate, $fd9dc580cc166db4$export$ce9688d12180c837 as aggregateOn, $fd9dc580cc166db4$export$6c40052bed430212 as deepCopy, $fd9dc580cc166db4$export$77ca992757d61efd as deepCopyArray, $fd9dc580cc166db4$export$7e32b29e1cb162e1 as deepFreeze, $fd9dc580cc166db4$export$dc56a6be17ec932e as deepPick, $fd9dc580cc166db4$export$52be3e7c3b913516 as deepProp, $fd9dc580cc166db4$export$112aad15b1fe0c19 as deepSetProp, $fd9dc580cc166db4$export$87779c0c97a6c3df as deepUpdate, $fd9dc580cc166db4$export$a37e3c603d7117e5 as diff, $fd9dc580cc166db4$export$3e9f948b41964866 as entries, $fd9dc580cc166db4$export$fc3a40dec7b33bf as immutable, $fd9dc580cc166db4$export$ed97f33186d4b816 as keys, $fd9dc580cc166db4$export$4950aa0f605343fb as merge, $fd9dc580cc166db4$export$357523c63a2253b9 as pick, $fd9dc580cc166db4$export$977f3f6a9323c0f6 as prop, $fd9dc580cc166db4$export$8128bb6492cf3de7 as props, $fd9dc580cc166db4$export$7ac989ec0c9c279 as rename, $fd9dc580cc166db4$export$adaa4cf7ef1b65be as set, $fd9dc580cc166db4$export$8a39838a0f735648 as setProp, $fd9dc580cc166db4$export$f45dfcb5efeffdb3 as setPropM, $fd9dc580cc166db4$export$722fbec263ad908a as update, $fd9dc580cc166db4$export$68c286be0e7e55b7 as values, $99b162b43be264d7$export$10d8903dec122b9d as append, $99b162b43be264d7$export$4659b591c19bdf3d as match, $99b162b43be264d7$export$23a07ddfce9fad49 as padEnd, $99b162b43be264d7$export$36cf564d487b5178 as padStart, $99b162b43be264d7$export$68159836694e22c1 as prepend, $99b162b43be264d7$export$77ad94ebf1c2b9ed as replace, $99b162b43be264d7$export$65980d18b75784e2 as split, $99b162b43be264d7$export$84b9399c77df0edf as toLowerCase, $99b162b43be264d7$export$d80c591a9e16646 as toUpperCase, $32b5ef271b1e1a46$export$cf1a5a0c68d6e80b as Append, $4b09b9c34303257d$export$530764fd6bf3e88b as Prepend, $e96247e1f8aae188$export$487514b351402d1b as Define, $9a821ebd6428d862$export$f6afc91249163ff2 as Override, $e3473fb7a7ac863f$export$742acabee3dd6465 as after, $e3473fb7a7ac863f$export$c7fd1518a7cbf3dd as afterAll, $e3473fb7a7ac863f$export$a253cce80efe6b1c as aroundAll, $e3473fb7a7ac863f$export$1c4c1e3098bf5ebe as before, $e3473fb7a7ac863f$export$8fd4d608a3485fcf as beforeAll, $e3473fb7a7ac863f$export$c597e4e4259c9301 as provided, $e3473fb7a7ac863f$export$6f0673371501d6b6 as unless, $e3473fb7a7ac863f$export$4636581650fd0e55 as wrapWith, $86ec25492d6e4c28$export$67b2770bcd4c0853 as FunctionalMixin, $49104b3675bca96a$export$53ebe40b44acc773 as ClassMixin, $99d0e6444599337d$export$30c1bf1f6ea900a5 as withValidation, $1077db733ac57492$export$8f64980a2e163c7f as SubclassFactory, $1077db733ac57492$export$6e6fbaf3ea747b50 as FactoryFactory, $55ccf17b11417d57$export$ad3bd6e4e1ec5d06 as Maybe, $55ccf17b11417d57$export$bebe9059409a0d04 as Nothing, $55ccf17b11417d57$export$8a67b48435b5d073 as Just, $bef356c6dea1b6d9$export$8fdcabde73f49165 as Result, $bef356c6dea1b6d9$export$5ebc9a4af3ac0850 as Failure, $bef356c6dea1b6d9$export$ffa3d9fee6fd705a as Success, $cd856c97e400f0e3$export$fa957d01b0310fd7 as Try, $cd856c97e400f0e3$export$17de313a76857e4a as TryAsync, $8d3d6d5ace7c4fdc$export$8f8422ac5947a789 as IO, $8d3d6d5ace7c4fdc$export$d8552d785efb2cb8 as IOAsync, $fae46c4c04415224$export$d63d7cff08fe4dc9 as Pair, $fae46c4c04415224$export$cb55c7e8798604bb as Triple, $fae46c4c04415224$export$deb82508dd66d288 as Enum, $32e315e717aaa0ad$export$5d730b7aed1a3eb0 as createClient, $e1a2e76f546efe52$export$8e16b83750b44988 as compact, $e1a2e76f546efe52$export$663103110d94aac9 as drop, $e1a2e76f546efe52$export$7c961d426bc3e8f3 as filterWith, $e1a2e76f546efe52$export$43128fadae87b74a as first, $e1a2e76f546efe52$export$6162ac8ba603caa9 as mapAllWith, $e1a2e76f546efe52$export$f580247ac376296f as mapWith, $e1a2e76f546efe52$export$34e2bedfca0f76a9 as memoizeIter, $e1a2e76f546efe52$export$287c6381f647675d as reduceWith, $e1a2e76f546efe52$export$c58417706a208278 as rest, $e1a2e76f546efe52$export$b7df5d561049483a as take, $e1a2e76f546efe52$export$404d2aad5e5c5508 as untilWith, $e1a2e76f546efe52$export$8901015135f2fb22 as zip, $e1a2e76f546efe52$export$b634740ce272acb5 as zipWith, $2d4bdfa1f9f44653$export$b624eff549462981 as Lazy, $2d4bdfa1f9f44653$export$fb8073518f34e6ec as Collection, $2d4bdfa1f9f44653$export$bc00d4d99d9c6e7d as Numbers, $2d4bdfa1f9f44653$export$694e0d28c7ffc90c as Stack, $73296c0bdeea98f6$export$77cea355fa80b5f4 as Observable, $0c9909adc8cd4fb7$import$4bf9923669ad6c63$4fae95256245c8c0 as EventEmitter, $0c9909adc8cd4fb7$export$ea9ec650125d8707 as reactivize, $d76f3352348d1758$export$13e2537ceeaf8a3a as multi, $d76f3352348d1758$export$26f73335cc2e7868 as method, $8245692ab466d592$export$1cac73d0be9e5f93 as createFilterStream, $8245692ab466d592$export$e27394c20d18d2a8 as createFork, $8245692ab466d592$export$65a2d40914bef387 as createMapStream, $8245692ab466d592$export$ebab2c558c013279 as createMerge, $8245692ab466d592$export$81b289dc713f2731 as createReduceStream, $8245692ab466d592$export$14202ce6ebc470bb as LimitedParallelStream, $8245692ab466d592$export$5a49216eb02d2a7b as ParallelStream, $c95847a3a73fb4f7$export$d977db1e2c3d2800 as actionListener, $9fdb620204b35b03$export$6abd22dc03e5063f as createAsyncThunk, $3faa38f8209de142$export$aea084d96e84da92 as bindActionCreators, $3623cbcc48511068$export$66e4520cdb265d18 as combineReducers, $6b5149b706d59645$export$309c7a02b0b0bc62 as createAction, $57a2bf34e3c8a2fe$export$595d22ed68ca2841 as createSelector, $bf2d0c59e3fec5c6$export$53b83ca8eaab0383 as isPlainObject, $43ccf82f9e934521$export$f51a9068ac82ea43 as createStore, $70bde6dd28a4bd67$export$dd164f5517779f15 as thunk, $cb35ebeb67d331f1$export$9fe743c6906fa583 as Reducer, $61526c4a1ea16b2c$export$da91ee5d258bba9d as createConfiguredStore};
//# sourceMappingURL=index.js.map
