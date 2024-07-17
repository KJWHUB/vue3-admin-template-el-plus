import { ref } from 'vue'

import { defineStore } from 'pinia'

import { products } from '@/shared/api/json-server'
import type { GetProductListParams } from '@/shared/api/json-server/products'
import type { Server_Product } from '@/shared/api/json-server/products/models'

export const useProductStore = defineStore('product', () => {
  const items = ref<Server_Product[]>([])
  const currentItem = ref<Server_Product>()

  async function fetchAll({ name, price }: { name?: string; price?: number } = {}) {
    const request: GetProductListParams = {
      name_like: name ? name : undefined,
      price_lte: price ? price : undefined
    }

    const response = await products.getProductList(request)
    items.value = response.data
  }

  async function fetchOne(id: string) {
    const response = await products.getProductById({ productId: id })
    currentItem.value = response.data
  }

  function $reset() {
    items.value = []
    currentItem.value = undefined
  }

  return {
    items,
    currentItem,
    fetchAll,
    fetchOne,
    $reset
  }
})
