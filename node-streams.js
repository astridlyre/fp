import { Transform } from 'stream'

export function createFilterStream(fn) {
  return new Transform({
    objectMode: true,
    transform(chunk, _, callback) {
      if (fn(chunk)) this.push(chunk)
      callback()
    },
  })
}

export function createMapStream(fn) {
  return new Transform({
    objectMode: true,
    transform(chunk, _, callback) {
      this.push(fn(chunk))
      callback()
    },
  })
}

export function createReduceStream(reducer, initialValue) {
  let accumulator = initialValue
  return new Transform({
    objectMode: true,
    transform(chunk, _, callback) {
      accumulator = reducer(accumulator, chunk)
      callback()
    },
    flush(callback) {
      this.push(accumulator)
      callback()
    },
  })
}

export class ParallelStream extends Transform {
  constructor(userTransform, options = {}) {
    super({ ...options, objectMode: true })
    this.userTransform = userTransform
    this.running = 0
    this.terminate = null
  }

  _transform(chunk, encoding, callback) {
    this.running++
    this.userTransform(chunk, encoding, this.push.bind(this), this._onComplete.bind(this))
    callback()
  }

  _flush(callback) {
    if (this.running > 0) {
      this.terminate = callback
    } else callback()
  }

  _onComplete(err) {
    this.running--
    if (err) {
      this.emit('error', err)
      return
    }
    if (this.running === 0) {
      this.terminate && typeof this.terminate === 'function' && this.terminate()
    }
  }
}

export class LimitedParallelStream extends Transform {
  constructor(concurrency, userTransform, options = {}) {
    super({ ...options, objectMode: true })
    this.concurrency = concurrency
    this.userTransform = userTransform
    this.running = 0
    this.continue = null
    this.terminate = null
  }

  _transform(chunk, encoding, callback) {
    this.running++
    this.userTransform(chunk, encoding, this.push.bind(this), this._onComplete.bind(this))
    if (this.running < this.concurrency) {
      callback()
    } else {
      this.continue = callback
    }
  }

  _flush(callback) {
    if (this.running > 0) {
      this.terminate = callback
    } else callback()
  }

  _onComplete(err) {
    this.running--
    if (err) {
      this.emit('error', err)
      return
    }
    const tmp = this.continue
    this.continue = null
    tmp && typeof tmp === 'function' && tmp()
    if (this.running === 0) {
      this.terminate && typeof this.terminate === 'function' && this.terminate()
    }
  }
}

export function createFork(stream) {
  return (...streams) => streams.forEach(s => stream.pipe(s))
}

export function createMerge(...sources) {
  return dest => {
    let endCount = 0
    return sources.map(source => {
      source.on('end', () => {
        if (++endCount === sources.length) dest.end()
      })
      return source.pipe(dest, { end: false })
    })
  }
}
