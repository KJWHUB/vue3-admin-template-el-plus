import type { RouteRecordRaw } from 'vue-router'

export const route: RouteRecordRaw = {
  path: 'login',
  name: 'login',
  component: () => import('@/pages/auth/login/index.vue')
}
