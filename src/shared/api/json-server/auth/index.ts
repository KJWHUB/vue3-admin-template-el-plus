import { apiInstance } from '../base'

import type { Authenticate } from './models'
import type { AxiosPromise } from 'axios'

const BASE_URL = '/auth'

export type GetAuthenticateParams = {
  username: string
  password: string
}
//
export const getAuthenticate = (params: GetAuthenticateParams): AxiosPromise<Authenticate> => {
  return apiInstance.get(`${BASE_URL}`, { params })
}
