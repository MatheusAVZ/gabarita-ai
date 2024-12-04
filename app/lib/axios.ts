import axios from "axios";

axios.defaults.headers.common['Cache-Control'] = 'no-cache';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  headers: {
    'Content-Type': 'application/json',
  }
});