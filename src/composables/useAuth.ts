import { useRouter } from 'vue-router'

import type { LoginForm } from '@/components/login-card/LoginCard.vue'
import { useAuthStore } from '@/stores/auth'

export const useAuth = () => {
  const router = useRouter()
  const { updateToken, updateRememberInfo } = useAuthStore()

  const rememberIdPassword = (id: string) => {
    updateRememberInfo({ id })
  }

  return {
    login: (form: LoginForm) => {
      console.log(form)

      if (form.remember) rememberIdPassword(form.username)

      const tempToken = Math.random().toString(36).substring(7)
      updateToken(tempToken)
      router.push({ name: 'home' })
    },
    logout: () => {
      updateToken('')
      router.push({ name: 'login' })
    }
  }
}
