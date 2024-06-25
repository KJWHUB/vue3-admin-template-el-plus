import instance from '../config/axios'

// 유저 목록 조회
export const getUsers = async (params: any) => {
  const response = await instance.get('/users', { params })
  return response.data
}
