import { AxiosError, AxiosInstance, default as axios } from "axios";

type Pagination = {
  page?: number;
  pageSize?: number;
  withCount?: number;
  start?: number;
  limit?: number;
  total?: number;
}

export interface Params {
  per_page?: number;
  page?: number;
  order_id?: string | number | string[];
  limit?: number;
  offset?: number;
  populate?: string | Object;
  sort?: string[] | string;
  pagination?: Pagination;
}

class ApiEndpoints {
  private token: string | null;
  protected host: string;
  private axios: AxiosInstance;

  constructor( host: string, token: string | null) {
    this.token = token;
    this.host = host;
    this.axios = axios.create({ baseURL: host});
    this.axios.defaults.headers.common["X-Rapidapi-Key"] = token;
  }

  async get(endPoint: string, params: Params = {}) {
    const fullEndpoint = `${process.env.REACT_APP_PROTOCOL}://${this.host}/${endPoint}`;

    try {
      const response = await this.axios.get(fullEndpoint, {
        params: { ...params }
      });

      return { success: true, response };
    } catch(error) {
      console.log(error);
      return this.handleError(error as AxiosError);
    }
  }

  async post(endPoint: string, body: Object, params: Params = {}) {
    const fullEndpoint = `${process.env.REACT_APP_PROTOCOL}://${this.host}/${endPoint}`;

    try {
      const response = await this.axios.post(fullEndpoint, body, {
        params: { ...params }
      });

      return { success: true, response };
    } catch(error) {
      return this.handleError(error as AxiosError);
    }
  }

  async delete(endPoint: string) {
    const fullEndpoint = `${process.env.REACT_APP_PROTOCOL}://${this.host}/${endPoint}`;

    try {
      const response = await this.axios.delete(fullEndpoint);

      return { success: true, response };
    } catch(error) {
      return this.handleError(error as AxiosError);
    }
  }

  async put(endPoint: string, body: Object, params: Params = {}) {
    const fullEndpoint = `${process.env.REACT_APP_PROTOCOL}://${this.host}/${endPoint}`;

    try {
      const response = await this.axios.put(fullEndpoint, body, {
        params: { ...params }
      });

      return { success: true, response };
    } catch(error) {
      return this.handleError(error as AxiosError);
    }
  }

  setToken(token: string | null) {
    this.token = token;

    if(!this.token) {
      this.axios.defaults.headers.common = {};
    } else {
      this.axios.defaults.headers.common = {
        Authorization: `Bearer ${this.token}`,
      };
    }
  }

  private handleError(error: AxiosError) {
    return { success: false, error, response: null };
  }
}

export { ApiEndpoints };