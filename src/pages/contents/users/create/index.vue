<script setup lang="ts">
import { reactive, toRaw } from 'vue'

import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

import { useUserStore } from '@/entities/user/model'

const router = useRouter()
const store = useUserStore()
const { fetchCreate } = store

const formData = reactive({
  name: '',
  email: ''
})

const createUser = async () => {
  console.log('Create user')
  try {
    await fetchCreate(toRaw(formData))
    ElMessage.success('User created')
    router.push({ name: 'users-list' })
  } catch (error) {
    ElMessage.error('Error creating user')
  }
}
</script>

<template>
  <div>
    <el-card>
      <el-form :model="formData" label-width="100px">
        <el-form-item label="Name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <el-input v-model="formData.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="createUser">Create</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped></style>
