import axios from 'axios';

const apiMock = axios.create({
  baseURL: process.env.URL_API_MOCK,
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_CLIENT,
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiAlternative = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_G_CLIENT,
  headers: {
    'Content-Type': 'application/json',
    token: process.env.APP_TOKEN,
  },
});

export {
  api,
  apiMock,
  apiAlternative,
};
