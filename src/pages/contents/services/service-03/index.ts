import type { RouteRecordRaw } from 'vue-router'

export const route: RouteRecordRaw = {
  path: 'services03',
  name: 'services03',
  component: () => import('@/pages/contents/services/service-03/index.vue'),
  meta: {
    menu: {
      title: 'Services 03'
    }
  }
}
