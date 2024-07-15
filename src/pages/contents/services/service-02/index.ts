import type { RouteRecordRaw } from 'vue-router'

export const route: RouteRecordRaw = {
  path: 'services02',
  name: 'services02',
  component: () => import('@/pages/contents/services/service-02/index.vue'),
  meta: {
    menu: {
      title: 'Dashboard',
      hidden: true
    }
  }
}
