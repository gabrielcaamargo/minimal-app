import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://minimal-api-atqs.onrender.com',
});

httpClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error('Request Interceptor Error:', error);
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('Response Interceptor Error:', error);
    return Promise.reject(error);
  }
);

export { httpClient };
