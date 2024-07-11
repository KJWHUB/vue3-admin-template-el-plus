<script setup lang="ts">
import { onMounted, reactive } from 'vue'

import { useAuthStore } from '@/shared/stores'

export type LoginForm = {
  username: string
  password: string
  remember: boolean
}

const { hasRememberInfo, rememberInfo } = useAuthStore()
const { login } = {
  login: (form: LoginForm) => {
    console.log('login', form)
  }
}

const form = reactive<LoginForm>({
  username: '',
  password: '',
  remember: false
})

const handleSubmit = () => {
  login(form)
}

onMounted(() => {
  console.log('LoginCard mounted', hasRememberInfo, rememberInfo)
  if (hasRememberInfo) {
    form.username = rememberInfo.id
    form.remember = true
  }
})
</script>

<template>
  <el-form :model="form" size="large" label-width="80px" label-position="top">
    <el-form-item prop="username">
      <el-input v-model="form.username">
        <template #prefix>
          <el-icon><UserFilled /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="form.password" show-password>
        <template #prefix>
          <el-icon><MaterialSymbolsVpnKeyRounded /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit" style="width: 100%"> Login </el-button>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="form.remember"> Remember me </el-checkbox>
    </el-form-item>
  </el-form>
</template>

<style scoped></style>
