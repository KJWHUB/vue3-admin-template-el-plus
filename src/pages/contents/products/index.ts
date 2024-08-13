import type { RouteRecordRaw } from 'vue-router'

export const route: RouteRecordRaw = {
  path: 'products',
  name: 'products',
  component: () => import('@/pages/contents/products/index.vue'),
  meta: {
    menu: {
      title: 'Products',
      icon: 'StreamlineProductionBelt'
    },
    permissions: ['GROUP1']
  }
}
