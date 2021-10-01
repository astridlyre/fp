import https from "https";

export function createClient(endpoint) {
  const options = {
    hostname: endpoint,
    port: 443,
  };
  function createRequestWithBody(path, method, body, customOptions) {
    const opts = {
      ...options,
      ...customOptions,
      path,
      method,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Length": Buffer.byteLength(body),
      },
    };
    return new Promise((resolve, reject) => {
      const req = https.request(opts, (res) => {
        if (!(res.statusCode === 200 || res.statusCode === 201)) {
          return reject(new Error(`Status code ${res.statusCode}`));
        } else if (res.headers["Content-Type"]?.includes("application/json")) {
          const chunks = [];
          res.on("data", (chunk) => chunks.push(chunk));
          res.on("end", () => resolve(JSON.parse(Buffer.concat(chunks))));
        } else {
          reject(new TypeError("Response is not JSON"));
        }
      });
      req.write(body);
      req.on("error", (error) => reject(error));
      req.end();
    });
  }

  function createRequest(path, method, customOptions) {
    const opts = {
      ...options,
      ...customOptions,
      path,
      method,
      headers: {
        "Accept": "application/json",
      },
    };
    return new Promise((resolve, reject) => {
      const req = https.request(opts, (res) => {
        if (!(res.statusCode === 200 || res.statusCode === 201)) {
          return reject(new Error(`Status code ${res.statusCode}`));
        } else if (res.headers["Content-Type"]?.includes("application/json")) {
          const chunks = [];
          res.on("data", (chunk) => chunks.push(chunk));
          res.on("end", () => resolve(JSON.parse(Buffer.concat(chunks))));
        } else {
          reject(new TypeError("Response is not JSON"));
        }
      });
      req.on("error", (error) => reject(error));
      req.end();
    });
  }

  return {
    get: (path, options) => createRequest(path, "GET", options),
    delete: (path, options) => createRequest(path, "DELETE", options),
    post: (path, body, options) =>
      createRequestWithBody(path, "POST", body, options),
    put: (path, body, options) =>
      createRequestWithBody(path, "PUT", body, options),
  };
}
