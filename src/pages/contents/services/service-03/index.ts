import type { RouteRecordRaw } from 'vue-router'

export const route: RouteRecordRaw = {
  path: '/',
  name: 'services03',
  component: () => import('@/pages/contents/services/service-03/index.vue')
}
