import { apiInstance } from '../base'

import type { Server_User } from './models'
import type { AxiosPromise } from 'axios'

export const BASE_URL = '/users'

// 유저 목록 조회
export const getUsers = (): AxiosPromise<Server_User[]> => {
  return apiInstance.get(BASE_URL)
}

// 유저 정보 조회
export type GetUserByIdParams = {
  userId: string
}
export const getUsersById = ({ userId }: GetUserByIdParams): AxiosPromise<Server_User> => {
  return apiInstance.get(`${BASE_URL}/${userId}`)
}

// 유저 생성
export type CreateUserParams = {
  username: string
  email: string
}
export function createUser(params: CreateUserParams) {
  return apiInstance.post(BASE_URL, { params })
}

// 유저 수정
export function modifyUserById(userId: string, params: { email: string }) {
  return apiInstance.put(`${BASE_URL}/${userId}`, { params })
}

export * as hook from './hook'
