import "core-js/features/observable/index.js";
import {Readable as $lN7Lq$Readable, Transform as $lN7Lq$Transform} from "stream";
import {EventEmitter as $df5d87e734be3d90$import$4bf9923669ad6c63$4fae95256245c8c0} from "events";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
const $bb63e7e1bbd7ff6a$export$f0954fd7d5368655 = (x)=>x
;
const $bb63e7e1bbd7ff6a$export$c983f826f44ff86 = (a)=>(b)=>a
;
const $bb63e7e1bbd7ff6a$export$2b74374111f56d9e = (fn, n)=>function arity(...args) {
        return fn.apply(this, args.slice(0, n));
    }
;
const $bb63e7e1bbd7ff6a$export$a7e49f78f97b1037 = (fn)=>$bb63e7e1bbd7ff6a$export$2b74374111f56d9e(fn, 1)
;
const $bb63e7e1bbd7ff6a$export$33902b7329277358 = (fn)=>$bb63e7e1bbd7ff6a$export$2b74374111f56d9e(fn, 2)
;
const $bb63e7e1bbd7ff6a$export$b0d4470bfb62c4eb = (fn)=>$bb63e7e1bbd7ff6a$export$2b74374111f56d9e(fn, 3)
;
const $bb63e7e1bbd7ff6a$export$9e58c10e5cf1295d = (fn, larg)=>function callFirst(...args) {
        return fn.call(this, larg, ...args);
    }
;
const $bb63e7e1bbd7ff6a$export$3d41a7c27165bfa3 = (fn, rarg)=>function callLast(...args) {
        return fn.call(this, ...args, rarg);
    }
;
const $bb63e7e1bbd7ff6a$export$e775f2ca58d379f0 = Function.prototype.bind.bind(Function.prototype.call);
const $bb63e7e1bbd7ff6a$export$fc1400facf92c78 = (a)=>$bb63e7e1bbd7ff6a$export$844ec244b1367d54(a) || $bb63e7e1bbd7ff6a$export$43bee75e5e14138e(a) || $bb63e7e1bbd7ff6a$export$f6e2535fb5126e54(a) ? a.length : $bb63e7e1bbd7ff6a$export$6750766a7c7ec627(a) || $bb63e7e1bbd7ff6a$export$5c90113a285f2241(a) ? a.size : $bb63e7e1bbd7ff6a$export$a6cdc56e425d0d0a(a) ? Object.entries(a).length : void 0
;
const $bb63e7e1bbd7ff6a$var$compose2 = (f, g)=>function compose(...args) {
        return f.call(this, g.call(this, ...args));
    }
;
const $bb63e7e1bbd7ff6a$export$f672e0b6f7222cd7 = (...fns)=>fns.reduce($bb63e7e1bbd7ff6a$var$compose2)
;
const $bb63e7e1bbd7ff6a$export$a4627e546088548d = (...fns)=>fns.reduceRight($bb63e7e1bbd7ff6a$var$compose2)
;
const $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2 = (fn)=>function curryInner(...args1) {
        return args1.length >= fn.length ? fn.apply(this, args1) : (...args2)=>{
            return args1.length + args2.length >= fn.length ? fn.call(this, ...args1, ...args2) : $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2(fn)(...args1, ...args2);
        };
    }
;
/**
 * Typeof Functions
 * Provides several functions to test whether x is of type y
 */ const $bb63e7e1bbd7ff6a$var$isTypeOf = (a)=>(b)=>typeof b === a
;
const $bb63e7e1bbd7ff6a$export$7e4aa119212bc614 = $bb63e7e1bbd7ff6a$var$isTypeOf('number');
const $bb63e7e1bbd7ff6a$export$f9ce7b637dfbe238 = $bb63e7e1bbd7ff6a$var$isTypeOf('boolean');
const $bb63e7e1bbd7ff6a$export$630801d484da15df = (x)=>x === null
;
const $bb63e7e1bbd7ff6a$export$844ec244b1367d54 = $bb63e7e1bbd7ff6a$var$isTypeOf('string');
const $bb63e7e1bbd7ff6a$export$a6cdc56e425d0d0a = (x)=>x !== null && typeof x === 'object'
;
const $bb63e7e1bbd7ff6a$export$43bee75e5e14138e = (a)=>Array.isArray(a)
;
const $bb63e7e1bbd7ff6a$export$49034edbe6b62415 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((a, b)=>b instanceof a
);
const $bb63e7e1bbd7ff6a$export$f6e2535fb5126e54 = (f)=>f && typeof f === 'function'
;
const $bb63e7e1bbd7ff6a$export$6750766a7c7ec627 = (s)=>s instanceof Set
;
const $bb63e7e1bbd7ff6a$export$5c90113a285f2241 = (m)=>m instanceof Map
;
function $bb63e7e1bbd7ff6a$export$dd1bc94b04021eeb(x) {
    if (x === '' || x == null || $bb63e7e1bbd7ff6a$export$43bee75e5e14138e(x) && x.length === 0 || !$bb63e7e1bbd7ff6a$export$5578ef75f4140928(x) && ($bb63e7e1bbd7ff6a$export$6750766a7c7ec627(x) || $bb63e7e1bbd7ff6a$export$5c90113a285f2241(x) || $bb63e7e1bbd7ff6a$export$a6cdc56e425d0d0a(x)) && $bb63e7e1bbd7ff6a$export$68c286be0e7e55b7(x).length === 0 || Number.isNaN(x)) return true;
    return false;
}
function $bb63e7e1bbd7ff6a$export$5578ef75f4140928(obj) {
    const isCtorClass = obj.constructor && obj.constructor.toString().substring(0, 5) === 'class';
    if (obj.prototype === undefined) return isCtorClass;
    const isPrototypeCtorClass = obj.prototype.constructor && obj.prototype.constructor.toString && obj.prototype.constructor.toString().substring(0, 5) === 'class';
    return isCtorClass || isPrototypeCtorClass;
}
const $bb63e7e1bbd7ff6a$export$3f23594af5f37336 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((fn, x)=>(fn(x), x)
);
const $bb63e7e1bbd7ff6a$export$6003a5f097c73977 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((f, a)=>!f(a)
);
const $bb63e7e1bbd7ff6a$export$6897c284b6f9f4dc = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((f, a)=>-f(a)
);
const $bb63e7e1bbd7ff6a$export$d8f18b68abd220dc = (f)=>$bb63e7e1bbd7ff6a$export$c3095a23b368d1f2(function flip(a, b) {
        return f.call(this, b, a);
    })
;
const $bb63e7e1bbd7ff6a$export$c993f2f7dfcc6a25 = (f)=>$bb63e7e1bbd7ff6a$export$c3095a23b368d1f2(function flip(a, b, c) {
        return f.call(this, b, c, a);
    })
;
const $bb63e7e1bbd7ff6a$export$b4d6a1a804dab06c = $bb63e7e1bbd7ff6a$export$3f23594af5f37336(console.log.bind(console));
const $bb63e7e1bbd7ff6a$export$bef1f36f5486a6a3 = (fn, logger = console.log.bind(console))=>function log(...args) {
        logger(`Entering function ${fn.name}(${args.map((a)=>JSON.stringify(a)
        ).join(',')})`);
        const result = fn.apply(this, args);
        logger(`\nExiting function ${fn.name} -> ${JSON.stringify(result)}`);
        return result;
    }
;
const $bb63e7e1bbd7ff6a$export$9608d0eacffd6284 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((arr, fns, reducer, initial)=>arr.reduce($bb63e7e1bbd7ff6a$export$f672e0b6f7222cd7(...fns)(reducer), initial)
);
const $bb63e7e1bbd7ff6a$export$29deb6b34088de51 = (fn)=>(reducer)=>(acc, val)=>reducer(acc, fn(val))
;
const $bb63e7e1bbd7ff6a$export$5ddcd2c2c8d9736f = (fn)=>(reducer)=>(acc, val)=>fn(val) ? reducer(acc, val) : acc
;
const $bb63e7e1bbd7ff6a$export$977f3f6a9323c0f6 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((name, a)=>a && (name in a ? $bb63e7e1bbd7ff6a$export$f6e2535fb5126e54(a[name]) ? a[name].call(a) : a[name] : void 0)
);
const $bb63e7e1bbd7ff6a$export$89db4734f6c919c4 = (name, ...args)=>(instance)=>instance[name].apply(instance, args)
;
const $bb63e7e1bbd7ff6a$export$adf7c0fe6059d774 = (name, ...args)=>args === [] ? (instance)=>instance[name].bind(instance)
     : (instance)=>Function.prototype.bind.apply(instance[name], [
            instance
        ].concat(args))
;
const $bb63e7e1bbd7ff6a$export$f45dfcb5efeffdb3 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((name, value, a)=>$bb63e7e1bbd7ff6a$export$a6cdc56e425d0d0a(a) ? (a[name] = value, a) : a
);
const $bb63e7e1bbd7ff6a$export$8a39838a0f735648 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((name, value, a)=>a && name in a ? {
        ...a,
        [name]: value
    } : {
        ...a
    }
);
const $bb63e7e1bbd7ff6a$export$adaa4cf7ef1b65be = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((key, value, a)=>($bb63e7e1bbd7ff6a$export$5c90113a285f2241(a) ? a.set(key, value) : a[key] = value, a)
);
const $bb63e7e1bbd7ff6a$export$8128bb6492cf3de7 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((names, a)=>names.map((n)=>$bb63e7e1bbd7ff6a$export$977f3f6a9323c0f6(n, a)
    )
);
const $bb63e7e1bbd7ff6a$export$357523c63a2253b9 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((names, a)=>names.reduce((result, key)=>key in a ? (result[key] = a[key], result) : result
    , {
    })
);
const $bb63e7e1bbd7ff6a$export$468cda29b159ee5d = (fn, ...args)=>(instance)=>fn.apply(instance, args)
;
const $bb63e7e1bbd7ff6a$export$52be3e7c3b913516 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((path, a)=>{
    if (!Array.isArray(path)) path = path.split('.');
    const [p, ...rest] = path;
    return !rest.length ? $bb63e7e1bbd7ff6a$export$977f3f6a9323c0f6(p, a) : $bb63e7e1bbd7ff6a$export$52be3e7c3b913516(rest, $bb63e7e1bbd7ff6a$export$977f3f6a9323c0f6(p, a));
});
const $bb63e7e1bbd7ff6a$export$112aad15b1fe0c19 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((path, value, a)=>{
    if (!Array.isArray(path)) path = path.split('.');
    function innerDeepSetProp(path, value, obj) {
        if (path.length === 1) {
            obj[path[0]] = value;
            return obj;
        }
        if (path[0] in obj && $bb63e7e1bbd7ff6a$export$a6cdc56e425d0d0a(obj[path[0]])) {
            const newObj = obj[path[0]];
            return innerDeepSetProp(path.slice(1), value, newObj);
        }
        const newObj = {
        };
        obj[path[0]] = newObj;
        return innerDeepSetProp(path.slice(1), value, newObj);
    }
    const aux = $bb63e7e1bbd7ff6a$export$6c40052bed430212(a);
    return innerDeepSetProp(path, value, aux), aux;
});
const $bb63e7e1bbd7ff6a$export$dc56a6be17ec932e = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((paths, a)=>paths.reduce((result, path)=>$bb63e7e1bbd7ff6a$export$112aad15b1fe0c19(path, $bb63e7e1bbd7ff6a$export$52be3e7c3b913516(path)(a), result)
    , {
    })
);
/**
 * DiffObject, returns the changed values from newObj that are not in oldObj
 * @param {object} oldObj - Old Object
 * @param {object} newObj - New Object to diff against oldObj
 * @returns {object} result - Object of differences between newObj and oldObj
 */ function $bb63e7e1bbd7ff6a$var$diffObjects(oldObj, newObj) {
    if (oldObj === newObj) return {
    };
    function innerDiffObjects(oldObj, newObj, result) {
        if (oldObj === newObj) return result;
        for (const key of Reflect.ownKeys(newObj)){
            if (oldObj[key] === newObj[key]) continue;
            if ($bb63e7e1bbd7ff6a$export$43bee75e5e14138e(newObj[key])) {
                result[key] = $bb63e7e1bbd7ff6a$var$diffArrays(oldObj[key], newObj[key]);
                if (result[key].length === 0) delete result[key];
            } else if ($bb63e7e1bbd7ff6a$export$a6cdc56e425d0d0a(newObj[key])) {
                result[key] = {
                };
                innerDiffObjects(oldObj[key], newObj[key], result[key]);
            } else result[key] = newObj[key];
        }
        return result;
    }
    return innerDiffObjects(oldObj, newObj, {
    });
}
/**
 * DiffArray, returns the changed items from newArr, that are not in oldArr
 * @param {array} oldArr - Array to diff
 * @param {array} newArr - Array to diff
 * @returns {array} result - Array of items that have changed
 * from a to b (one way)
 */ function $bb63e7e1bbd7ff6a$var$diffArrays(oldArr, newArr) {
    const result = [];
    if (oldArr === newArr) return result;
    for(let i = 0; i < newArr.length; i++)if (!(oldArr[i] === newArr[i])) result.push($bb63e7e1bbd7ff6a$export$a37e3c603d7117e5(oldArr[i], newArr[i]));
    return result;
}
function $bb63e7e1bbd7ff6a$export$a37e3c603d7117e5(a, b) {
    return $bb63e7e1bbd7ff6a$export$43bee75e5e14138e(b) ? $bb63e7e1bbd7ff6a$var$diffArrays(a, b) : $bb63e7e1bbd7ff6a$export$a6cdc56e425d0d0a(b) ? $bb63e7e1bbd7ff6a$var$diffObjects(a, b) : b;
}
function $bb63e7e1bbd7ff6a$export$4950aa0f605343fb(a, b) {
    if (!a && b) return b;
    if ($bb63e7e1bbd7ff6a$export$43bee75e5e14138e(b)) return b.map((value, i)=>$bb63e7e1bbd7ff6a$export$4950aa0f605343fb(a[i], value)
    );
    if ($bb63e7e1bbd7ff6a$export$a6cdc56e425d0d0a(b)) {
        const result = $bb63e7e1bbd7ff6a$export$6c40052bed430212(a);
        for (const key of Reflect.ownKeys(b))result[key] = $bb63e7e1bbd7ff6a$export$4950aa0f605343fb(a[key], b[key]);
        return result;
    }
    return b;
}
function $bb63e7e1bbd7ff6a$export$ce9688d12180c837(keyMap, ...objects) {
    let result = {
    };
    for (const current of objects){
        result = $bb63e7e1bbd7ff6a$export$4950aa0f605343fb(result, current);
        for (const [oldKey, newKey] of $bb63e7e1bbd7ff6a$export$3e9f948b41964866(keyMap)){
            if (!current[oldKey]) continue;
            result[newKey] = result[newKey] ? $bb63e7e1bbd7ff6a$export$7a5d5c156e7dc406(result[newKey], current[oldKey]) : $bb63e7e1bbd7ff6a$export$7a5d5c156e7dc406(result[oldKey], current[oldKey]);
            delete result[oldKey];
        }
    }
    return result;
}
const $bb63e7e1bbd7ff6a$export$7a5d5c156e7dc406 = (...items)=>Array.from(new Set(items.flat()))
;
function $bb63e7e1bbd7ff6a$export$258f7bf0e3a9da18(a, b) {
    const result = {
    };
    const keys = $bb63e7e1bbd7ff6a$export$7a5d5c156e7dc406([
        ...Reflect.ownKeys(a),
        ...Reflect.ownKeys(b)
    ]);
    for (const key of keys){
        const [aVal, bVal] = [
            a[key],
            b[key]
        ];
        // If a === b just deepCopy b
        if (aVal === bVal) result[key] = $bb63e7e1bbd7ff6a$export$6c40052bed430212(bVal);
        else if ($bb63e7e1bbd7ff6a$export$43bee75e5e14138e(aVal) && $bb63e7e1bbd7ff6a$export$43bee75e5e14138e(bVal)) result[key] = $bb63e7e1bbd7ff6a$export$7a5d5c156e7dc406([
            ...aVal,
            ...bVal
        ]);
        else if ($bb63e7e1bbd7ff6a$export$a6cdc56e425d0d0a(aVal) && $bb63e7e1bbd7ff6a$export$a6cdc56e425d0d0a(bVal)) result[key] = $bb63e7e1bbd7ff6a$export$258f7bf0e3a9da18(aVal, bVal);
        else if (bVal === undefined) result[key] = $bb63e7e1bbd7ff6a$export$6c40052bed430212(aVal);
        else result[key] = $bb63e7e1bbd7ff6a$export$6c40052bed430212(bVal);
    }
    return result;
}
const $bb63e7e1bbd7ff6a$export$3f063810d7bf01bd = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((key, arr)=>{
    const result = {
    };
    for (const item of arr)(result[item[key]] || (result[item[key]] = [])).push(item);
    return $bb63e7e1bbd7ff6a$export$68c286be0e7e55b7(result);
});
const $bb63e7e1bbd7ff6a$export$e439fc32198f78c5 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((key, arr)=>arr.reduce((result, item)=>(result[item[key]] = item, result)
    , {
    })
);
const $bb63e7e1bbd7ff6a$export$50b5b478b69a347c = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((keyA, keyB, a, b)=>{
    const objA = $bb63e7e1bbd7ff6a$export$e439fc32198f78c5(keyA, a);
    const objB = $bb63e7e1bbd7ff6a$export$e439fc32198f78c5(keyB, b);
    return $bb63e7e1bbd7ff6a$export$68c286be0e7e55b7($bb63e7e1bbd7ff6a$export$258f7bf0e3a9da18(objA, objB));
});
const $bb63e7e1bbd7ff6a$export$54fd2c36b5cc6731 = (x)=>JSON.stringify(x)
;
const $bb63e7e1bbd7ff6a$export$21625637effda04 = (x)=>JSON.parse(x)
;
const $bb63e7e1bbd7ff6a$export$fac44ee5b035f737 = JSON.stringify.bind(JSON);
const $bb63e7e1bbd7ff6a$export$98e6a39c04603d36 = JSON.parse.bind(JSON);
const $bb63e7e1bbd7ff6a$export$f84e8e69fd4488a5 = String;
const $bb63e7e1bbd7ff6a$export$f728be4ab20cbf1f = (s)=>Number.parseInt(s, 10)
;
const $bb63e7e1bbd7ff6a$export$36cf564d487b5178 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((x, reps, fill)=>String.prototype.padStart.call(x, reps, fill)
);
const $bb63e7e1bbd7ff6a$export$23a07ddfce9fad49 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((x, reps, fill)=>String.prototype.padEnd.call(x, reps, fill)
);
const $bb63e7e1bbd7ff6a$export$4b80e395e36b5a56 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((f, M)=>M.forEach(f)
);
const $bb63e7e1bbd7ff6a$export$871de8747c9eaa88 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((f, M)=>M.map(f)
);
const $bb63e7e1bbd7ff6a$export$3dea766d36a8935f = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((p, M)=>M.filter(p)
);
const $bb63e7e1bbd7ff6a$export$533b26079ad0b4b = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((reducer, seed, M)=>M.reduce(reducer, seed)
);
const $bb63e7e1bbd7ff6a$export$7fef8bcdbb34f435 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((reducer, seed, M)=>M.reduceRight(reducer, seed)
);
const $bb63e7e1bbd7ff6a$export$c44985b87d605eff = $bb63e7e1bbd7ff6a$export$f672e0b6f7222cd7($bb63e7e1bbd7ff6a$export$871de8747c9eaa88, $bb63e7e1bbd7ff6a$export$977f3f6a9323c0f6);
function $bb63e7e1bbd7ff6a$export$3e9f948b41964866(iterable) {
    if (iterable.entries && $bb63e7e1bbd7ff6a$export$f6e2535fb5126e54(iterable.entries)) return [
        ...iterable.entries()
    ];
    return Object.entries(iterable);
}
function $bb63e7e1bbd7ff6a$export$68c286be0e7e55b7(iterable) {
    if (iterable.values && $bb63e7e1bbd7ff6a$export$f6e2535fb5126e54(iterable.values)) return [
        ...iterable.values()
    ];
    return Object.values(iterable);
}
function $bb63e7e1bbd7ff6a$export$ed97f33186d4b816(iterable) {
    if (iterable.keys && $bb63e7e1bbd7ff6a$export$f6e2535fb5126e54(iterable.keys)) return [
        ...iterable.keys()
    ];
    return Object.keys(iterable);
}
const $bb63e7e1bbd7ff6a$export$7ac989ec0c9c279 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((keyMap, a)=>{
    const result = $bb63e7e1bbd7ff6a$export$6c40052bed430212(a);
    for (const [oldKey, newKey] of $bb63e7e1bbd7ff6a$export$3e9f948b41964866(keyMap))if ($bb63e7e1bbd7ff6a$export$5c90113a285f2241(result)) {
        result.set(newKey, a.get(oldKey));
        result.delete(oldKey);
    } else {
        result[newKey] = a[oldKey];
        delete result[oldKey];
    }
    return result;
});
const $bb63e7e1bbd7ff6a$export$ce7eaaed37329a1b = (fn)=>function innerDeepMap(tree) {
        return Array.prototype.map.call(tree, (element)=>Array.isArray(element) ? innerDeepMap(element) : fn(element)
        );
    }
;
const $bb63e7e1bbd7ff6a$var$composeM2 = (f, g)=>function innerComposeM2(...args) {
        return g.apply(this, args).flatMap(f);
    }
;
const $bb63e7e1bbd7ff6a$export$fe41fac84f1fd82f = (...Ms)=>Ms.reduce($bb63e7e1bbd7ff6a$var$composeM2)
;
const $bb63e7e1bbd7ff6a$export$4e54ff84c97bdc0c = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((fn, a1, a2)=>a1.map(fn).ap(a2)
);
const $bb63e7e1bbd7ff6a$export$8402e5acf634c0df = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((fn, a1, a2, a3)=>a1.map(fn).ap(a2).ap(a3)
);
const $bb63e7e1bbd7ff6a$export$3a582736e2273011 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((fn, a1, a2, a3, a4)=>a1.map(fn).ap(a2).ap(a3).ap(a4)
);
const $bb63e7e1bbd7ff6a$export$5635d7ef4b8fee1c = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((fn, F)=>$bb63e7e1bbd7ff6a$export$871de8747c9eaa88.call(F, fn)
);
const $bb63e7e1bbd7ff6a$var$composeAsync2 = (f, g)=>async function innerComposeAsync(...args) {
        return await f.call(this, await g.call(this, ...args));
    }
;
const $bb63e7e1bbd7ff6a$export$9dbe56a5aba4f4b4 = (...fns)=>fns.reduce($bb63e7e1bbd7ff6a$var$composeAsync2)
;
const $bb63e7e1bbd7ff6a$export$507da1b08fb8a738 = (...fns)=>fns.reduceRight($bb63e7e1bbd7ff6a$var$composeAsync2)
;
const $bb63e7e1bbd7ff6a$export$a939ddd3409bd57a = async (f, a)=>await Promise.all(a.map(f))
;
const $bb63e7e1bbd7ff6a$export$b720f6c8e101da88 = async (f, init, a)=>await a.reduce((p, val)=>p.then(()=>f(val)
        )
    , Promise.resolve(init))
;
const $bb63e7e1bbd7ff6a$export$30ee5c6810ce1ce2 = async (f, a)=>await $bb63e7e1bbd7ff6a$export$a939ddd3409bd57a(f, a).then((bools)=>a.filter((_, i)=>Boolean(bools[i])
        )
    )
;
const $bb63e7e1bbd7ff6a$export$40fa977508bcf282 = (M)=>M.flat()
;
const $bb63e7e1bbd7ff6a$export$5b8affa63fc6df16 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((f, M)=>M.flatMap(f)
);
const $bb63e7e1bbd7ff6a$export$93e2b83da34ff82a = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((f, M)=>M.fold(f)
);
const $bb63e7e1bbd7ff6a$export$2a722db47863bac2 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((e, M)=>M.getOrElseThrow(e)
);
const $bb63e7e1bbd7ff6a$export$9663ddc1cf085b32 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((a, b)=>a === b
);
const $bb63e7e1bbd7ff6a$export$e16d8520af44a096 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((x, y)=>x + y
);
const $bb63e7e1bbd7ff6a$export$ecceddf365c72028 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((x, y)=>y + x
);
const $bb63e7e1bbd7ff6a$export$4e2d2ead65e5f7e3 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((x, y)=>x - y
);
const $bb63e7e1bbd7ff6a$export$4ed4137bff330a54 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((x, y)=>y - x
);
const $bb63e7e1bbd7ff6a$export$2060d2db72cce88f = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((x, y)=>x * y
);
const $bb63e7e1bbd7ff6a$export$58b562b9c9d46bb6 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((x, y)=>y * x
);
const $bb63e7e1bbd7ff6a$export$cd007d971a5a2143 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((x, y)=>x / y
);
const $bb63e7e1bbd7ff6a$export$7e7fa3dcb6d62f31 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((x, y)=>y / x
);
const $bb63e7e1bbd7ff6a$export$7978a6ddf29f4374 = (n)=>(x)=>Math.round(x * Math.pow(10, n)) / Math.pow(10, n)
;
const $bb63e7e1bbd7ff6a$export$9c297f60e22e3389 = (base, power)=>power === 0 ? 1 : power & 1 ? base * $bb63e7e1bbd7ff6a$export$9c297f60e22e3389(base, power - 1) : $bb63e7e1bbd7ff6a$export$9c297f60e22e3389(base * base, power >> 1)
;
const $bb63e7e1bbd7ff6a$export$5fd5031fecdacec3 = (a)=>a[0]
;
const $bb63e7e1bbd7ff6a$export$4c7897fafd92b108 = (a)=>a[a.length - 1]
;
const $bb63e7e1bbd7ff6a$export$7ecc1a3b11b57dab = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((f, arr)=>arr.every(f)
);
const $bb63e7e1bbd7ff6a$export$ad14ef4001db2bcd = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((f, arr)=>arr.some(f)
);
const $bb63e7e1bbd7ff6a$export$71aa6c912b956294 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((f, arr)=>arr.find(f)
);
const $bb63e7e1bbd7ff6a$export$8a63f25cc62965f1 = (...args)=>args.reduce((x, y)=>x + y
    , 0)
;
const $bb63e7e1bbd7ff6a$export$cc6710ee5f037d57 = (ns)=>$bb63e7e1bbd7ff6a$export$8a63f25cc62965f1(...ns) / ns.length
;
const $bb63e7e1bbd7ff6a$export$f7e2c8231c57a8bd = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((sep, a)=>a.join(sep)
);
const $bb63e7e1bbd7ff6a$export$b29f828819edca8d = (arr, a, b)=>arr.reduce((acc, cv)=>a(cv) ? (acc[0].push(cv), acc) : b(cv) ? (acc[1].push(cv), acc) : acc
    , [
        [],
        []
    ])
;
const $bb63e7e1bbd7ff6a$export$66b4a470e4119e42 = (f, ...iters)=>{
    const min = Math.min(...$bb63e7e1bbd7ff6a$export$c44985b87d605eff('length')(iters));
    const result = [];
    for(let i = 0; i < min; i++)result.push(f(...$bb63e7e1bbd7ff6a$export$c44985b87d605eff(i)(iters)));
    return result;
};
const $bb63e7e1bbd7ff6a$export$b035e44d7bb4278f = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((f, a)=>[
        ...a
    ].sort(f)
);
const $bb63e7e1bbd7ff6a$export$4659b591c19bdf3d = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((re, s)=>re.test(s)
);
const $bb63e7e1bbd7ff6a$export$77ad94ebf1c2b9ed = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((re, rpl, s)=>s.replace(re, rpl)
);
const $bb63e7e1bbd7ff6a$export$65980d18b75784e2 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((sep, s)=>s.split(sep)
);
const $bb63e7e1bbd7ff6a$export$84b9399c77df0edf = (s)=>s.toLowerCase()
;
const $bb63e7e1bbd7ff6a$export$d80c591a9e16646 = (s)=>s.toUpperCase()
;
const $bb63e7e1bbd7ff6a$export$68159836694e22c1 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((s1, s2)=>`${s1}${s2}`
);
const $bb63e7e1bbd7ff6a$export$10d8903dec122b9d = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((s1, s2)=>`${s2}${s1}`
);
const $bb63e7e1bbd7ff6a$export$d234c058d1d4e435 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((f, g)=>{
    try {
        return f();
    } catch (e) {
        return g(e);
    }
});
const $bb63e7e1bbd7ff6a$export$d02631cccf789723 = (start, end, step = start < end ? 1 : -1)=>{
    let index = -1;
    let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
    const result = new Array(length);
    while(length--){
        result[++index] = start;
        start += step;
    }
    return result;
};
function $bb63e7e1bbd7ff6a$export$d2de3aaeafa91619(fn) {
    let done = false;
    let result;
    return function once(...args) {
        return !done ? (done = true, result = fn.apply(this, args), result) : result;
    };
}
function $bb63e7e1bbd7ff6a$export$fc10aeed3a532e2a(fn) {
    const cache = Object.create(null);
    const toKey = (key)=>JSON.stringify(key)
    ;
    const isPrimitive = (x)=>typeof x === 'number' || typeof x === 'string' || typeof x === 'boolean'
    ;
    return function memoize(...args) {
        const key = args.length === 1 && isPrimitive(args[0]) ? args[0] : toKey(args);
        return key in cache ? cache[key] : cache[key] = fn.apply(this, args);
    };
}
const $bb63e7e1bbd7ff6a$export$61fc7d43ac8f84b0 = (delay)=>{
    let pending = false;
    return function debounce(fn) {
        if (pending) clearTimeout(pending);
        pending = setTimeout(()=>fn.call(this)
        , delay);
    };
};
const $bb63e7e1bbd7ff6a$export$63fce1f81095ac4f = (delay)=>{
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
function $bb63e7e1bbd7ff6a$export$67b2770bcd4c0853(behaviour, sharedBehaviour = {
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
    for (const property of sharedKeys)Object.defineProperty(mixin, property, {
        value: sharedBehaviour[property],
        enumerable: Object.prototype.propertyIsEnumerable.call(sharedBehaviour, property)
    });
    Object.defineProperty(mixin, Symbol.hasInstance, {
        value: (instance)=>!!instance[typeTag]
    });
    return mixin;
}
const $bb63e7e1bbd7ff6a$var$detectCollision = (...descriptors)=>descriptors.flatMap(Object.keys).reduce($bb63e7e1bbd7ff6a$var$sortReducer, []).reduce($bb63e7e1bbd7ff6a$var$collisionReducer, []).forEach((c)=>console.log(`[WARN] Collision found: ${c}`)
    )
;
const $bb63e7e1bbd7ff6a$var$sortReducer = (accumulator, value)=>{
    const nextIndex = accumulator.findIndex((i)=>value < i
    );
    const index = nextIndex > -1 ? nextIndex : accumulator.length;
    accumulator.splice(index, 0, value);
    return accumulator;
};
const $bb63e7e1bbd7ff6a$var$collisionReducer = (accumulator, value, index, arr)=>value === arr[index + 1] ? [
        ...accumulator,
        value
    ] : accumulator
;
const $bb63e7e1bbd7ff6a$var$isDescriptor = (obj)=>obj && (obj.state || obj.methods)
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
        if ($bb63e7e1bbd7ff6a$var$isDescriptor(descriptor)) base = {
            ...base.state,
            ...base.methods,
            ...base.interop
        };
        $bb63e7e1bbd7ff6a$var$detectCollision(base, ...mixins);
        if (!Object.isExtensible(base) || Object.isSealed(base)) throw new TypeError('Unable to concatenate mixins into base object. Object is either not extensible or has been sealed');
        return Object.assign({
            ...base
        }, ...mixins);
    },
    enumerable: false,
    writable: false,
    configurable: false
});
function $bb63e7e1bbd7ff6a$export$7e32b29e1cb162e1(obj) {
    if (obj && typeof obj === 'object' && !Object.isFrozen(obj)) {
        Object.getOwnPropertyNames(obj).forEach((name)=>$bb63e7e1bbd7ff6a$export$7e32b29e1cb162e1(obj[name])
        );
        Object.freeze(obj);
    }
    return obj;
}
function $bb63e7e1bbd7ff6a$export$77ca992757d61efd(arr, offset = 0) {
    const len = Math.max(0, arr.length - offset);
    const newArray = new Array(len);
    for(let i = 0; i < len; i++)newArray[i] = $bb63e7e1bbd7ff6a$export$6c40052bed430212(arr[i + offset]);
    return newArray;
}
function $bb63e7e1bbd7ff6a$export$6c40052bed430212(obj) {
    if ($bb63e7e1bbd7ff6a$export$43bee75e5e14138e(obj)) return $bb63e7e1bbd7ff6a$export$77ca992757d61efd(obj);
    let aux = obj;
    if (obj && typeof obj === 'object') {
        aux = new obj.constructor();
        if ($bb63e7e1bbd7ff6a$export$5c90113a285f2241(aux)) for (const key of obj.keys()){
            const keyCopy = $bb63e7e1bbd7ff6a$export$6c40052bed430212(key);
            aux.set(keyCopy, obj.get(key));
        }
        else if ($bb63e7e1bbd7ff6a$export$6750766a7c7ec627(aux)) for (const val of obj.values())aux.add(val);
        else Object.getOwnPropertyNames(obj).forEach((prop)=>aux[prop] = $bb63e7e1bbd7ff6a$export$6c40052bed430212(obj[prop])
        );
    }
    return aux;
}
Object.deepFreeze = Object.deepFreeze || $bb63e7e1bbd7ff6a$export$7e32b29e1cb162e1;
const $bb63e7e1bbd7ff6a$export$fc3a40dec7b33bf = $bb63e7e1bbd7ff6a$export$f672e0b6f7222cd7(Object.seal, Object.deepFreeze);
function $bb63e7e1bbd7ff6a$export$9cb4719e2e525b7a(a, b) {
    if (a === b) return true;
    if (a && b && $bb63e7e1bbd7ff6a$export$a6cdc56e425d0d0a(a) && $bb63e7e1bbd7ff6a$export$a6cdc56e425d0d0a(b)) {
        if (a.constructor !== b.constructor) return false;
        let length, i, keys;
        if ($bb63e7e1bbd7ff6a$export$43bee75e5e14138e(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; (i--) !== 0;)if (!$bb63e7e1bbd7ff6a$export$9cb4719e2e525b7a(a[i], b[i])) return false;
            return true;
        }
        if ($bb63e7e1bbd7ff6a$export$5c90113a285f2241(a) && $bb63e7e1bbd7ff6a$export$5c90113a285f2241(b)) {
            if (a.size !== b.size) return false;
            for (i of a.entries())if (!b.has(i[0])) return false;
            for (i of a.entries())if (!$bb63e7e1bbd7ff6a$export$9cb4719e2e525b7a(i[1], b.get(i[0]))) return false;
            return true;
        }
        if ($bb63e7e1bbd7ff6a$export$6750766a7c7ec627(a) && $bb63e7e1bbd7ff6a$export$6750766a7c7ec627(b)) {
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
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; (i--) !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = length; (i--) !== 0;){
            const key = keys[i];
            if (!$bb63e7e1bbd7ff6a$export$9cb4719e2e525b7a(a[key], b[key])) return false;
        }
        return true;
    }
    return a !== a && b !== b;
}



// Maybe
function $37dcf6eef4b94f13$var$throwError(error) {
    throw error;
}
function $37dcf6eef4b94f13$var$errorWith(str) {
    throw new TypeError(str);
}
class $37dcf6eef4b94f13$export$ad3bd6e4e1ec5d06 {
    #value;
    [Symbol.toStringTag] = 'Maybe';
    constructor(v){
        this.#value = v;
    }
    get() {
        return this.value ?? $37dcf6eef4b94f13$var$errorWith('Unable to get from a Maybe#Nothing');
    }
    getOrElse(defaultValue) {
        return this.value ?? defaultValue;
    }
    getOrElseThrow(error) {
        return this.value ?? $37dcf6eef4b94f13$var$throwError(error);
    }
    get value() {
        return this.#value;
    }
    static of(v) {
        return v == null ? new $37dcf6eef4b94f13$export$bebe9059409a0d04(v) : new $37dcf6eef4b94f13$export$8a67b48435b5d073(v);
    }
    static fromEmpty(v) {
        return $37dcf6eef4b94f13$export$ad3bd6e4e1ec5d06.of(v).map((x)=>x.length === 0 ? null : x
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
        yield this.isNothing ? new $37dcf6eef4b94f13$export$bebe9059409a0d04(this.#value) : undefined;
        yield this.isJust ? new $37dcf6eef4b94f13$export$8a67b48435b5d073(this.#value) : undefined;
    }
}
class $37dcf6eef4b94f13$export$8a67b48435b5d073 extends $37dcf6eef4b94f13$export$ad3bd6e4e1ec5d06 {
    get isJust() {
        return true;
    }
    get isNothing() {
        return false;
    }
    fold(fn = (x)=>x
    ) {
        return fn(this.value);
    }
    filter(fn = (x)=>x
    ) {
        return fn(this.value) ? new $37dcf6eef4b94f13$export$8a67b48435b5d073(a) : new $37dcf6eef4b94f13$export$bebe9059409a0d04();
    }
    map(fn) {
        return $37dcf6eef4b94f13$export$ad3bd6e4e1ec5d06.of(fn(this.value));
    }
    flatMap(fn) {
        return $37dcf6eef4b94f13$export$ad3bd6e4e1ec5d06.of(fn(this.value).merge());
    }
    ap(Ma) {
        return Ma.isNothing ? Ma : $bb63e7e1bbd7ff6a$export$f6e2535fb5126e54(this.value) ? $37dcf6eef4b94f13$export$ad3bd6e4e1ec5d06.of($bb63e7e1bbd7ff6a$export$f6e2535fb5126e54(Ma.merge()) ? Ma.merge().call(Ma, this.value) : this.value(Ma.merge())) : $37dcf6eef4b94f13$export$ad3bd6e4e1ec5d06.of(Ma.merge().call(Ma, this.value));
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
class $37dcf6eef4b94f13$export$bebe9059409a0d04 extends $37dcf6eef4b94f13$export$ad3bd6e4e1ec5d06 {
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
class $37dcf6eef4b94f13$export$8fdcabde73f49165 {
    #value;
    constructor(v){
        this.#value = v;
    }
    get value() {
        return this.#value;
    }
    static of(v, error = 'Null argument provided') {
        return v == null ? new $37dcf6eef4b94f13$export$5ebc9a4af3ac0850(error) : new $37dcf6eef4b94f13$export$ffa3d9fee6fd705a(v);
    }
    static fromEmpty(a) {
        return $37dcf6eef4b94f13$export$8fdcabde73f49165.of(a).map((x)=>x.length === 0 ? null : x
        );
    }
    static fromPromise(p) {
        return p.then((result)=>new $37dcf6eef4b94f13$export$ffa3d9fee6fd705a(result)
        ).catch((err)=>new $37dcf6eef4b94f13$export$5ebc9a4af3ac0850(err.message)
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
        yield this.isFailure ? new $37dcf6eef4b94f13$export$5ebc9a4af3ac0850(this.#value) : undefined;
        yield this.isSuccess ? new $37dcf6eef4b94f13$export$ffa3d9fee6fd705a(this.#value) : undefined;
    }
}
class $37dcf6eef4b94f13$export$5ebc9a4af3ac0850 extends $37dcf6eef4b94f13$export$8fdcabde73f49165 {
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
        $37dcf6eef4b94f13$var$errorWith('Unable to get from a Result#Failure');
    }
    merge() {
        $37dcf6eef4b94f13$var$errorWith('Unable to merge from a Result#Failure');
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
class $37dcf6eef4b94f13$export$ffa3d9fee6fd705a extends $37dcf6eef4b94f13$export$8fdcabde73f49165 {
    get isSuccess() {
        return true;
    }
    get isFailure() {
        return false;
    }
    map(fn) {
        return $37dcf6eef4b94f13$export$8fdcabde73f49165.of(fn(this.value));
    }
    flatMap(fn) {
        return $37dcf6eef4b94f13$export$8fdcabde73f49165.of(fn(this.value).merge());
    }
    ap(Rs) {
        return Rs.isFailure ? Rs : $bb63e7e1bbd7ff6a$export$f6e2535fb5126e54(this.value) ? $37dcf6eef4b94f13$export$8fdcabde73f49165.of($bb63e7e1bbd7ff6a$export$f6e2535fb5126e54(Rs.merge()) ? Rs.merge().call(Rs, this.value) : this.value(Rs.merge())) : $37dcf6eef4b94f13$export$8fdcabde73f49165.of(Rs.merge().call(Rs, this.value));
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
class $37dcf6eef4b94f13$export$fa957d01b0310fd7 {
    constructor(fn, msg){
        try {
            return new $37dcf6eef4b94f13$export$ffa3d9fee6fd705a(fn());
        } catch (e) {
            return new $37dcf6eef4b94f13$export$5ebc9a4af3ac0850(msg || e.message);
        }
    }
    static of(fn, msg) {
        return new $37dcf6eef4b94f13$export$fa957d01b0310fd7(fn, msg);
    }
}
class $37dcf6eef4b94f13$export$17de313a76857e4a {
    constructor(){
        throw new Error('Must use static method of');
    }
    static async of(fn, msg) {
        try {
            const result = await fn();
            return new $37dcf6eef4b94f13$export$ffa3d9fee6fd705a(result);
        } catch (e) {
            return new $37dcf6eef4b94f13$export$5ebc9a4af3ac0850(msg || e.message);
        }
    }
}
class $37dcf6eef4b94f13$export$8f8422ac5947a789 {
    [Symbol.toStringTag] = 'IO';
    constructor(fn){
        this.unsafePerformIO = fn;
    }
    map(fn) {
        return new $37dcf6eef4b94f13$export$8f8422ac5947a789($bb63e7e1bbd7ff6a$export$f672e0b6f7222cd7(fn, this.unsafePerformIO));
    }
    flatMap(fn) {
        return this.map(fn).merge();
    }
    ap(f) {
        return this.flatMap((fn)=>f.map(fn)
        );
    }
    merge() {
        return new $37dcf6eef4b94f13$export$8f8422ac5947a789(()=>this.unsafePerformIO().unsafePerformIO()
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
        return new $37dcf6eef4b94f13$export$8f8422ac5947a789(()=>x
        );
    }
}
class $37dcf6eef4b94f13$export$d8552d785efb2cb8 {
    [Symbol.toStringTag] = 'IOAsync';
    constructor(fn){
        this.unsafePerformIO = fn;
    }
    async map(fn) {
        return new $37dcf6eef4b94f13$export$8f8422ac5947a789($bb63e7e1bbd7ff6a$export$9dbe56a5aba4f4b4(fn, this.unsafePerformIO));
    }
    async flatMap(fn) {
        return await this.map(fn).merge();
    }
    async merge() {
        return new $37dcf6eef4b94f13$export$d8552d785efb2cb8(async ()=>await this.unsafePerformIO().unsafePerformIO()
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
    static of(fn) {
        return new $37dcf6eef4b94f13$export$d8552d785efb2cb8(async ()=>await fn
        );
    }
}
class $37dcf6eef4b94f13$export$d63d7cff08fe4dc9 {
    #left;
    #right;
    [Symbol.toStringTag] = 'Pair';
    constructor(left, right){
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
        return new $37dcf6eef4b94f13$export$d63d7cff08fe4dc9(fn(this.#left), fn(this.#right));
    }
    flatMap(fn) {
        return new $37dcf6eef4b94f13$export$d63d7cff08fe4dc9(...fn(this.#left, this.#right));
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
    *[Symbol.iterator]() {
        yield this.#left;
        yield this.#right;
    }
    static of(left, right) {
        return new $37dcf6eef4b94f13$export$d63d7cff08fe4dc9(left, right);
    }
    static eq(pairA, pairB) {
        return pairA.left === pairB.left && pairA.right === pairB.right;
    }
}
class $37dcf6eef4b94f13$export$cb55c7e8798604bb {
    #left;
    #middle;
    #right;
    [Symbol.toStringTag] = 'Triple';
    constructor(left, middle, right){
        this.#left = left;
        this.#middle = middle;
        this.#right = right;
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
    map(fn) {
        return new $37dcf6eef4b94f13$export$cb55c7e8798604bb(fn(this.#left), fn(this.#middle), fn(this.#right));
    }
    flatMap(fn) {
        return new $37dcf6eef4b94f13$export$cb55c7e8798604bb(...fn(this.#left, this.#middle, this.#right));
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
    *[Symbol.iterator]() {
        yield this.#left;
        yield this.#middle;
        yield this.#right;
    }
    static of(left, middle, right) {
        return new $37dcf6eef4b94f13$export$cb55c7e8798604bb(left, middle, right);
    }
    static eq(tripleA, tripleB) {
        return tripleA.left === tripleB.left && tripleA.middle === tripleB.middle && tripleA.right === tripleB.right;
    }
}
class $37dcf6eef4b94f13$export$deb82508dd66d288 {
    #types = new Set();
    [Symbol.toStringTag] = 'Enum';
    constructor(types){
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
    [Symbol.iterator]() {
        return this.#types[Symbol.iterator];
    }
    static of(...types) {
        return new $37dcf6eef4b94f13$export$deb82508dd66d288(types);
    }
}


function $033eb0854dc23b5e$export$5d730b7aed1a3eb0(apiEndpoint, options1 = {
    storageKey: `${Math.round(Math.random() * 100000)}_client_key`,
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
            return client(url, 'GET', options);
        },
        post (url, body, options) {
            return client(url, 'POST', {
                ...options,
                body: JSON.stringify(body)
            });
        },
        put (url, body, options) {
            return client(url, 'PUT', {
                ...options,
                body: JSON.stringify(body)
            });
        },
        delete (url, options) {
            return client(url, 'DELETE', options);
        }
    };
}



const $32f169118ef24707$export$f580247ac376296f = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2(function* mapWith(fn, iterable) {
    for (const element of iterable)yield fn(element);
});
const $32f169118ef24707$export$6162ac8ba603caa9 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2(function* mapAllWith(fn, iterable) {
    for (const element of iterable)yield* fn(element);
});
const $32f169118ef24707$export$7c961d426bc3e8f3 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2(function* filterWith(fn, iterable) {
    for (const element of iterable)if (fn(element)) yield element;
});
const $32f169118ef24707$export$8e16b83750b44988 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2(function* compact(iterable) {
    for (const element of iterable)if (element != null) yield element;
});
const $32f169118ef24707$export$404d2aad5e5c5508 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2(function* untilWith(fn, iterable) {
    for (const element of iterable){
        if (fn(element)) break;
        yield element;
    }
});
const $32f169118ef24707$export$43128fadae87b74a = (iterable)=>iterable[Symbol.iterator]().next().value
;
function* $32f169118ef24707$export$c58417706a208278(iterable) {
    const iterator = iterable[Symbol.iterator]();
    iterator.next();
    yield* iterator;
}
const $32f169118ef24707$export$b7df5d561049483a = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2(function* take(numberToTake, iterable) {
    const iterator = iterable[Symbol.iterator]();
    for(let i = 0; i < numberToTake; ++i){
        const { done: done , value: value  } = iterator.next();
        if (!done) yield value;
    }
});
const $32f169118ef24707$export$663103110d94aac9 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2(function* drop(numberToDrop, iterable) {
    if (numberToDrop >= iterable.length) return;
    const iterator = iterable[Symbol.iterator]();
    let i = 0;
    while((i++) < numberToDrop)iterator.next();
    do {
        const { done: done , value: value  } = iterator.next();
        if (!done) yield value;
    }while (++i <= iterable.length)
});
function* $32f169118ef24707$export$8901015135f2fb22(...iterables) {
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
function* $32f169118ef24707$export$b634740ce272acb5(zipper, ...iterables) {
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
const $32f169118ef24707$export$287c6381f647675d = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((fn, seed, iterable)=>{
    let accumulator = seed;
    for (const element of iterable)accumulator = fn(accumulator, element);
    return accumulator;
});
function $32f169118ef24707$export$34e2bedfca0f76a9(generator) {
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


const $564c2f3fcb7ef12e$export$53ebe40b44acc773 = (behaviour, sharedBehaviour = {
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
    for (const property of sharedKeys)Object.defineProperty(mixin, property, {
        value: sharedBehaviour[property],
        enumerable: Object.prototype.propertyIsEnumerable.call(sharedBehaviour, property)
    });
    Object.defineProperty(mixin, Symbol.hasInstance, {
        value: (instance)=>!!instance[typeTag]
    });
    return mixin;
};
function $564c2f3fcb7ef12e$export$487514b351402d1b(behaviour) {
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
function $564c2f3fcb7ef12e$export$f6afc91249163ff2(behaviour) {
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
function $564c2f3fcb7ef12e$export$530764fd6bf3e88b(behaviour) {
    const instanceKeys = Reflect.ownKeys(behaviour);
    return function prepend(clazz) {
        for (const prop of instanceKeys){
            if (clazz.prototype[prop]) {
                const overriddenMethodFunction = clazz.prototype[prop];
                Object.defineProperty(clazz.prototype, prop, {
                    value (...args) {
                        const prependValue = behaviour[prop].apply(this, args);
                        if (prependValue === undefined || !!prependValue) return overriddenMethodFunction.apply(this, args);
                    },
                    writable: true
                });
            } else throw new Error(`Attempt to override non-existant method ${prop}`);
        }
        return clazz;
    };
}
function $564c2f3fcb7ef12e$export$cf1a5a0c68d6e80b(behaviour) {
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
const $564c2f3fcb7ef12e$export$742acabee3dd6465 = (...fns)=>function after(target, name, descriptor) {
        const method = descriptor.value;
        descriptor.value = function withAfter(...args) {
            const value = method.apply(this, args);
            for (const fn of fns)fn.apply(this, args);
            return value;
        };
    }
;
const $564c2f3fcb7ef12e$export$1c4c1e3098bf5ebe = (...fns)=>function before(target, name, descriptor) {
        const method = descriptor.value;
        descriptor.value = function withBefore(...args) {
            for (const fn of fns)fn.apply(this, args);
            return method.apply(this, args);
        };
    }
;
const $564c2f3fcb7ef12e$export$c597e4e4259c9301 = (...fns)=>function provided(target, name, descriptor) {
        const method = descriptor.value;
        descriptor.value = function withProvided(...args) {
            for (const fn of fns)if (!fn.apply(this, args)) return;
            return method.apply(this, args);
        };
    }
;
const $564c2f3fcb7ef12e$export$6f0673371501d6b6 = (...fns)=>function unless(target, name, descriptor) {
        const method = descriptor.value;
        descriptor.value = function withUnless(...args) {
            for (const fn of fns)if (fn.apply(this, args)) return;
            return method.apply(this, args);
        };
    }
;
const $564c2f3fcb7ef12e$export$4636581650fd0e55 = (decorator)=>function wrapWith(target, name, descriptor) {
        descriptor.value = decorator(descriptor.value);
    }
;
const $564c2f3fcb7ef12e$export$a253cce80efe6b1c = (behaviour, ...methodNames)=>(clazz)=>{
        for (const methodName of methodNames)Object.defineProperty(clazz.prototype, methodName, {
            value: behaviour(clazz.prototype[methodName]),
            writable: true
        });
        return clazz;
    }
;
const $564c2f3fcb7ef12e$export$8fd4d608a3485fcf = (behaviour, ...methodNames)=>(clazz)=>{
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
const $564c2f3fcb7ef12e$export$c7fd1518a7cbf3dd = (behaviour, ...methodNames)=>(clazz)=>{
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
const $564c2f3fcb7ef12e$export$8f64980a2e163c7f = (behaviour)=>(superclass)=>$564c2f3fcb7ef12e$export$53ebe40b44acc773(behaviour)(class extends superclass {
        })
;
const $564c2f3fcb7ef12e$export$6e6fbaf3ea747b50 = (c)=>(...args)=>new c(...args)
;


var $600cd092ab85664e$exports = {};

$parcel$export($600cd092ab85664e$exports, "LazyCollection", () => $600cd092ab85664e$export$4f803f7f128c2832);
$parcel$export($600cd092ab85664e$exports, "Numbers", () => $600cd092ab85664e$export$bc00d4d99d9c6e7d);
$parcel$export($600cd092ab85664e$exports, "Pair", () => $600cd092ab85664e$export$d63d7cff08fe4dc9);
$parcel$export($600cd092ab85664e$exports, "Stack", () => $600cd092ab85664e$export$694e0d28c7ffc90c);
$parcel$export($600cd092ab85664e$exports, "Lazy", () => $600cd092ab85664e$export$b624eff549462981);
const $600cd092ab85664e$export$4f803f7f128c2832 = {
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
        }, $600cd092ab85664e$export$4f803f7f128c2832);
    },
    reduce (fn, seed) {
        const iterator = this[Symbol.iterator]();
        let iterationResult;
        let accumulator = seed;
        while(iterationResult = iterator.next(), !iterationResult.done)accumulator = fn(accumulator, iterationResult.value);
        return accumulator;
    },
    filter (fn) {
        return Object.assign({
            [Symbol.iterator]: ()=>{
                const iterator = this[Symbol.iterator]();
                return {
                    next: ()=>{
                        let done, value;
                        do ({ done: done , value: value  } = iterator.next());
                        while (!done && !fn(value))
                        return {
                            done: done,
                            value: value
                        };
                    }
                };
            }
        }, $600cd092ab85664e$export$4f803f7f128c2832);
    },
    find (fn) {
        return Object.assign({
            [Symbol.iterator]: ()=>{
                const iterator = this[Symbol.iterator]();
                return {
                    next: ()=>{
                        let done, value;
                        do ({ done: done , value: value  } = iterator.next());
                        while (!done && !fn(value))
                        return {
                            done: done,
                            value: value
                        };
                    }
                };
            }
        }, $600cd092ab85664e$export$4f803f7f128c2832);
    },
    until (fn) {
        return Object.assign({
            [Symbol.iterator]: ()=>{
                const iterator = this[Symbol.iterator]();
                return {
                    next: ()=>{
                        let { done: done , value: value  } = iterator.next();
                        done = done || fn(value);
                        return {
                            done: done,
                            value: done ? undefined : value
                        };
                    }
                };
            }
        }, $600cd092ab85664e$export$4f803f7f128c2832);
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
        }, $600cd092ab85664e$export$4f803f7f128c2832);
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
        }, $600cd092ab85664e$export$4f803f7f128c2832);
    },
    drop (numberToDrop) {
        return Object.assign({
            [Symbol.iterator]: ()=>{
                const iterator = this[Symbol.iterator]();
                while(numberToDrop-- > 0)iterator.next();
                return {
                    next: ()=>{
                        let { done: done , value: value  } = iterator.next();
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
const $600cd092ab85664e$export$bc00d4d99d9c6e7d = Object.assign({
    *[Symbol.iterator] () {
        let n = 0;
        while(true)yield n++;
    }
}, $600cd092ab85664e$export$4f803f7f128c2832);
const $600cd092ab85664e$var$EMPTY = {
    isEmpty: ()=>true
};
const $600cd092ab85664e$export$d63d7cff08fe4dc9 = (car, cdr = $600cd092ab85664e$var$EMPTY)=>Object.assign({
        car: car,
        cdr: cdr,
        isEmpty: ()=>false
        ,
        [Symbol.iterator] () {
            let currentPair = this;
            return {
                next: ()=>{
                    if (currentPair.isEmpty()) return {
                        done: true
                    };
                    else {
                        const value = currentPair.car;
                        currentPair = currentPair.cdr;
                        return {
                            done: false,
                            value: value
                        };
                    }
                }
            };
        }
    }, $600cd092ab85664e$export$4f803f7f128c2832)
;
$600cd092ab85664e$export$d63d7cff08fe4dc9.from = (iterable)=>(function iterationToList(iteration) {
        const { done: done , value: value  } = iteration.next();
        return done ? $600cd092ab85664e$var$EMPTY : $600cd092ab85664e$export$d63d7cff08fe4dc9(value, iterationToList(iteration));
    })(iterable[Symbol.iterator]())
;
const $600cd092ab85664e$export$694e0d28c7ffc90c = ()=>Object.assign({
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
    }, $600cd092ab85664e$export$4f803f7f128c2832)
;
$600cd092ab85664e$export$694e0d28c7ffc90c.from = function from(iterable) {
    const stack = this();
    for (let element of iterable)stack.push(element);
    return stack;
};
function $600cd092ab85664e$export$b624eff549462981(target) {
    return Object.assign(target, $600cd092ab85664e$export$4f803f7f128c2832);
}


var $24005940e10e0512$exports = {};

$parcel$export($24005940e10e0512$exports, "lens", () => $24005940e10e0512$export$21cde5187c2605a3);
$parcel$export($24005940e10e0512$exports, "view", () => $24005940e10e0512$export$c4ddc81c7b2c8d7a);
$parcel$export($24005940e10e0512$exports, "set", () => $24005940e10e0512$export$adaa4cf7ef1b65be);
$parcel$export($24005940e10e0512$exports, "over", () => $24005940e10e0512$export$fb4902fd9e525693);
$parcel$export($24005940e10e0512$exports, "lensProp", () => $24005940e10e0512$export$a6ba95b157529836);


// Lenses
class $24005940e10e0512$var$Constant {
    #value;
    constructor(v){
        this.#value = $37dcf6eef4b94f13$export$ad3bd6e4e1ec5d06.of(v);
        this.map = ()=>this
        ;
    }
    get value() {
        return this.#value;
    }
}
class $24005940e10e0512$var$Variable {
    #value;
    constructor(v){
        this.#value = $37dcf6eef4b94f13$export$ad3bd6e4e1ec5d06.of(v);
        this.map = (fn)=>new $24005940e10e0512$var$Variable(fn(v))
        ;
    }
    get value() {
        return this.#value;
    }
}
const $24005940e10e0512$export$21cde5187c2605a3 = (getter, setter)=>(fn)=>(obj)=>fn(getter(obj)).map((value)=>setter(value, obj)
            )
;
const $24005940e10e0512$export$c4ddc81c7b2c8d7a = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((lensAttr, obj)=>lensAttr((x)=>new $24005940e10e0512$var$Constant(x)
    )(obj).value
);
const $24005940e10e0512$export$adaa4cf7ef1b65be = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((lensAttr, newVal, obj)=>lensAttr(()=>new $24005940e10e0512$var$Variable(newVal)
    )(obj).value
);
const $24005940e10e0512$export$fb4902fd9e525693 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((lensAttr, mapfn, obj)=>lensAttr((x)=>new $24005940e10e0512$var$Variable(mapfn(x))
    )(obj).value
);
const $24005940e10e0512$export$a6ba95b157529836 = (p)=>$24005940e10e0512$export$21cde5187c2605a3(prop(p), setProp(p))
;


var $c8c6d4fe325848b7$exports = {};

$parcel$export($c8c6d4fe325848b7$exports, "Observable", () => $c8c6d4fe325848b7$export$77cea355fa80b5f4);
$parcel$export($c8c6d4fe325848b7$exports, "ReactiveExtensions", () => $c8c6d4fe325848b7$export$9a935b903d7a019b);
$parcel$export($c8c6d4fe325848b7$exports, "buffer", () => $0a0abaada8e712cd$export$ab1029bcae9ddb4a);
$parcel$export($c8c6d4fe325848b7$exports, "catchError", () => $68ee9199cbf1abef$export$3dede90624df3ba9);
$parcel$export($c8c6d4fe325848b7$exports, "concat", () => $54a0ab6b27c6be45$export$ee1b3e54f0441b22);
$parcel$export($c8c6d4fe325848b7$exports, "combine", () => $8c72fc2b3bbc7319$export$1be1fc439b849fdf);
$parcel$export($c8c6d4fe325848b7$exports, "debounce", () => $ca763551faf1e061$export$61fc7d43ac8f84b0);
$parcel$export($c8c6d4fe325848b7$exports, "distinct", () => $e04886ec40dae6e5$export$983a3b5fb2f7202e);
$parcel$export($c8c6d4fe325848b7$exports, "effect", () => $ec21b5f11853ae83$export$dc573d8a6576cdb3);
$parcel$export($c8c6d4fe325848b7$exports, "filter", () => $052b4e472597405c$export$3dea766d36a8935f);
$parcel$export($c8c6d4fe325848b7$exports, "finallyEffect", () => $81ad7872b84721a5$export$c4c7e81705f70958);
$parcel$export($c8c6d4fe325848b7$exports, "forEach", () => $88f1dc75d01a32fb$export$4b80e395e36b5a56);
$parcel$export($c8c6d4fe325848b7$exports, "interval", () => $f6eb827840637398$export$3174cdbf0a0cbc84);
$parcel$export($c8c6d4fe325848b7$exports, "listen", () => $171affd5d796bfb9$export$63174c828edd6ff8);
$parcel$export($c8c6d4fe325848b7$exports, "map", () => $bc3e7fb9d329461e$export$871de8747c9eaa88);
$parcel$export($c8c6d4fe325848b7$exports, "mapTo", () => $afc5b638e59b0072$export$e0eaf3a86c03b2ad);
$parcel$export($c8c6d4fe325848b7$exports, "merge", () => $ab7511c0ba8cfc1a$export$4950aa0f605343fb);
$parcel$export($c8c6d4fe325848b7$exports, "flatMap", () => $1992c3d8c24241ea$export$5b8affa63fc6df16);
$parcel$export($c8c6d4fe325848b7$exports, "pick", () => $208e406a40112f43$export$357523c63a2253b9);
$parcel$export($c8c6d4fe325848b7$exports, "reduce", () => $394dd61cbf6647a2$export$533b26079ad0b4b);
$parcel$export($c8c6d4fe325848b7$exports, "retry", () => $181f061a7de2b602$export$9369b12211e1fce4);
$parcel$export($c8c6d4fe325848b7$exports, "skip", () => $d02cef0da8485087$export$955fc4a6c4be454d);
$parcel$export($c8c6d4fe325848b7$exports, "share", () => $c7a5552381e2c350$export$ed80d9de1d9df928);
$parcel$export($c8c6d4fe325848b7$exports, "switchStream", () => $3c01f11e9fcdc53b$export$1a62af6d099a1e7c);
$parcel$export($c8c6d4fe325848b7$exports, "subject", () => $a6ccbbf26c8582cd$export$c49781290a0a7ce3);
$parcel$export($c8c6d4fe325848b7$exports, "take", () => $e0d957e6557523b8$export$b7df5d561049483a);
$parcel$export($c8c6d4fe325848b7$exports, "throttle", () => $7971f9216d4529bd$export$de363e709c412c8a);
$parcel$export($c8c6d4fe325848b7$exports, "until", () => $788ba4f7e078a63b$export$a40009bd2c363351);
$parcel$export($c8c6d4fe325848b7$exports, "zip", () => $45ab909c8d45a065$export$8901015135f2fb22);



const $27a42192fed15930$export$fbd2e1a2b7cf8f98 = (observer)=>(next)=>({
            next: next,
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
        })
;
const $27a42192fed15930$export$c7187bbd1a7a9244 = (creator)=>(...initialArgs)=>new Proxy({
        }, {
            get (_, prop) {
                return (...args)=>creator(...initialArgs)[prop](...args)
                ;
            }
        })
;


const $0a0abaada8e712cd$export$ab1029bcae9ddb4a = $27a42192fed15930$export$c7187bbd1a7a9244((count, stream)=>{
    const internalStorage = [];
    return new Observable((observer)=>{
        const subs = stream.subscribe($27a42192fed15930$export$fbd2e1a2b7cf8f98(observer)((value)=>{
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



const $68ee9199cbf1abef$export$3dede90624df3ba9 = $27a42192fed15930$export$c7187bbd1a7a9244((handler, stream)=>{
    const sub = [];
    return new Observable((observer)=>{
        $68ee9199cbf1abef$var$retry(handler, stream, sub, observer);
        return ()=>sub.map((s)=>s.unsubscribe()
            )
        ;
    });
});
function $68ee9199cbf1abef$var$retry(handler, stream, sub, observer) {
    sub.pop()?.unsubscribe();
    return sub.push(stream.subscribe({
        next: (value)=>observer.next(value)
        ,
        error: (err)=>{
            try {
                const capture = handler(err, stream);
                if (capture === stream) return $68ee9199cbf1abef$var$retry(handler, stream, sub, observer);
                observer.next(capture);
            } catch (err1) {
                observer.error(err1);
            }
        },
        complete: ()=>observer.complete()
    }));
}



const $54a0ab6b27c6be45$export$ee1b3e54f0441b22 = $27a42192fed15930$export$c7187bbd1a7a9244((...streams)=>{
    const subs = [];
    return new Observable((observer)=>{
        $54a0ab6b27c6be45$var$subNextStream(streams, 0, subs, observer);
        return ()=>subs.forEach((sub)=>sub.unsubscribe()
            )
        ;
    });
});
function $54a0ab6b27c6be45$var$subNextStream(streams, i, subs, observer) {
    subs.push(streams[i].subscribe({
        next: (value)=>observer.next(value)
        ,
        error: observer.error.bind(observer),
        complete () {
            if (i === streams.length - 1) return observer.complete();
            $54a0ab6b27c6be45$var$subNextStream(streams, i + 1, subs, observer);
        }
    }));
}




const $8c72fc2b3bbc7319$export$1be1fc439b849fdf = $27a42192fed15930$export$c7187bbd1a7a9244((...streams)=>{
    let done = 0;
    const store = Object.fromEntries(streams.map((_, i)=>[
            i,
            []
        ]
    ));
    const buffers = $bb63e7e1bbd7ff6a$export$68c286be0e7e55b7(store);
    function pushResults(event, observer) {
        store[event.stream].push(event.value);
        if (buffers.every((buffer)=>buffer.length
        )) buffers.forEach((buffer)=>{
            observer.next(buffer.pop());
            buffer.length = 0;
        });
    }
    return new Observable((observer)=>{
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




const $ca763551faf1e061$export$61fc7d43ac8f84b0 = $27a42192fed15930$export$c7187bbd1a7a9244((limit, stream)=>{
    const stack = [];
    let lastInterval = 0;
    let wantsComplete = false;
    return new Observable((observer)=>{
        const subs = stream.subscribe({
            next: (value)=>{
                stack.push(value);
                clearTimeout(lastInterval);
                lastInterval = setTimeout(()=>{
                    observer.next($bb63e7e1bbd7ff6a$export$4c7897fafd92b108(stack));
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




const $e04886ec40dae6e5$export$983a3b5fb2f7202e = $27a42192fed15930$export$c7187bbd1a7a9244((fn, stream)=>{
    let lastSent = null;
    return new Observable((observer)=>{
        const subs = stream.subscribe($27a42192fed15930$export$fbd2e1a2b7cf8f98(observer)((value)=>{
            try {
                const a = fn(lastSent);
                const b = fn(value);
                if (!$bb63e7e1bbd7ff6a$export$9cb4719e2e525b7a(a, b)) observer.next(value);
            } catch  {
                observer.next(value);
            }
            lastSent = value;
        }));
        return ()=>subs.unsubscribe()
        ;
    });
});



const $ec21b5f11853ae83$export$dc573d8a6576cdb3 = $27a42192fed15930$export$c7187bbd1a7a9244((fn, stream)=>new Observable((observer)=>{
        const subs = stream.subscribe($27a42192fed15930$export$fbd2e1a2b7cf8f98(observer)((value)=>{
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



const $81ad7872b84721a5$export$c4c7e81705f70958 = $27a42192fed15930$export$c7187bbd1a7a9244((fn, stream)=>new Observable((observer)=>{
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



const $052b4e472597405c$export$3dea766d36a8935f = $27a42192fed15930$export$c7187bbd1a7a9244((predicate, stream)=>new Observable((observer)=>{
        const subs = stream.subscribe($27a42192fed15930$export$fbd2e1a2b7cf8f98(observer)((value)=>{
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



const $88f1dc75d01a32fb$export$4b80e395e36b5a56 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((fn, stream)=>{
    const subs = stream.subscribe({
        next: fn,
        error: fn
    });
    return {
        unsubscribe: subs.unsubscribe.bind(subs)
    };
});



const $f6eb827840637398$export$3174cdbf0a0cbc84 = $27a42192fed15930$export$c7187bbd1a7a9244((time)=>{
    let n = 0;
    return new Observable((observer)=>{
        const id = setInterval(()=>observer.next(++n)
        , time);
        observer.next(++n);
        return ()=>{
            observer.complete();
            clearInterval(id);
        };
    });
});



const $171affd5d796bfb9$export$63174c828edd6ff8 = $27a42192fed15930$export$c7187bbd1a7a9244((eventName, element)=>{
    return new Observable((observer)=>{
        const handler = (event)=>observer.next(event)
        ;
        element.addEventListener(eventName, handler, true);
        return ()=>element.removeEventListener(eventName, handler, true)
        ;
    });
});



const $bc3e7fb9d329461e$export$871de8747c9eaa88 = $27a42192fed15930$export$c7187bbd1a7a9244((fn, stream)=>new Observable((observer)=>{
        const subs = stream.subscribe($27a42192fed15930$export$fbd2e1a2b7cf8f98(observer)((value)=>{
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



const $afc5b638e59b0072$export$e0eaf3a86c03b2ad = $27a42192fed15930$export$c7187bbd1a7a9244((value, stream)=>new Observable((observer)=>{
        const subs = stream.subscribe($27a42192fed15930$export$fbd2e1a2b7cf8f98(observer)(()=>observer.next(value)
        ));
        return ()=>subs.unsubscribe()
        ;
    })
);



const $ab7511c0ba8cfc1a$export$4950aa0f605343fb = $27a42192fed15930$export$c7187bbd1a7a9244((...streams)=>{
    let done = 0;
    return new Observable((observer)=>{
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



const $1992c3d8c24241ea$export$5b8affa63fc6df16 = $27a42192fed15930$export$c7187bbd1a7a9244((fn, stream)=>new Observable((observer)=>{
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




const $208e406a40112f43$export$357523c63a2253b9 = $27a42192fed15930$export$c7187bbd1a7a9244((key, stream)=>new Observable((observer)=>{
        const subs = stream.subscribe($27a42192fed15930$export$fbd2e1a2b7cf8f98(observer)((obj)=>observer.next($bb63e7e1bbd7ff6a$export$52be3e7c3b913516(key, obj))
        ));
        return ()=>subs.unsubscribe()
        ;
    })
);



const $394dd61cbf6647a2$export$533b26079ad0b4b = $27a42192fed15930$export$c7187bbd1a7a9244((reducer, initialValue, stream)=>{
    let accumulator = initialValue ?? {
    };
    return new Observable((observer)=>{
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
const $181f061a7de2b602$var$defaultConfig = {
    method: 'expo',
    delay: 100,
    retries: 3
};
const $181f061a7de2b602$export$9369b12211e1fce4 = $27a42192fed15930$export$c7187bbd1a7a9244((config, stream)=>{
    if ($bb63e7e1bbd7ff6a$export$7e4aa119212bc614(config)) config = Object.assign($181f061a7de2b602$var$defaultConfig, {
        retries: config
    });
    else config = Object.assign($181f061a7de2b602$var$defaultConfig, config);
    const sub = [];
    return new Observable((observer)=>{
        $181f061a7de2b602$var$retryInner(stream, observer, sub, config, 1);
        return ()=>sub.map((s)=>s.unsubscribe()
            )
        ;
    });
});
function $181f061a7de2b602$var$retryInner(stream, observer, sub, config, i) {
    sub.pop()?.unsubscribe();
    return sub.push(stream.subscribe({
        next: (value)=>observer.next(value)
        ,
        error: ()=>{
            if (i <= config.retries) return setTimeout(()=>$181f061a7de2b602$var$retryInner(stream, observer, sub, config, i + 1)
            , config.method === 'expo' ? config.delay * Math.pow(i, 2) : config.delay * i);
            observer.complete();
        },
        complete: ()=>observer.complete()
    }));
}



const $d02cef0da8485087$export$955fc4a6c4be454d = $27a42192fed15930$export$c7187bbd1a7a9244((count, stream)=>{
    let skipped = 0;
    return new Observable((observer)=>{
        const subs = stream.subscribe($27a42192fed15930$export$fbd2e1a2b7cf8f98(observer)((value)=>{
            if ((skipped++) >= count) observer.next(value);
        }));
        return ()=>subs.unsubscribe()
        ;
    });
});



const $c7a5552381e2c350$export$ed80d9de1d9df928 = (bufferSize, stream)=>{
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
            return subs.unsubscribe();
        }
    }
    return $27a42192fed15930$export$c7187bbd1a7a9244(()=>new Observable((observer)=>{
            store.addObserver(observer);
            return ()=>{
                store.removeObserver(observer);
                observer.complete();
                if (store.observers.length === 0) subs.unsubscribe();
            };
        })
    )();
};



const $3c01f11e9fcdc53b$export$1a62af6d099a1e7c = $27a42192fed15930$export$c7187bbd1a7a9244((stream)=>new Observable((observer)=>{
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



const $a6ccbbf26c8582cd$export$c49781290a0a7ce3 = ()=>{
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
                if ($bb63e7e1bbd7ff6a$export$f6e2535fb5126e54(observer)) observer = {
                    next: observer,
                    error: observer,
                    complete: observer
                };
                subs.push(observer);
                return {
                    unsubscribe: ()=>subs.slice(subs.indexOf(observer), 1)
                };
            };
            return new Observable((observer)=>{
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



const $e0d957e6557523b8$export$b7df5d561049483a = $27a42192fed15930$export$c7187bbd1a7a9244((numberToTake, stream)=>{
    let taken = 0;
    return new Observable((observer)=>{
        const subs = stream.subscribe($27a42192fed15930$export$fbd2e1a2b7cf8f98(observer)((value)=>{
            if ((taken++) >= numberToTake) return observer.complete();
            observer.next(value);
        }));
        return ()=>subs.unsubscribe()
        ;
    });
});



const $7971f9216d4529bd$export$de363e709c412c8a = $27a42192fed15930$export$c7187bbd1a7a9244((limit, stream)=>{
    let lastRan = 0;
    let lastInterval = 0;
    return new Observable((observer)=>{
        const subs = stream.subscribe($27a42192fed15930$export$fbd2e1a2b7cf8f98(observer)((value)=>{
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



const $788ba4f7e078a63b$export$a40009bd2c363351 = $27a42192fed15930$export$c7187bbd1a7a9244((comparator, stream)=>new Observable((observer)=>{
        const subs = stream.subscribe({
            next: (value)=>{
                try {
                    if (comparator(value)) return observer.complete();
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




const $45ab909c8d45a065$export$8901015135f2fb22 = $27a42192fed15930$export$c7187bbd1a7a9244((...streams)=>{
    let zipper = (...args)=>args
    ;
    if ($bb63e7e1bbd7ff6a$export$f6e2535fb5126e54($bb63e7e1bbd7ff6a$export$5fd5031fecdacec3(streams))) zipper = streams.shift();
    let done = 0;
    const store = Object.fromEntries(streams.map((_, i)=>[
            i,
            []
        ]
    ));
    const buffers = $bb63e7e1bbd7ff6a$export$68c286be0e7e55b7(store);
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
    return new Observable((observer)=>{
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



const { Observable: $c8c6d4fe325848b7$export$77cea355fa80b5f4  } = globalThis;
Object.defineProperties($c8c6d4fe325848b7$export$77cea355fa80b5f4, {
    fromGenerator: {
        value: $27a42192fed15930$export$c7187bbd1a7a9244((generator)=>new $c8c6d4fe325848b7$export$77cea355fa80b5f4((observer)=>{
                $lN7Lq$Readable.from(generator()).on('data', observer.next.bind(observer)).on('end', observer.complete.bind(observer)).on('error', observer.error.bind(observer));
            })
        ),
        enumerable: false,
        writable: false,
        configurable: false
    },
    fromStream: {
        value: $27a42192fed15930$export$c7187bbd1a7a9244((stream)=>new $c8c6d4fe325848b7$export$77cea355fa80b5f4((observer)=>{
                stream.on('data', observer.next.bind(observer));
                stream.on('end', observer.complete.bind(observer));
                stream.on('error', observer.error.bind(observer));
            })
        ),
        enumerable: false,
        writable: false,
        configurable: false
    }
});
const $c8c6d4fe325848b7$var$p = {
    enumerable: false,
    writable: false,
    configurable: false
};
Object.defineProperties($c8c6d4fe325848b7$export$77cea355fa80b5f4, {
    listen: {
        value: $171affd5d796bfb9$export$63174c828edd6ff8,
        ...$c8c6d4fe325848b7$var$p
    },
    interval: {
        value: $f6eb827840637398$export$3174cdbf0a0cbc84,
        ...$c8c6d4fe325848b7$var$p
    },
    combine: {
        value: $8c72fc2b3bbc7319$export$1be1fc439b849fdf,
        ...$c8c6d4fe325848b7$var$p
    },
    merge: {
        value: $ab7511c0ba8cfc1a$export$4950aa0f605343fb,
        ...$c8c6d4fe325848b7$var$p
    },
    subject: {
        value: $a6ccbbf26c8582cd$export$c49781290a0a7ce3,
        ...$c8c6d4fe325848b7$var$p
    },
    fromEvent: {
        value: $27a42192fed15930$export$c7187bbd1a7a9244((emitter, event, handler)=>new $c8c6d4fe325848b7$export$77cea355fa80b5f4((observer)=>{
                const group = new Map([
                    [
                        event,
                        (...args)=>observer.next(handler(...args))
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
                $bb63e7e1bbd7ff6a$export$3e9f948b41964866(group).forEach(([event, handler])=>emitter.on(event, handler)
                );
                return ()=>$bb63e7e1bbd7ff6a$export$3e9f948b41964866(group).forEach(([event, handler])=>emitter.removeListener(event, handler)
                    )
                ;
            })
        ),
        ...$c8c6d4fe325848b7$var$p
    },
    fromPromise: {
        value: $27a42192fed15930$export$c7187bbd1a7a9244((promise)=>new $c8c6d4fe325848b7$export$77cea355fa80b5f4((observer)=>{
                promise.then((value)=>observer.next(value)
                ).catch((err)=>observer.error(err)
                ).finally(()=>observer.complete()
                );
            })
        ),
        ...$c8c6d4fe325848b7$var$p
    }
});
const $c8c6d4fe325848b7$export$9a935b903d7a019b = {
    filter (predicate) {
        return $052b4e472597405c$export$3dea766d36a8935f(predicate, this);
    },
    map (fn) {
        return $bc3e7fb9d329461e$export$871de8747c9eaa88(fn, this);
    },
    buffer (count) {
        return $0a0abaada8e712cd$export$ab1029bcae9ddb4a(count, this);
    },
    skip (count) {
        return $d02cef0da8485087$export$955fc4a6c4be454d(count, this);
    },
    take (numberToTake) {
        return $e0d957e6557523b8$export$b7df5d561049483a(numberToTake, this);
    },
    reduce (reducer, initialValue = {
    }) {
        return $394dd61cbf6647a2$export$533b26079ad0b4b(reducer, initialValue, this);
    },
    mapTo (value) {
        return $afc5b638e59b0072$export$e0eaf3a86c03b2ad(value, this);
    },
    throttle (limit) {
        return $7971f9216d4529bd$export$de363e709c412c8a(limit, this);
    },
    forEach (fn) {
        return $88f1dc75d01a32fb$export$4b80e395e36b5a56(fn, this);
    },
    effect (fn) {
        return $ec21b5f11853ae83$export$dc573d8a6576cdb3(fn, this);
    },
    pick (key) {
        return $208e406a40112f43$export$357523c63a2253b9(key, this);
    },
    debounce (limit) {
        return $ca763551faf1e061$export$61fc7d43ac8f84b0(limit, this);
    },
    catch (handler) {
        return $68ee9199cbf1abef$export$3dede90624df3ba9(handler, this);
    },
    concat (...streams) {
        return $54a0ab6b27c6be45$export$ee1b3e54f0441b22(this, ...streams);
    },
    combine (stream) {
        return $8c72fc2b3bbc7319$export$1be1fc439b849fdf(this, stream);
    },
    merge (stream) {
        return $ab7511c0ba8cfc1a$export$4950aa0f605343fb(this, stream);
    },
    share (bufferSize = 100) {
        return $c7a5552381e2c350$export$ed80d9de1d9df928(bufferSize, this);
    },
    switch () {
        return $3c01f11e9fcdc53b$export$1a62af6d099a1e7c(this);
    },
    flatMap (fn) {
        return $1992c3d8c24241ea$export$5b8affa63fc6df16(fn, this);
    },
    distinct (fn = (x)=>x
    ) {
        return $e04886ec40dae6e5$export$983a3b5fb2f7202e(fn, this);
    },
    until (fn) {
        return $788ba4f7e078a63b$export$a40009bd2c363351(fn, this);
    },
    zip (zipper, ...streams) {
        if (!$bb63e7e1bbd7ff6a$export$f6e2535fb5126e54(zipper)) return $45ab909c8d45a065$export$8901015135f2fb22(this, zipper, ...streams);
        return $45ab909c8d45a065$export$8901015135f2fb22(zipper, this, ...streams);
    },
    retry (config) {
        return $181f061a7de2b602$export$9369b12211e1fce4(config, this);
    },
    finally (fn) {
        return $81ad7872b84721a5$export$c4c7e81705f70958(fn, this);
    },
    subject () {
        return $a6ccbbf26c8582cd$export$c49781290a0a7ce3(this);
    }
};
Object.assign($c8c6d4fe325848b7$export$77cea355fa80b5f4.prototype, $c8c6d4fe325848b7$export$9a935b903d7a019b);




function $df5d87e734be3d90$var$implementsPushProtocol(obj) {
    return obj && Symbol.iterator in Object(obj) && typeof obj['push'] === 'function' && typeof obj[Symbol.iterator] === 'function';
}
const $df5d87e734be3d90$var$ON_EVENT = 'on';
const $df5d87e734be3d90$var$END_EVENT = 'end';
const $df5d87e734be3d90$export$ea9ec650125d8707 = (obj)=>{
    if (!$df5d87e734be3d90$var$implementsPushProtocol(obj)) throw new TypeError('Object does not implement a push protocol');
    const emitter = new $df5d87e734be3d90$import$4bf9923669ad6c63$4fae95256245c8c0();
    const pushProxy = new Proxy(obj, {
        get (...args) {
            const [target, key] = args;
            if (key === 'push') {
                const pushRef = target[key];
                return (...capturedArgs)=>{
                    const result = pushRef.call(target, ...capturedArgs);
                    emitter.emit($df5d87e734be3d90$var$ON_EVENT, ...capturedArgs);
                    return result;
                };
            }
            return Reflect.get(...args);
        }
    });
    const observable = {
        [Symbol.observable] () {
            return new $c8c6d4fe325848b7$export$77cea355fa80b5f4((observer)=>{
                emitter.on($df5d87e734be3d90$var$ON_EVENT, (newValue)=>{
                    observer.next(newValue);
                });
                emitter.on($df5d87e734be3d90$var$END_EVENT, ()=>observer.complete()
                );
                for (const value of obj)observer.next(value);
                return ()=>{
                    emitter.removeAllListeners($df5d87e734be3d90$var$ON_EVENT, $df5d87e734be3d90$var$END_EVENT);
                };
            });
        }
    };
    return Object.assign(pushProxy, observable);
};



class $4b0a30a9238405cc$export$2191b9da168c6cf0 {
    constructor(message, errors){
        Error.call(this, message);
        Error.captureStackTrace(this);
        this.errors = errors;
    }
    get messages() {
        return this.errors.map((e)=>e.message
        );
    }
}
const $4b0a30a9238405cc$export$30c1bf1f6ea900a5 = $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2((validator, fn)=>(data)=>{
        if (!validator(data)) throw new $4b0a30a9238405cc$export$2191b9da168c6cf0('Validation failed', validator.errors);
        return fn(data);
    }
);




class $1f5123af4789726e$var$NoHandlerError {
    constructor(message){
        Error.call(this, message);
        Error.captureStackTrace(this);
        this.args = args;
    }
}
// Helper functions
const $1f5123af4789726e$var$handlersKey = Symbol('handlers key');
const $1f5123af4789726e$var$dispatchKey = Symbol('dispatch key');
const $1f5123af4789726e$var$DEFAULT_DISPATCH = 'MULTI:DEFAULT_DISPATCH';
const $1f5123af4789726e$var$defaultDispatch = (...args)=>args.length === 1 ? args[0] : args
;
const $1f5123af4789726e$var$extractDispatchAndMethods = (methods)=>$bb63e7e1bbd7ff6a$export$f6e2535fb5126e54(methods[0]) ? [
        methods[0],
        methods.slice(1)
    ] : [
        $1f5123af4789726e$var$defaultDispatch,
        methods
    ]
;
const $1f5123af4789726e$var$initialHandler = (handlers)=>$bb63e7e1bbd7ff6a$export$4c7897fafd92b108(handlers)[0] === $1f5123af4789726e$var$DEFAULT_DISPATCH ? $bb63e7e1bbd7ff6a$export$4c7897fafd92b108(handlers)[1] : null
;
function $1f5123af4789726e$export$26f73335cc2e7868(key, handler) {
    if (handler === undefined) return [
        $1f5123af4789726e$var$DEFAULT_DISPATCH,
        key
    ];
    return [
        key,
        handler
    ];
}
function $1f5123af4789726e$export$13e2537ceeaf8a3a(...initialMethods) {
    // multiMethod function takes variable arguments and returns the result of
    // calling any handler that can handle the arguments
    function multiMethod(...args) {
        let handler = $1f5123af4789726e$var$initialHandler(multiMethod[$1f5123af4789726e$var$handlersKey]);
        for (const [key, method] of multiMethod[$1f5123af4789726e$var$handlersKey])if ($bb63e7e1bbd7ff6a$export$f6e2535fb5126e54(key) && args[0].constructor === key || $bb63e7e1bbd7ff6a$export$f6e2535fb5126e54(key) && !$bb63e7e1bbd7ff6a$export$5578ef75f4140928(key) && key(...args) || $bb63e7e1bbd7ff6a$export$9cb4719e2e525b7a(multiMethod[$1f5123af4789726e$var$dispatchKey](...args), key)) {
            handler = method;
            break;
        }
        if (handler) return $bb63e7e1bbd7ff6a$export$f6e2535fb5126e54(handler) ? handler(...args) : handler;
        throw new $1f5123af4789726e$var$NoHandlerError(`No handlers for args (${JSON.stringify(args)})`);
    }
    const [dispatch, methods] = $1f5123af4789726e$var$extractDispatchAndMethods(initialMethods);
    multiMethod[$1f5123af4789726e$var$dispatchKey] = dispatch;
    multiMethod[$1f5123af4789726e$var$handlersKey] = methods;
    for (const pair of methods)if (pair[0] === $1f5123af4789726e$var$DEFAULT_DISPATCH) multiMethod[$1f5123af4789726e$var$handlersKey].push(pair);
    else multiMethod[$1f5123af4789726e$var$handlersKey] = [
        pair
    ].concat(multiMethod[$1f5123af4789726e$var$handlersKey]);
    multiMethod.map = function map(fn) {
        return $1f5123af4789726e$export$13e2537ceeaf8a3a(multiMethod[$1f5123af4789726e$var$dispatchKey], ...multiMethod[$1f5123af4789726e$var$handlersKey].map(([key, handler])=>[
                key,
                (...args)=>fn(handler(...args))
                , 
            ]
        ));
    };
    return multiMethod;
}
$1f5123af4789726e$export$13e2537ceeaf8a3a.extend = function extend(multiMethod, ...methods) {
    return $1f5123af4789726e$export$13e2537ceeaf8a3a(multiMethod[$1f5123af4789726e$var$dispatchKey], ...methods.concat(multiMethod[$1f5123af4789726e$var$handlersKey]));
};



function $3d17850c787403bf$export$1cac73d0be9e5f93(fn) {
    return new $lN7Lq$Transform({
        objectMode: true,
        transform (chunk, _, callback) {
            if (fn(chunk)) this.push(chunk);
            callback();
        }
    });
}
function $3d17850c787403bf$export$65a2d40914bef387(fn) {
    return new $lN7Lq$Transform({
        objectMode: true,
        transform (chunk, _, callback) {
            this.push(fn(chunk));
            callback();
        }
    });
}
function $3d17850c787403bf$export$81b289dc713f2731(reducer, initialValue) {
    let accumulator = initialValue;
    return new $lN7Lq$Transform({
        objectMode: true,
        transform (chunk, _, callback) {
            accumulator = reducer(accumulator, chunk);
            callback();
        },
        flush (callback) {
            this.push(accumulator);
            callback();
        }
    });
}
class $3d17850c787403bf$export$5a49216eb02d2a7b extends $lN7Lq$Transform {
    constructor(userTransform, options = {
    }){
        super({
            ...options,
            objectMode: true
        });
        this.userTransform = userTransform;
        this.running = 0;
        this.terminate = null;
    }
    _transform(chunk, encoding, callback) {
        this.running++;
        this.userTransform(chunk, encoding, this.push.bind(this), this._onComplete.bind(this));
        callback();
    }
    _flush(callback) {
        if (this.running > 0) this.terminate = callback;
        else callback();
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
class $3d17850c787403bf$export$14202ce6ebc470bb extends $lN7Lq$Transform {
    constructor(concurrency, userTransform, options = {
    }){
        super({
            ...options,
            objectMode: true
        });
        this.concurrency = concurrency;
        this.userTransform = userTransform;
        this.running = 0;
        this.continue = null;
        this.terminate = null;
    }
    _transform(chunk, encoding, callback) {
        this.running++;
        this.userTransform(chunk, encoding, this.push.bind(this), this._onComplete.bind(this));
        if (this.running < this.concurrency) callback();
        else this.continue = callback;
    }
    _flush(callback) {
        if (this.running > 0) this.terminate = callback;
        else callback();
    }
    _onComplete(err) {
        this.running--;
        if (err) {
            this.emit('error', err);
            return;
        }
        const tmp = this.continue;
        this.continue = null;
        tmp && typeof tmp === 'function' && tmp();
        if (this.running === 0) this.terminate && typeof this.terminate === 'function' && this.terminate();
    }
}
function $3d17850c787403bf$export$e27394c20d18d2a8(stream) {
    return (...streams)=>streams.forEach((s)=>stream.pipe(s)
        )
    ;
}
function $3d17850c787403bf$export$ebab2c558c013279(...sources) {
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




export {$bb63e7e1bbd7ff6a$export$63fce1f81095ac4f as accumulate, $bb63e7e1bbd7ff6a$export$e16d8520af44a096 as add, $bb63e7e1bbd7ff6a$export$ecceddf365c72028 as addRight, $bb63e7e1bbd7ff6a$export$258f7bf0e3a9da18 as aggregate, $bb63e7e1bbd7ff6a$export$ce9688d12180c837 as aggregateOn, $bb63e7e1bbd7ff6a$export$10d8903dec122b9d as append, $bb63e7e1bbd7ff6a$export$5635d7ef4b8fee1c as apply, $bb63e7e1bbd7ff6a$export$2b74374111f56d9e as arity, $bb63e7e1bbd7ff6a$export$cc6710ee5f037d57 as average, $bb63e7e1bbd7ff6a$export$33902b7329277358 as binary, $bb63e7e1bbd7ff6a$export$adf7c0fe6059d774 as bound, $bb63e7e1bbd7ff6a$export$9e58c10e5cf1295d as callFirst, $bb63e7e1bbd7ff6a$export$3d41a7c27165bfa3 as callLast, $bb63e7e1bbd7ff6a$export$f672e0b6f7222cd7 as compose, $bb63e7e1bbd7ff6a$export$9dbe56a5aba4f4b4 as composeAsync, $bb63e7e1bbd7ff6a$export$fe41fac84f1fd82f as composeM, $bb63e7e1bbd7ff6a$export$c983f826f44ff86 as constant, $bb63e7e1bbd7ff6a$export$c3095a23b368d1f2 as curry, $bb63e7e1bbd7ff6a$export$61fc7d43ac8f84b0 as debounce, $bb63e7e1bbd7ff6a$export$6c40052bed430212 as deepCopy, $bb63e7e1bbd7ff6a$export$9cb4719e2e525b7a as deepEqual, $bb63e7e1bbd7ff6a$export$7e32b29e1cb162e1 as deepFreeze, $bb63e7e1bbd7ff6a$export$50b5b478b69a347c as deepJoin, $bb63e7e1bbd7ff6a$export$ce7eaaed37329a1b as deepMap, $bb63e7e1bbd7ff6a$export$dc56a6be17ec932e as deepPick, $bb63e7e1bbd7ff6a$export$52be3e7c3b913516 as deepProp, $bb63e7e1bbd7ff6a$export$112aad15b1fe0c19 as deepSetProp, $bb63e7e1bbd7ff6a$export$e775f2ca58d379f0 as demethodize, $bb63e7e1bbd7ff6a$export$a37e3c603d7117e5 as diff, $bb63e7e1bbd7ff6a$export$cd007d971a5a2143 as divide, $bb63e7e1bbd7ff6a$export$7e7fa3dcb6d62f31 as divideRight, $bb63e7e1bbd7ff6a$export$3e9f948b41964866 as entries, $bb63e7e1bbd7ff6a$export$9663ddc1cf085b32 as eq, $bb63e7e1bbd7ff6a$export$7ecc1a3b11b57dab as every, $bb63e7e1bbd7ff6a$export$3dea766d36a8935f as filter, $bb63e7e1bbd7ff6a$export$30ee5c6810ce1ce2 as filterAsync, $bb63e7e1bbd7ff6a$export$5ddcd2c2c8d9736f as filterTR, $bb63e7e1bbd7ff6a$export$71aa6c912b956294 as find, $bb63e7e1bbd7ff6a$export$40fa977508bcf282 as flat, $bb63e7e1bbd7ff6a$export$5b8affa63fc6df16 as flatMap, $bb63e7e1bbd7ff6a$export$d8f18b68abd220dc as flip2, $bb63e7e1bbd7ff6a$export$c993f2f7dfcc6a25 as flip3, $bb63e7e1bbd7ff6a$export$93e2b83da34ff82a as fold, $bb63e7e1bbd7ff6a$export$4b80e395e36b5a56 as forEach, $bb63e7e1bbd7ff6a$export$21625637effda04 as fromJSON, $bb63e7e1bbd7ff6a$export$67b2770bcd4c0853 as FunctionalMixin, $bb63e7e1bbd7ff6a$export$2a722db47863bac2 as getOrElseThrow, $bb63e7e1bbd7ff6a$export$3f063810d7bf01bd as groupBy, $bb63e7e1bbd7ff6a$export$5fd5031fecdacec3 as head, $bb63e7e1bbd7ff6a$export$f0954fd7d5368655 as identity, $bb63e7e1bbd7ff6a$export$fc3a40dec7b33bf as immutable, $bb63e7e1bbd7ff6a$export$6897c284b6f9f4dc as invert, $bb63e7e1bbd7ff6a$export$468cda29b159ee5d as invoke, $bb63e7e1bbd7ff6a$export$43bee75e5e14138e as isArray, $bb63e7e1bbd7ff6a$export$f9ce7b637dfbe238 as isBoolean, $bb63e7e1bbd7ff6a$export$dd1bc94b04021eeb as isEmpty, $bb63e7e1bbd7ff6a$export$f6e2535fb5126e54 as isFunction, $bb63e7e1bbd7ff6a$export$49034edbe6b62415 as isInstanceOf, $bb63e7e1bbd7ff6a$export$5c90113a285f2241 as isMap, $bb63e7e1bbd7ff6a$export$630801d484da15df as isNull, $bb63e7e1bbd7ff6a$export$7e4aa119212bc614 as isNumber, $bb63e7e1bbd7ff6a$export$a6cdc56e425d0d0a as isObject, $bb63e7e1bbd7ff6a$export$6750766a7c7ec627 as isSet, $bb63e7e1bbd7ff6a$export$844ec244b1367d54 as isString, $bb63e7e1bbd7ff6a$export$f7e2c8231c57a8bd as join, $bb63e7e1bbd7ff6a$export$e439fc32198f78c5 as keyBy, $bb63e7e1bbd7ff6a$export$ed97f33186d4b816 as keys, $bb63e7e1bbd7ff6a$export$4c7897fafd92b108 as last, $bb63e7e1bbd7ff6a$export$fc1400facf92c78 as len, $bb63e7e1bbd7ff6a$export$4e54ff84c97bdc0c as liftA2, $bb63e7e1bbd7ff6a$export$8402e5acf634c0df as liftA3, $bb63e7e1bbd7ff6a$export$3a582736e2273011 as liftA4, $bb63e7e1bbd7ff6a$export$bef1f36f5486a6a3 as log, $bb63e7e1bbd7ff6a$export$871de8747c9eaa88 as map, $bb63e7e1bbd7ff6a$export$a939ddd3409bd57a as mapAsync, $bb63e7e1bbd7ff6a$export$29deb6b34088de51 as mapTR, $bb63e7e1bbd7ff6a$export$4659b591c19bdf3d as match, $bb63e7e1bbd7ff6a$export$fc10aeed3a532e2a as memoize, $bb63e7e1bbd7ff6a$export$4950aa0f605343fb as merge, $bb63e7e1bbd7ff6a$export$2060d2db72cce88f as multiply, $bb63e7e1bbd7ff6a$export$58b562b9c9d46bb6 as multiplyRight, $bb63e7e1bbd7ff6a$export$6003a5f097c73977 as not, $bb63e7e1bbd7ff6a$export$d2de3aaeafa91619 as once, $bb63e7e1bbd7ff6a$export$23a07ddfce9fad49 as padEnd, $bb63e7e1bbd7ff6a$export$36cf564d487b5178 as padStart, $bb63e7e1bbd7ff6a$export$98e6a39c04603d36 as parse, $bb63e7e1bbd7ff6a$export$b29f828819edca8d as partition, $bb63e7e1bbd7ff6a$export$357523c63a2253b9 as pick, $bb63e7e1bbd7ff6a$export$a4627e546088548d as pipe, $bb63e7e1bbd7ff6a$export$507da1b08fb8a738 as pipeAsync, $bb63e7e1bbd7ff6a$export$c44985b87d605eff as pluck, $bb63e7e1bbd7ff6a$export$9c297f60e22e3389 as pow, $bb63e7e1bbd7ff6a$export$68159836694e22c1 as prepend, $bb63e7e1bbd7ff6a$export$977f3f6a9323c0f6 as prop, $bb63e7e1bbd7ff6a$export$8128bb6492cf3de7 as props, $bb63e7e1bbd7ff6a$export$d02631cccf789723 as range, $bb63e7e1bbd7ff6a$export$533b26079ad0b4b as reduce, $bb63e7e1bbd7ff6a$export$b720f6c8e101da88 as reduceAsync, $bb63e7e1bbd7ff6a$export$7fef8bcdbb34f435 as reduceRight, $bb63e7e1bbd7ff6a$export$7ac989ec0c9c279 as rename, $bb63e7e1bbd7ff6a$export$77ad94ebf1c2b9ed as replace, $bb63e7e1bbd7ff6a$export$7978a6ddf29f4374 as roundTo, $bb63e7e1bbd7ff6a$export$89db4734f6c919c4 as send, $bb63e7e1bbd7ff6a$export$adaa4cf7ef1b65be as set, $bb63e7e1bbd7ff6a$export$8a39838a0f735648 as setProp, $bb63e7e1bbd7ff6a$export$f45dfcb5efeffdb3 as setPropM, $bb63e7e1bbd7ff6a$export$ad14ef4001db2bcd as some, $bb63e7e1bbd7ff6a$export$b035e44d7bb4278f as sortBy, $bb63e7e1bbd7ff6a$export$65980d18b75784e2 as split, $bb63e7e1bbd7ff6a$export$fac44ee5b035f737 as stringify, $bb63e7e1bbd7ff6a$export$4e2d2ead65e5f7e3 as subtract, $bb63e7e1bbd7ff6a$export$4ed4137bff330a54 as subtractRight, $bb63e7e1bbd7ff6a$export$8a63f25cc62965f1 as sum, $bb63e7e1bbd7ff6a$export$3f23594af5f37336 as tap, $bb63e7e1bbd7ff6a$export$b4d6a1a804dab06c as tee, $bb63e7e1bbd7ff6a$export$b0d4470bfb62c4eb as ternary, $bb63e7e1bbd7ff6a$export$f728be4ab20cbf1f as toInteger, $bb63e7e1bbd7ff6a$export$54fd2c36b5cc6731 as toJSON, $bb63e7e1bbd7ff6a$export$84b9399c77df0edf as toLowerCase, $bb63e7e1bbd7ff6a$export$f84e8e69fd4488a5 as toString, $bb63e7e1bbd7ff6a$export$d80c591a9e16646 as toUpperCase, $bb63e7e1bbd7ff6a$export$9608d0eacffd6284 as transduce, $bb63e7e1bbd7ff6a$export$d234c058d1d4e435 as tryCatch, $bb63e7e1bbd7ff6a$export$a7e49f78f97b1037 as unary, $bb63e7e1bbd7ff6a$export$7a5d5c156e7dc406 as unique, $bb63e7e1bbd7ff6a$export$68c286be0e7e55b7 as values, $bb63e7e1bbd7ff6a$export$66b4a470e4119e42 as zipMap, $37dcf6eef4b94f13$export$deb82508dd66d288 as Enum, $37dcf6eef4b94f13$export$5ebc9a4af3ac0850 as Failure, $37dcf6eef4b94f13$export$8f8422ac5947a789 as IO, $37dcf6eef4b94f13$export$d8552d785efb2cb8 as IOAsync, $37dcf6eef4b94f13$export$8a67b48435b5d073 as Just, $37dcf6eef4b94f13$export$ad3bd6e4e1ec5d06 as Maybe, $37dcf6eef4b94f13$export$bebe9059409a0d04 as Nothing, $37dcf6eef4b94f13$export$d63d7cff08fe4dc9 as Pair, $37dcf6eef4b94f13$export$8fdcabde73f49165 as Result, $37dcf6eef4b94f13$export$ffa3d9fee6fd705a as Success, $37dcf6eef4b94f13$export$cb55c7e8798604bb as Triple, $37dcf6eef4b94f13$export$fa957d01b0310fd7 as Try, $37dcf6eef4b94f13$export$17de313a76857e4a as TryAsync, $033eb0854dc23b5e$export$5d730b7aed1a3eb0 as createClient, $32f169118ef24707$export$8e16b83750b44988 as compact, $32f169118ef24707$export$7c961d426bc3e8f3 as filterWith, $32f169118ef24707$export$43128fadae87b74a as first, $32f169118ef24707$export$6162ac8ba603caa9 as mapAllWith, $32f169118ef24707$export$f580247ac376296f as mapWith, $32f169118ef24707$export$34e2bedfca0f76a9 as memoizeIter, $32f169118ef24707$export$287c6381f647675d as reduceWith, $32f169118ef24707$export$c58417706a208278 as rest, $32f169118ef24707$export$b7df5d561049483a as take, $32f169118ef24707$export$404d2aad5e5c5508 as untilWith, $32f169118ef24707$export$8901015135f2fb22 as zip, $32f169118ef24707$export$b634740ce272acb5 as zipWith, $564c2f3fcb7ef12e$export$742acabee3dd6465 as after, $564c2f3fcb7ef12e$export$c7fd1518a7cbf3dd as afterAll, $564c2f3fcb7ef12e$export$cf1a5a0c68d6e80b as Append, $564c2f3fcb7ef12e$export$a253cce80efe6b1c as aroundAll, $564c2f3fcb7ef12e$export$1c4c1e3098bf5ebe as before, $564c2f3fcb7ef12e$export$8fd4d608a3485fcf as beforeAll, $564c2f3fcb7ef12e$export$53ebe40b44acc773 as ClassMixin, $564c2f3fcb7ef12e$export$487514b351402d1b as Define, $564c2f3fcb7ef12e$export$6e6fbaf3ea747b50 as FactoryFactory, $564c2f3fcb7ef12e$export$f6afc91249163ff2 as Override, $564c2f3fcb7ef12e$export$530764fd6bf3e88b as Prepend, $564c2f3fcb7ef12e$export$c597e4e4259c9301 as provided, $564c2f3fcb7ef12e$export$8f64980a2e163c7f as SubclassFactory, $564c2f3fcb7ef12e$export$6f0673371501d6b6 as unless, $564c2f3fcb7ef12e$export$4636581650fd0e55 as wrapWith, $df5d87e734be3d90$import$4bf9923669ad6c63$4fae95256245c8c0 as EventEmitter, $df5d87e734be3d90$export$ea9ec650125d8707 as reactivize, $4b0a30a9238405cc$export$30c1bf1f6ea900a5 as withValidation, $4b0a30a9238405cc$export$2191b9da168c6cf0 as ValidationError, $c8c6d4fe325848b7$export$77cea355fa80b5f4 as Observable, $1f5123af4789726e$export$13e2537ceeaf8a3a as multi, $1f5123af4789726e$export$26f73335cc2e7868 as method, $3d17850c787403bf$export$1cac73d0be9e5f93 as createFilterStream, $3d17850c787403bf$export$65a2d40914bef387 as createMapStream, $3d17850c787403bf$export$81b289dc713f2731 as createReduceStream, $3d17850c787403bf$export$5a49216eb02d2a7b as ParallelStream, $3d17850c787403bf$export$14202ce6ebc470bb as LimitedParallelStream, $3d17850c787403bf$export$e27394c20d18d2a8 as createFork, $3d17850c787403bf$export$ebab2c558c013279 as createMerge};
//# sourceMappingURL=main.js.map
