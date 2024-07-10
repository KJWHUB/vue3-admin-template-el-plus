import type { RouteRecordRaw } from 'vue-router'

export const route: RouteRecordRaw = {
  path: '/',
  name: 'products',
  component: () => import('@/pages/contents/products/index.vue')
}
