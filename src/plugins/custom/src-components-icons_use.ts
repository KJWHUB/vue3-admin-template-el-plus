import type { App } from 'vue'

import * as icons from '@/components/icons'

const CustomComponentsUsePlugin = {
  install(app: App) {
    for (const [key, component] of Object.entries(icons)) {
      app.component(key, component)
    }
  }
}

export default CustomComponentsUsePlugin
