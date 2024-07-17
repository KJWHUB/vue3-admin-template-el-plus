import { app } from './app'
import { setupMocks } from './mocks'

setupMocks().then(() => {
  app.mount('#app')
})
