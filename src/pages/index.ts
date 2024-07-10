import { route as authRoute } from './auth'
import { routes as contentsRoutes } from './contents'
import Routing from './index.vue'

import type { RouteLocation, RouteLocationRaw, RouteRecordRaw } from 'vue-router'

export const redirectToFirstChild: (to: RouteLocation) => RouteLocationRaw = (to) => {
  const lastMatched = to.matched[to.matched.length - 1]
  const firstChild = lastMatched.children?.[0]

  if (!firstChild) {
    console.warn(`No child routes found for ${to.path}`)
    return { path: to.path }
  }

  return { path: `${to.path}/${firstChild.path}` }
}

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', redirect: redirectToFirstChild, children: contentsRoutes },
  authRoute
]

export { Routing }
