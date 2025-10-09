import axios from "axios";
import { useStore } from "../store";

const basicApi = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
  auth: {
    username: import.meta.env.VITE_BASIC_AUTH_USERNAME,
    password: import.meta.env.VITE_BASIC_AUTH_PASSWORD,
  },
});

const authApi = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

authApi.interceptors.request.use((config) => {
  const access_token = useStore.getState().access_token;

  if (access_token) {
    config.headers["Authorization"] = `${access_token}`;
  }

  return config;
});

const refreshApi = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

refreshApi.interceptors.request.use((config) => {
  const refresh_token = useStore.getState().refresh_token;

  if (refresh_token) {
    config.headers["Authorization"] = `${refresh_token}`;
  }

  return config;
});

export { 
  basicApi, 
  authApi,
  refreshApi
 };
