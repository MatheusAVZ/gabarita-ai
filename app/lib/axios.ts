import axios from "axios";

axios.defaults.headers.common['Cache-Control'] = 'no-cache';

export const api = axios.create({
  baseURL: 'https://0ac7-189-43-152-41.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
  }
});