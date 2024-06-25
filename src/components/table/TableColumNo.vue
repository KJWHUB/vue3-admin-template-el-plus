<script setup lang="ts">
const props = defineProps({
  total: {
    type: Number,
    required: true
  },
  page: {
    type: Number,
    required: true
  },
  size: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <el-table-column label="No" :align="'center'">
    <template #default="{ $index }">
      <span>{{ props.total - ($index + 1 + (props.page - 1) * props.size) + 1 }}</span>
    </template>
  </el-table-column>
</template>

<style scoped></style>
