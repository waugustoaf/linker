import axios from 'axios';
import { key } from '../../key';

export const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    Authorization: `Bearer ${key}`,
    'Content-Type': 'application/json',
  },
});
