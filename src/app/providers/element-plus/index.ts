import 'element-plus/dist/index.css'

import type { App } from 'vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'

export const elementPlus = {
  install(app: App) {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
    app.use(ElementPlus)
  }
}
