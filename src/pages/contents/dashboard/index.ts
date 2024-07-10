import type { RouteRecordRaw } from 'vue-router'

export const route: RouteRecordRaw = {
  path: 'dashboard',
  name: 'dashboard',
  component: () => import('@/pages/contents/dashboard/index.vue')
}
