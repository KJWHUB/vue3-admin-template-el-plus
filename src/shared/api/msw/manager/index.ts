import { apiInstance } from '../base'

const BASE_URL = '/manager'

/**
 * 페이지 권한 정보를 요청합니다.
 */
export const getManager = (params: { username: string }) => {
  return apiInstance.get(`${BASE_URL}`, { params })
}
