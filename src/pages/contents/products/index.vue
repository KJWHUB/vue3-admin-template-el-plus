<script setup lang="ts">
import { computed } from 'vue'

import { storeToRefs } from 'pinia'

import { useProductStore } from '@/entities/product/model'
import { Filter, Table } from '@/features/product'
import type { TableItemDataType } from '@/features/product/model'

const store = useProductStore()
const { items } = storeToRefs(store)

const products = computed<TableItemDataType[]>(() => {
  return items.value.map((item) => {
    return {
      ...item,
      description: item.description || 'No description'
    }
  })
})
</script>

<template>
  <main style="display: flex; gap: 1rem">
    <Filter />
    <Table v-model="products" style="flex: 1" />
  </main>
</template>

<style scoped></style>
