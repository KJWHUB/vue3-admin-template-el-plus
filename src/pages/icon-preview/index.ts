import type { RouteRecordRaw } from 'vue-router'

export const route: RouteRecordRaw = {
  path: '/icon-preview',
  name: 'icon-preview',
  component: () => import('./index.vue')
}
