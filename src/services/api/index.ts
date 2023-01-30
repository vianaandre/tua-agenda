import axios from 'axios';

const api = axios.create({
  baseURL: process.env.URL_API_MOCK,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
