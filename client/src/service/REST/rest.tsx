import axios from "axios";

const axiosV1 = axios.create({
  baseURL: `http://localhost:8000`,
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem("accessTomen")}`,
  },
});

export const REST = {
  get: async (url: string) => {
    const { data } = await axiosV1.get(url);
    return data;
  },
  post: async (url: string, payload: any = {}) => {
    const data = await axiosV1.get(url);
    return data;
  },
};
