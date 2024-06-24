import { useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

export const useAuth = () => {
  const router = useRouter()
  const { updateToken } = useAuthStore()
  return {
    login: () => {
      const tempToken = Math.random().toString(36).substring(7)
      updateToken(tempToken)
      router.push('/')
    },
    logout: () => {
      updateToken('')
    }
  }
}
