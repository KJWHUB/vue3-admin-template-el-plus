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

  function $reset() {
    items.value = []
    currentItem.value = undefined
  }

  return {
    items,
    currentItem,
    fetchAll,
    fetchOne,
    $reset
  }
})
