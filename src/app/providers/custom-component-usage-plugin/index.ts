import type { App } from 'vue'

import * as icons from './icons'

export const customComponentsUseagePlugin = {
  install(app: App) {
    for (const [key, component] of Object.entries(icons)) {
      app.component(key, component)
    }
  }
}
