<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useUserStore } from '@/entities/user/model'

const store = useUserStore()
const { fetchAll } = store
const { items } = storeToRefs(store)

fetchAll()
</script>

<template>
  <el-card>
    <el-table :data="items" :border="true">
      <el-table-column prop="id" label="Id"></el-table-column>
      <el-table-column prop="username" label="Name"></el-table-column>
      <el-table-column prop="email" label="Email"></el-table-column>
    </el-table>
  </el-card>
</template>

<style scoped></style>
