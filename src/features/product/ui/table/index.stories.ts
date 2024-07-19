import type { Meta, StoryObj } from '@storybook/vue3'

import Table from './index.vue'
import { ref } from 'vue'

const meta = {
  title: 'features/product/ui/table',
  component: Table,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { Table },
    setup() {
      const products = ref(args.data || [])
      return { products }
    },
    template: `<Table v-model="products" />`
  }),
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: []
  }
}

export const WithProducts: Story = {
  args: {
    data: [
      { id: 1, name: 'Product 1', price: 1000, description: 'Product 1 description' },
      { id: 2, name: 'Product 2', price: 2000, description: 'Product 2 description' }
    ]
  }
}
