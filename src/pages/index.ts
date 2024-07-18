import ContentsLayout from '@/shared/layouts/contents/index.vue'

import { route as authRoute } from './auth'
import { routes as contentsRoutes } from './contents'
import { routes as errorRoute } from './error'
import { route as iconPreviewRoute } from './icon-preview'
import Routing from './index.vue'

import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: ContentsLayout,
    redirect: { name: 'dashboard' },
    children: contentsRoutes
  },
  authRoute,
  iconPreviewRoute,
  ...errorRoute
]

export { Routing }
