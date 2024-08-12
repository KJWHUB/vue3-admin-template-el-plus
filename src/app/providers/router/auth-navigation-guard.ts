import { useAuthStore } from '@/shared/stores'

import type { NavigationGuard } from 'vue-router'

/**
 * 인증 네비게이션 가드.
 *
 * 사용자의 인증 상태에 따라 특정 경로로 리디렉션합니다.
 * - 인증되지 않은 사용자가 로그인 페이지가 아닌 다른 페이지로 이동하려고 하면 로그인 페이지로 리디렉션합니다.
 * - 인증된 사용자가 로그인 페이지로 이동하려고 하면 홈 페이지로 리디렉션합니다.
 */
export const authNavigationGuard: NavigationGuard = (to) => {
  const { isAuthenticated } = useAuthStore()
  if (!isAuthenticated && to.name !== 'login') {
    return { name: 'login' }
  }
  if (isAuthenticated && to.name === 'login') {
    return { name: 'home' }
  }
}
