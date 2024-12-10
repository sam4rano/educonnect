import Axios from "axios";

const url = 'https://educonnect-c7x82qlv.b4a.run';

export const apis = Axios.create({
  baseURL: url,
});

apis.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;

    console.error(message);

    return Promise.reject(error);
  },
);