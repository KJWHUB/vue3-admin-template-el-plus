import { computed } from 'vue'

import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const token = useStorage('access-token', '')
  const isAuthenticated = computed(() => !!token.value)

  const updateToken = (newToken: string) => {
    token.value = newToken
  }

  return { isAuthenticated, updateToken }
})
