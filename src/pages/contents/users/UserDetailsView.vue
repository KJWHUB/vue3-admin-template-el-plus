<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

import { type FormInstance } from 'element-plus'
import { useRoute } from 'vue-router'

import { getUser, modifyUser, registerUser } from '@/api/modules/user'
import FormDetailViewWrap from '@/components/view-wrap/FormDetailViewWrap.vue'
import { useDetailResponse } from '@/composables/useDetailResponse'
import { useFormDetailView } from '@/composables/useFormDetailView'
import { useMod } from '@/composables/useMod'

type FormData = {
  date: string
  name: string
  zip: string
  state: string
  city: string
  address: string
}

const route = useRoute()
const { mod } = useMod()

const formRef = ref<FormInstance>()
const formData = reactive<FormData>({
  date: '',
  name: '',
  zip: '',
  state: '',
  city: '',
  address: ''
})

// 등록 컨버터
const requestRegisterConverter = (data: FormData) => {
  return {
    date: data.date,
    name: data.name,
    zip: data.zip,
    state: data.state,
    city: data.city,
    address: data.address
  }
}

// 수정 컨버터
const requestModifyConverter = (data: FormData) => {
  // 수정 컨버터에서 커스텀 로직 추가 가능
  return [
    route.params.id,
    {
      date: data.date,
      name: data.name,
      zip: data.zip,
      state: data.state,
      city: data.city,
      address: data.address,
      // 예시: 수정 시 추가되는 필드
      modifiedAt: new Date().toISOString()
    }
  ]
}

// API 함수 매핑
const requestFunctions = {
  REGISTER: {
    api: registerUser,
    converter: requestRegisterConverter
  },
  MODIFY: {
    api: modifyUser,
    converter: requestModifyConverter
  }
}

const { handleAction } = useFormDetailView<FormData>({
  formData,
  getFormRef: () => formRef,
  modInfo: requestFunctions
})

const responseHandler = (response: any) => {
  formData.date = response.date
  formData.name = response.name
  formData.zip = response.zip
  formData.state = response.state
  formData.city = response.city
  formData.address = response.address
}

const { loading } = useDetailResponse({
  getApi: getUser,
  request: route.params.id as string,
  responseHandler
})

const testAdd = () => {
  formData.date = '2021-09-01'
  formData.name = 'John Doe'
  formData.zip = '12345'
  formData.state = 'CA'
  formData.city = 'Los Angeles'
  formData.address = '1234 Main St'
}
</script>

<template>
  <FormDetailViewWrap :mod="mod" @handleClick="handleAction">
    <el-button @click="testAdd">Add Test Data</el-button>
    <el-form
      v-loading="loading"
      ref="formRef"
      :model="formData"
      label-position="left"
      label-width="150px"
    >
      <el-form-item label="Date" prop="date">
        <el-input v-model="formData.date" />
      </el-form-item>
      <el-form-item
        label="Name"
        prop="name"
        :rules="[{ required: true, message: 'Please input name', trigger: 'blur' }]"
      >
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="Zip" prop="zip">
        <el-input v-model="formData.zip" />
      </el-form-item>
      <el-form-item label="State" prop="state">
        <el-input v-model="formData.state" />
      </el-form-item>
      <el-form-item label="City" prop="city">
        <el-input v-model="formData.city" />
      </el-form-item>
      <el-form-item label="Address" prop="address">
        <el-input v-model="formData.address" />
      </el-form-item>
    </el-form>
  </FormDetailViewWrap>
</template>

<style scoped></style>
