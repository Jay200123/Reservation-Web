import axios from "axios";

const basicApi = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
  auth: {
    username: import.meta.env.VITE_BASIC_AUTH_USERNAME,
    password: import.meta.env.VITE_BASIC_AUTH_PASSWORD,
  },
});

export { basicApi };
