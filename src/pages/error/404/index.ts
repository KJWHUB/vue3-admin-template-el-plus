import type { RouteRecordRaw } from 'vue-router'

export const route: RouteRecordRaw = {
  path: '/:catchAll(.*)',
  name: 'not-found',
  component: () => import('./index.vue')
}
