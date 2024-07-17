import axios from 'axios'

const API_URL = window.location.origin

export const apiInstance = axios.create({
  baseURL: API_URL
})
