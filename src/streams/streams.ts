import { Transform } from 'stream'

export function createFilterStream(fn: (value: any) => boolean) {
  return new Transform({
    objectMode: true,
    transform(chunk: any, encoding: string, callback: Function) {
      if (fn(chunk)) this.push(chunk)
      callback()
    },
  })
}

export function createMapStream(fn: (value: any) => any) {
  return new Transform({
    objectMode: true,
    transform(chunk: any, encoding: string, callback: Function) {
      this.push(fn(chunk))
      callback()
    },
  })
}

export function createReduceStream(
  reducer: (accumulator: any, value: any) => any,
  initialValue: any
) {
  let accumulator = initialValue
  return new Transform({
    objectMode: true,
    transform(chunk: any, encoding: string, callback: Function) {
      accumulator = reducer(accumulator, chunk)
      callback()
    },
    flush(callback: Function) {
      this.push(accumulator)
      callback()
    },
  })
}

export interface ParallelStream {
  emit(event: string, ...args: any): any
  push(value: any): any
}

export class ParallelStream extends Transform {
  userTransform
  running = 0
  terminate: Function | null = null

  constructor(
    userTransform: (
      chunk: any,
      encoding: string,
      push: Function,
      onComplete: Function
    ) => void,
    options = {}
  ) {
    super({ ...options, objectMode: true })
    this.userTransform = userTransform
  }

  _transform(chunk: any, encoding: string, callback: Function) {
    this.running++
    this.userTransform(chunk, encoding, this.push.bind(this), this._onComplete.bind(this))
    callback()
  }

  _flush(callback: Function) {
    if (this.running > 0) {
      this.terminate = callback
    } else callback()
  }

  _onComplete(err: Error) {
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

export interface LimitedParallelStream {
  emit(event: string, ...args: any): any
  push(chunk: any): any
}

export class LimitedParallelStream extends Transform {
  concurrency
  userTransform
  running = 0
  continue: Function | null = null
  terminate: Function | null = null

  constructor(
    concurrency: number,
    userTransform: (
      chunk: any,
      encoding: string,
      push: Function,
      onComplete: Function
    ) => void,
    options = {}
  ) {
    super({ ...options, objectMode: true })
    this.concurrency = concurrency
    this.userTransform = userTransform
  }

  _transform(chunk: any, encoding: string, callback: Function) {
    this.running++
    this.userTransform(chunk, encoding, this.push.bind(this), this._onComplete.bind(this))
    if (this.running < this.concurrency) {
      callback()
    } else {
      this.continue = callback
    }
  }

  _flush(callback: Function) {
    if (this.running > 0) {
      this.terminate = callback
    } else callback()
  }

  _onComplete(err: Error) {
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

export function createFork(stream: any) {
  return (...streams: any[]) => streams.forEach(s => stream.pipe(s))
}

export function createMerge(...sources: any[]) {
  return (dest: any) => {
    let endCount = 0
    return sources.map(source => {
      source.on('end', () => {
        if (++endCount === sources.length) dest.end()
      })
      return source.pipe(dest, { end: false })
    })
  }
}
