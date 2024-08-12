import { useAuthStore } from '@/shared/stores'

import type { NavigationGuard } from 'vue-router'

const NOT_AUTHENTICATED_REDIRECT = { name: 'login' }

const AUTHENTICATED_DEFAULT_REDIRECT = { name: 'home' }

/**
 * 인증 네비게이션 가드.
 *
 * 사용자의 인증 상태에 따라 특정 경로로 리디렉션합니다.
 * - 인증되지 않은 사용자가 인증이 필요한 페이지로 이동하려고 하면 로그인 페이지로 리디렉션합니다.
 * - 인증되지 않은 사용자가 로그인 페이지가 아닌 다른 페이지로 이동하려고 하면 로그인 페이지로 리디렉션합니다.
 * - 인증된 사용자가 로그인 페이지로 이동하려고 하면 홈 페이지로 리디렉션합니다.
 */
export const authNavigationGuard: NavigationGuard = (to) => {
  const { isAuthenticated } = useAuthStore()

  const hasAuthRequirement = to.matched.some((record) => record.meta.requiresAuth)

  if (hasAuthRequirement && !isAuthenticated) {
    return NOT_AUTHENTICATED_REDIRECT
  }

  if (!isAuthenticated && to.name !== NOT_AUTHENTICATED_REDIRECT.name) {
    return NOT_AUTHENTICATED_REDIRECT
  }

  if (isAuthenticated && to.name === NOT_AUTHENTICATED_REDIRECT.name) {
    return AUTHENTICATED_DEFAULT_REDIRECT
  }
}
