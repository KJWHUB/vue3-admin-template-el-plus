import type { Server_Product } from '@/shared/api/json-server/products/models'

export type TableDataFilterForm = {
  name: string
  price: number
}
export type TableItemDataType = Server_Product & {
  description: string
}
