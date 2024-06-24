import ContentsLayout from '@/layouts/contents/ContentsLayout.vue'

import servicesRoute from './services/route'

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
    {
      path: 'users',
      name: 'users',
      component: () => import('@/views/contents/users/UsersView.vue'),
      meta: {
        menu: {
          title: 'Users',
          icon: 'UserFilled'
        }
      }
    },
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
