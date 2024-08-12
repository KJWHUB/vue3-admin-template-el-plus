import { app } from './app'
import { setupMocks } from './mocks'
import { logError, logSuccess } from './shared/utils'

/**
 *
 */
async function AppSetup() {
  console.group('[App] Setup')
  try {
    await setupMocks()
    logSuccess('[App] Setup complete')
    console.log('%c[App] Setup complete', 'color: limegreen; font-weight: bold;')
  } catch (error) {
    logError('[App] Setup failed')
    console.error('%c[App] Setup failed', 'color: red; font-weight: bold;', error)
  }
  console.groupEnd()
}

AppSetup().then(() => {
  app.mount('#app')
})
