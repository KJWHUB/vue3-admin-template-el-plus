import instance from '@/api/config/axios'

export const getExample = async () => {
  const response = instance.get('/example')
  return (await response).data
}
