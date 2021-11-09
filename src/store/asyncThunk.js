import { nanoid } from './nanoid.js'
import { createAction } from './createAction.js'

const STATUS_FULFILLED = 'fulfilled'
const STATUS_REJECTED = 'rejected'
const STATUS_PENDING = 'pending'

/**
 * Creates an async thunk
 *
 * @param {string} typePrefix
 * @param {function} payloadCreator
 * @param {object} Options object
 * @returns {function} Action creator
 */
export function createAsyncThunk(typePrefix, payloadCreator, options) {
  const pending = createPending(typePrefix)
  const fulfilled = createFulfilled(typePrefix)
  const rejected = createRejected(typePrefix)

  /**
   * Create an action
   */
  function actionCreator(arg) {
    return (dispatch, getState, extra) => {
      const requestId = nanoid()
      const abortController = new AbortController()

      let abortReason
      let started = false

      const abortedPromise = new Promise((_, reject) =>
        abortController.signal.addEventListener('abort', () =>
          reject({ name: 'AbortError', message: abortReason || 'Aborted' })
        )
      )

      return Object.assign(
        createPromise({
          abortController,
          abortedPromise,
          arg,
          dispatch,
          extra,
          getState,
          options,
          payloadCreator,
          pending,
          requestId,
        }),
        {
          abort(reason) {
            if (started) {
              abortReason = reason
              abortController.abort()
            }
          },
          arg,
          requestId,
          unwrap() {
            return promise.then(unwrapResult)
          },
        }
      )
    }
  }

  return Object.assign(actionCreator, { pending, rejected, fulfilled, typePrefix })
}

async function createPromise({
  abortController,
  abortedPromise,
  arg,
  dispatch,
  extra,
  getState,
  options,
  payloadCreator,
  pending,
  requestId,
}) {
  let finalAction

  try {
    if (options?.condition?.(arg, { getState, extra }) === false) {
      throw {
        name: 'ConditionError',
        message: 'Aborted due to condition callback returning false',
      }
    }

    started = true

    dispatch(
      pending(
        requestId,
        arg,
        options?.getPendingMeta?.({ requestId, arg }, { getState, extra })
      )
    )

    finalAction = await Promise.race([
      abortedPromise,
      Promise.resolve(
        payloadCreator(arg, {
          dispatch,
          getState,
          extra,
          requestId,
          signal: abortController.signal,
          rejectWithValue: (value, meta) => ({
            value,
            meta,
            status: STATUS_REJECTED,
          }),
          fulfillWithValue: (value, meta) => ({
            value,
            meta,
            status: STATUS_FULFILLED,
          }),
        }).then(result => {
          if (result.status === STATUS_REJECTED) {
            throw result
          }
          if (result.status === STATUS_FULFILLED) {
            return fulfilled(result.payload, requestId, arg, result.meta)
          }
          return fulfilled(result, requestId, arg)
        })
      ),
    ])
  } catch (err) {
    finalAction =
      err.status === STATUS_REJECTED
        ? rejected(null, requestId, arg, err.payload, err.meta)
        : rejected(err, requestId, arg)
  }

  const skipDispatch =
    options &&
    !options.dispatchConditionRejection &&
    rejected.match(finalAction) &&
    finalAction.meta.condition

  if (!skipDispatch) dispatch(finalAction)
  return finalAction
}

/**
 * Unwrap an action
 */
function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload
  }
  if (action.error) {
    throw action.error
  }
  return action.payload
}

/**
 * Create a fulfilled action
 */
function createFulfilled(typePrefix) {
  return createAction(
    typePrefix + '/' + STATUS_FULFILLED,
    (payload, requestId, arg, meta) => ({
      payload,
      meta: {
        ...(meta || {}),
        arg,
        requestId,
        requestStatus: STATUS_FULFILLED,
      },
    })
  )
}

/**
 * Create a pending action
 */
function createPending(typePrefix) {
  return createAction(typePrefix + '/' + STATUS_PENDING, (requestId, arg, meta) => ({
    payload: undefined,
    meta: {
      ...(meta || {}),
      arg,
      requestId,
      requestStatus: STATUS_PENDING,
    },
  }))
}

/**
 * Create a rejected action
 */
function createRejected(typePrefix) {
  return createAction(
    typePrefix + '/' + STATUS_REJECTED,
    (error, requestId, arg, payload, meta) => ({
      payload,
      error: error || 'Rejected',
      meta: {
        ...(meta || {}),
        arg,
        requestId,
        rejectedWithValue: !!payload,
        requestStatus: STATUS_REJECTED,
        aborted: error?.name === 'AbortError',
        condition: error?.name === 'ConditionError',
      },
    })
  )
}
