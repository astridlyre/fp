import { identity, isFunction } from "./index.js";

function isError(e) {
  return e && e.constructor.name.includes("Error");
}
function errorWith(str) {
  throw new TypeError(str);
}

// Validation Success / Failure wrappers
export const Validation = {
  "@@type": "Validation",
  "@@implements": ["of", "map", "ap", "fold", "flatMap", "bimap", "merge"],
  of: (a) => Success(a),
};
export const Success = (Validation.Success = (a) =>
  Object.assign({
    [Symbol.for("maybe")]: () => Just(a),
    isSuccess: () => true,
    isFailure: () => false,
    fold: (fn = identity) => fn(a),
    foldOrElse: (fn = identity) => fn(a),
    map: (fn) => Validation.fromNullable(fn(a), ["Value is null"]),
    flatMap: (fnM) => fnM(a),
    ap: (Va) =>
      Va.isFailure()
        ? Va
        : a && isFunction(a)
        ? Success(isFunction(Va.fold()) ? Va.fold().call(Va, a) : a(Va.fold()))
        : a
        ? Success(Va.fold().call(Va, a))
        : Failure(),
    bifold: (successTransform) => successTransform(a),
    bimap: (successTransform) => Success(successTransform(a)),
    merge: () => a,
    getOrElse: () => a,
    getOrElseThrow: () => a,
    toMaybe: () => Just(a),
    toString: () => ({
      type: "Validation#Success",
      value: a,
    }),
  }, Validation));
export const Failure = (Validation.Failure = (b) =>
  Object.assign({
    [Symbol.for("maybe")]: () => Nothing(),
    isSuccess: () => false,
    isFailure: () => true,
    map: () => Failure(b),
    flatMap: () => Failure(b),
    ap: (Va) => Va.isFailure() ? Failure(b.concat(Va.merge())) : Failure(b),
    foldOrElse: (_, defaultValue) => defaultValue,
    concat: (Va) => Va.isFailure() ? Failure(b.concat(Va.fold())) : Failure(b),
    bifold: (_, failTransform) => failTransform(b),
    bimap: (_, failTransform) => Failure(failTransform(b)),
    fold: () => errorWith("Unable to fold from a Validation.Failure"),
    merge: () => b,
    getOrElse: (defaultValue) => defaultValue,
    getOrElseThrow: () => {
      throw new Error("Error due to: ", +b.join(". "));
    },
    getOrElseThrowCustom: (error) => {
      if (isError(error)) throw error;
      throw new Error(error);
    },
    toMaybe: () => Nothing(),
    toString: () => `Validation#Failure (${b})`,
    toJSON: () => ({
      type: "Validation#Failure",
      value: b,
    }),
  }, Validation));
Validation.fromNullable = (a, errors) =>
  a != null ? Success(a) : Failure(errors);
Validation.fromMaybe = (Ma, errors) =>
  () => {
    if (Ma["@@type"] === "Maybe") {
      if (Ma.isJust()) return Success(Ma.fold((a) => a));
      return Failure(errors);
    }
    return Validation.fromNullable(Ma, errors);
  };
// Maybe Just/Nothing wrappers
export const Maybe = {
  "@@type": "Maybe",
  "@@implements": ["of", "map", "ap", "fold", "flatMap", "merge"],
  [Symbol.toStringTag]: "Maybe",
  of: (a) => Just(a),
};
export const Just = (Maybe.Just = (a) =>
  Object.assign({
    [Symbol.for("validation")]: () => Success(a),
    isJust: () => true,
    isNothing: () => false,
    fold: (fn = identity) => fn(a),
    filter: (fn = identity) => (fn(a) ? Just(a) : Nothing()),
    map: (fn) => Maybe.fromNullable(fn(a)),
    flatMap: (fn) => Maybe.fromNullable(fn(a).merge()),
    ap: (Ma) =>
      Ma.isNothing() ? Nothing() : isFunction(a)
        ? Maybe.of(
          isFunction(Ma.merge()) ? Ma.merge().call(Ma.a) : a(Ma.merge()),
        )
        : Maybe.of(Ma.merge().call(Ma, a)),
    get: () => a,
    getOrElse: () => a,
    getOrElseThrow: () => a,
    orElseThrow: () => Just(a),
    merge: () => a,
    toValidation: () => Success(a),
    toString: () => `Maybe#Just (${a})`,
    toJSON: () => ({
      type: "Maybe#Just",
      value: a,
    }),
  }, Maybe));
export const Nothing = (Maybe.Nothing = () =>
  Object.assign({
    [Symbol.for("validation")]: () => Failure(["Expected non-null argument"]),
    isJust: () => false,
    isNothing: () => true,
    map: () => Nothing(),
    flatMap: () => Nothing(),
    ap: () => Nothing(),
    fold: () => Nothing(),
    get: () => errorWith("Unable to get from a Maybe.Nothing"),
    toValidation: () => Failure(["Expected non-null argument"]),
    getOrElse: (defaultValue) => defaultValue,
    getOrElseThrow: (error) => {
      throw error;
    },
    orElseThrow: (error) => {
      throw error;
    },
    toString: () => `Maybe#Nothing ()`,
    toJSON: () => ({
      type: "Maybe#Nothing",
      value: {},
    }),
  }, Maybe));
Maybe.fromNullable = (a) => (a != null ? Just(a) : Nothing());
Maybe.fromEmpty = (a) =>
  Maybe.fromNullable(a).map((x) => (x.length === 0 ? null : x));
Maybe.fromValidation = (Va) =>
  () => {
    if (Va["@@type"] === "Validation") {
      if (Va.isSuccess()) return Just(Va.merge());
      return Nothing.of();
    }
    return Maybe.fromNullable(Va);
  };
const Result = {
  "@@type": "Result",
  "@@implements": ["of", "map", "ap", "fold", "flatMap", "merge"],
  of: (b) => Ok(b),
};

// Result Error/Ok wrapper
export const Error = (Result.Error = (a) =>
  Object.assign(
    {
      [Symbol.for("validation")]: () => Failure([a]),
      isOk: () => false,
      isError: () => true,
      map: () => Error(a),
      flatMap: () => Error(a),
      ap: () => Error(a),
      fold: () => Error(a),
      get: () => errorWith("Unable to get from a Result.Error"),
      merge: () => errorWith("Unable to merge from a Result.Error"),
      toValidation: () => Failure(a),
      getOrElse: (defaultValue) => defaultValue,
      getOrElseThrow: () => {
        throw new Error(a);
      },
      orElseThrow: () => {
        throw new Error(a);
      },
      toString: () => `Result#Error (${a})`,
      toJSON: () => ({
        type: "Result#Error",
        value: a,
      }),
    },
    Result,
  ));
export const Ok = (Result.Ok = (b) =>
  Object.assign(
    {
      [Symbol.for("validation")]: () => Success(b),
      isOk: () => true,
      isError: () => false,
      fold: (fn = identity) => fn(b),
      map: (fn) => Result.fromNullable(fn(b)),
      flatMap: (fn) => Result.fromNullable(fn(b).merge()),
      ap: (Eb) =>
        Eb.isError() ? Eb : isFunction(b)
          ? Result.of(
            isFunction(Eb.merge()) ? Eb.merge().call(Eb, b) : b(Eb.merge()),
          )
          : Result.of(Eb.merge().call(Eb, b)),
      get: () => b,
      getOrElse: (_) => b,
      getOrElseThrow: () => b,
      orElseThrow: () => Ok(b),
      merge: () => b,
      toValidation: () => Success(b),
      toString: () => `Result#Ok (${b})`,
      toJSON: () => ({
        type: "Result#Ok",
        value: b,
      }),
    },
    Result,
  ));

Result.fromNullable = (
  a,
  error = "Null argument provided",
) => (a != null ? Ok(a) : Error(error));
Result.fromEmpty = (a) =>
  Result.fromNullable(a).map((x) => (x.length === 0 ? null : x));
Result.fromValidation = (Va) =>
  () => {
    if (Va["@@type"] === "Validation") {
      if (Va.isSuccess()) {
        return Ok(Va.merge());
      }
      return Error(Va.merge());
    }
    return Result.fromNullable(Va);
  };
