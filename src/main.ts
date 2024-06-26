import './assets/main.css'

import { createApp } from 'vue'

import { createPinia } from 'pinia'

import App from './App.vue'
import CustomComponentsUsePlugin from './plugins/custom/src-components-icons_use'
import elementPlus from './plugins/element-plus'
import { i18n } from './plugins/i18n'
import router from './router'
import { useCommonCodeStore } from './stores/commonCode'

const customAsyncAppUse = async () => {
  const { setupCode } = useCommonCodeStore()
  await setupCode()
}

const init = async () => {
  const app = createApp(App)

  app.use(i18n)
  app.use(createPinia())

  await customAsyncAppUse()

  app.use(router)
  app.use(elementPlus)
  app.use(CustomComponentsUsePlugin)

  app.mount('#app')
}
init()
