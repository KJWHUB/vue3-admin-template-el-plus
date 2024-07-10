import { computed } from 'vue'

import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const token = useStorage('access-token', '')
  const rememberInfo = useStorage('rememberInfo', { id: '' })

  const isAuthenticated = computed(() => !!token.value)
  const hasRememberInfo = computed(() => !!rememberInfo.value.id)

  const updateToken = (newToken: string) => {
    token.value = newToken
  }

  const updateRememberInfo = (newInfo: { id: string }) => {
    rememberInfo.value = newInfo
  }

  return { isAuthenticated, rememberInfo, hasRememberInfo, updateToken, updateRememberInfo }
})
