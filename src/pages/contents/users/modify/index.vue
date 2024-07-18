<script setup lang="ts">
import { reactive } from 'vue'

import { ElMessage } from 'element-plus'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

import { useUserStore } from '@/entities/user/model'

const route = useRoute()
const store = useUserStore()
const { fetchOne, fetchModify } = store
const { currentItem } = storeToRefs(store)

const formData = reactive({
  id: '',
  name: '',
  email: ''
})

const editUser = async () => {
  console.log('Edit user')
  try {
    await fetchModify({ email: formData.email })
    ElMessage.success('User edited')
  } catch (error) {
    ElMessage.error('Error editing user')
  }
}

const formSetup = async () => {
  const userId = route.params.id.toString()
  await fetchOne(userId)

  if (!currentItem.value) return
  formData.id = currentItem.value.id
  formData.name = currentItem.value.username
  formData.email = currentItem.value.email
}

formSetup()
</script>

<template>
  <div>
    <el-card>
      <el-form :model="formData" label-width="100px">
        <el-form-item label="ID">
          <el-input v-model="formData.id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="Name">
          <el-input v-model="formData.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <el-input v-model="formData.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="editUser">edit</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped></style>
