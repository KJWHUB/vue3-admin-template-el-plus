import type { FormInstance } from 'element-plus'
import { ref } from 'vue'

export const useForm = <T extends object>({ createFormData }: { createFormData: () => T }) => {
  const formRef = ref<FormInstance>()
  const formData = ref(createFormData())

  const onReset = () => {
    formRef.value?.resetFields()
  }
  return {
    formRef,
    formData,
    onReset
  }
}
