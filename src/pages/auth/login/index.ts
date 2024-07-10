import type { RouteRecordRaw } from 'vue-router'

export const route: RouteRecordRaw = {
  path: 'login',
  name: 'login',
  component: () => import('@/views/auth/login/index.vue')
}
