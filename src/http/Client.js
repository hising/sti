export class HttpClient {

  static GET = "GET";
  static POST = "POST";
  static PUT = "PUT";
  static DELETE = "DELETE";

  constructor(baseURL) {
    this.baseURL = baseURL || "";
  }

  async fetch(path, method, params = {}, headers = {}) {
    let fetchOptions = {
      method,
      headers,
      mode: 'cors'
    };
    let extra = {};
    if (method === HttpClient.POST || method === HttpClient.PUT || method === HttpClient.DELETE) {
      extra = {
        body: JSON.stringify(params)
      }
    }
    const corsOptions = {...fetchOptions, ...extra};
    console.log(corsOptions);
    let response = await fetch(this.baseURL + path, corsOptions);
    return await response.json();
  }

  async get (path) {
      return await this.fetch(path, HttpClient.GET);
  }

  async post (path, params = {}) {
      return await this.fetch(path, HttpClient.POST, params);
  }

  async put (path, params = {}) {
    return await this.fetch(path, HttpClient.PUT, params);
  }

  async delete (path, params = {}) {
    return await this.fetch(path, HttpClient.DELETE, params);
  }

}
