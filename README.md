# fp

My little functional programming library. Just a few functions I don't like
re-writing. I am slowly adding tests, run with `npm run test` and you should see
270 tests passing.

Features:

- Many utility functions, such as `compose`, `pipe`, and `curry`.
- Some ADTs such as `Maybe`, `Result`, and `IO`
- A simple reactive library for `Observable`, including methods like `map`,
  `filter`, and `reduce`.

## Install

```bash
npm install @ebflat9/fp
```

[View the npm package page](https://www.npmjs.com/package/@ebflat9/fp)

## Functional Programming Examples

```javascript
import * as fp from '@ebflat9/fp'

// identity x => x
fp.identity(1) // 1

// constant x => _ => x
const one = fp.constant(1) // () => 1
one() // 1

// flip2, flips the order of arguments
const fn = (a, b) => `${a}${b}`
fp.flip(fn)('hello', 'world') // 'worldhello'

// unary, convert a function to one taking a single argument
const fn = (...args) => [...args]
fp.unary(fn)(1, 2, 3) // [1]

// demethodize, convert a method to a regular function
const toUpperCase = demethodize(String.prototype.toUpperCase)
toUpperCase('hi') // 'HI'

// deepProp, get a prop using a path
const obj = {
  a: {
    b: {
      c: {
        d: 1,
      },
    },
  },
}
fp.deepProp('a.b.c.d', obj) // 1

// deepSetProp, set a prop using a path (returns a copy)
const obj = {
  a: {
    b: 2,
  },
}
fp.deepSetProp('a.b', 3)(obj) // { a: { b: 3 } }

// deepPick, pick only keys from paths in an object
const obj = {
  a: {
    b: {
      c: 'hi',
    },
    e: 'world',
  },
  h: 'sup',
}
fp.deepPick(['a.b.c', 'a.e'])(obj) // { a: { b: { c: 'hi' }, e: 'world' } }

// rename, using a keymap, rename the keys in an object
const obj = {
  title: 'My book',
  publication_date: 1987,
}
fp.rename({ publication_date: 'publicationDate' }, obj)
// {title: 'My book', publicationDate: 1987 }

// aggregateOn, combine all properties from two objects into one, rightmost object
// wins in case of duplicate properties, keymap properties are combined into an
// array of unique values.
const a = {
  title: 'my book',
  author: 'tim',
  publication_date: 2008,
}
const b = {
  title: 'my book',
  publication_date: 1987,
  author: 'dave',
}
fp.aggregateOn({ author: 'authors', publication_date: 'publicationDates' }, a, b)
// { title: 'my book', authors: ['tim', 'dave'], publicationDates: [2008, 1987] }

// groupBy, partition an array of objects into groups by key
const a = [
  {
    name: 'tim',
    age: 15,
  },
  {
    name: 'tim',
    age: 5,
  },
  {
    name: 'bob',
    age: 87,
  },
]
fp.groupBy('name', a)
// [[{name: 'tim', age: 15}, {name: 'tim', age: 5}], [{name: 'bob', age: 87}]]

// keyBy, convert an array to an object
const arr = [{ name: 'tim' }, { name: 'bob' }]
fp.keyBy('name', arr) // { tim: { name: 'tim' }, bob: {name: 'bob' } }

// deepJoin, combine two arrays
const a = [
  {
    isbn: '978-0812981605',
    title: '7 Habits of Highly Effective People',
    available: true,
  },
  {
    isbn: '978-1982137274',
    title: 'The Power of Habit',
    available: false,
  },
]
const b = [
  {
    isbn: '978-0812981605',
    title: '7 Habits of Highly Effective People',
    subtitle: 'Powerful Lessons in Personal Change',
    number_of_pages: 432,
  },
  {
    isbn: '978-1982137274',
    title: 'The Power of Habit',
    subtitle: 'Why We Do What We Do in Life and Business',
    subjects: ['Social Aspects', 'Habit', 'Change (Psychology)'],
  },
]
fp.deepJoin('isbn', 'isbn', a, b)
/* [
 * {
 *   available: true,
 *   isbn: '978-0812981605',
 *   number_of_pages: 432,
 *   subtitle: 'Powerful Lessons in Personal Change',
 *   title: '7 Habits of Highly Effective People',
 * },
 * {
 *   available: false,
 *   isbn: '978-1982137274',
 *   subjects: ['Social Aspects', 'Habit', 'Change (Psychology)'],
 *   subtitle: 'Why We Do What We Do in Life and Business',
 *   title: 'The Power of Habit',
 *  },
 *]
 */
```

## MultiMethod

A _multimethod_ is a function that decides which handler to call based on its
arguments. It is a way to create polymorphism without classes.

```javascript
// multiMethod
const store = {
  todos: [],
  add(todo) {
    this.todos.push({ text: todo, id: this.todos.length + 1 })
    return this
  },
  remove(id) {
    this.todos = this.todos.filter(td => td.id !== id)
    return this
  },
}
const dispatch = fp.multi(
  (action, store) => action.type,
  fp.method('ADD_TODO', (action, store) => store.add(action.text)),
  fp.method('REMOVE_TODO', (action, store) => store.remove(action.id))
)
dispatch({ type: 'ADD_TODO', text: 'Hello world' }, store)
// store.todos = [{ text: 'Hello world', id: 1 }]
dispatch({ type: 'REMOVE_TODO', id: 1 }, store)
// store.todos = []

// mapping a multiMethod
const a = fp.multi(fp.method('a', () => 'b'))
const upper = a.map(s => s.toUpperCase())
upper('a') // 'B'

// use functions as keys
const router = fp.multi(
  fp.method(req => ['GET'].includes(req.method) && req.url === '/', 'OK'),
  fp.method(
    req => ['GET', 'POST'].includes(req.method) && req.url === '/users',
    [{ id: 1, name: 'John' }]
  ),
  fp.method('Unknown endpoint')
)
router({ method: 'GET', url: '/' }) // 'OK'
```

## Observable

An _Observable_ is a way to abstract asynchronous and synchronous events in
a way that makes it easier to work with, and more consistent.

```javascript
// Create an Observable
Observable.from([1, 2, 3]).subscribe(console.log) // 1, 2, 3

Observable.of(1, 2, 3).subscribe(console.log) // 1, 2, 3

Observable.fromPromise(
  new Promise(resolve => setTimeout(() => resolve('hi'), 1))
).subscribe(console.log) // 'hi'
```

### Observable Operators

Various operations are available, such as:

```javascript
// Map
Observable.from([1, 2, 3])
  .map(x => x * x)
  .subscribe(console.log) // 1, 4, 9

// Filter
Observable.from([1, 2, 3])
  .filter(n => n % 2 !== 0)
  .subscribe(console.log) // 1, 3

// Take
Observable.from([1, 2, 3]).take(2).subscribe(console.log) // 1, 2

// Skip
Observable.from([1, 2, 3]).skip(2).subscribe(console.log) // 3

// Concat
Observable.from([1, 2, 3])
  .concat(Observable.from(['a', 'b', 'c']))
  .subscribe(console.log) // [1, 2, 3, 'a', 'b', 'c']

// Combine
Observable.from([1, 2, 3])
  .combine(Observable.from(['a', 'b', 'c']))
  .subscribe(console.log) // [3, 'a']

// flatMap
Observable.from([1, 2, 3])
  .flatMap(x => Observable.from([1, 2, 3].map(y => x + y)))
  .subscribe(console.log) // [2, 3, 4, 3, 4, 5, 4, 5, 6]

// Pick
Observable.from([{ name: 'tim' }, { name: 'bob' }])
  .pick('name')
  .subscribe(console.log) // ['tim', 'bob']

// Distinct
Observable.from([1, 2, 2, 3]).distinct().subscribe(console.log) // [1, 2, 3]

// Until
Observable.from([1, 2, 3, 4, 5])
  .until(n => n > 3)
  .subscribe(console.log) // [1, 2, 3]

// Zip
Observable.from([1, 2, 3])
  .zip(Observable.from(['a', 'b', 'c']))
  .subscribe(console.log) // [1, 'a'], [2, 'b'], [3, 'c']
```

### Observable Subjects

A subject can act as an observable and an observer:

```javascript
const values = []
const stream = Observable.subject()
stream
  .map(x => x * x)
  .filter(x => x % 2 === 0)
  .subscribe({
    next: value => values.push(value),
  })
Observable.from([1, 2, 3, 4, 5, 6]).subscribe(stream)
// values = [4, 16, 36]
```

### Observable Sharing

Share an async (hot) or sync (cold) stream:

```javascript
const values = []
const values2 = []
const stream = Observable.from([1, 2, 3, 4]).share()

stream.subscribe({
  next: value => values.push(value),
})
// values = [1, 2, 3, 4]

stream.subscribe({
  next: value => values2.push(value),
})
// values2 = [1, 2, 3, 4]
```

## Store

My attempt to write a simple Redux clone.

```javascript
import { Reducer, createStore } from '@ebflat9/fp'

// Create a reducer
const reducer = Reducer.builder()
  .case('ADD', (state, action) => ({
    ...state,
    value: action.payload,
  }))
  .init({ value: null })
  .build()

// Create a store
const store = createStore(reducer)

// Listen to updates
store
  .observe()
  .map(state => state.value && state.value.toUpperCase())
  .subscribe(console.log)

// Dispatch an update
store.dispatch({ type: 'ADD', payload: 'hello' }) // 'HELLO'
```

### Creating an Async Thunk

```javascript
import { createAsyncThunk } from '@ebflat/fp'

const myThunk = createAsyncThunk('ADD', arg =>
  new Promise(resolve) => setTimeout(() => resolve(arg), 1)
)

const myReducer = Reducer.builder()
  .case(myThunk.fulfilled.type, (state, action) => ({
    ...state,
    value: action.payload
  }))
  .init({value: null})
  .build()

const myStore = createConfiguredStore(myReducer)

store.dispatch(myThunk('hello'))
store.observe().subscribe(console.log) // { value: 'hello' }
```

There are many more functions available. Check out the tests for further
clarification.
