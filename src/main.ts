import { app } from './app'
import { setupMocks } from './mocks'
import { logError, logSuccess } from './shared/utils'

/**
 * 앱 설정.
 */
async function AppSetup() {
  console.group('[App] Setup')
  try {
    await setupMocks()
    logSuccess('[App] Setup complete')
  } catch (error) {
    logError('[App] Setup failed')
  }
  console.groupEnd()
}

AppSetup().then(() => {
  app.mount('#app')
})
