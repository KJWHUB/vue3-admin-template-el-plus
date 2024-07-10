import ContentsLayout from '@/layouts/contents/ContentsLayout.vue'

import servicesRoute from './services/route'
import usersRoute from './users/route'

import type { RouteRecordRaw } from 'vue-router'

const contentsRoute: RouteRecordRaw = {
  path: '/',
  name: 'home',
  component: ContentsLayout,
  redirect: { name: 'dashboard' },
  children: [
    {
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/contents/dashboard/DashboardView.vue'),
      meta: {
        menu: {
          title: 'Dashboard',
          icon: 'Menu'
        }
      }
    },
    usersRoute,
    servicesRoute,
    {
      path: 'products',
      name: 'products',
      component: () => import('@/views/contents/products/ProductsView.vue'),
      meta: {
        menu: {
          title: 'Products',
          icon: 'StreamlineProductionBelt'
        }
      }
    }
  ]
}

export default contentsRoute
