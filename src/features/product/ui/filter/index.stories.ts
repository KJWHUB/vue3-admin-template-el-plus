import type { Meta, StoryObj } from '@storybook/vue3'

import Filter from './index.vue'
import type { FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'

const meta = {
  title: 'features/product/ui/filter',
  component: Filter,
  tags: ['autodocs'],
  args: {
    formData: {
      name: '',
      price: null
    }
  },
  argTypes: {
    formData: {
      description: 'filter 에 바인딩 될 데이터',
      control: false,
      table: {
        type: {
          summary: 'object',
          detail: `const formData = ref<{name: string; price: number | null;}>()`
        }
      }
    },
    formRef: {
      description: 'FormInstance 타입의 ref',
      table: {
        type: {
          summary: 'object',
          detail: 'const formRef = ref<FormInstance>()'
        }
      },
      control: false
    }
  },
  render: (args: any) => ({
    components: { Filter },
    setup() {
      const formData = reactive(args.formData)
      const formRef = ref<FormInstance>()

      const onFilter = () => {
        console.log('Filtering...')
      }
      const onReset = () => {
        formRef.value?.resetFields()
      }

      return {
        formData,
        formRef,
        onFilter,
        onReset
      }
    },
    template: `<Filter       
      v-model:form-data="formData"
      v-model:form-ref="formRef"
      @filter="onFilter"
      @reset="onReset" />`
  })
} satisfies Meta<typeof Filter>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Example: Story = {
  args: {
    formData: {
      name: 'iPad',
      price: 100
    }
  }
}
