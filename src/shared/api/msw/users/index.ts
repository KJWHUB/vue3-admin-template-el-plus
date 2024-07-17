import { apiInstance } from '../base'

import type { Server_User } from './models'
import type { AxiosPromise } from 'axios'

const BASE_URL = '/api/users'

// 유저 목록 조회
export const getUsers = (): AxiosPromise<Server_User[]> => {
  return apiInstance.get(BASE_URL)
}

// 유저 정보 조회
export type GetUserByIdParams = {
  userId: string
}
export const getUsersById = ({
  userId,
  ...params
}: GetUserByIdParams): AxiosPromise<Server_User> => {
  return apiInstance.get(`${BASE_URL}/${userId}`, { params })
}
