import type { RouteRecordRaw } from 'vue-router'

const servicesRoute: RouteRecordRaw = {
  path: 'services',
  name: 'services',
  meta: {
    menu: {
      title: 'services',
      icon: 'Service'
    }
  },
  redirect: { name: 'service01' },
  children: [
    {
      path: 'service01',
      name: 'service01',
      component: () => import('@/views/contents/services/service-01/Service01View.vue'),
      meta: {
        menu: {
          title: 'Service 01'
        }
      }
    },
    {
      path: 'service02',
      name: 'service02',
      component: () => import('@/views/contents/services/service-02/Service02View.vue'),
      meta: {
        menu: {
          title: 'Service 02'
        }
      }
    },
    {
      path: 'service03',
      name: 'service03',
      component: () => import('@/views/contents/services/service-03/Service03View.vue'),
      meta: {
        menu: {
          title: 'Service 03'
        }
      }
    }
  ]
}

export default servicesRoute
