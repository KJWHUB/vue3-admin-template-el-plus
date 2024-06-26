<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  cellLabelKey: string
  createFarms: (row: any) => RouteLocationRaw
}>()
</script>

<template>
  <el-table-column>
    <template #default="{ row }">
      <RouterLink :to="props.createFarms(row)">
        <el-link type="primary">
          {{ row[props.cellLabelKey] }}
        </el-link>
      </RouterLink>
    </template>
  </el-table-column>
</template>

<style scoped></style>
