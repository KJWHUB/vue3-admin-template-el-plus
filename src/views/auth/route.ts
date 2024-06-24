import AuthLayout from '@/layouts/auth/AuthLayout.vue'

import type { RouteRecordRaw } from 'vue-router'

const authRoute: RouteRecordRaw = {
  path: '/auth',
  name: 'auth',
  component: AuthLayout,
  redirect: '/auth/login',
  children: [
    {
      path: 'login',
      name: 'login',
      component: () => import('@/views/auth/login/LoginView.vue')
    }
  ]
}

export default authRoute
