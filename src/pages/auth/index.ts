import { redirectToFirstChild } from '..'

import { route as loginRoute } from './login/index'

import type { RouteRecordRaw } from 'vue-router'

export const route: RouteRecordRaw = {
  path: '/auth',
  name: 'auth',
  redirect: redirectToFirstChild,
  children: [loginRoute]
}
