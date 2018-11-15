import axios from 'axios';

export function fetch() {
  return axios.get('http://127.0.0.1:3000/db')
}

export function post(data) {
  return axios.post('http://127.0.0.1:3000/addDB', data)
}
