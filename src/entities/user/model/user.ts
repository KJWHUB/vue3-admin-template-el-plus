import { ref } from 'vue'

import { defineStore } from 'pinia'

import { msw } from '@/shared/api'
import type { Server_User } from '@/shared/api/msw/users/models'

export const useUserStore = defineStore('user', () => {
  const items = ref<Server_User[]>([])
  const currentItem = ref<Server_User>()

  async function fetchAll() {
    const response = await msw.users.getUsers()
    items.value = response.data
  }

  async function fetchOne(id: string) {
    const response = await msw.users.getUsersById({ userId: id })
    currentItem.value = response.data
  }

  async function fetchCreate(params: { name: string; email: string }) {
    const request = {
      username: params.name,
      email: params.email
    }
    const response = await msw.users.createUser(request)
    console.log('유저 등록 성공', response)
  }

  async function fetchModify(params: { email: string }) {
    if (!currentItem.value) return
    const response = await msw.users.modifyUserById(currentItem.value.id, params)
    console.log('유저 수정 성공', response)
  }

  function $reset() {
    items.value = []
    currentItem.value = undefined
  }

  return {
    items,
    currentItem,
    fetchAll,
    fetchOne,
    fetchCreate,
    fetchModify,
    $reset
  }
})
