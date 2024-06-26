import instance from '../config/axios'

// 유저 목록 조회
export const getUsers = async (params: any) => {
  const response = await instance.get('/users', { params })
  return response.data
}

// 유저 상세 조회
export const getUser = async (id: string) => {
  const response = await instance.get(`/users/${id}`)
  return response.data
}

// 유저 등록
// REGISTER
export const registerUser = async (data: any) => {
  const response = await instance.post('/users', data)
  return response.data
}

// 유저 수정
export const modifyUser = async (id: string, data: any) => {
  const response = await instance.put(`/users/${id}`, data)
  return response.data
}
