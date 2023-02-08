import axios from 'axios';

const apiMock = axios.create({
  baseURL: process.env.URL_API_MOCK,
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = axios.create({
  baseURL: process.env.REACT_APP_BACK_END_CLIENT,
  headers: {
    'Content-Type': 'application/json',
  },
});

export {
  api,
  apiMock,
};
