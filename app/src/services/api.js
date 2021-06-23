import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = Axios.create({
  baseURL: 'http://10.0.2.2:3333/',
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@app/token');

  config.headers['Content-Type'] = 'application/json';

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
