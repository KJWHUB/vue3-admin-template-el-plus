import { isDevEnv, isLocalHost } from '@/shared/config'

export async function setupMocks() {
  if (isDevEnv && isLocalHost()) {
    const { worker } = await import('./browser')
    return worker.start({ onUnhandledRequest: 'bypass' })
  }
  return Promise.resolve()
}
