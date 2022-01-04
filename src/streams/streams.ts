/* eslint-disable no-redeclare */
/* eslint no-unused-vars: 0 */
import { Transform } from 'stream'

export function createFilterStream(fn: (value: any) => boolean) {
  return new Transform({
    objectMode: true,
    transform(chunk: any, _encoding: string, callback: () => void) {
      if (fn(chunk)) this.push(chunk)
      callback()
    },
  })
}

export function createMapStream(fn: (value: any) => any) {
  return new Transform({
    objectMode: true,
    transform(chunk: any, _encoding: string, callback: () => void) {
      this.push(fn(chunk))
      callback()
    },
  })
}

export function createReduceStream(
  reducer: (accumulator: any, value: any) => any,
  initialValue: any,
) {
  let accumulator = initialValue
  return new Transform({
    objectMode: true,
    transform(chunk: any, _encoding: string, callback: () => void) {
      accumulator = reducer(accumulator, chunk)
      callback()
    },
    flush(callback: () => void) {
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
  terminate: (() => void) | null = null

  constructor(
    userTransform: (
      chunk: any,
      encoding: string,
      push: (value: any) => any,
      onComplete: (err: Error) => any,
    ) => void,
    options = {},
  ) {
    super({ ...options, objectMode: true })
    this.userTransform = userTransform
  }

  _transform(chunk: any, encoding: string, callback: () => void) {
    this.running++
    this.userTransform(
      chunk,
      encoding,
      this.push.bind(this),
      this._onComplete.bind(this),
    )
    callback()
  }

  _flush(callback: () => void) {
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
  continue: (() => void) | null = null
  terminate: (() => void) | null = null

  constructor(
    concurrency: number,
    userTransform: (
      chunk: any,
      encoding: string,
      push: (value: any) => any,
      onComplete: (err: Error) => any,
    ) => void,
    options = {},
  ) {
    super({ ...options, objectMode: true })
    this.concurrency = concurrency
    this.userTransform = userTransform
  }

  _transform(chunk: any, encoding: string, callback: () => void) {
    this.running++
    this.userTransform(
      chunk,
      encoding,
      this.push.bind(this),
      this._onComplete.bind(this),
    )
    if (this.running < this.concurrency) {
      callback()
    } else {
      this.continue = callback
    }
  }

  _flush(callback: () => void) {
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
  return (...streams: any[]) => streams.forEach((s) => stream.pipe(s))
}

export function createMerge(...sources: any[]) {
  return (dest: any) => {
    let endCount = 0
    return sources.map((source) => {
      source.on('end', () => {
        if (++endCount === sources.length) dest.end()
      })
      return source.pipe(dest, { end: false })
    })
  }
}
