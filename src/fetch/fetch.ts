/* eslint no-unused-vars: 0 */
import { nanoid } from '../store/nanoid'

const enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

interface Response {
  ok: boolean
  status: number
  headers: any
  text<X>(): Promise<X>
  json<X>(): Promise<X>
}

export function createClient(
  apiEndpoint: string,
  options = {
    storageKey: `${nanoid()}_client_key`,
    toJSON: true,
  },
) {
  async function isError(res: Response | any) {
    if (!res.ok) {
      throw new Error(
        (await res.text()) || `HTTP response was not ok: ${res.status}`,
      )
    }
    return res
  }

  async function isJson(res: Response) {
    if (!options.toJSON) return res
    if (
      res.headers.has('Content-Type') &&
      res.headers.get('Content-Type').includes('application/json')
    ) {
      return await res.json()
    }
    throw new TypeError('Response is not JSON')
  }

  function client(
    endpoint: string,
    method: HTTPMethod,
    customConfig: any = {},
  ) {
    const controller = new AbortController()
    const token = localStorage.getItem(options.storageKey)
    const headers: any = { 'Content-Type': 'application/json' }
    if (token) headers.Authorization = `Bearer ${token}`
    const config = {
      signal: controller.signal,
      method,
      ...customConfig,
      headers: {
        ...headers,
        ...customConfig.headers,
      },
    }
    return {
      req: fetch(`${apiEndpoint}${endpoint}`, config)
        .then(isError)
        .then(isJson),
      abort: controller.abort.bind(controller),
    }
  }

  return {
    get(url: string, options: any) {
      return client(url, HTTPMethod.GET, options)
    },
    post(url: string, body: any, options: any) {
      return client(url, HTTPMethod.POST, {
        ...options,
        body: JSON.stringify(body),
      })
    },
    put(url: string, body: any, options: any) {
      return client(url, HTTPMethod.PUT, {
        ...options,
        body: JSON.stringify(body),
      })
    },
    patch(url: string, body: any, options: any) {
      return client(url, HTTPMethod.PATCH, {
        ...options,
        body: JSON.stringify(body),
      })
    },
    delete(url: string, options: any) {
      return client(url, HTTPMethod.DELETE, options)
    },
  }
}
