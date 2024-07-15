import { redirectToFirstChild } from '@/shared/utils'

import { route as service01 } from './service-01'
import { route as service02 } from './service-02'
import { route as service03 } from './service-03'

import type { RouteRecordRaw } from 'vue-router'

export const route: RouteRecordRaw = {
  path: 'services',
  name: 'services',
  redirect: redirectToFirstChild,
  meta: {
    menu: {
      title: 'Services'
    }
  },
  children: [service01, service02, service03]
}
