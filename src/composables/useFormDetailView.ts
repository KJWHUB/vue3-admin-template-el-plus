import { toRaw, type Reactive, type Ref } from 'vue'

import { ElMessage, ElMessageBox, type FormInstance } from 'element-plus'
import { useRouter } from 'vue-router'

import { type ModState } from '@/utils/mod'

type UseFormDetailViewProps<TFormData> = {
  formData: Reactive<TFormData>
  getFormRef: () => Ref<FormInstance | undefined>
  modInfo: Record<
    ModState,
    {
      api: (...request: any) => Promise<any>
      converter: (formData: TFormData) => Promise<any> | any
    }
  >
}

export const useFormDetailView = <TFormData>({
  formData,
  getFormRef,
  modInfo
}: UseFormDetailViewProps<TFormData>) => {
  const router = useRouter()

  // 등록
  const openCreateMessageBox = () => {
    ElMessageBox.confirm('등록 하시겠습니까?', 'Warning', {
      confirmButtonText: '등록',
      cancelButtonText: '취소',
      type: 'warning'
    })
      .then(async () => {
        const { api, converter } = modInfo.REGISTER
        await requestFetch(api, converter)
        ElMessage({
          type: 'success',
          message: '등록 되었습니다.'
        })
        router.back()
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '취소 되었습니다.'
        })
      })
  }

  // 수정
  const openUpdateMessageBox = () => {
    ElMessageBox.confirm('수정 하시겠습니까?', 'Warning', {
      confirmButtonText: '수정',
      cancelButtonText: '취소',
      type: 'warning'
    })
      .then(async () => {
        const { api, converter } = modInfo.MODIFY
        await requestFetch(api, converter)
        ElMessage({
          type: 'success',
          message: '수정 되었습니다.'
        })
        router.back()
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '취소 되었습니다.'
        })
      })
  }

  const formValidator = async (formEl: FormInstance | undefined) => {
    if (!formEl) return false
    return await formEl.validate()
  }

  async function requestFetch(
    requestApi: (...req: any) => Promise<any>,
    requestConverter: (formData: TFormData) => any | Promise<any>
  ) {
    try {
      // form 유효성 검사
      const formValidatorResult = await formValidator(getFormRef().value)
      if (!formValidatorResult) {
        throw new Error('Form validation failed')
      }

      // request converter 를 통해 데이터 변환
      const request = await requestConverter(toRaw(formData) as TFormData)

      // API 호출
      await requestApi(...request)
    } catch (error) {
      console.error(error)
      ElMessage({
        type: 'error',
        message: 'Form validation failed' + error
      })
      throw error
    }
  }

  const handleAction = (mod: ModState) => {
    switch (mod) {
      case 'REGISTER':
        openCreateMessageBox()
        break
      case 'MODIFY':
        openUpdateMessageBox()
        break
      default:
        throw new Error('Invalid mod')
    }
  }

  return {
    handleAction
  }
}
