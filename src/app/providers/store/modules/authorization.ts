import { computed, ref } from 'vue'

/**
 * Define state and actions for authorization
 */
export const useAuthorizationState = () => {
  const roles = ref<string[]>([]) // 권한 정보를 메모리에 저장할 변수

  const fetchUserRoles = async () => {
    try {
      // TODO: Fetch user roles from the server
      const response = ['MASTER'] // temporary value
      roles.value = response
    } catch (error) {
      console.error('Failed to fetch user roles:', error)
    }
  }

  const hasRole = (role: string) => computed(() => roles.value.includes(role)) // 특정 권한을 확인하는 함수

  return { roles, fetchUserRoles, hasRole }
}
