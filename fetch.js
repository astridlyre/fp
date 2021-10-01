export function createClient(storageKey, apiEndpoint) {
  async function isError(res) {
    if (!res.ok) throw new Error(await res.text());
    return res;
  }

  async function isJson(res) {
    if (
      res.headers.has("Content-Type") &&
      res.headers.get("Content-Type").includes("application/json")
    ) {
      return await res.json();
    }
    throw new TypeError("Response is not JSON");
  }

  async function client(endpoint, method, customConfig = {}) {
    const token = localStorage.getItem(storageKey);
    const headers = { "Content-Type": "application/json" };
    if (token) headers.Authorization = `Bearer ${token}`;
    const config = {
      method,
      ...customConfig,
      headers: {
        ...headers,
        ...customConfig.headers,
      },
    };
    return await fetch(`${apiEndpoint}/${endpoint}`, config)
      .then(isError)
      .then(isJson);
  }

  return {
    get(url, options) {
      return client(url, "GET", options);
    },
    post(url, body, options) {
      return client(url, "POST", { ...options, body: JSON.stringify(body) });
    },
    put(url, body, options) {
      return client(url, "PUT", { ...options, body: JSON.stringify(body) });
    },
    delete(url, options) {
      return client(url, "DELETE", options);
    },
  };
}
