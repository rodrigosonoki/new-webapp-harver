import axios from "axios";
import { getToken } from "../utils/auth";

const env = () => {
  if (process.env.NODE_ENV === "development") {
    const baseUrl = "http://localhost:3333/";
    return baseUrl;
  } else {
    const baseUrl = "https://harver-api.herokuapp.com/";
    return baseUrl;
  }
};

const api = axios.create({
  baseURL: env(),
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
