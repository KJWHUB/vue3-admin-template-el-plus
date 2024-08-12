/**
 * success log style
 */
export function logSuccess(message: string) {
  console.log(`%c${message}`, 'color: limegreen; font-weight: bold;')
}

/**
 * fail log style
 */
export function logError(message: string, error?: any) {
  console.error(`%c${message}`, 'color: red; font-weight: bold;', error)
}
