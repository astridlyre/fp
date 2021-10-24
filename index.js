import * as combinators from './src/combinators.js'
import * as maybe from './src/maybe.js'
import * as fetch from './src/fetch.js'
import * as rx from './src/rx.js'
import * as iterators from './src/iterators.js'
import * as classes from './src/classes.js'
import * as lazy from './src/lazy.js'
import * as lens from './src/lens.js'
import * as nodeStreams from './src/node-streams.js'
import * as webStreams from './src/web-streams.js'

export default {
  ...combinators,
  ...maybe,
  ...fetch,
  ...iterators,
  ...classes,
  rx,
}

export { combinators, fetch, rx, iterators, classes, lazy, lens, nodeStreams, webStreams }
