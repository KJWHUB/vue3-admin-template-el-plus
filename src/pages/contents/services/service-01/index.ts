import type { RouteRecordRaw } from 'vue-router'

export const route: RouteRecordRaw = {
  path: '/',
  name: 'services01',
  component: () => import('@/pages/contents/services/service-01/index.vue')
}
