import { createRouter, createWebHashHistory } from 'vue-router'

import { routes } from '@/pages'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  // const { isAuthenticated } = useAuthStore()
  // if (!isAuthenticated && to.name !== 'login') {
  //   return { name: 'login' }
  // }
  // if (isAuthenticated && to.name === 'login') {
  //   return { name: 'home' }
  // }
})
