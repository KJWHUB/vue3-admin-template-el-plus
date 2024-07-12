import { createApp } from 'vue'

import App from './index.vue'
import { router, store, elementPlus, i18n, customComponentsUseagePlugin } from './providers'

export const app = createApp(App)
  .use(router)
  .use(i18n)
  .use(store)
  .use(elementPlus)
  .use(customComponentsUseagePlugin)
