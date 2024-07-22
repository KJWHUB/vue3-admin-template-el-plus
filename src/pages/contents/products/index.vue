<script setup lang="ts">
import { computed } from 'vue'

import { storeToRefs } from 'pinia'

import { useProductStore } from '@/entities/product/model'
import { Filter, Table } from '@/features/product'
import type { TableItemDataType } from '@/features/product/model'
import { useForm } from '@/shared/composables/useForm'

const store = useProductStore()
const { fetchAll } = store
const { items } = storeToRefs(store)

const { formData, formRef, onReset } = useForm({
  createFormData: () => ({
    name: '',
    price: null
  })
})

const products = computed<TableItemDataType[]>(() => {
  console.log('Products', items.value)
  return items.value.map((item) => {
    return {
      ...item,
      description: item.description || 'No description'
    }
  })
})

const onFilter = () => {
  console.log('Filter', formData)
  fetchAll({
    name: formData.value.name,
    price: formData.value.price || undefined
  })
}

onFilter()
</script>

<template>
  <main style="display: flex; gap: 1rem">
    <Filter
      v-model:form-data="formData"
      v-model:form-ref="formRef"
      @filter="onFilter"
      @reset="onReset"
    />
    <Table v-model="products" style="flex: 1" />
  </main>
</template>

<style scoped></style>
