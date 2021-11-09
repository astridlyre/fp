import "core-js/features/observable/index.js";
import {Readable as $3TWPl$Readable, Transform as $3TWPl$Transform} from "stream";
import {EventEmitter as $cd98bea59efb04ae$import$4bf9923669ad6c63$4fae95256245c8c0} from "events";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
const $3d52677f95a43c24$export$f0954fd7d5368655 = (x)=>x
;
const $3d52677f95a43c24$export$c983f826f44ff86 = (a)=>(b)=>a
;
const $3d52677f95a43c24$export$2b74374111f56d9e = (fn, n)=>function arity() {
        return fn.apply(this, Array.from(arguments).slice(0, n));
    }
;
const $3d52677f95a43c24$export$a7e49f78f97b1037 = (fn)=>$3d52677f95a43c24$export$2b74374111f56d9e(fn, 1)
;
const $3d52677f95a43c24$export$33902b7329277358 = (fn)=>$3d52677f95a43c24$export$2b74374111f56d9e(fn, 2)
;
const $3d52677f95a43c24$export$b0d4470bfb62c4eb = (fn)=>$3d52677f95a43c24$export$2b74374111f56d9e(fn, 3)
;
const $3d52677f95a43c24$export$9e58c10e5cf1295d = (fn, larg)=>function callFirst(...args) {
        return fn.call(this, larg, ...args);
    }
;
const $3d52677f95a43c24$export$3d41a7c27165bfa3 = (fn, rarg)=>function callLast(...args) {
        return fn.call(this, ...args, rarg);
    }
;
const $3d52677f95a43c24$export$e775f2ca58d379f0 = Function.prototype.bind.bind(Function.prototype.call);
const $3d52677f95a43c24$export$fc1400facf92c78 = (a)=>$3d52677f95a43c24$export$844ec244b1367d54(a) || $3d52677f95a43c24$export$43bee75e5e14138e(a) || $3d52677f95a43c24$export$f6e2535fb5126e54(a) ? a.length : $3d52677f95a43c24$export$6750766a7c7ec627(a) || $3d52677f95a43c24$export$5c90113a285f2241(a) ? a.size : $3d52677f95a43c24$export$a6cdc56e425d0d0a(a) ? Object.entries(a).length : void 0
;
const $3d52677f95a43c24$var$compose2 = (f, g)=>function compose() {
        return f.call(this, g.apply(this, arguments));
    }
;
const $3d52677f95a43c24$export$f672e0b6f7222cd7 = (...fns)=>fns.reduce($3d52677f95a43c24$var$compose2)
;
const $3d52677f95a43c24$export$a4627e546088548d = (...fns)=>fns.reduceRight($3d52677f95a43c24$var$compose2)
;
const $3d52677f95a43c24$export$c3095a23b368d1f2 = (fn)=>function curryInner() {
        const args1 = arguments;
        return args1.length >= fn.length ? fn.apply(this, arguments) : function curryInner2() {
            const args = Array.from(args1).concat(Array.from(arguments));
            return args.length >= fn.length ? fn.apply(this, args) : $3d52677f95a43c24$export$c3095a23b368d1f2(fn)(...args);
        };
    }
;
/**
 * Typeof Functions
 * Provides several functions to test whether x is of type y
 */ const $3d52677f95a43c24$var$isTypeOf = (a)=>(b)=>typeof b === a
;
const $3d52677f95a43c24$export$7e4aa119212bc614 = $3d52677f95a43c24$var$isTypeOf('number');
const $3d52677f95a43c24$export$f9ce7b637dfbe238 = $3d52677f95a43c24$var$isTypeOf('boolean');
const $3d52677f95a43c24$export$630801d484da15df = (x)=>x === null
;
const $3d52677f95a43c24$export$fce6876652108ab = (x)=>typeof x === 'undefined'
;
const $3d52677f95a43c24$export$844ec244b1367d54 = $3d52677f95a43c24$var$isTypeOf('string');
const $3d52677f95a43c24$export$a6cdc56e425d0d0a = (x)=>x !== null && typeof x === 'object'
;
const $3d52677f95a43c24$export$43bee75e5e14138e = (a)=>Array.isArray(a)
;
const $3d52677f95a43c24$export$49034edbe6b62415 = $3d52677f95a43c24$export$c3095a23b368d1f2((a, b)=>b instanceof a
);
const $3d52677f95a43c24$export$f6e2535fb5126e54 = (f)=>f && typeof f === 'function'
;
const $3d52677f95a43c24$export$6750766a7c7ec627 = (s)=>s instanceof Set
;
const $3d52677f95a43c24$export$5c90113a285f2241 = (m)=>m instanceof Map
;
function $3d52677f95a43c24$export$dd1bc94b04021eeb(x) {
    if (x === '' || x == null || $3d52677f95a43c24$export$43bee75e5e14138e(x) && x.length === 0 || !$3d52677f95a43c24$export$5578ef75f4140928(x) && ($3d52677f95a43c24$export$6750766a7c7ec627(x) || $3d52677f95a43c24$export$5c90113a285f2241(x) || $3d52677f95a43c24$export$a6cdc56e425d0d0a(x)) && $3d52677f95a43c24$export$68c286be0e7e55b7(x).length === 0 || Number.isNaN(x)) return true;
    return false;
}
function $3d52677f95a43c24$export$5578ef75f4140928(obj) {
    const isCtorClass = obj.constructor && obj.constructor.toString().substring(0, 5) === 'class';
    if (obj.prototype === undefined) return isCtorClass;
    const isPrototypeCtorClass = obj.prototype.constructor && obj.prototype.constructor.toString && obj.prototype.constructor.toString().substring(0, 5) === 'class';
    return isCtorClass || isPrototypeCtorClass;
}
const $3d52677f95a43c24$export$3f23594af5f37336 = $3d52677f95a43c24$export$c3095a23b368d1f2((fn, x)=>(fn(x), x)
);
const $3d52677f95a43c24$export$6003a5f097c73977 = $3d52677f95a43c24$export$c3095a23b368d1f2((f, a)=>!f(a)
);
const $3d52677f95a43c24$export$6897c284b6f9f4dc = $3d52677f95a43c24$export$c3095a23b368d1f2((f, a)=>-f(a)
);
const $3d52677f95a43c24$export$d8f18b68abd220dc = (f)=>$3d52677f95a43c24$export$c3095a23b368d1f2(function flip(a, b) {
        return f.call(this, b, a);
    })
;
const $3d52677f95a43c24$export$c993f2f7dfcc6a25 = (f)=>$3d52677f95a43c24$export$c3095a23b368d1f2(function flip(a, b, c) {
        return f.call(this, b, c, a);
    })
;
const $3d52677f95a43c24$export$b4d6a1a804dab06c = $3d52677f95a43c24$export$3f23594af5f37336(console.log.bind(console));
const $3d52677f95a43c24$export$bef1f36f5486a6a3 = (fn, logger = console.log.bind(console))=>function log(...args) {
        logger(`Entering function ${fn.name}(${args.map((a)=>JSON.stringify(a)
        ).join(',')})`);
        const result = fn.apply(this, args);
        logger(`\nExiting function ${fn.name} -> ${JSON.stringify(result)}`);
        return result;
    }
;
const $3d52677f95a43c24$export$9608d0eacffd6284 = $3d52677f95a43c24$export$c3095a23b368d1f2((arr, fns, reducer, initial)=>arr.reduce($3d52677f95a43c24$export$f672e0b6f7222cd7(...fns)(reducer), initial)
);
const $3d52677f95a43c24$export$29deb6b34088de51 = (fn)=>(reducer)=>(acc, val)=>reducer(acc, fn(val))
;
const $3d52677f95a43c24$export$5ddcd2c2c8d9736f = (fn)=>(reducer)=>(acc, val)=>fn(val) ? reducer(acc, val) : acc
;
const $3d52677f95a43c24$export$977f3f6a9323c0f6 = $3d52677f95a43c24$export$c3095a23b368d1f2((name, a)=>a && (name in a ? $3d52677f95a43c24$export$f6e2535fb5126e54(a[name]) ? a[name].call(a) : a[name] : void 0)
);
const $3d52677f95a43c24$export$89db4734f6c919c4 = (name, ...args)=>(instance)=>instance[name].apply(instance, args)
;
const $3d52677f95a43c24$export$adf7c0fe6059d774 = (name, ...args)=>args === [] ? (instance)=>instance[name].bind(instance)
     : (instance)=>Function.prototype.bind.apply(instance[name], [
            instance
        ].concat(args))
;
const $3d52677f95a43c24$export$f45dfcb5efeffdb3 = $3d52677f95a43c24$export$c3095a23b368d1f2((name, value, a)=>$3d52677f95a43c24$export$a6cdc56e425d0d0a(a) ? (a[name] = value, a) : a
);
const $3d52677f95a43c24$export$8a39838a0f735648 = $3d52677f95a43c24$export$c3095a23b368d1f2((name, value, a)=>a && name in a ? {
        ...a,
        [name]: value
    } : {
        ...a
    }
);
const $3d52677f95a43c24$export$adaa4cf7ef1b65be = $3d52677f95a43c24$export$c3095a23b368d1f2((key, value, a)=>($3d52677f95a43c24$export$5c90113a285f2241(a) ? a.set(key, value) : a[key] = value, a)
);
const $3d52677f95a43c24$export$8128bb6492cf3de7 = $3d52677f95a43c24$export$c3095a23b368d1f2((names, a)=>names.map((n)=>$3d52677f95a43c24$export$977f3f6a9323c0f6(n, a)
    )
);
const $3d52677f95a43c24$export$357523c63a2253b9 = $3d52677f95a43c24$export$c3095a23b368d1f2((names, a)=>names.reduce((result, key)=>key in a ? (result[key] = a[key], result) : result
    , {
    })
);
const $3d52677f95a43c24$export$468cda29b159ee5d = (fn, ...args)=>(instance)=>fn.apply(instance, args)
;
const $3d52677f95a43c24$export$52be3e7c3b913516 = $3d52677f95a43c24$export$c3095a23b368d1f2((path, a)=>{
    if (!Array.isArray(path)) path = path.split('.');
    const [p, ...rest] = path;
    return !rest.length ? $3d52677f95a43c24$export$977f3f6a9323c0f6(p, a) : $3d52677f95a43c24$export$52be3e7c3b913516(rest, $3d52677f95a43c24$export$977f3f6a9323c0f6(p, a));
});
const $3d52677f95a43c24$export$112aad15b1fe0c19 = $3d52677f95a43c24$export$c3095a23b368d1f2((path, value, a)=>{
    if (!Array.isArray(path)) path = path.split('.');
    function innerDeepSetProp(path, value, obj) {
        if (path.length === 1) {
            obj[path[0]] = value;
            return obj;
        }
        if (path[0] in obj && $3d52677f95a43c24$export$a6cdc56e425d0d0a(obj[path[0]])) {
            const newObj = obj[path[0]];
            return innerDeepSetProp(path.slice(1), value, newObj);
        }
        const newObj = {
        };
        obj[path[0]] = newObj;
        return innerDeepSetProp(path.slice(1), value, newObj);
    }
    const aux = $3d52677f95a43c24$export$6c40052bed430212(a);
    return innerDeepSetProp(path, value, aux), aux;
});
const $3d52677f95a43c24$export$dc56a6be17ec932e = $3d52677f95a43c24$export$c3095a23b368d1f2((paths, a)=>paths.reduce((result, path)=>$3d52677f95a43c24$export$112aad15b1fe0c19(path, $3d52677f95a43c24$export$52be3e7c3b913516(path)(a), result)
    , {
    })
);
/**
 * DiffObject, returns the changed values from newObj that are not in oldObj
 * @param {object} oldObj - Old Object
 * @param {object} newObj - New Object to diff against oldObj
 * @returns {object} result - Object of differences between newObj and oldObj
 */ function $3d52677f95a43c24$var$diffObjects(oldObj, newObj) {
    if (oldObj === newObj) return {
    };
    function innerDiffObjects(oldObj, newObj, result) {
        if (oldObj === newObj) return result;
        for (const key of Reflect.ownKeys(newObj)){
            if (oldObj[key] === newObj[key]) continue;
            if ($3d52677f95a43c24$export$43bee75e5e14138e(newObj[key])) {
                result[key] = $3d52677f95a43c24$var$diffArrays(oldObj[key], newObj[key]);
                if (result[key].length === 0) delete result[key];
            } else if ($3d52677f95a43c24$export$a6cdc56e425d0d0a(newObj[key])) {
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
 */ function $3d52677f95a43c24$var$diffArrays(oldArr, newArr) {
    const result = [];
    if (oldArr === newArr) return result;
    for(let i = 0; i < newArr.length; i++)if (!(oldArr[i] === newArr[i])) result.push($3d52677f95a43c24$export$a37e3c603d7117e5(oldArr[i], newArr[i]));
    return result;
}
function $3d52677f95a43c24$export$a37e3c603d7117e5(a, b) {
    return $3d52677f95a43c24$export$43bee75e5e14138e(b) ? $3d52677f95a43c24$var$diffArrays(a, b) : $3d52677f95a43c24$export$a6cdc56e425d0d0a(b) ? $3d52677f95a43c24$var$diffObjects(a, b) : b;
}
function $3d52677f95a43c24$export$4950aa0f605343fb(a, b) {
    if (!a && b) return b;
    if ($3d52677f95a43c24$export$43bee75e5e14138e(b)) return b.map((value, i)=>$3d52677f95a43c24$export$4950aa0f605343fb(a[i], value)
    );
    if ($3d52677f95a43c24$export$a6cdc56e425d0d0a(b)) {
        const result = $3d52677f95a43c24$export$6c40052bed430212(a);
        for (const key of Reflect.ownKeys(b))result[key] = $3d52677f95a43c24$export$4950aa0f605343fb(a[key], b[key]);
        return result;
    }
    return b;
}
function $3d52677f95a43c24$export$ce9688d12180c837(keyMap, ...objects) {
    let result = {
    };
    for (const current of objects){
        result = $3d52677f95a43c24$export$4950aa0f605343fb(result, current);
        for (const [oldKey, newKey] of $3d52677f95a43c24$export$3e9f948b41964866(keyMap)){
            if (!current[oldKey]) continue;
            result[newKey] = result[newKey] ? $3d52677f95a43c24$export$7a5d5c156e7dc406(result[newKey], current[oldKey]) : $3d52677f95a43c24$export$7a5d5c156e7dc406(result[oldKey], current[oldKey]);
            delete result[oldKey];
        }
    }
    return result;
}
const $3d52677f95a43c24$export$7a5d5c156e7dc406 = (...items)=>Array.from(new Set(items.flat()))
;
function $3d52677f95a43c24$export$258f7bf0e3a9da18(a, b) {
    const result = {
    };
    const keys = $3d52677f95a43c24$export$7a5d5c156e7dc406([
        ...Reflect.ownKeys(a),
        ...Reflect.ownKeys(b)
    ]);
    for (const key of keys){
        const [aVal, bVal] = [
            a[key],
            b[key]
        ];
        // If a === b just deepCopy b
        if (aVal === bVal) result[key] = $3d52677f95a43c24$export$6c40052bed430212(bVal);
        else if ($3d52677f95a43c24$export$43bee75e5e14138e(aVal) && $3d52677f95a43c24$export$43bee75e5e14138e(bVal)) result[key] = $3d52677f95a43c24$export$7a5d5c156e7dc406([
            ...aVal,
            ...bVal
        ]);
        else if ($3d52677f95a43c24$export$a6cdc56e425d0d0a(aVal) && $3d52677f95a43c24$export$a6cdc56e425d0d0a(bVal)) result[key] = $3d52677f95a43c24$export$258f7bf0e3a9da18(aVal, bVal);
        else if (bVal === undefined) result[key] = $3d52677f95a43c24$export$6c40052bed430212(aVal);
        else result[key] = $3d52677f95a43c24$export$6c40052bed430212(bVal);
    }
    return result;
}
const $3d52677f95a43c24$export$3f063810d7bf01bd = $3d52677f95a43c24$export$c3095a23b368d1f2((key, arr)=>{
    const result = {
    };
    for (const item of arr)(result[item[key]] || (result[item[key]] = [])).push(item);
    return $3d52677f95a43c24$export$68c286be0e7e55b7(result);
});
const $3d52677f95a43c24$export$e439fc32198f78c5 = $3d52677f95a43c24$export$c3095a23b368d1f2((key, arr)=>arr.reduce((result, item)=>(result[item[key]] = item, result)
    , {
    })
);
const $3d52677f95a43c24$export$50b5b478b69a347c = $3d52677f95a43c24$export$c3095a23b368d1f2((keyA, keyB, a, b)=>{
    const objA = $3d52677f95a43c24$export$e439fc32198f78c5(keyA, a);
    const objB = $3d52677f95a43c24$export$e439fc32198f78c5(keyB, b);
    return $3d52677f95a43c24$export$68c286be0e7e55b7($3d52677f95a43c24$export$258f7bf0e3a9da18(objA, objB));
});
const $3d52677f95a43c24$export$54fd2c36b5cc6731 = (x)=>JSON.stringify(x)
;
const $3d52677f95a43c24$export$21625637effda04 = (x)=>JSON.parse(x)
;
const $3d52677f95a43c24$export$fac44ee5b035f737 = JSON.stringify.bind(JSON);
const $3d52677f95a43c24$export$98e6a39c04603d36 = JSON.parse.bind(JSON);
const $3d52677f95a43c24$export$f84e8e69fd4488a5 = String;
const $3d52677f95a43c24$export$f728be4ab20cbf1f = (s)=>Number.parseInt(s, 10)
;
const $3d52677f95a43c24$export$36cf564d487b5178 = $3d52677f95a43c24$export$c3095a23b368d1f2((x, reps, fill)=>String.prototype.padStart.call(x, reps, fill)
);
const $3d52677f95a43c24$export$23a07ddfce9fad49 = $3d52677f95a43c24$export$c3095a23b368d1f2((x, reps, fill)=>String.prototype.padEnd.call(x, reps, fill)
);
const $3d52677f95a43c24$export$4b80e395e36b5a56 = $3d52677f95a43c24$export$c3095a23b368d1f2((f, M)=>M.forEach(f)
);
const $3d52677f95a43c24$export$871de8747c9eaa88 = $3d52677f95a43c24$export$c3095a23b368d1f2((f, M)=>M.map(f)
);
const $3d52677f95a43c24$export$3dea766d36a8935f = $3d52677f95a43c24$export$c3095a23b368d1f2((p, M)=>M.filter(p)
);
const $3d52677f95a43c24$export$533b26079ad0b4b = $3d52677f95a43c24$export$c3095a23b368d1f2((reducer, seed, M)=>M.reduce(reducer, seed)
);
const $3d52677f95a43c24$export$7fef8bcdbb34f435 = $3d52677f95a43c24$export$c3095a23b368d1f2((reducer, seed, M)=>M.reduceRight(reducer, seed)
);
const $3d52677f95a43c24$export$c44985b87d605eff = $3d52677f95a43c24$export$f672e0b6f7222cd7($3d52677f95a43c24$export$871de8747c9eaa88, $3d52677f95a43c24$export$977f3f6a9323c0f6);
function $3d52677f95a43c24$export$3e9f948b41964866(iterable) {
    if (iterable.entries && $3d52677f95a43c24$export$f6e2535fb5126e54(iterable.entries)) return [
        ...iterable.entries()
    ];
    return Object.entries(iterable);
}
function $3d52677f95a43c24$export$68c286be0e7e55b7(iterable) {
    if (iterable.values && $3d52677f95a43c24$export$f6e2535fb5126e54(iterable.values)) return [
        ...iterable.values()
    ];
    return Object.values(iterable);
}
function $3d52677f95a43c24$export$ed97f33186d4b816(iterable) {
    if (iterable.keys && $3d52677f95a43c24$export$f6e2535fb5126e54(iterable.keys)) return [
        ...iterable.keys()
    ];
    return Object.keys(iterable);
}
const $3d52677f95a43c24$export$7ac989ec0c9c279 = $3d52677f95a43c24$export$c3095a23b368d1f2((keyMap, a)=>{
    const result = $3d52677f95a43c24$export$6c40052bed430212(a);
    for (const [oldKey, newKey] of $3d52677f95a43c24$export$3e9f948b41964866(keyMap))if ($3d52677f95a43c24$export$5c90113a285f2241(result)) {
        result.set(newKey, a.get(oldKey));
        result.delete(oldKey);
    } else {
        result[newKey] = a[oldKey];
        delete result[oldKey];
    }
    return result;
});
const $3d52677f95a43c24$export$ce7eaaed37329a1b = (fn)=>function innerDeepMap(tree) {
        return Array.prototype.map.call(tree, (element)=>Array.isArray(element) ? innerDeepMap(element) : fn(element)
        );
    }
;
const $3d52677f95a43c24$var$composeM2 = (f, g)=>function innerComposeM2() {
        return g.apply(this, arguments).flatMap(f);
    }
;
const $3d52677f95a43c24$export$fe41fac84f1fd82f = (...Ms)=>Ms.reduce($3d52677f95a43c24$var$composeM2)
;
const $3d52677f95a43c24$export$4e54ff84c97bdc0c = $3d52677f95a43c24$export$c3095a23b368d1f2((fn, a1, a2)=>a1.map(fn).ap(a2)
);
const $3d52677f95a43c24$export$8402e5acf634c0df = $3d52677f95a43c24$export$c3095a23b368d1f2((fn, a1, a2, a3)=>a1.map(fn).ap(a2).ap(a3)
);
const $3d52677f95a43c24$export$3a582736e2273011 = $3d52677f95a43c24$export$c3095a23b368d1f2((fn, a1, a2, a3, a4)=>a1.map(fn).ap(a2).ap(a3).ap(a4)
);
const $3d52677f95a43c24$export$5635d7ef4b8fee1c = $3d52677f95a43c24$export$c3095a23b368d1f2((fn, F)=>$3d52677f95a43c24$export$871de8747c9eaa88.call(F, fn)
);
const $3d52677f95a43c24$var$composeAsync2 = (f, g)=>async function innerComposeAsync() {
        return await f.call(this, await g.apply(this, arguments));
    }
;
const $3d52677f95a43c24$export$9dbe56a5aba4f4b4 = (...fns)=>fns.reduce($3d52677f95a43c24$var$composeAsync2)
;
const $3d52677f95a43c24$export$507da1b08fb8a738 = (...fns)=>fns.reduceRight($3d52677f95a43c24$var$composeAsync2)
;
const $3d52677f95a43c24$export$a939ddd3409bd57a = async (f, a)=>await Promise.all(a.map(f))
;
const $3d52677f95a43c24$export$b720f6c8e101da88 = async (f, init, a)=>await a.reduce((p, val)=>p.then(()=>f(val)
        )
    , Promise.resolve(init))
;
const $3d52677f95a43c24$export$30ee5c6810ce1ce2 = async (f, a)=>await $3d52677f95a43c24$export$a939ddd3409bd57a(f, a).then((bools)=>a.filter((_, i)=>Boolean(bools[i])
        )
    )
;
const $3d52677f95a43c24$export$40fa977508bcf282 = (M)=>M.flat()
;
const $3d52677f95a43c24$export$5b8affa63fc6df16 = $3d52677f95a43c24$export$c3095a23b368d1f2((f, M)=>M.flatMap(f)
);
const $3d52677f95a43c24$export$93e2b83da34ff82a = $3d52677f95a43c24$export$c3095a23b368d1f2((f, M)=>M.fold(f)
);
const $3d52677f95a43c24$export$2a722db47863bac2 = $3d52677f95a43c24$export$c3095a23b368d1f2((e, M)=>M.getOrElseThrow(e)
);
const $3d52677f95a43c24$export$9663ddc1cf085b32 = $3d52677f95a43c24$export$c3095a23b368d1f2((a, b)=>a === b
);
const $3d52677f95a43c24$export$e16d8520af44a096 = $3d52677f95a43c24$export$c3095a23b368d1f2((x, y)=>x + y
);
const $3d52677f95a43c24$export$ecceddf365c72028 = $3d52677f95a43c24$export$c3095a23b368d1f2((x, y)=>y + x
);
const $3d52677f95a43c24$export$4e2d2ead65e5f7e3 = $3d52677f95a43c24$export$c3095a23b368d1f2((x, y)=>x - y
);
const $3d52677f95a43c24$export$4ed4137bff330a54 = $3d52677f95a43c24$export$c3095a23b368d1f2((x, y)=>y - x
);
const $3d52677f95a43c24$export$2060d2db72cce88f = $3d52677f95a43c24$export$c3095a23b368d1f2((x, y)=>x * y
);
const $3d52677f95a43c24$export$58b562b9c9d46bb6 = $3d52677f95a43c24$export$c3095a23b368d1f2((x, y)=>y * x
);
const $3d52677f95a43c24$export$cd007d971a5a2143 = $3d52677f95a43c24$export$c3095a23b368d1f2((x, y)=>x / y
);
const $3d52677f95a43c24$export$7e7fa3dcb6d62f31 = $3d52677f95a43c24$export$c3095a23b368d1f2((x, y)=>y / x
);
const $3d52677f95a43c24$export$7978a6ddf29f4374 = (n)=>(x)=>Math.round(x * Math.pow(10, n)) / Math.pow(10, n)
;
const $3d52677f95a43c24$export$9c297f60e22e3389 = (base, power)=>power === 0 ? 1 : power & 1 ? base * $3d52677f95a43c24$export$9c297f60e22e3389(base, power - 1) : $3d52677f95a43c24$export$9c297f60e22e3389(base * base, power >> 1)
;
const $3d52677f95a43c24$export$5fd5031fecdacec3 = (a)=>a && a[0]
;
const $3d52677f95a43c24$export$4c7897fafd92b108 = (a)=>a && a[a.length - 1]
;
const $3d52677f95a43c24$export$7ecc1a3b11b57dab = $3d52677f95a43c24$export$c3095a23b368d1f2((f, arr)=>arr.every(f)
);
const $3d52677f95a43c24$export$ad14ef4001db2bcd = $3d52677f95a43c24$export$c3095a23b368d1f2((f, arr)=>arr.some(f)
);
const $3d52677f95a43c24$export$71aa6c912b956294 = $3d52677f95a43c24$export$c3095a23b368d1f2((f, arr)=>arr.find(f)
);
const $3d52677f95a43c24$export$8a63f25cc62965f1 = (...args)=>args.reduce((x, y)=>x + y
    , 0)
;
const $3d52677f95a43c24$export$cc6710ee5f037d57 = (ns)=>$3d52677f95a43c24$export$8a63f25cc62965f1(...ns) / ns.length
;
const $3d52677f95a43c24$export$f7e2c8231c57a8bd = $3d52677f95a43c24$export$c3095a23b368d1f2((sep, a)=>a.join(sep)
);
const $3d52677f95a43c24$export$b29f828819edca8d = (arr, a, b)=>arr.reduce((acc, cv)=>a(cv) ? (acc[0].push(cv), acc) : b(cv) ? (acc[1].push(cv), acc) : acc
    , [
        [],
        []
    ])
;
const $3d52677f95a43c24$export$66b4a470e4119e42 = (f, ...iters)=>{
    const min = Math.min(...$3d52677f95a43c24$export$c44985b87d605eff('length')(iters));
    const result = [];
    for(let i = 0; i < min; i++)result.push(f(...$3d52677f95a43c24$export$c44985b87d605eff(i)(iters)));
    return result;
};
const $3d52677f95a43c24$export$b035e44d7bb4278f = $3d52677f95a43c24$export$c3095a23b368d1f2((f, a)=>[
        ...a
    ].sort(f)
);
const $3d52677f95a43c24$export$4659b591c19bdf3d = $3d52677f95a43c24$export$c3095a23b368d1f2((re, s)=>re.test(s)
);
const $3d52677f95a43c24$export$77ad94ebf1c2b9ed = $3d52677f95a43c24$export$c3095a23b368d1f2((re, rpl, s)=>s.replace(re, rpl)
);
const $3d52677f95a43c24$export$65980d18b75784e2 = $3d52677f95a43c24$export$c3095a23b368d1f2((sep, s)=>s.split(sep)
);
const $3d52677f95a43c24$export$84b9399c77df0edf = (s)=>s.toLowerCase()
;
const $3d52677f95a43c24$export$d80c591a9e16646 = (s)=>s.toUpperCase()
;
const $3d52677f95a43c24$export$68159836694e22c1 = $3d52677f95a43c24$export$c3095a23b368d1f2((s1, s2)=>`${s1}${s2}`
);
const $3d52677f95a43c24$export$10d8903dec122b9d = $3d52677f95a43c24$export$c3095a23b368d1f2((s1, s2)=>`${s2}${s1}`
);
const $3d52677f95a43c24$export$d234c058d1d4e435 = $3d52677f95a43c24$export$c3095a23b368d1f2((f, g)=>{
    try {
        return f();
    } catch (e) {
        return g(e);
    }
});
const $3d52677f95a43c24$export$d02631cccf789723 = (start, end, step = start < end ? 1 : -1)=>{
    let index = -1;
    let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
    const result = new Array(length);
    while(length--){
        result[++index] = start;
        start += step;
    }
    return result;
};
function $3d52677f95a43c24$export$d2de3aaeafa91619(fn) {
    let done = false;
    let result;
    return function once() {
        return !done ? (done = true, result = fn.apply(this, arguments), result) : result;
    };
}
function $3d52677f95a43c24$export$fc10aeed3a532e2a(fn) {
    let cache = Object.create(null);
    const toKey = (key)=>JSON.stringify(key)
    ;
    const isPrimitive = (x)=>typeof x === 'number' || typeof x === 'string' || typeof x === 'boolean'
    ;
    function memoize() {
        const key = arguments.length === 1 && isPrimitive(arguments[0]) ? arguments[0] : toKey(arguments);
        return key in cache ? cache[key] : cache[key] = fn.apply(this, arguments);
    }
    memoize.clearCache = function clearCache() {
        cache = Object.create(null);
        return memoize;
    };
    return memoize;
}
const $3d52677f95a43c24$export$61fc7d43ac8f84b0 = (delay)=>{
    let pending = false;
    return function debounce(fn) {
        if (pending) clearTimeout(pending);
        pending = setTimeout(()=>fn.call(this)
        , delay);
    };
};
const $3d52677f95a43c24$export$63fce1f81095ac4f = (delay)=>{
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
function $3d52677f95a43c24$export$67b2770bcd4c0853(behaviour, sharedBehaviour = {
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
const $3d52677f95a43c24$var$detectCollision = (...descriptors)=>descriptors.flatMap(Object.keys).reduce($3d52677f95a43c24$var$sortReducer, []).reduce($3d52677f95a43c24$var$collisionReducer, []).forEach((c)=>console.log(`[WARN] Collision found: ${c}`)
    )
;
const $3d52677f95a43c24$var$sortReducer = (accumulator, value)=>{
    const nextIndex = accumulator.findIndex((i)=>value < i
    );
    const index = nextIndex > -1 ? nextIndex : accumulator.length;
    accumulator.splice(index, 0, value);
    return accumulator;
};
const $3d52677f95a43c24$var$collisionReducer = (accumulator, value, index, arr)=>value === arr[index + 1] ? [
        ...accumulator,
        value
    ] : accumulator
;
const $3d52677f95a43c24$var$isDescriptor = (obj)=>obj && (obj.state || obj.methods)
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
        if ($3d52677f95a43c24$var$isDescriptor(descriptor)) base = {
            ...base.state,
            ...base.methods,
            ...base.interop
        };
        $3d52677f95a43c24$var$detectCollision(base, ...mixins);
        if (!Object.isExtensible(base) || Object.isSealed(base)) throw new TypeError('Unable to concatenate mixins into base object. Object is either not extensible or has been sealed');
        return Object.assign({
            ...base
        }, ...mixins);
    },
    enumerable: false,
    writable: false,
    configurable: false
});
function $3d52677f95a43c24$export$7e32b29e1cb162e1(obj) {
    if (obj && typeof obj === 'object' && !Object.isFrozen(obj)) {
        Object.getOwnPropertyNames(obj).forEach((name)=>$3d52677f95a43c24$export$7e32b29e1cb162e1(obj[name])
        );
        Object.freeze(obj);
    }
    return obj;
}
function $3d52677f95a43c24$export$77ca992757d61efd(arr, offset = 0) {
    const len = Math.max(0, arr.length - offset);
    const newArray = new Array(len);
    for(let i = 0; i < len; i++)newArray[i] = $3d52677f95a43c24$export$6c40052bed430212(arr[i + offset]);
    return newArray;
}
function $3d52677f95a43c24$export$6c40052bed430212(obj) {
    if ($3d52677f95a43c24$export$43bee75e5e14138e(obj)) return $3d52677f95a43c24$export$77ca992757d61efd(obj);
    let aux = obj;
    if (obj && typeof obj === 'object') {
        aux = new obj.constructor();
        if ($3d52677f95a43c24$export$5c90113a285f2241(aux)) for (const key of obj.keys()){
            const keyCopy = $3d52677f95a43c24$export$6c40052bed430212(key);
            aux.set(keyCopy, obj.get(key));
        }
        else if ($3d52677f95a43c24$export$6750766a7c7ec627(aux)) for (const val of obj.values())aux.add(val);
        else Object.getOwnPropertyNames(obj).forEach((prop)=>aux[prop] = $3d52677f95a43c24$export$6c40052bed430212(obj[prop])
        );
    }
    return aux;
}
Object.deepFreeze = Object.deepFreeze || $3d52677f95a43c24$export$7e32b29e1cb162e1;
const $3d52677f95a43c24$export$fc3a40dec7b33bf = $3d52677f95a43c24$export$f672e0b6f7222cd7(Object.seal, Object.deepFreeze);
function $3d52677f95a43c24$export$9cb4719e2e525b7a(a, b) {
    if (a === b) return true;
    if (a && b && $3d52677f95a43c24$export$a6cdc56e425d0d0a(a) && $3d52677f95a43c24$export$a6cdc56e425d0d0a(b)) {
        if (a.constructor !== b.constructor) return false;
        let length, i, keys;
        if ($3d52677f95a43c24$export$43bee75e5e14138e(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; (i--) !== 0;)if (!$3d52677f95a43c24$export$9cb4719e2e525b7a(a[i], b[i])) return false;
            return true;
        }
        if ($3d52677f95a43c24$export$5c90113a285f2241(a) && $3d52677f95a43c24$export$5c90113a285f2241(b)) {
            if (a.size !== b.size) return false;
            for (i of a.entries())if (!b.has(i[0])) return false;
            for (i of a.entries())if (!$3d52677f95a43c24$export$9cb4719e2e525b7a(i[1], b.get(i[0]))) return false;
            return true;
        }
        if ($3d52677f95a43c24$export$6750766a7c7ec627(a) && $3d52677f95a43c24$export$6750766a7c7ec627(b)) {
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
            if (!$3d52677f95a43c24$export$9cb4719e2e525b7a(a[key], b[key])) return false;
        }
        return true;
    }
    return a !== a && b !== b;
}



// Maybe
function $31e15007ebcf182a$var$throwError(error) {
    throw error;
}
function $31e15007ebcf182a$var$errorWith(str) {
    throw new TypeError(str);
}
class $31e15007ebcf182a$export$ad3bd6e4e1ec5d06 {
    #value;
    [Symbol.toStringTag] = 'Maybe';
    constructor(v){
        this.#value = v;
    }
    get() {
        return this.value ?? $31e15007ebcf182a$var$errorWith('Unable to get from a Maybe#Nothing');
    }
    getOrElse(defaultValue) {
        return this.value ?? defaultValue;
    }
    getOrElseThrow(error) {
        return this.value ?? $31e15007ebcf182a$var$throwError(error);
    }
    get value() {
        return this.#value;
    }
    static of(v) {
        return v == null ? new $31e15007ebcf182a$export$bebe9059409a0d04(v) : new $31e15007ebcf182a$export$8a67b48435b5d073(v);
    }
    static fromEmpty(v) {
        return $31e15007ebcf182a$export$ad3bd6e4e1ec5d06.of(v).map((x)=>x.length === 0 ? null : x
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
        yield this.isNothing ? new $31e15007ebcf182a$export$bebe9059409a0d04(this.#value) : undefined;
        yield this.isJust ? new $31e15007ebcf182a$export$8a67b48435b5d073(this.#value) : undefined;
    }
}
class $31e15007ebcf182a$export$8a67b48435b5d073 extends $31e15007ebcf182a$export$ad3bd6e4e1ec5d06 {
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
        return fn(this.value) ? new $31e15007ebcf182a$export$8a67b48435b5d073(a) : new $31e15007ebcf182a$export$bebe9059409a0d04();
    }
    map(fn) {
        return $31e15007ebcf182a$export$ad3bd6e4e1ec5d06.of(fn(this.value));
    }
    flatMap(fn) {
        return $31e15007ebcf182a$export$ad3bd6e4e1ec5d06.of(fn(this.value).merge());
    }
    ap(Ma) {
        return Ma.isNothing ? Ma : $3d52677f95a43c24$export$f6e2535fb5126e54(this.value) ? $31e15007ebcf182a$export$ad3bd6e4e1ec5d06.of($3d52677f95a43c24$export$f6e2535fb5126e54(Ma.merge()) ? Ma.merge().call(Ma, this.value) : this.value(Ma.merge())) : $31e15007ebcf182a$export$ad3bd6e4e1ec5d06.of(Ma.merge().call(Ma, this.value));
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
class $31e15007ebcf182a$export$bebe9059409a0d04 extends $31e15007ebcf182a$export$ad3bd6e4e1ec5d06 {
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
class $31e15007ebcf182a$export$8fdcabde73f49165 {
    #value;
    constructor(v){
        this.#value = v;
    }
    get value() {
        return this.#value;
    }
    static of(v, error = 'Null argument provided') {
        return v == null ? new $31e15007ebcf182a$export$5ebc9a4af3ac0850(error) : new $31e15007ebcf182a$export$ffa3d9fee6fd705a(v);
    }
    static fromEmpty(a) {
        return $31e15007ebcf182a$export$8fdcabde73f49165.of(a).map((x)=>x.length === 0 ? null : x
        );
    }
    static fromPromise(p) {
        return p.then((result)=>new $31e15007ebcf182a$export$ffa3d9fee6fd705a(result)
        ).catch((err)=>new $31e15007ebcf182a$export$5ebc9a4af3ac0850(err.message)
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
        yield this.isFailure ? new $31e15007ebcf182a$export$5ebc9a4af3ac0850(this.#value) : undefined;
        yield this.isSuccess ? new $31e15007ebcf182a$export$ffa3d9fee6fd705a(this.#value) : undefined;
    }
}
class $31e15007ebcf182a$export$5ebc9a4af3ac0850 extends $31e15007ebcf182a$export$8fdcabde73f49165 {
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
        $31e15007ebcf182a$var$errorWith('Unable to get from a Result#Failure');
    }
    merge() {
        $31e15007ebcf182a$var$errorWith('Unable to merge from a Result#Failure');
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
class $31e15007ebcf182a$export$ffa3d9fee6fd705a extends $31e15007ebcf182a$export$8fdcabde73f49165 {
    get isSuccess() {
        return true;
    }
    get isFailure() {
        return false;
    }
    map(fn) {
        return $31e15007ebcf182a$export$8fdcabde73f49165.of(fn(this.value));
    }
    flatMap(fn) {
        return $31e15007ebcf182a$export$8fdcabde73f49165.of(fn(this.value).merge());
    }
    ap(Rs) {
        return Rs.isFailure ? Rs : $3d52677f95a43c24$export$f6e2535fb5126e54(this.value) ? $31e15007ebcf182a$export$8fdcabde73f49165.of($3d52677f95a43c24$export$f6e2535fb5126e54(Rs.merge()) ? Rs.merge().call(Rs, this.value) : this.value(Rs.merge())) : $31e15007ebcf182a$export$8fdcabde73f49165.of(Rs.merge().call(Rs, this.value));
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
class $31e15007ebcf182a$export$fa957d01b0310fd7 {
    constructor(fn, msg){
        try {
            return new $31e15007ebcf182a$export$ffa3d9fee6fd705a(fn());
        } catch (e) {
            return new $31e15007ebcf182a$export$5ebc9a4af3ac0850(msg || e.message);
        }
    }
    static of(fn, msg) {
        return new $31e15007ebcf182a$export$fa957d01b0310fd7(fn, msg);
    }
}
class $31e15007ebcf182a$export$17de313a76857e4a {
    constructor(){
        throw new Error('Must use static method of');
    }
    static async of(fn, msg) {
        try {
            const result = await fn();
            return new $31e15007ebcf182a$export$ffa3d9fee6fd705a(result);
        } catch (e) {
            return new $31e15007ebcf182a$export$5ebc9a4af3ac0850(msg || e.message);
        }
    }
}
class $31e15007ebcf182a$export$8f8422ac5947a789 {
    [Symbol.toStringTag] = 'IO';
    constructor(fn){
        this.unsafePerformIO = fn;
    }
    map(fn) {
        return new $31e15007ebcf182a$export$8f8422ac5947a789($3d52677f95a43c24$export$f672e0b6f7222cd7(fn, this.unsafePerformIO));
    }
    flatMap(fn) {
        return this.map(fn).merge();
    }
    ap(f) {
        return this.flatMap((fn)=>f.map(fn)
        );
    }
    merge() {
        return new $31e15007ebcf182a$export$8f8422ac5947a789(()=>this.unsafePerformIO().unsafePerformIO()
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
        return new $31e15007ebcf182a$export$8f8422ac5947a789(()=>x
        );
    }
}
class $31e15007ebcf182a$export$d8552d785efb2cb8 {
    [Symbol.toStringTag] = 'IOAsync';
    constructor(fn){
        this.unsafePerformIO = fn;
    }
    async map(fn) {
        return new $31e15007ebcf182a$export$8f8422ac5947a789($3d52677f95a43c24$export$9dbe56a5aba4f4b4(fn, this.unsafePerformIO));
    }
    async flatMap(fn) {
        return await this.map(fn).merge();
    }
    async merge() {
        return new $31e15007ebcf182a$export$d8552d785efb2cb8(async ()=>await this.unsafePerformIO().unsafePerformIO()
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
        return new $31e15007ebcf182a$export$d8552d785efb2cb8(async ()=>await fn
        );
    }
}
class $31e15007ebcf182a$export$d63d7cff08fe4dc9 {
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
        return new $31e15007ebcf182a$export$d63d7cff08fe4dc9(fn(this.#left), fn(this.#right));
    }
    flatMap(fn) {
        return new $31e15007ebcf182a$export$d63d7cff08fe4dc9(...fn(this.#left, this.#right));
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
        return new $31e15007ebcf182a$export$d63d7cff08fe4dc9(left, right);
    }
    static eq(pairA, pairB) {
        return pairA.left === pairB.left && pairA.right === pairB.right;
    }
}
class $31e15007ebcf182a$export$cb55c7e8798604bb {
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
        return new $31e15007ebcf182a$export$cb55c7e8798604bb(fn(this.#left), fn(this.#middle), fn(this.#right));
    }
    flatMap(fn) {
        return new $31e15007ebcf182a$export$cb55c7e8798604bb(...fn(this.#left, this.#middle, this.#right));
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
        return new $31e15007ebcf182a$export$cb55c7e8798604bb(left, middle, right);
    }
    static eq(tripleA, tripleB) {
        return tripleA.left === tripleB.left && tripleA.middle === tripleB.middle && tripleA.right === tripleB.right;
    }
}
class $31e15007ebcf182a$export$deb82508dd66d288 {
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
        return new $31e15007ebcf182a$export$deb82508dd66d288(types);
    }
}


function $dcfe00a7c44a67fd$export$5d730b7aed1a3eb0(apiEndpoint, options1 = {
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



const $efed9ec112aaba23$export$f580247ac376296f = $3d52677f95a43c24$export$c3095a23b368d1f2(function* mapWith(fn, iterable) {
    for (const element of iterable)yield fn(element);
});
const $efed9ec112aaba23$export$6162ac8ba603caa9 = $3d52677f95a43c24$export$c3095a23b368d1f2(function* mapAllWith(fn, iterable) {
    for (const element of iterable)yield* fn(element);
});
const $efed9ec112aaba23$export$7c961d426bc3e8f3 = $3d52677f95a43c24$export$c3095a23b368d1f2(function* filterWith(fn, iterable) {
    for (const element of iterable)if (fn(element)) yield element;
});
const $efed9ec112aaba23$export$8e16b83750b44988 = $3d52677f95a43c24$export$c3095a23b368d1f2(function* compact(iterable) {
    for (const element of iterable)if (element != null) yield element;
});
const $efed9ec112aaba23$export$404d2aad5e5c5508 = $3d52677f95a43c24$export$c3095a23b368d1f2(function* untilWith(fn, iterable) {
    for (const element of iterable){
        if (fn(element)) break;
        yield element;
    }
});
const $efed9ec112aaba23$export$43128fadae87b74a = (iterable)=>iterable[Symbol.iterator]().next().value
;
function* $efed9ec112aaba23$export$c58417706a208278(iterable) {
    const iterator = iterable[Symbol.iterator]();
    iterator.next();
    yield* iterator;
}
const $efed9ec112aaba23$export$b7df5d561049483a = $3d52677f95a43c24$export$c3095a23b368d1f2(function* take(numberToTake, iterable) {
    const iterator = iterable[Symbol.iterator]();
    for(let i = 0; i < numberToTake; ++i){
        const { done: done , value: value  } = iterator.next();
        if (!done) yield value;
    }
});
const $efed9ec112aaba23$export$663103110d94aac9 = $3d52677f95a43c24$export$c3095a23b368d1f2(function* drop(numberToDrop, iterable) {
    if (numberToDrop >= iterable.length) return;
    const iterator = iterable[Symbol.iterator]();
    let i = 0;
    while((i++) < numberToDrop)iterator.next();
    do {
        const { done: done , value: value  } = iterator.next();
        if (!done) yield value;
    }while (++i <= iterable.length)
});
function* $efed9ec112aaba23$export$8901015135f2fb22(...iterables) {
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
function* $efed9ec112aaba23$export$b634740ce272acb5(zipper, ...iterables) {
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
const $efed9ec112aaba23$export$287c6381f647675d = $3d52677f95a43c24$export$c3095a23b368d1f2((fn, seed, iterable)=>{
    let accumulator = seed;
    for (const element of iterable)accumulator = fn(accumulator, element);
    return accumulator;
});
function $efed9ec112aaba23$export$34e2bedfca0f76a9(generator) {
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


const $336ef9b6ef9e3999$export$53ebe40b44acc773 = (behaviour, sharedBehaviour = {
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
function $336ef9b6ef9e3999$export$487514b351402d1b(behaviour) {
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
function $336ef9b6ef9e3999$export$f6afc91249163ff2(behaviour) {
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
function $336ef9b6ef9e3999$export$530764fd6bf3e88b(behaviour) {
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
function $336ef9b6ef9e3999$export$cf1a5a0c68d6e80b(behaviour) {
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
const $336ef9b6ef9e3999$export$742acabee3dd6465 = (...fns)=>function after(target, name, descriptor) {
        const method = descriptor.value;
        descriptor.value = function withAfter(...args) {
            const value = method.apply(this, args);
            for (const fn of fns)fn.apply(this, args);
            return value;
        };
    }
;
const $336ef9b6ef9e3999$export$1c4c1e3098bf5ebe = (...fns)=>function before(target, name, descriptor) {
        const method = descriptor.value;
        descriptor.value = function withBefore(...args) {
            for (const fn of fns)fn.apply(this, args);
            return method.apply(this, args);
        };
    }
;
const $336ef9b6ef9e3999$export$c597e4e4259c9301 = (...fns)=>function provided(target, name, descriptor) {
        const method = descriptor.value;
        descriptor.value = function withProvided(...args) {
            for (const fn of fns)if (!fn.apply(this, args)) return;
            return method.apply(this, args);
        };
    }
;
const $336ef9b6ef9e3999$export$6f0673371501d6b6 = (...fns)=>function unless(target, name, descriptor) {
        const method = descriptor.value;
        descriptor.value = function withUnless(...args) {
            for (const fn of fns)if (fn.apply(this, args)) return;
            return method.apply(this, args);
        };
    }
;
const $336ef9b6ef9e3999$export$4636581650fd0e55 = (decorator)=>function wrapWith(target, name, descriptor) {
        descriptor.value = decorator(descriptor.value);
    }
;
const $336ef9b6ef9e3999$export$a253cce80efe6b1c = (behaviour, ...methodNames)=>(clazz)=>{
        for (const methodName of methodNames)Object.defineProperty(clazz.prototype, methodName, {
            value: behaviour(clazz.prototype[methodName]),
            writable: true
        });
        return clazz;
    }
;
const $336ef9b6ef9e3999$export$8fd4d608a3485fcf = (behaviour, ...methodNames)=>(clazz)=>{
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
const $336ef9b6ef9e3999$export$c7fd1518a7cbf3dd = (behaviour, ...methodNames)=>(clazz)=>{
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
const $336ef9b6ef9e3999$export$8f64980a2e163c7f = (behaviour)=>(superclass)=>$336ef9b6ef9e3999$export$53ebe40b44acc773(behaviour)(class extends superclass {
        })
;
const $336ef9b6ef9e3999$export$6e6fbaf3ea747b50 = (c)=>(...args)=>new c(...args)
;


var $1725dc54c6628a1c$exports = {};

$parcel$export($1725dc54c6628a1c$exports, "LazyCollection", () => $1725dc54c6628a1c$export$4f803f7f128c2832);
$parcel$export($1725dc54c6628a1c$exports, "Numbers", () => $1725dc54c6628a1c$export$bc00d4d99d9c6e7d);
$parcel$export($1725dc54c6628a1c$exports, "Pair", () => $1725dc54c6628a1c$export$d63d7cff08fe4dc9);
$parcel$export($1725dc54c6628a1c$exports, "Stack", () => $1725dc54c6628a1c$export$694e0d28c7ffc90c);
$parcel$export($1725dc54c6628a1c$exports, "Lazy", () => $1725dc54c6628a1c$export$b624eff549462981);
const $1725dc54c6628a1c$export$4f803f7f128c2832 = {
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
        }, $1725dc54c6628a1c$export$4f803f7f128c2832);
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
        }, $1725dc54c6628a1c$export$4f803f7f128c2832);
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
        }, $1725dc54c6628a1c$export$4f803f7f128c2832);
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
        }, $1725dc54c6628a1c$export$4f803f7f128c2832);
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
        }, $1725dc54c6628a1c$export$4f803f7f128c2832);
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
        }, $1725dc54c6628a1c$export$4f803f7f128c2832);
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
const $1725dc54c6628a1c$export$bc00d4d99d9c6e7d = Object.assign({
    *[Symbol.iterator] () {
        let n = 0;
        while(true)yield n++;
    }
}, $1725dc54c6628a1c$export$4f803f7f128c2832);
const $1725dc54c6628a1c$var$EMPTY = {
    isEmpty: ()=>true
};
const $1725dc54c6628a1c$export$d63d7cff08fe4dc9 = (car, cdr = $1725dc54c6628a1c$var$EMPTY)=>Object.assign({
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
    }, $1725dc54c6628a1c$export$4f803f7f128c2832)
;
$1725dc54c6628a1c$export$d63d7cff08fe4dc9.from = (iterable)=>(function iterationToList(iteration) {
        const { done: done , value: value  } = iteration.next();
        return done ? $1725dc54c6628a1c$var$EMPTY : $1725dc54c6628a1c$export$d63d7cff08fe4dc9(value, iterationToList(iteration));
    })(iterable[Symbol.iterator]())
;
const $1725dc54c6628a1c$export$694e0d28c7ffc90c = ()=>Object.assign({
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
    }, $1725dc54c6628a1c$export$4f803f7f128c2832)
;
$1725dc54c6628a1c$export$694e0d28c7ffc90c.from = function from(iterable) {
    const stack = this();
    for (let element of iterable)stack.push(element);
    return stack;
};
function $1725dc54c6628a1c$export$b624eff549462981(target) {
    return Object.assign(target, $1725dc54c6628a1c$export$4f803f7f128c2832);
}


var $259c04ca213edce7$exports = {};

$parcel$export($259c04ca213edce7$exports, "lens", () => $259c04ca213edce7$export$21cde5187c2605a3);
$parcel$export($259c04ca213edce7$exports, "view", () => $259c04ca213edce7$export$c4ddc81c7b2c8d7a);
$parcel$export($259c04ca213edce7$exports, "set", () => $259c04ca213edce7$export$adaa4cf7ef1b65be);
$parcel$export($259c04ca213edce7$exports, "over", () => $259c04ca213edce7$export$fb4902fd9e525693);
$parcel$export($259c04ca213edce7$exports, "lensProp", () => $259c04ca213edce7$export$a6ba95b157529836);


// Lenses
class $259c04ca213edce7$var$Constant {
    #value;
    constructor(v){
        this.#value = $31e15007ebcf182a$export$ad3bd6e4e1ec5d06.of(v);
        this.map = ()=>this
        ;
    }
    get value() {
        return this.#value;
    }
}
class $259c04ca213edce7$var$Variable {
    #value;
    constructor(v){
        this.#value = $31e15007ebcf182a$export$ad3bd6e4e1ec5d06.of(v);
        this.map = (fn)=>new $259c04ca213edce7$var$Variable(fn(v))
        ;
    }
    get value() {
        return this.#value;
    }
}
const $259c04ca213edce7$export$21cde5187c2605a3 = (getter, setter)=>(fn)=>(obj)=>fn(getter(obj)).map((value)=>setter(value, obj)
            )
;
const $259c04ca213edce7$export$c4ddc81c7b2c8d7a = $3d52677f95a43c24$export$c3095a23b368d1f2((lensAttr, obj)=>lensAttr((x)=>new $259c04ca213edce7$var$Constant(x)
    )(obj).value
);
const $259c04ca213edce7$export$adaa4cf7ef1b65be = $3d52677f95a43c24$export$c3095a23b368d1f2((lensAttr, newVal, obj)=>lensAttr(()=>new $259c04ca213edce7$var$Variable(newVal)
    )(obj).value
);
const $259c04ca213edce7$export$fb4902fd9e525693 = $3d52677f95a43c24$export$c3095a23b368d1f2((lensAttr, mapfn, obj)=>lensAttr((x)=>new $259c04ca213edce7$var$Variable(mapfn(x))
    )(obj).value
);
const $259c04ca213edce7$export$a6ba95b157529836 = (p)=>$259c04ca213edce7$export$21cde5187c2605a3(prop(p), setProp(p))
;


var $0668ccc89facbf88$exports = {};

$parcel$export($0668ccc89facbf88$exports, "Observable", () => $0668ccc89facbf88$export$77cea355fa80b5f4);
$parcel$export($0668ccc89facbf88$exports, "$$observable", () => $0668ccc89facbf88$export$a7c40509ff863847);
$parcel$export($0668ccc89facbf88$exports, "ReactiveExtensions", () => $0668ccc89facbf88$export$9a935b903d7a019b);
$parcel$export($0668ccc89facbf88$exports, "buffer", () => $829b020c48ac0888$export$ab1029bcae9ddb4a);
$parcel$export($0668ccc89facbf88$exports, "catchError", () => $7891fee75e32b25c$export$3dede90624df3ba9);
$parcel$export($0668ccc89facbf88$exports, "concat", () => $dc21c5c105d00167$export$ee1b3e54f0441b22);
$parcel$export($0668ccc89facbf88$exports, "combine", () => $b5d5fad7a717c5b4$export$1be1fc439b849fdf);
$parcel$export($0668ccc89facbf88$exports, "debounce", () => $bcf9dfa6cf966919$export$61fc7d43ac8f84b0);
$parcel$export($0668ccc89facbf88$exports, "distinct", () => $01462cae9c3f1fd2$export$983a3b5fb2f7202e);
$parcel$export($0668ccc89facbf88$exports, "effect", () => $4765bd85e71e19ed$export$dc573d8a6576cdb3);
$parcel$export($0668ccc89facbf88$exports, "filter", () => $c8c8fb0c5f7799a4$export$3dea766d36a8935f);
$parcel$export($0668ccc89facbf88$exports, "finallyEffect", () => $ff27bb5b393cfe70$export$c4c7e81705f70958);
$parcel$export($0668ccc89facbf88$exports, "forEach", () => $2f6d9c153d48d0a7$export$4b80e395e36b5a56);
$parcel$export($0668ccc89facbf88$exports, "interval", () => $c21ee38dd9ebd076$export$3174cdbf0a0cbc84);
$parcel$export($0668ccc89facbf88$exports, "listen", () => $4ea816ee6071af22$export$63174c828edd6ff8);
$parcel$export($0668ccc89facbf88$exports, "map", () => $5b03a656db7d5259$export$871de8747c9eaa88);
$parcel$export($0668ccc89facbf88$exports, "mapTo", () => $c2701aa138d699c1$export$e0eaf3a86c03b2ad);
$parcel$export($0668ccc89facbf88$exports, "merge", () => $fabe6ede74899966$export$4950aa0f605343fb);
$parcel$export($0668ccc89facbf88$exports, "flatMap", () => $38a704acf4c7e096$export$5b8affa63fc6df16);
$parcel$export($0668ccc89facbf88$exports, "pick", () => $a50e4ccb156c9bec$export$357523c63a2253b9);
$parcel$export($0668ccc89facbf88$exports, "reduce", () => $5272794e7ba8b741$export$533b26079ad0b4b);
$parcel$export($0668ccc89facbf88$exports, "retry", () => $e4ba25915f560ee1$export$9369b12211e1fce4);
$parcel$export($0668ccc89facbf88$exports, "skip", () => $36c4ac43a6081018$export$955fc4a6c4be454d);
$parcel$export($0668ccc89facbf88$exports, "share", () => $c4a32f929d0f07cb$export$ed80d9de1d9df928);
$parcel$export($0668ccc89facbf88$exports, "switchStream", () => $0c6a644cfb2b116b$export$1a62af6d099a1e7c);
$parcel$export($0668ccc89facbf88$exports, "subject", () => $e2ff1f75e1116399$export$c49781290a0a7ce3);
$parcel$export($0668ccc89facbf88$exports, "take", () => $b0bdbb36e6159c0d$export$b7df5d561049483a);
$parcel$export($0668ccc89facbf88$exports, "throttle", () => $9d72bfb0921c0a7a$export$de363e709c412c8a);
$parcel$export($0668ccc89facbf88$exports, "until", () => $6239b5c280c7a65a$export$a40009bd2c363351);
$parcel$export($0668ccc89facbf88$exports, "zip", () => $19e1fd6429fd8860$export$8901015135f2fb22);



const $981ef46a600e1644$export$fbd2e1a2b7cf8f98 = (observer)=>(next)=>({
            next: next,
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
        })
;
const $981ef46a600e1644$export$c7187bbd1a7a9244 = (creator)=>(...initialArgs)=>new Proxy({
        }, {
            get (_, prop) {
                return (...args)=>creator(...initialArgs)[prop](...args)
                ;
            }
        })
;


const $829b020c48ac0888$export$ab1029bcae9ddb4a = $981ef46a600e1644$export$c7187bbd1a7a9244((count, stream)=>{
    const internalStorage = [];
    return new Observable((observer)=>{
        const subs = stream.subscribe($981ef46a600e1644$export$fbd2e1a2b7cf8f98(observer)((value)=>{
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



const $7891fee75e32b25c$export$3dede90624df3ba9 = $981ef46a600e1644$export$c7187bbd1a7a9244((handler, stream)=>{
    const sub = [];
    return new Observable((observer)=>{
        $7891fee75e32b25c$var$retry(handler, stream, sub, observer);
        return ()=>sub.map((s)=>s.unsubscribe()
            )
        ;
    });
});
function $7891fee75e32b25c$var$retry(handler, stream, sub, observer) {
    sub.pop()?.unsubscribe();
    return sub.push(stream.subscribe({
        next: (value)=>observer.next(value)
        ,
        error: (err)=>{
            try {
                const capture = handler(err, stream);
                if (capture === stream) return $7891fee75e32b25c$var$retry(handler, stream, sub, observer);
                observer.next(capture);
            } catch (err1) {
                observer.error(err1);
            }
        },
        complete: ()=>observer.complete()
    }));
}



const $dc21c5c105d00167$export$ee1b3e54f0441b22 = $981ef46a600e1644$export$c7187bbd1a7a9244((...streams)=>{
    const subs = [];
    return new Observable((observer)=>{
        $dc21c5c105d00167$var$subNextStream(streams, 0, subs, observer);
        return ()=>subs.forEach((sub)=>sub.unsubscribe()
            )
        ;
    });
});
function $dc21c5c105d00167$var$subNextStream(streams, i, subs, observer) {
    subs.push(streams[i].subscribe({
        next: (value)=>observer.next(value)
        ,
        error: observer.error.bind(observer),
        complete () {
            if (i === streams.length - 1) return observer.complete();
            $dc21c5c105d00167$var$subNextStream(streams, i + 1, subs, observer);
        }
    }));
}




const $b5d5fad7a717c5b4$export$1be1fc439b849fdf = $981ef46a600e1644$export$c7187bbd1a7a9244((...streams)=>{
    let done = 0;
    const store = Object.fromEntries(streams.map((_, i)=>[
            i,
            []
        ]
    ));
    const buffers = $3d52677f95a43c24$export$68c286be0e7e55b7(store);
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




const $bcf9dfa6cf966919$export$61fc7d43ac8f84b0 = $981ef46a600e1644$export$c7187bbd1a7a9244((limit, stream)=>{
    const stack = [];
    let lastInterval = 0;
    let wantsComplete = false;
    return new Observable((observer)=>{
        const subs = stream.subscribe({
            next: (value)=>{
                stack.push(value);
                clearTimeout(lastInterval);
                lastInterval = setTimeout(()=>{
                    observer.next($3d52677f95a43c24$export$4c7897fafd92b108(stack));
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




const $01462cae9c3f1fd2$export$983a3b5fb2f7202e = $981ef46a600e1644$export$c7187bbd1a7a9244((fn, stream)=>{
    let lastSent = null;
    return new Observable((observer)=>{
        const subs = stream.subscribe($981ef46a600e1644$export$fbd2e1a2b7cf8f98(observer)((value)=>{
            try {
                const a = fn(lastSent);
                const b = fn(value);
                if (!$3d52677f95a43c24$export$9cb4719e2e525b7a(a, b)) observer.next(value);
            } catch  {
                observer.next(value);
            }
            lastSent = value;
        }));
        return ()=>subs.unsubscribe()
        ;
    });
});



const $4765bd85e71e19ed$export$dc573d8a6576cdb3 = $981ef46a600e1644$export$c7187bbd1a7a9244((fn, stream)=>new Observable((observer)=>{
        const subs = stream.subscribe($981ef46a600e1644$export$fbd2e1a2b7cf8f98(observer)((value)=>{
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



const $ff27bb5b393cfe70$export$c4c7e81705f70958 = $981ef46a600e1644$export$c7187bbd1a7a9244((fn, stream)=>new Observable((observer)=>{
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



const $c8c8fb0c5f7799a4$export$3dea766d36a8935f = $981ef46a600e1644$export$c7187bbd1a7a9244((predicate, stream)=>new Observable((observer)=>{
        const subs = stream.subscribe($981ef46a600e1644$export$fbd2e1a2b7cf8f98(observer)((value)=>{
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



const $2f6d9c153d48d0a7$export$4b80e395e36b5a56 = $3d52677f95a43c24$export$c3095a23b368d1f2((fn, stream)=>{
    const subs = stream.subscribe({
        next: fn,
        error: fn
    });
    return {
        unsubscribe: subs.unsubscribe.bind(subs)
    };
});



const $c21ee38dd9ebd076$export$3174cdbf0a0cbc84 = $981ef46a600e1644$export$c7187bbd1a7a9244((time)=>{
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



const $4ea816ee6071af22$export$63174c828edd6ff8 = $981ef46a600e1644$export$c7187bbd1a7a9244((eventName, element)=>{
    return new Observable((observer)=>{
        const handler = (event)=>observer.next(event)
        ;
        element.addEventListener(eventName, handler, true);
        return ()=>element.removeEventListener(eventName, handler, true)
        ;
    });
});



const $5b03a656db7d5259$export$871de8747c9eaa88 = $981ef46a600e1644$export$c7187bbd1a7a9244((fn, stream)=>new Observable((observer)=>{
        const subs = stream.subscribe($981ef46a600e1644$export$fbd2e1a2b7cf8f98(observer)((value)=>{
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



const $c2701aa138d699c1$export$e0eaf3a86c03b2ad = $981ef46a600e1644$export$c7187bbd1a7a9244((value, stream)=>new Observable((observer)=>{
        const subs = stream.subscribe($981ef46a600e1644$export$fbd2e1a2b7cf8f98(observer)(()=>observer.next(value)
        ));
        return ()=>subs.unsubscribe()
        ;
    })
);



const $fabe6ede74899966$export$4950aa0f605343fb = $981ef46a600e1644$export$c7187bbd1a7a9244((...streams)=>{
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



const $38a704acf4c7e096$export$5b8affa63fc6df16 = $981ef46a600e1644$export$c7187bbd1a7a9244((fn, stream)=>new Observable((observer)=>{
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




const $a50e4ccb156c9bec$export$357523c63a2253b9 = $981ef46a600e1644$export$c7187bbd1a7a9244((key, stream)=>new Observable((observer)=>{
        const subs = stream.subscribe($981ef46a600e1644$export$fbd2e1a2b7cf8f98(observer)((obj)=>observer.next($3d52677f95a43c24$export$52be3e7c3b913516(key, obj))
        ));
        return ()=>subs.unsubscribe()
        ;
    })
);



const $5272794e7ba8b741$export$533b26079ad0b4b = $981ef46a600e1644$export$c7187bbd1a7a9244((reducer, initialValue, stream)=>{
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
const $e4ba25915f560ee1$var$defaultConfig = {
    method: 'expo',
    delay: 100,
    retries: 3
};
const $e4ba25915f560ee1$export$9369b12211e1fce4 = $981ef46a600e1644$export$c7187bbd1a7a9244((config, stream)=>{
    if ($3d52677f95a43c24$export$7e4aa119212bc614(config)) config = Object.assign($e4ba25915f560ee1$var$defaultConfig, {
        retries: config
    });
    else config = Object.assign($e4ba25915f560ee1$var$defaultConfig, config);
    const sub = [];
    return new Observable((observer)=>{
        $e4ba25915f560ee1$var$retryInner(stream, observer, sub, config, 1);
        return ()=>sub.map((s)=>s.unsubscribe()
            )
        ;
    });
});
function $e4ba25915f560ee1$var$retryInner(stream, observer, sub, config, i) {
    sub.pop()?.unsubscribe();
    return sub.push(stream.subscribe({
        next: (value)=>observer.next(value)
        ,
        error: ()=>{
            if (i <= config.retries) return setTimeout(()=>$e4ba25915f560ee1$var$retryInner(stream, observer, sub, config, i + 1)
            , config.method === 'expo' ? config.delay * Math.pow(i, 2) : config.delay * i);
            observer.complete();
        },
        complete: ()=>observer.complete()
    }));
}



const $36c4ac43a6081018$export$955fc4a6c4be454d = $981ef46a600e1644$export$c7187bbd1a7a9244((count, stream)=>{
    let skipped = 0;
    return new Observable((observer)=>{
        const subs = stream.subscribe($981ef46a600e1644$export$fbd2e1a2b7cf8f98(observer)((value)=>{
            if ((skipped++) >= count) observer.next(value);
        }));
        return ()=>subs.unsubscribe()
        ;
    });
});



const $c4a32f929d0f07cb$export$ed80d9de1d9df928 = (bufferSize, stream)=>{
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
    return $981ef46a600e1644$export$c7187bbd1a7a9244(()=>new Observable((observer)=>{
            store.addObserver(observer);
            return ()=>{
                store.removeObserver(observer);
                observer.complete();
                if (store.observers.length === 0) subs.unsubscribe();
            };
        })
    )();
};



const $0c6a644cfb2b116b$export$1a62af6d099a1e7c = $981ef46a600e1644$export$c7187bbd1a7a9244((stream)=>new Observable((observer)=>{
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



const $e2ff1f75e1116399$export$c49781290a0a7ce3 = ()=>{
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
                if ($3d52677f95a43c24$export$f6e2535fb5126e54(observer)) observer = {
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



const $b0bdbb36e6159c0d$export$b7df5d561049483a = $981ef46a600e1644$export$c7187bbd1a7a9244((numberToTake, stream)=>{
    let taken = 0;
    return new Observable((observer)=>{
        const subs = stream.subscribe($981ef46a600e1644$export$fbd2e1a2b7cf8f98(observer)((value)=>{
            if ((taken++) >= numberToTake) return observer.complete();
            observer.next(value);
        }));
        return ()=>subs.unsubscribe()
        ;
    });
});



const $9d72bfb0921c0a7a$export$de363e709c412c8a = $981ef46a600e1644$export$c7187bbd1a7a9244((limit, stream)=>{
    let lastRan = 0;
    let lastInterval = 0;
    return new Observable((observer)=>{
        const subs = stream.subscribe($981ef46a600e1644$export$fbd2e1a2b7cf8f98(observer)((value)=>{
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



const $6239b5c280c7a65a$export$a40009bd2c363351 = $981ef46a600e1644$export$c7187bbd1a7a9244((comparator, stream)=>new Observable((observer)=>{
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




const $19e1fd6429fd8860$export$8901015135f2fb22 = $981ef46a600e1644$export$c7187bbd1a7a9244((...streams)=>{
    let zipper = (...args)=>args
    ;
    if ($3d52677f95a43c24$export$f6e2535fb5126e54($3d52677f95a43c24$export$5fd5031fecdacec3(streams))) zipper = streams.shift();
    let done = 0;
    const store = Object.fromEntries(streams.map((_, i)=>[
            i,
            []
        ]
    ));
    const buffers = $3d52677f95a43c24$export$68c286be0e7e55b7(store);
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



const { Observable: $0668ccc89facbf88$export$77cea355fa80b5f4  } = globalThis;
const $0668ccc89facbf88$export$a7c40509ff863847 = /* #__PURE__ */ (()=>typeof Symbol === 'function' && Symbol.observable || '@@observable'
)();
Object.defineProperties($0668ccc89facbf88$export$77cea355fa80b5f4, {
    fromGenerator: {
        value: $981ef46a600e1644$export$c7187bbd1a7a9244((generator)=>new $0668ccc89facbf88$export$77cea355fa80b5f4((observer)=>{
                $3TWPl$Readable.from(generator()).on('data', observer.next.bind(observer)).on('end', observer.complete.bind(observer)).on('error', observer.error.bind(observer));
            })
        ),
        enumerable: false,
        writable: false,
        configurable: false
    },
    fromStream: {
        value: $981ef46a600e1644$export$c7187bbd1a7a9244((stream)=>new $0668ccc89facbf88$export$77cea355fa80b5f4((observer)=>{
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
const $0668ccc89facbf88$var$p = {
    enumerable: false,
    writable: false,
    configurable: false
};
Object.defineProperties($0668ccc89facbf88$export$77cea355fa80b5f4, {
    listen: {
        value: $4ea816ee6071af22$export$63174c828edd6ff8,
        ...$0668ccc89facbf88$var$p
    },
    interval: {
        value: $c21ee38dd9ebd076$export$3174cdbf0a0cbc84,
        ...$0668ccc89facbf88$var$p
    },
    combine: {
        value: $b5d5fad7a717c5b4$export$1be1fc439b849fdf,
        ...$0668ccc89facbf88$var$p
    },
    merge: {
        value: $fabe6ede74899966$export$4950aa0f605343fb,
        ...$0668ccc89facbf88$var$p
    },
    subject: {
        value: $e2ff1f75e1116399$export$c49781290a0a7ce3,
        ...$0668ccc89facbf88$var$p
    },
    fromEvent: {
        value: $981ef46a600e1644$export$c7187bbd1a7a9244((emitter, event, handler)=>new $0668ccc89facbf88$export$77cea355fa80b5f4((observer)=>{
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
                $3d52677f95a43c24$export$3e9f948b41964866(group).forEach(([event, handler])=>emitter.on(event, handler)
                );
                return ()=>$3d52677f95a43c24$export$3e9f948b41964866(group).forEach(([event, handler])=>emitter.removeListener(event, handler)
                    )
                ;
            })
        ),
        ...$0668ccc89facbf88$var$p
    },
    fromPromise: {
        value: $981ef46a600e1644$export$c7187bbd1a7a9244((promise)=>new $0668ccc89facbf88$export$77cea355fa80b5f4((observer)=>{
                promise.then((value)=>observer.next(value)
                ).catch((err)=>observer.error(err)
                ).finally(()=>observer.complete()
                );
            })
        ),
        ...$0668ccc89facbf88$var$p
    }
});
const $0668ccc89facbf88$export$9a935b903d7a019b = {
    filter (predicate) {
        return $c8c8fb0c5f7799a4$export$3dea766d36a8935f(predicate, this);
    },
    map (fn) {
        return $5b03a656db7d5259$export$871de8747c9eaa88(fn, this);
    },
    buffer (count) {
        return $829b020c48ac0888$export$ab1029bcae9ddb4a(count, this);
    },
    skip (count) {
        return $36c4ac43a6081018$export$955fc4a6c4be454d(count, this);
    },
    take (numberToTake) {
        return $b0bdbb36e6159c0d$export$b7df5d561049483a(numberToTake, this);
    },
    reduce (reducer, initialValue = {
    }) {
        return $5272794e7ba8b741$export$533b26079ad0b4b(reducer, initialValue, this);
    },
    mapTo (value) {
        return $c2701aa138d699c1$export$e0eaf3a86c03b2ad(value, this);
    },
    throttle (limit) {
        return $9d72bfb0921c0a7a$export$de363e709c412c8a(limit, this);
    },
    forEach (fn) {
        return $2f6d9c153d48d0a7$export$4b80e395e36b5a56(fn, this);
    },
    effect (fn) {
        return $4765bd85e71e19ed$export$dc573d8a6576cdb3(fn, this);
    },
    pick (key) {
        return $a50e4ccb156c9bec$export$357523c63a2253b9(key, this);
    },
    debounce (limit) {
        return $bcf9dfa6cf966919$export$61fc7d43ac8f84b0(limit, this);
    },
    catch (handler) {
        return $7891fee75e32b25c$export$3dede90624df3ba9(handler, this);
    },
    concat (...streams) {
        return $dc21c5c105d00167$export$ee1b3e54f0441b22(this, ...streams);
    },
    combine (stream) {
        return $b5d5fad7a717c5b4$export$1be1fc439b849fdf(this, stream);
    },
    merge (stream) {
        return $fabe6ede74899966$export$4950aa0f605343fb(this, stream);
    },
    share (bufferSize = 100) {
        return $c4a32f929d0f07cb$export$ed80d9de1d9df928(bufferSize, this);
    },
    switch () {
        return $0c6a644cfb2b116b$export$1a62af6d099a1e7c(this);
    },
    flatMap (fn) {
        return $38a704acf4c7e096$export$5b8affa63fc6df16(fn, this);
    },
    distinct (fn = (x)=>x
    ) {
        return $01462cae9c3f1fd2$export$983a3b5fb2f7202e(fn, this);
    },
    until (fn) {
        return $6239b5c280c7a65a$export$a40009bd2c363351(fn, this);
    },
    zip (zipper, ...streams) {
        if (!$3d52677f95a43c24$export$f6e2535fb5126e54(zipper)) return $19e1fd6429fd8860$export$8901015135f2fb22(this, zipper, ...streams);
        return $19e1fd6429fd8860$export$8901015135f2fb22(zipper, this, ...streams);
    },
    retry (config) {
        return $e4ba25915f560ee1$export$9369b12211e1fce4(config, this);
    },
    finally (fn) {
        return $ff27bb5b393cfe70$export$c4c7e81705f70958(fn, this);
    },
    subject () {
        return $e2ff1f75e1116399$export$c49781290a0a7ce3(this);
    }
};
Object.assign($0668ccc89facbf88$export$77cea355fa80b5f4.prototype, $0668ccc89facbf88$export$9a935b903d7a019b);




function $cd98bea59efb04ae$var$implementsPushProtocol(obj) {
    return obj && Symbol.iterator in Object(obj) && typeof obj['push'] === 'function' && typeof obj[Symbol.iterator] === 'function';
}
const $cd98bea59efb04ae$var$ON_EVENT = 'on';
const $cd98bea59efb04ae$var$END_EVENT = 'end';
const $cd98bea59efb04ae$export$ea9ec650125d8707 = (obj)=>{
    if (!$cd98bea59efb04ae$var$implementsPushProtocol(obj)) throw new TypeError('Object does not implement a push protocol');
    const emitter = new $cd98bea59efb04ae$import$4bf9923669ad6c63$4fae95256245c8c0();
    const pushProxy = new Proxy(obj, {
        get (...args) {
            const [target, key] = args;
            if (key === 'push') {
                const pushRef = target[key];
                return (...capturedArgs)=>{
                    const result = pushRef.call(target, ...capturedArgs);
                    emitter.emit($cd98bea59efb04ae$var$ON_EVENT, ...capturedArgs);
                    return result;
                };
            }
            return Reflect.get(...args);
        }
    });
    const observable = {
        [$0668ccc89facbf88$export$a7c40509ff863847] () {
            return new $0668ccc89facbf88$export$77cea355fa80b5f4((observer)=>{
                emitter.on($cd98bea59efb04ae$var$ON_EVENT, (newValue)=>{
                    observer.next(newValue);
                });
                emitter.on($cd98bea59efb04ae$var$END_EVENT, ()=>observer.complete()
                );
                for (const value of obj)observer.next(value);
                return ()=>{
                    emitter.removeAllListeners($cd98bea59efb04ae$var$ON_EVENT, $cd98bea59efb04ae$var$END_EVENT);
                };
            });
        }
    };
    return Object.assign(pushProxy, observable);
};



class $44c42911a8289395$export$2191b9da168c6cf0 {
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
const $44c42911a8289395$export$30c1bf1f6ea900a5 = $3d52677f95a43c24$export$c3095a23b368d1f2((validator, selector, onSucces, onFailure)=>(...args)=>{
        if (!validator(selector(...args))) return onFailure(new $44c42911a8289395$export$2191b9da168c6cf0('Validation failed', validator.errors));
        return onSucces(...args);
    }
);




class $c641ebc90fdd7bdd$var$NoHandlerError {
    constructor(message){
        Error.call(this, message);
        Error.captureStackTrace(this);
        this.args = args;
    }
}
// Helper functions
const $c641ebc90fdd7bdd$var$handlersKey = Symbol('handlers key');
const $c641ebc90fdd7bdd$var$dispatchKey = Symbol('dispatch key');
const $c641ebc90fdd7bdd$var$DEFAULT_DISPATCH = 'MULTI:DEFAULT_DISPATCH';
const $c641ebc90fdd7bdd$var$defaultDispatch = function defaultDispatch() {
    return arguments.length === 1 ? arguments[0] : Array.from(arguments);
};
const $c641ebc90fdd7bdd$var$extractDispatchAndMethods = (methods)=>$3d52677f95a43c24$export$f6e2535fb5126e54(methods[0]) ? [
        methods[0],
        methods.slice(1)
    ] : [
        $c641ebc90fdd7bdd$var$defaultDispatch,
        methods
    ]
;
const $c641ebc90fdd7bdd$var$initialHandler = (handlers)=>$3d52677f95a43c24$export$4c7897fafd92b108(handlers)[0] === $c641ebc90fdd7bdd$var$DEFAULT_DISPATCH ? $3d52677f95a43c24$export$4c7897fafd92b108(handlers)[1] : null
;
function $c641ebc90fdd7bdd$export$26f73335cc2e7868(key, handler) {
    if (handler === undefined) return [
        $c641ebc90fdd7bdd$var$DEFAULT_DISPATCH,
        key
    ];
    return [
        key,
        handler
    ];
}
function $c641ebc90fdd7bdd$export$13e2537ceeaf8a3a(...initialMethods) {
    // multiMethod function takes variable arguments and returns the result of
    // calling any handler that can handle the arguments
    function multiMethod() {
        let handler = $c641ebc90fdd7bdd$var$initialHandler(multiMethod[$c641ebc90fdd7bdd$var$handlersKey]);
        for(let i = 0; i < multiMethod[$c641ebc90fdd7bdd$var$handlersKey].length; i++){
            const key = multiMethod[$c641ebc90fdd7bdd$var$handlersKey][i][0];
            const method = multiMethod[$c641ebc90fdd7bdd$var$handlersKey][i][1];
            if ($3d52677f95a43c24$export$f6e2535fb5126e54(key) && arguments[0]?.constructor === key || $3d52677f95a43c24$export$f6e2535fb5126e54(key) && !$3d52677f95a43c24$export$5578ef75f4140928(key) && key.apply(null, arguments) || $3d52677f95a43c24$export$9cb4719e2e525b7a(multiMethod[$c641ebc90fdd7bdd$var$dispatchKey].apply(null, arguments), key)) {
                handler = method;
                break;
            }
        }
        if (handler) return $3d52677f95a43c24$export$f6e2535fb5126e54(handler) ? handler.apply(null, arguments) : handler;
        throw new $c641ebc90fdd7bdd$var$NoHandlerError(`No handlers for args (${JSON.stringify(arguments)})`);
    }
    const [dispatch, methods] = $c641ebc90fdd7bdd$var$extractDispatchAndMethods(initialMethods);
    multiMethod[$c641ebc90fdd7bdd$var$dispatchKey] = dispatch;
    multiMethod[$c641ebc90fdd7bdd$var$handlersKey] = methods;
    for (const pair of methods)if (pair[0] === $c641ebc90fdd7bdd$var$DEFAULT_DISPATCH) multiMethod[$c641ebc90fdd7bdd$var$handlersKey].push(pair);
    else multiMethod[$c641ebc90fdd7bdd$var$handlersKey] = [
        pair
    ].concat(multiMethod[$c641ebc90fdd7bdd$var$handlersKey]);
    multiMethod.map = function map(fn) {
        return $c641ebc90fdd7bdd$export$13e2537ceeaf8a3a(multiMethod[$c641ebc90fdd7bdd$var$dispatchKey], ...multiMethod[$c641ebc90fdd7bdd$var$handlersKey].map(([key, handler])=>[
                key,
                function mappedHandler() {
                    return fn(handler.apply(null, arguments));
                }, 
            ]
        ));
    };
    return multiMethod;
}
$c641ebc90fdd7bdd$export$13e2537ceeaf8a3a.extend = function extend(multiMethod, ...methods) {
    return $c641ebc90fdd7bdd$export$13e2537ceeaf8a3a(multiMethod[$c641ebc90fdd7bdd$var$dispatchKey], ...methods.concat(multiMethod[$c641ebc90fdd7bdd$var$handlersKey]));
};



function $c77ae6840da1cd5b$export$1cac73d0be9e5f93(fn) {
    return new $3TWPl$Transform({
        objectMode: true,
        transform (chunk, _, callback) {
            if (fn(chunk)) this.push(chunk);
            callback();
        }
    });
}
function $c77ae6840da1cd5b$export$65a2d40914bef387(fn) {
    return new $3TWPl$Transform({
        objectMode: true,
        transform (chunk, _, callback) {
            this.push(fn(chunk));
            callback();
        }
    });
}
function $c77ae6840da1cd5b$export$81b289dc713f2731(reducer, initialValue) {
    let accumulator = initialValue;
    return new $3TWPl$Transform({
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
class $c77ae6840da1cd5b$export$5a49216eb02d2a7b extends $3TWPl$Transform {
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
class $c77ae6840da1cd5b$export$14202ce6ebc470bb extends $3TWPl$Transform {
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
function $c77ae6840da1cd5b$export$e27394c20d18d2a8(stream) {
    return (...streams)=>streams.forEach((s)=>stream.pipe(s)
        )
    ;
}
function $c77ae6840da1cd5b$export$ebab2c558c013279(...sources) {
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


var $32fe065e34ddeb68$exports = {};

$parcel$export($32fe065e34ddeb68$exports, "createConfiguredStore", () => $32fe065e34ddeb68$export$da91ee5d258bba9d);
$parcel$export($32fe065e34ddeb68$exports, "bindActionCreators", () => $e2958b99fca096f1$export$aea084d96e84da92);
$parcel$export($32fe065e34ddeb68$exports, "createAsyncThunk", () => $63639400a985ce22$export$6abd22dc03e5063f);
$parcel$export($32fe065e34ddeb68$exports, "actionListener", () => $e17e680f5df1667d$export$d977db1e2c3d2800);
$parcel$export($32fe065e34ddeb68$exports, "createAction", () => $33448310d5e8f937$export$309c7a02b0b0bc62);
$parcel$export($32fe065e34ddeb68$exports, "createSelector", () => $775af50b5cbff196$export$595d22ed68ca2841);
$parcel$export($32fe065e34ddeb68$exports, "Reducer", () => $bbc3980fee560fa7$export$9fe743c6906fa583);
$parcel$export($32fe065e34ddeb68$exports, "createStore", () => $7d0eaa8ed0c5bbb6$export$f51a9068ac82ea43);
$parcel$export($32fe065e34ddeb68$exports, "applyMiddleware", () => $9c4b1aa44d8639d5$export$9ff26e0402cc7b7);
$parcel$export($32fe065e34ddeb68$exports, "thunk", () => $4e388c7e0c2ffe63$export$dd164f5517779f15);



function $5c98dcdaeba1cbd8$export$53b83ca8eaab0383(obj) {
    if (!$3d52677f95a43c24$export$a6cdc56e425d0d0a(obj)) return false;
    let proto = obj;
    while(Object.getPrototypeOf(proto) !== null)proto = Object.getPrototypeOf(proto);
    return Object.getPrototypeOf(obj) === proto;
}


const $7d0eaa8ed0c5bbb6$export$d788bc089976c004 = '@@ACTION/INIT';
function $7d0eaa8ed0c5bbb6$export$f51a9068ac82ea43(reducer, initialState, enhancer) {
    if ($3d52677f95a43c24$export$f6e2535fb5126e54(initialState) && $3d52677f95a43c24$export$f6e2535fb5126e54(enhancer)) throw new Error('Passing multiple enhancers is not supported');
    if ($3d52677f95a43c24$export$f6e2535fb5126e54(initialState) && $3d52677f95a43c24$export$fce6876652108ab(enhancer)) {
        enhancer = initialState;
        initialState = undefined;
    }
    if (!$3d52677f95a43c24$export$fce6876652108ab(enhancer)) {
        if (!$3d52677f95a43c24$export$f6e2535fb5126e54(enhancer)) throw new Error(`Expected enhancer to be a function, got: ${enhancer}`);
        return enhancer($7d0eaa8ed0c5bbb6$export$f51a9068ac82ea43)(reducer, initialState);
    }
    if (!$3d52677f95a43c24$export$f6e2535fb5126e54(reducer)) throw new Error(`Expected reducer to be a function, got: ${reducer}`);
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
   */ function subscribe(listener) {
        if (!$3d52677f95a43c24$export$f6e2535fb5126e54(listener)) throw new Error(`Expected listener to be a function, received: ${listener}`);
        if (isDispatching) throw new Error('Cannot call subscribe() while reducer is executing');
        ensureCanMutateNextListeners();
        nextListeners.push(listener);
        let isSubscribed = true;
        return function unsubscribe() {
            if (!isSubscribed) return;
            if (isDispatching) throw new Error('Cannot call unsubscribe() while reducer is executing');
            isSubscribed = false;
            ensureCanMutateNextListeners();
            const index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
            currentListeners = null;
        };
    }
    /**
   * Dispatch an action to update the state
   */ function dispatch(action) {
        if (!$5c98dcdaeba1cbd8$export$53b83ca8eaab0383(action)) throw new Error('Actions must be plain objects');
        if (!action.type) throw new Error('Actions must have a type property');
        if (isDispatching) throw new Error('Reducers may not dispatch actions');
        try {
            isDispatching = true;
            currentState = reducer(currentState, action);
        } finally{
            isDispatching = false;
        }
        const listeners = currentListeners = nextListeners;
        for (const listener of listeners)listener();
        return action;
    }
    /**
   * Creates a simple observable from state updates, compatible with the
   * Observable proposal
   */ function observe() {
        return new $0668ccc89facbf88$export$77cea355fa80b5f4((observer)=>{
            return subscribe(()=>observer.next(getState())
            );
        });
    }
    /**
   * Initialize the store to allow populating initalState
   */ dispatch({
        type: $7d0eaa8ed0c5bbb6$export$d788bc089976c004
    });
    return {
        dispatch: dispatch,
        subscribe: subscribe,
        getState: getState,
        [$0668ccc89facbf88$export$a7c40509ff863847]: observe,
        observe: observe
    };
}



function $9c4b1aa44d8639d5$export$9ff26e0402cc7b7(...middlewares) {
    return (createStore)=>(reducer, initialState)=>{
            const store = createStore(reducer, initialState);
            let dispatch = ()=>{
                throw new Error('Cannot dispatch while constructing middleware');
            };
            const middlewareAPI = {
                getState: store.getState,
                dispatch: (action, ...args)=>dispatch(action, ...args)
            };
            const chain = middlewares.map((middleware)=>middleware(middlewareAPI)
            );
            dispatch = $3d52677f95a43c24$export$f672e0b6f7222cd7(...chain)(store.dispatch);
            return {
                ...store,
                dispatch: dispatch
            };
        }
    ;
}



/**
 * Creates a middleware function that accepts an optional 'extra argument' to
 * be injected later.
 */ function $4e388c7e0c2ffe63$var$createThunkMiddleware(extraArgument) {
    const middleware = ({ dispatch: dispatch , getState: getState  })=>(next)=>(action)=>{
                //If a function was passed to store.dispatch, call it and return the
                // result
                if ($3d52677f95a43c24$export$f6e2535fb5126e54(action)) return action(dispatch, getState, extraArgument);
                //Otherwise, pass the action down the middleware chain
                return next(action);
            }
    ;
    return middleware;
}
const $4e388c7e0c2ffe63$export$dd164f5517779f15 = $4e388c7e0c2ffe63$var$createThunkMiddleware();
$4e388c7e0c2ffe63$export$dd164f5517779f15.withExtraArgument = $4e388c7e0c2ffe63$var$createThunkMiddleware;



function $e2958b99fca096f1$export$aea084d96e84da92(actionCreators, dispatch) {
    if ($3d52677f95a43c24$export$f6e2535fb5126e54(actionCreators)) return $e2958b99fca096f1$var$bindActionCreator(actionCreators, dispatch);
    if (!$3d52677f95a43c24$export$a6cdc56e425d0d0a(actionCreators)) throw new Error(`Expected an object or function, but got: ${actionCreators}`);
    const boundActionCreators = {
    };
    for (const key of Reflect.ownKeys(actionCreators)){
        const actionCreator = actionCreators[key];
        if ($3d52677f95a43c24$export$f6e2535fb5126e54(actionCreator)) boundActionCreators[key] = $e2958b99fca096f1$var$bindActionCreator(actionCreator, dispatch);
    }
    return boundActionCreators;
}
function $e2958b99fca096f1$var$bindActionCreator(actionCreator, dispatch) {
    return function boundCreator(...args) {
        return dispatch(actionCreator.apply(this, args));
    };
}


const $13fd72ad21bd9f19$var$urlAlphabet = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW';
function $13fd72ad21bd9f19$export$ac4959f4f1338dfc(size = 21) {
    let id = '';
    while(size--)id += $13fd72ad21bd9f19$var$urlAlphabet[Math.random() * 64 | 0];
    return id;
}




function $33448310d5e8f937$export$309c7a02b0b0bc62(type, prepareAction) {
    function actionCreator(...args) {
        if (prepareAction) {
            let prepared = prepareAction(...args);
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
function $33448310d5e8f937$export$47865c7da002be09(key) {
    return [
        'type',
        'payload',
        'error',
        'meta'
    ].indexOf(key) > -1;
}
function $33448310d5e8f937$export$e2b5c5db9e2009fd(actionCreator) {
    return `${actionCreator}`;
}
function $33448310d5e8f937$export$ef5dae67073b687(action) {
    return $5c98dcdaeba1cbd8$export$53b83ca8eaab0383(action) && $3d52677f95a43c24$export$844ec244b1367d54(action.type) && Object.keys(action).every($33448310d5e8f937$export$47865c7da002be09);
}


const $63639400a985ce22$var$STATUS_FULFILLED = 'fulfilled';
const $63639400a985ce22$var$STATUS_REJECTED = 'rejected';
const $63639400a985ce22$var$STATUS_PENDING = 'pending';
function $63639400a985ce22$export$6abd22dc03e5063f(typePrefix, payloadCreator, options) {
    const pending = $63639400a985ce22$var$createPending(typePrefix);
    const fulfilled = $63639400a985ce22$var$createFulfilled(typePrefix);
    const rejected = $63639400a985ce22$var$createRejected(typePrefix);
    /**
   * Create an action
   */ function actionCreator(arg) {
        return (dispatch, getState, extra)=>{
            const requestId = $13fd72ad21bd9f19$export$ac4959f4f1338dfc();
            const abortController = new AbortController();
            let abortReason;
            let started = false;
            const abortedPromise = new Promise((_, reject)=>abortController.signal.addEventListener('abort', ()=>reject({
                        name: 'AbortError',
                        message: abortReason || 'Aborted'
                    })
                )
            );
            const promise = async function createPromise() {
                let finalAction;
                try {
                    if (options?.condition?.(arg, {
                        getState: getState,
                        extra: extra
                    }) === false) throw {
                        name: 'ConditionError',
                        message: 'Aborted due to condition callback returning false'
                    };
                    started = true;
                    dispatch(pending(requestId, arg, options?.getPendingMeta?.({
                        requestId: requestId,
                        arg: arg
                    }, {
                        getState: getState,
                        extra: extra
                    })));
                    finalAction = await Promise.race([
                        abortedPromise,
                        Promise.resolve(payloadCreator(arg, {
                            dispatch: dispatch,
                            getState: getState,
                            extra: extra,
                            requestId: requestId,
                            signal: abortController.signal,
                            rejectWithValue: (value, meta)=>({
                                    value: value,
                                    meta: meta,
                                    status: $63639400a985ce22$var$STATUS_REJECTED
                                })
                            ,
                            fulfillWithValue: (value, meta)=>({
                                    value: value,
                                    meta: meta,
                                    status: $63639400a985ce22$var$STATUS_FULFILLED
                                })
                        }).then((result)=>{
                            if (result.status === $63639400a985ce22$var$STATUS_REJECTED) throw result;
                            if (result.status === $63639400a985ce22$var$STATUS_FULFILLED) return fulfilled(result.payload, requestId, arg, result.meta);
                            return fulfilled(result, requestId, arg);
                        })), 
                    ]);
                } catch (err) {
                    finalAction = err.status === $63639400a985ce22$var$STATUS_REJECTED ? rejected(null, requestId, arg, err.payload, err.meta) : rejected(err, requestId, arg);
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
                    return promise.then($63639400a985ce22$var$unwrapResult);
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
 */ function $63639400a985ce22$var$unwrapResult(action) {
    if (action.meta && action.meta.rejectedWithValue) throw action.payload;
    if (action.error) throw action.error;
    return action.payload;
}
/**
 * Create a fulfilled action
 */ function $63639400a985ce22$var$createFulfilled(typePrefix) {
    return $33448310d5e8f937$export$309c7a02b0b0bc62(typePrefix + '/' + $63639400a985ce22$var$STATUS_FULFILLED, (payload, requestId, arg, meta)=>({
            payload: payload,
            meta: {
                ...meta || {
                },
                arg: arg,
                requestId: requestId,
                requestStatus: $63639400a985ce22$var$STATUS_FULFILLED
            }
        })
    );
}
/**
 * Create a pending action
 */ function $63639400a985ce22$var$createPending(typePrefix) {
    return $33448310d5e8f937$export$309c7a02b0b0bc62(typePrefix + '/' + $63639400a985ce22$var$STATUS_PENDING, (requestId, arg, meta)=>({
            payload: undefined,
            meta: {
                ...meta || {
                },
                arg: arg,
                requestId: requestId,
                requestStatus: $63639400a985ce22$var$STATUS_PENDING
            }
        })
    );
}
/**
 * Create a rejected action
 */ function $63639400a985ce22$var$createRejected(typePrefix) {
    return $33448310d5e8f937$export$309c7a02b0b0bc62(typePrefix + '/' + $63639400a985ce22$var$STATUS_REJECTED, (error, requestId, arg, payload, meta)=>({
            payload: payload,
            error: error || 'Rejected',
            meta: {
                ...meta || {
                },
                arg: arg,
                requestId: requestId,
                rejectedWithValue: !!payload,
                requestStatus: $63639400a985ce22$var$STATUS_REJECTED,
                aborted: error?.name === 'AbortError',
                condition: error?.name === 'ConditionError'
            }
        })
    );
}



/**
 * Creates a middleware function that accepts an optional 'extra argument' to
 * be injected later.
 *
 * @returns {object} Action listener, with methods:
 *
 *     @method middleware
 *     @method addListener(action, listener) Add a listener for an
 *     actionCreator or action.type
 *     @method removeListener(action, listener) Remove a listener for
 *     an actionCreator or action.type
 */ function $e17e680f5df1667d$var$createActionListenerMiddleware() {
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
                    if ($3d52677f95a43c24$export$f6e2535fb5126e54(action)) {
                        const listeners = listeners.get(action) || [];
                        for (const listener of listeners)try {
                            listener(action, middlewareAPI);
                        } catch (err) {
                            console.error(err);
                        }
                    } else {
                        const { type: type  } = action;
                        const listeners = listeners.get(type) || [];
                        for (const listener of listeners)try {
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
const $e17e680f5df1667d$export$d977db1e2c3d2800 = $e17e680f5df1667d$var$createActionListenerMiddleware();




function $775af50b5cbff196$export$595d22ed68ca2841(...fns) {
    let recomputations = 0;
    let lastResult;
    let resultFunc = fns.pop();
    if (!$3d52677f95a43c24$export$f6e2535fb5126e54(resultFunc)) throw new Error(`createSelector expects an output function after the ` + `inputs, but received: ${resultFunc}`);
    const dependencies = $775af50b5cbff196$var$getDependencies(fns);
    const memoizedResultFunc = $3d52677f95a43c24$export$fc10aeed3a532e2a(function wrappedResultFunc() {
        recomputations++;
        return resultFunc.apply(null, arguments);
    });
    const selector = $3d52677f95a43c24$export$fc10aeed3a532e2a(function selector() {
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
function $775af50b5cbff196$var$getDependencies(fns) {
    const dependencies = $3d52677f95a43c24$export$43bee75e5e14138e($3d52677f95a43c24$export$5fd5031fecdacec3(fns)) ? $3d52677f95a43c24$export$5fd5031fecdacec3(fns) : fns;
    if (!dependencies.every($3d52677f95a43c24$export$f6e2535fb5126e54)) throw new Error('createSelector expects all input-selectors to be functions');
    return dependencies;
}






function $bd6852f15fe83f67$export$66e4520cdb265d18(reducers) {
    const reducerKeys = Reflect.ownKeys(reducers);
    const finalReducers = {
    };
    for (const key of reducerKeys)if ($3d52677f95a43c24$export$f6e2535fb5126e54(reducers[key])) finalReducers[key] = reducers[key];
    const finalReducerKeys = $3d52677f95a43c24$export$ed97f33186d4b816(finalReducers);
    let shapeAssertionError;
    try {
        $bd6852f15fe83f67$var$assertReducerShape(finalReducers);
    } catch (err) {
        shapeAssertionError = err;
    }
    /**
   * Combined reducer
   *
   * @param {object} State to reduce
   * @param {object} Action to perform
   * @returns {object} New state
   */ return function combinedReducers(state, action) {
        if (shapeAssertionError) throw shapeAssertionError;
        if ($3d52677f95a43c24$export$fce6876652108ab(state)) state = {
        };
        let hasChanged = false;
        const nextState = {
        };
        for (const key of finalReducerKeys){
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
        hasChanged = hasChanged || finalReducerKeys.length !== $3d52677f95a43c24$export$ed97f33186d4b816(state).length;
        return hasChanged ? nextState : state;
    };
}
function $bd6852f15fe83f67$var$assertReducerShape(reducers) {
    const keys = Reflect.ownKeys(reducers);
    for (const key of keys){
        const reducer = reducers[key];
        const initialState = reducer(undefined, {
            type: $7d0eaa8ed0c5bbb6$export$d788bc089976c004
        });
        if (typeof initialState === 'undefined') throw new Error(`Reducer for key ${key} returned undefined. ` + 'Set null for the return value if you do not ' + 'want to set a value for this reducer.');
    }
}


const $bbc3980fee560fa7$export$9fe743c6906fa583 = {
    builder () {
        const cases = [];
        return {
            case (type, handler) {
                if ($3d52677f95a43c24$export$f6e2535fb5126e54(type)) cases.push($c641ebc90fdd7bdd$export$26f73335cc2e7868(type, handler));
                else cases.push($c641ebc90fdd7bdd$export$26f73335cc2e7868((_, action)=>action.type === type
                , handler));
                return this;
            },
            init (initialState) {
                cases.push($c641ebc90fdd7bdd$export$26f73335cc2e7868((state = initialState)=>state
                ));
                return this;
            },
            build () {
                return $c641ebc90fdd7bdd$export$13e2537ceeaf8a3a(...cases);
            }
        };
    },
    combineReducers: $bd6852f15fe83f67$export$66e4520cdb265d18
};


const $32fe065e34ddeb68$export$da91ee5d258bba9d = $9c4b1aa44d8639d5$export$9ff26e0402cc7b7($4e388c7e0c2ffe63$export$dd164f5517779f15)($7d0eaa8ed0c5bbb6$export$f51a9068ac82ea43);




export {$3d52677f95a43c24$export$63fce1f81095ac4f as accumulate, $3d52677f95a43c24$export$e16d8520af44a096 as add, $3d52677f95a43c24$export$ecceddf365c72028 as addRight, $3d52677f95a43c24$export$258f7bf0e3a9da18 as aggregate, $3d52677f95a43c24$export$ce9688d12180c837 as aggregateOn, $3d52677f95a43c24$export$10d8903dec122b9d as append, $3d52677f95a43c24$export$5635d7ef4b8fee1c as apply, $3d52677f95a43c24$export$2b74374111f56d9e as arity, $3d52677f95a43c24$export$cc6710ee5f037d57 as average, $3d52677f95a43c24$export$33902b7329277358 as binary, $3d52677f95a43c24$export$adf7c0fe6059d774 as bound, $3d52677f95a43c24$export$9e58c10e5cf1295d as callFirst, $3d52677f95a43c24$export$3d41a7c27165bfa3 as callLast, $3d52677f95a43c24$export$f672e0b6f7222cd7 as compose, $3d52677f95a43c24$export$9dbe56a5aba4f4b4 as composeAsync, $3d52677f95a43c24$export$fe41fac84f1fd82f as composeM, $3d52677f95a43c24$export$c983f826f44ff86 as constant, $3d52677f95a43c24$export$c3095a23b368d1f2 as curry, $3d52677f95a43c24$export$61fc7d43ac8f84b0 as debounce, $3d52677f95a43c24$export$6c40052bed430212 as deepCopy, $3d52677f95a43c24$export$9cb4719e2e525b7a as deepEqual, $3d52677f95a43c24$export$7e32b29e1cb162e1 as deepFreeze, $3d52677f95a43c24$export$50b5b478b69a347c as deepJoin, $3d52677f95a43c24$export$ce7eaaed37329a1b as deepMap, $3d52677f95a43c24$export$dc56a6be17ec932e as deepPick, $3d52677f95a43c24$export$52be3e7c3b913516 as deepProp, $3d52677f95a43c24$export$112aad15b1fe0c19 as deepSetProp, $3d52677f95a43c24$export$e775f2ca58d379f0 as demethodize, $3d52677f95a43c24$export$a37e3c603d7117e5 as diff, $3d52677f95a43c24$export$cd007d971a5a2143 as divide, $3d52677f95a43c24$export$7e7fa3dcb6d62f31 as divideRight, $3d52677f95a43c24$export$3e9f948b41964866 as entries, $3d52677f95a43c24$export$9663ddc1cf085b32 as eq, $3d52677f95a43c24$export$7ecc1a3b11b57dab as every, $3d52677f95a43c24$export$3dea766d36a8935f as filter, $3d52677f95a43c24$export$30ee5c6810ce1ce2 as filterAsync, $3d52677f95a43c24$export$5ddcd2c2c8d9736f as filterTR, $3d52677f95a43c24$export$71aa6c912b956294 as find, $3d52677f95a43c24$export$40fa977508bcf282 as flat, $3d52677f95a43c24$export$5b8affa63fc6df16 as flatMap, $3d52677f95a43c24$export$d8f18b68abd220dc as flip2, $3d52677f95a43c24$export$c993f2f7dfcc6a25 as flip3, $3d52677f95a43c24$export$93e2b83da34ff82a as fold, $3d52677f95a43c24$export$4b80e395e36b5a56 as forEach, $3d52677f95a43c24$export$21625637effda04 as fromJSON, $3d52677f95a43c24$export$67b2770bcd4c0853 as FunctionalMixin, $3d52677f95a43c24$export$2a722db47863bac2 as getOrElseThrow, $3d52677f95a43c24$export$3f063810d7bf01bd as groupBy, $3d52677f95a43c24$export$5fd5031fecdacec3 as head, $3d52677f95a43c24$export$f0954fd7d5368655 as identity, $3d52677f95a43c24$export$fc3a40dec7b33bf as immutable, $3d52677f95a43c24$export$6897c284b6f9f4dc as invert, $3d52677f95a43c24$export$468cda29b159ee5d as invoke, $3d52677f95a43c24$export$43bee75e5e14138e as isArray, $3d52677f95a43c24$export$f9ce7b637dfbe238 as isBoolean, $3d52677f95a43c24$export$dd1bc94b04021eeb as isEmpty, $3d52677f95a43c24$export$f6e2535fb5126e54 as isFunction, $3d52677f95a43c24$export$49034edbe6b62415 as isInstanceOf, $3d52677f95a43c24$export$5c90113a285f2241 as isMap, $3d52677f95a43c24$export$630801d484da15df as isNull, $3d52677f95a43c24$export$7e4aa119212bc614 as isNumber, $3d52677f95a43c24$export$a6cdc56e425d0d0a as isObject, $3d52677f95a43c24$export$6750766a7c7ec627 as isSet, $3d52677f95a43c24$export$844ec244b1367d54 as isString, $3d52677f95a43c24$export$f7e2c8231c57a8bd as join, $3d52677f95a43c24$export$e439fc32198f78c5 as keyBy, $3d52677f95a43c24$export$ed97f33186d4b816 as keys, $3d52677f95a43c24$export$4c7897fafd92b108 as last, $3d52677f95a43c24$export$fc1400facf92c78 as len, $3d52677f95a43c24$export$4e54ff84c97bdc0c as liftA2, $3d52677f95a43c24$export$8402e5acf634c0df as liftA3, $3d52677f95a43c24$export$3a582736e2273011 as liftA4, $3d52677f95a43c24$export$bef1f36f5486a6a3 as log, $3d52677f95a43c24$export$871de8747c9eaa88 as map, $3d52677f95a43c24$export$a939ddd3409bd57a as mapAsync, $3d52677f95a43c24$export$29deb6b34088de51 as mapTR, $3d52677f95a43c24$export$4659b591c19bdf3d as match, $3d52677f95a43c24$export$fc10aeed3a532e2a as memoize, $3d52677f95a43c24$export$4950aa0f605343fb as merge, $3d52677f95a43c24$export$2060d2db72cce88f as multiply, $3d52677f95a43c24$export$58b562b9c9d46bb6 as multiplyRight, $3d52677f95a43c24$export$6003a5f097c73977 as not, $3d52677f95a43c24$export$d2de3aaeafa91619 as once, $3d52677f95a43c24$export$23a07ddfce9fad49 as padEnd, $3d52677f95a43c24$export$36cf564d487b5178 as padStart, $3d52677f95a43c24$export$98e6a39c04603d36 as parse, $3d52677f95a43c24$export$b29f828819edca8d as partition, $3d52677f95a43c24$export$357523c63a2253b9 as pick, $3d52677f95a43c24$export$a4627e546088548d as pipe, $3d52677f95a43c24$export$507da1b08fb8a738 as pipeAsync, $3d52677f95a43c24$export$c44985b87d605eff as pluck, $3d52677f95a43c24$export$9c297f60e22e3389 as pow, $3d52677f95a43c24$export$68159836694e22c1 as prepend, $3d52677f95a43c24$export$977f3f6a9323c0f6 as prop, $3d52677f95a43c24$export$8128bb6492cf3de7 as props, $3d52677f95a43c24$export$d02631cccf789723 as range, $3d52677f95a43c24$export$533b26079ad0b4b as reduce, $3d52677f95a43c24$export$b720f6c8e101da88 as reduceAsync, $3d52677f95a43c24$export$7fef8bcdbb34f435 as reduceRight, $3d52677f95a43c24$export$7ac989ec0c9c279 as rename, $3d52677f95a43c24$export$77ad94ebf1c2b9ed as replace, $3d52677f95a43c24$export$7978a6ddf29f4374 as roundTo, $3d52677f95a43c24$export$89db4734f6c919c4 as send, $3d52677f95a43c24$export$adaa4cf7ef1b65be as set, $3d52677f95a43c24$export$8a39838a0f735648 as setProp, $3d52677f95a43c24$export$f45dfcb5efeffdb3 as setPropM, $3d52677f95a43c24$export$ad14ef4001db2bcd as some, $3d52677f95a43c24$export$b035e44d7bb4278f as sortBy, $3d52677f95a43c24$export$65980d18b75784e2 as split, $3d52677f95a43c24$export$fac44ee5b035f737 as stringify, $3d52677f95a43c24$export$4e2d2ead65e5f7e3 as subtract, $3d52677f95a43c24$export$4ed4137bff330a54 as subtractRight, $3d52677f95a43c24$export$8a63f25cc62965f1 as sum, $3d52677f95a43c24$export$3f23594af5f37336 as tap, $3d52677f95a43c24$export$b4d6a1a804dab06c as tee, $3d52677f95a43c24$export$b0d4470bfb62c4eb as ternary, $3d52677f95a43c24$export$f728be4ab20cbf1f as toInteger, $3d52677f95a43c24$export$54fd2c36b5cc6731 as toJSON, $3d52677f95a43c24$export$84b9399c77df0edf as toLowerCase, $3d52677f95a43c24$export$f84e8e69fd4488a5 as toString, $3d52677f95a43c24$export$d80c591a9e16646 as toUpperCase, $3d52677f95a43c24$export$9608d0eacffd6284 as transduce, $3d52677f95a43c24$export$d234c058d1d4e435 as tryCatch, $3d52677f95a43c24$export$a7e49f78f97b1037 as unary, $3d52677f95a43c24$export$7a5d5c156e7dc406 as unique, $3d52677f95a43c24$export$68c286be0e7e55b7 as values, $3d52677f95a43c24$export$66b4a470e4119e42 as zipMap, $31e15007ebcf182a$export$deb82508dd66d288 as Enum, $31e15007ebcf182a$export$5ebc9a4af3ac0850 as Failure, $31e15007ebcf182a$export$8f8422ac5947a789 as IO, $31e15007ebcf182a$export$d8552d785efb2cb8 as IOAsync, $31e15007ebcf182a$export$8a67b48435b5d073 as Just, $31e15007ebcf182a$export$ad3bd6e4e1ec5d06 as Maybe, $31e15007ebcf182a$export$bebe9059409a0d04 as Nothing, $31e15007ebcf182a$export$d63d7cff08fe4dc9 as Pair, $31e15007ebcf182a$export$8fdcabde73f49165 as Result, $31e15007ebcf182a$export$ffa3d9fee6fd705a as Success, $31e15007ebcf182a$export$cb55c7e8798604bb as Triple, $31e15007ebcf182a$export$fa957d01b0310fd7 as Try, $31e15007ebcf182a$export$17de313a76857e4a as TryAsync, $dcfe00a7c44a67fd$export$5d730b7aed1a3eb0 as createClient, $efed9ec112aaba23$export$8e16b83750b44988 as compact, $efed9ec112aaba23$export$7c961d426bc3e8f3 as filterWith, $efed9ec112aaba23$export$43128fadae87b74a as first, $efed9ec112aaba23$export$6162ac8ba603caa9 as mapAllWith, $efed9ec112aaba23$export$f580247ac376296f as mapWith, $efed9ec112aaba23$export$34e2bedfca0f76a9 as memoizeIter, $efed9ec112aaba23$export$287c6381f647675d as reduceWith, $efed9ec112aaba23$export$c58417706a208278 as rest, $efed9ec112aaba23$export$b7df5d561049483a as take, $efed9ec112aaba23$export$404d2aad5e5c5508 as untilWith, $efed9ec112aaba23$export$8901015135f2fb22 as zip, $efed9ec112aaba23$export$b634740ce272acb5 as zipWith, $336ef9b6ef9e3999$export$742acabee3dd6465 as after, $336ef9b6ef9e3999$export$c7fd1518a7cbf3dd as afterAll, $336ef9b6ef9e3999$export$cf1a5a0c68d6e80b as Append, $336ef9b6ef9e3999$export$a253cce80efe6b1c as aroundAll, $336ef9b6ef9e3999$export$1c4c1e3098bf5ebe as before, $336ef9b6ef9e3999$export$8fd4d608a3485fcf as beforeAll, $336ef9b6ef9e3999$export$53ebe40b44acc773 as ClassMixin, $336ef9b6ef9e3999$export$487514b351402d1b as Define, $336ef9b6ef9e3999$export$6e6fbaf3ea747b50 as FactoryFactory, $336ef9b6ef9e3999$export$f6afc91249163ff2 as Override, $336ef9b6ef9e3999$export$530764fd6bf3e88b as Prepend, $336ef9b6ef9e3999$export$c597e4e4259c9301 as provided, $336ef9b6ef9e3999$export$8f64980a2e163c7f as SubclassFactory, $336ef9b6ef9e3999$export$6f0673371501d6b6 as unless, $336ef9b6ef9e3999$export$4636581650fd0e55 as wrapWith, $cd98bea59efb04ae$import$4bf9923669ad6c63$4fae95256245c8c0 as EventEmitter, $cd98bea59efb04ae$export$ea9ec650125d8707 as reactivize, $44c42911a8289395$export$30c1bf1f6ea900a5 as withValidation, $44c42911a8289395$export$2191b9da168c6cf0 as ValidationError, $0668ccc89facbf88$export$77cea355fa80b5f4 as Observable, $c641ebc90fdd7bdd$export$13e2537ceeaf8a3a as multi, $c641ebc90fdd7bdd$export$26f73335cc2e7868 as method, $c77ae6840da1cd5b$export$1cac73d0be9e5f93 as createFilterStream, $c77ae6840da1cd5b$export$65a2d40914bef387 as createMapStream, $c77ae6840da1cd5b$export$81b289dc713f2731 as createReduceStream, $c77ae6840da1cd5b$export$5a49216eb02d2a7b as ParallelStream, $c77ae6840da1cd5b$export$14202ce6ebc470bb as LimitedParallelStream, $c77ae6840da1cd5b$export$e27394c20d18d2a8 as createFork, $c77ae6840da1cd5b$export$ebab2c558c013279 as createMerge};
//# sourceMappingURL=fp-browser.js.map
