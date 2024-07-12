import { apiInstance } from '../base'

import type { User } from './models'
import type { AxiosPromise } from 'axios'

const BASE_URL = '/users'

// 유저 목록 조회
export type GetUserListParams = {
  userId?: number
  completed?: boolean
}

export const getUserList = (params?: GetUserListParams): AxiosPromise<User[]> => {
  return apiInstance.get(BASE_URL, { params })
}

// 유저 정보 조회
export type GetUserByIdParams = {
  userId: string
}

export const gettUserById = ({ userId, ...params }: GetUserByIdParams): AxiosPromise<User> => {
  return apiInstance.get(`${BASE_URL}/${userId}`, { params })
}

// 유저 생성
export type CreateUserParams = {
  user: User
}

export const createUser = ({ user }: CreateUserParams): AxiosPromise<User> => {
  return apiInstance.post(BASE_URL, user)
}

// 유저 수정
export type UpdateUserParams = {
  userId: string
  user: User
}

export const updateUser = ({ userId, user }: UpdateUserParams): AxiosPromise<User> => {
  return apiInstance.put(`${BASE_URL}/${userId}`, user)
}
