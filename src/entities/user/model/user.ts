import { defineStore } from 'pinia'

import { msw } from '@/shared/api'

export const useUserStore = defineStore('user', () => {
  const usersQuery = msw.users.hook.useGetUsers()
  const userByIdQuery = msw.users.hook.useGetUserById()
  const userCreateQuery = msw.users.hook.useCreateUser()
  const userModifyQuery = msw.users.hook.useModifyUserById()

  const items = usersQuery.data
  const currentItem = userByIdQuery.data

  async function fetchAll() {
    await usersQuery.fetchUsers()
  }

  async function fetchOne(id: string) {
    await userByIdQuery.fetchUserById(id)
  }

  async function fetchCreate(params: { name: string; email: string }) {
    const request = {
      username: params.name,
      email: params.email
    }

    const response = await userCreateQuery.createUser(request)

    console.log('유저 등록 성공', response)
  }

  async function fetchModify(id: string, params: { email: string }) {
    const response = await userModifyQuery.modifyUserById(id, params)
    console.log('유저 수정 성공', response)
  }

  return {
    items,
    currentItem,
    usersQuery,
    fetchAll,
    fetchOne,
    fetchCreate,
    fetchModify
  }
})
