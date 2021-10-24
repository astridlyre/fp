ReadableStream.from = function from(iterator) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()
      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    },
  })
}

export function createMapStream(fn) {
  return new TransformStream({
    async transform(chunk, controller) {
      controller.enqueue(fn(await chunk))
    },
  })
}

export function createReduceStream(reducer, initialValue) {
  let accumulator = initialValue
  return new TransformStream({
    async transform(chunk) {
      const value = await chunk
      accumulator = reducer(accumulator, value)
    },
    flush(controller) {
      controller.enqueue(accumulator)
      controller.terminate()
    },
  })
}

export function createFilterStream(fn) {
  return new TransformStream({
    async transform(chunk, controller) {
      if (fn(await chunk)) {
        controller.enqueue(chunk)
      }
    },
  })
}
