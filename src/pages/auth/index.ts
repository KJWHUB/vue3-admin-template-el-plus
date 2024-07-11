import AuthLayout from '@/shared/layouts/auth/index.vue'

import { route as loginRoute } from './login/index'

import type { RouteRecordRaw } from 'vue-router'

export const route: RouteRecordRaw = {
  path: '/auth',
  name: 'auth',
  component: AuthLayout,
  redirect: { name: 'login' },
  children: [loginRoute]
}
