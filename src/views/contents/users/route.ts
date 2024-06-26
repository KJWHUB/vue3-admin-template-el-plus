import { ModStateObj } from '@/utils/mod'

import type { RouteRecordRaw } from 'vue-router'

const { REGISTER, MODIFY } = ModStateObj

const usersRoute: RouteRecordRaw = {
  path: 'users',
  name: 'users',
  meta: {
    menu: {
      title: 'Users',
      icon: 'UserFilled'
    }
  },
  redirect: { name: 'users-list' },
  children: [
    {
      path: '',
      name: 'users-list',
      component: () => import('@/views/contents/users/UsersView.vue')
    },
    {
      path: 'register',
      name: 'user-register',
      component: () => import('@/views/contents/users/UserDetailsView.vue'),
      meta: {
        modState: REGISTER
      }
    },
    {
      path: 'modify/:id',
      name: 'user-modify',
      component: () => import('@/views/contents/users/UserDetailsView.vue'),
      meta: {
        modState: MODIFY
      }
    }
  ]
}

export default usersRoute
