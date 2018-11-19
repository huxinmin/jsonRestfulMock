import axios from 'axios';

const host = window.location.origin + window.publicPath

export function fetch() {
  return axios.get( host+ 'db')
}

export function post(data) {
  return axios.post(host + 'addDB', data)
}
