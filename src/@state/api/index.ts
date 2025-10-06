import axios from "axios";

const basicApi = axios.create({
  baseURL: `${import.meta.env.BASE_URL}/api/v1`,
  auth: {
    username: import.meta.env.BASIC_AUTH_USERNAME,
    password: import.meta.env.BASIC_AUTH_PASSWORD,
  },
});

export { basicApi };
