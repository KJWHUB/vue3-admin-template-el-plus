import type { RouteRecordRaw } from 'vue-router'

const servicesRoute: RouteRecordRaw = {
  path: 'services',
  name: 'services',
  meta: {
    menu: {
      title: 'services',
      icon: 'pi pi-link'
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
          title: 'Service 01',
          icon: 'pi pi-link'
        }
      }
    },
    {
      path: 'service02',
      name: 'service02',
      component: () => import('@/views/contents/services/service-02/Service02View.vue'),
      meta: {
        menu: {
          title: 'Service 02',
          icon: 'pi pi-link'
        }
      }
    },
    {
      path: 'service03',
      name: 'service03',
      component: () => import('@/views/contents/services/service-03/Service03View.vue'),
      meta: {
        menu: {
          title: 'Service 03',
          icon: 'pi pi-link'
        }
      }
    }
  ]
}

export default servicesRoute
