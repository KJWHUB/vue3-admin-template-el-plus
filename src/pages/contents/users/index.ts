import { redirectToFirstChild } from '@/shared/utils'

import type { RouteRecordRaw } from 'vue-router'

export const route: RouteRecordRaw = {
  path: 'users',
  name: 'users',
  meta: {
    menu: {
      title: 'Users',
      icon: 'MaterialSymbolsPersonSearch'
    }
  },
  redirect: redirectToFirstChild,
  children: [
    {
      path: 'list',
      name: 'users-list',
      component: () => import('@/pages/contents/users/list/index.vue'),
      meta: {
        menu: {
          title: 'UserList'
        }
      }
    },
    {
      path: 'create',
      name: 'users-create',
      component: () => import('@/pages/contents/users/create/index.vue'),
      meta: {
        menu: {
          title: 'CreateUser'
        }
      }
    },
    {
      path: 'edit/:id',
      name: 'users-modify',
      component: () => import('@/pages/contents/users/modify/index.vue'),
      meta: {
        menu: {
          hidden: true,
          title: 'ModifyUser'
        }
      }
    }
  ]
}
