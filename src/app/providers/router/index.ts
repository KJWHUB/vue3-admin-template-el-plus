import { useAuthStore } from '@@stores'
import { createRouter, createWebHistory } from 'vue-router'

import { routes } from '@/pages'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  const { isAuthenticated } = useAuthStore()
  if (!isAuthenticated && to.name !== 'login') {
    return { name: 'login' }
  }
  if (isAuthenticated && to.name === 'login') {
    return { name: 'home' }
  }
})
