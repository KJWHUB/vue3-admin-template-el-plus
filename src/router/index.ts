import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import { useAuthStore } from '@/stores/auth'
import authRoute from '@/views/auth/route'
import contentsRoute from '@/views/contents/route'

export type Menu = {
  title: string
  icon?: string
}

declare module 'vue-router' {
  interface RouteMeta {
    menu?: Menu
  }
}

const routes: RouteRecordRaw[] = [contentsRoute, authRoute]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach((to) => {
  const { isAuthenticated } = useAuthStore()
  console.log('isAuthenticated', isAuthenticated)
  if (!isAuthenticated && to.name !== 'login') {
    return { name: 'login' }
  }

  if (isAuthenticated && to.name === 'login') {
    return { name: 'home' }
  }
})

export default router
