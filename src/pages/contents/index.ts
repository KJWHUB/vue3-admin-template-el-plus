import { route as dashboardRoute } from './dashboard'
import { route as productsRoute } from './products'
import { route as servicesRoute } from './services'
import { route as usersRoute } from './users'

import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [dashboardRoute, productsRoute, servicesRoute, usersRoute]
