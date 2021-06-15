import Axios from 'axios';

const api = Axios.create({
  baseURL: 'http://127.0.0.1:3333/',
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('@app/token');

  config.headers['Content-Type'] = 'application/json';

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
