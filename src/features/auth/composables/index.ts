import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

import { jsonServer } from '@/shared/api'
import { useAuthStore } from '@/shared/stores'

import type { LoginForm } from '../model'

export const useAuth = () => {
  const router = useRouter()
  const { updateToken, updateRememberInfo } = useAuthStore()

  const rememberIdPassword = (id: string) => {
    updateRememberInfo({ id })
  }

  return {
    login: async (form: LoginForm) => {
      if (form.remember) rememberIdPassword(form.username)

      try {
        const res = await jsonServer.auth.getAuthenticate({
          username: form.username,
          password: form.password
        })
        const { accessToken } = res.data

        updateToken(accessToken)

        router.push({ name: 'home' })
      } catch (e) {
        console.error(e)
        ElMessage.error(`로그인에 실패했습니다. ${e ?? '알 수 없는 오류가 발생했습니다'}`)
      }
    },
    logout: () => {
      updateToken('')
      router.push({ name: 'login' })
    }
  }
}
