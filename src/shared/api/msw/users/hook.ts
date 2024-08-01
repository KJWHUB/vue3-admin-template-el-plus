import { computed } from 'vue'

import { useAxios } from '@vueuse/integrations/useAxios'

import { apiInstance } from '../base'

import { BASE_URL } from '.'

import type { Server_User } from './models'

// type ApiUAFunctionResponseType = [string, AxiosRequestConfig, AxiosInstance, UseAxiosOptions]

/**
 * Custom hook for fetching users data.
 * @returns An object containing the `fetchUsers` function, `data` computed property, and other properties from `useAxios`.
 */
export const useGetUsers = () => {
  const {
    execute,
    data: axiosData,
    ...rest
  } = useAxios<Server_User[]>(BASE_URL, { method: 'GET' }, apiInstance, {
    immediate: false
  })

  const defaultData: Server_User[] = []
  const data = computed(() => axiosData.value ?? defaultData)

  /**
   * user 목록을 조회하는 함수
   */
  const fetchUsers = () => {
    const url = BASE_URL
    return execute(url)
  }

  return { fetchUsers, data, ...rest }
}

/**
 * Custom hook for fetching a user by ID.
 * @returns An object containing the `fetchUserById` function, and other properties from `useAxios`.
 */
export const useGetUserById = () => {
  const { execute, ...rest } = useAxios<Server_User>(
    `${BASE_URL}/{userId}`,
    { method: 'GET' },
    apiInstance,
    { immediate: false }
  )

  /**
   * user ID로 user를 조회하는 함수
   * @param userId 조회할 user ID
   */
  const fetchUserById = (userId: string) => {
    const url = `${BASE_URL}/${userId}`
    return execute(url)
  }

  return { fetchUserById, ...rest }
}

/**
 * Custom hook for creating a user.
 * @returns An object containing the `createUser` function, and other properties from `useAxios`.
 */
export const useCreateUser = () => {
  const { execute, ...rest } = useAxios<Server_User>(BASE_URL, { method: 'POST' }, apiInstance, {
    immediate: false
  })

  /**
   * user를 생성하는 함수
   * @param data 생성할 user 정보
   */
  const createUser = (data: { username: string; email: string }) => {
    const url = BASE_URL
    return execute(url, { data })
  }

  return { createUser, ...rest }
}

/**
 * Custom hook for modifying a user by ID.
 * @returns An object containing the `modifyUserById` function, and other properties from `useAxios`.
 */
export const useModifyUserById = () => {
  const { execute, ...rest } = useAxios<Server_User>(
    `${BASE_URL}/{userId}`,
    { method: 'PUT' },
    apiInstance,
    { immediate: false }
  )

  /**
   * user ID로 user를 수정하는 함수
   * @param userId 수정할 user ID
   * @param data 수정할 user 정보
   */
  const modifyUserById = (userId: string, data: { email: string }) => {
    const url = `${BASE_URL}/${userId}`
    return execute(url, { data })
  }

  return { modifyUserById, ...rest }
}
