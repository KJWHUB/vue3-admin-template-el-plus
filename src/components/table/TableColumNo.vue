<script setup lang="ts"></script>

<template>
  <el-table-column label="No" :align="'center'">
    <template #default="{ $index }">
      <span>{{ tableData.total - ($index + 1 + (query.page - 1) * query.size) + 1 }}</span>
    </template>
  </el-table-column>
</template>

<style scoped></style>
