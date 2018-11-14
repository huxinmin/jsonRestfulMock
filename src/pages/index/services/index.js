import axios from 'axios';

export function fetch() {
  return axios.get('http://127.0.0.1:3000/db')
}
