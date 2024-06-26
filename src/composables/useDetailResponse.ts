import { ref } from 'vue'

import { useMod } from './useMod'

type UseDetailResponseProps = {
  getApi: (...request: any) => Promise<any>
  request: any
  responseHandler: (response: any) => void
}

export const useDetailResponse = ({ getApi, request, responseHandler }: UseDetailResponseProps) => {
  const { mod } = useMod()
  const loading = ref(false)
  // 조회
  const getDetail = async () => {
    loading.value = true
    try {
      const response = await getApi(request)

      responseHandler(response)
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  if (mod.isModify) {
    getDetail()
  }
  return {
    loading
  }
}
