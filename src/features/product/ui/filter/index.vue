<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import { onMounted, ref } from 'vue'

/**
 * 상품 필터 폼 데이터
 * @property {string} name - 상품명
 * @property {number | null} price - 상품가격
 */
export interface FormData {
  name: string
  price: number | null
}

const formData = defineModel<FormData>('formData', {
  required: true
})
const formRef = defineModel<FormInstance>('formRef')

defineEmits<{
  /** 필터 버튼 클릭시 트리거 됩니다. */
  (e: 'filter'): void
  /** 리셋 버튼 클릭시 트리거 됩니다. */
  (e: 'reset'): void
}>()

const innerRef = ref<FormInstance>()

onMounted(() => {
  formRef.value = innerRef.value
})
</script>

<template>
  <el-card>
    <el-form ref="innerRef" :model="formData">
      <el-form-item label="Name" prop="name">
        <el-input v-model="formData.name" placeholder="Name"></el-input>
      </el-form-item>
      <el-form-item label="Price" prop="price">
        <el-input-number v-model="formData.price" placeholder="Price"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="$emit('filter')">Filter</el-button>
        <el-button @click="$emit('reset')">Reset</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style scoped></style>
