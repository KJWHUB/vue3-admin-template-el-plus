import type { App } from 'vue'

import { useCommonCodeStore } from '@/stores/commonCode'

const commonCodePlugin = {
  async install(app: App) {
    const { setupCode } = useCommonCodeStore()
    await setupCode()

    console.log('commonCodePlugin installed')
  }
}

export default commonCodePlugin
