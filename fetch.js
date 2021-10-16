export function createClient(
  apiEndpoint,
  options = {
    storageKey: `${Math.round(Math.random() * 100000)}_client_key`,
    toJSON: true,
  }
) {
  async function isError(res) {
    if (!res.ok)
      throw new Error((await res.text()) || `HTTP response was not ok: ${res.status}`)
    return res
  }

  async function isJson(res) {
    if (!options.toJSON) return res
    if (
      res.headers.has('Content-Type') &&
      res.headers.get('Content-Type').includes('application/json')
    ) {
      return await res.json()
    }
    throw new TypeError('Response is not JSON')
  }

  function client(endpoint, method, customConfig = {}) {
    const controller = new AbortController()
    const token = localStorage.getItem(options.storageKey)
    const headers = { 'Content-Type': 'application/json' }
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
      req: fetch(`${apiEndpoint}${endpoint}`, config).then(isError).then(isJson),
      abort: controller.abort.bind(controller),
    }
  }

  return {
    get(url, options) {
      return client(url, 'GET', options)
    },
    post(url, body, options) {
      return client(url, 'POST', { ...options, body: JSON.stringify(body) })
    },
    put(url, body, options) {
      return client(url, 'PUT', { ...options, body: JSON.stringify(body) })
    },
    delete(url, options) {
      return client(url, 'DELETE', options)
    },
  }
}
