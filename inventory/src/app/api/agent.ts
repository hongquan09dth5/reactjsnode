import axios, { AxiosResponse } from "axios";
import { API_URL } from "../common/constants";

axios.defaults.baseURL = API_URL;

const responseBody = (response: AxiosResponse) => response.data;

const requests =  {
  get: async (url: string) => await axios.get(url).then(responseBody),
  getWithParams: async (url: string, params: any) =>
    await axios.get(url, params).then(responseBody),
  post: async (url: string, body: {}) =>
    await axios.post(url, body).then(responseBody),
  put: async (url: string, body: {}) =>
    await axios.put(url, body).then(responseBody),
  delete: async (url: string) => await axios.delete(url).then(responseBody),
};

const Products = {
  list: async (): Promise<any> => {
    return await requests.get(`/product`);
  },
  getById: async (id: number): Promise<any> => {
    return await requests.get(`/product/${id}`);
  },
  update: async (req: any): Promise<any> => {
    return await requests.put(`/product/update`, req);
  },
  create: async (req: any): Promise<any> => {
    return await requests.post(`/product/create`, req);
  },
  delete: async (id: number): Promise<any> => {
    return await requests.delete(`/product/delete/${id}`);
  },
};

const Uploader = {
  upload: async (req: any): Promise<any> => {
    return await requests.post(`/upload`, req);
  },
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { Products, Uploader };
