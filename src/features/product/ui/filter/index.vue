<script setup lang="ts">
import { reactive, ref, toRaw } from 'vue'

import { useProductStore } from '@/entities/product/model'

import type { TableDataFilterForm } from '../../model'
import type { FormInstance } from 'element-plus'

const { fetchAll } = useProductStore()

const formRef = ref<FormInstance>()
const formData = reactive<TableDataFilterForm>({
  name: '',
  price: 0
})

const onFilter = () => {
  console.log('Filter', formData)
  fetchAll(toRaw(formData))
}

const onReset = () => {
  formRef.value?.resetFields()
}

fetchAll(toRaw(formData))
</script>

<template>
  <el-card>
    <el-form ref="formRef" :model="formData">
      <el-form-item label="Name" prop="name">
        <el-input v-model="formData.name" placeholder="Name"></el-input>
      </el-form-item>
      <el-form-item label="Price" prop="price">
        <el-input v-model="formData.price" placeholder="Price"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onFilter">Filter</el-button>
        <el-button @click="onReset">Reset</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style scoped></style>
