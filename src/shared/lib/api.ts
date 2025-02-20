import axios from 'axios';
import { ACCESS_TOKEN_KEY, API_URL } from '../constants';

export const $api = axios.create({ baseURL: API_URL });

$api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (!token) {
    return config;
  }
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

$api.interceptors.response.use(
  (config) => config,
  async (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
    }
    return Promise.reject(error);
  },
);
