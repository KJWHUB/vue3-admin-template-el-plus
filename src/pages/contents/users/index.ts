import type { RouteRecordRaw } from 'vue-router'

export const route: RouteRecordRaw = {
  path: '/',
  name: 'users',
  component: () => import('@/pages/contents/users/index.vue')
}
