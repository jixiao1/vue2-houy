import axios from './axios'

export function Login (data) {
  return axios({
    url: '/login',
    data,
    method: 'POST'
  })
}
