<script setup lang="ts">
import { useUserStore } from '@/entities/user/model'

const store = useUserStore()
const { fetchAll, usersQuery } = store

fetchAll()
</script>

<template>
  <el-card>
    <el-table v-loading="usersQuery.isLoading" :data="usersQuery.data" :border="true">
      <el-table-column prop="id" label="Id">
        <template #default="{ row }">
          <RouterLink :to="{ name: 'users-modify', params: { id: row.id } }">
            <el-button>
              {{ row.id }}
            </el-button>
          </RouterLink>
        </template>
      </el-table-column>
      <el-table-column prop="username" label="Name"></el-table-column>
      <el-table-column prop="email" label="Email"></el-table-column>
    </el-table>
  </el-card>
</template>

<style scoped></style>
