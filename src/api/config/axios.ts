import axios from 'axios'

const instance = axios.create({
  // baseURL: 'https://some-domain.com/api/',
  baseURL: 'http://localhost:9000/',
  timeout: 1000 * 5
})

export default instance
