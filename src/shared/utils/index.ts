export * from './routing'

// 빈 value 제거
export const filterNonEmptyQueryParamsDeep = (raw: any): any => {
  const filter = (value: any): any => {
    if (typeof value === 'object' && value !== null) {
      const keys = Object.keys(value)
      const result: any = {}
      keys.forEach((key) => {
        const filteredValue = filter(value[key])
        if (filteredValue !== '' && filteredValue !== null && filteredValue !== undefined) {
          result[key] = filteredValue
        }
      })
      return result
    } else {
      return value
    }
  }
  return filter(raw)
}

// 딜레이
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}
