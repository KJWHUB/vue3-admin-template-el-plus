<script setup lang="ts">
import { type PropType } from 'vue'

import type { Pageable, TableViewData } from '@/composables/useTableView'

const pageQueryModel = defineModel('pageQuery', {
  type: Object as PropType<Pageable>,
  required: true
})
const props = defineProps({
  tableData: {
    type: Object as PropType<TableViewData<object>>,
    required: true
  }
})
const emit = defineEmits(['fetchData', 'resetFormAndFetch'])

const resetFormAndFetch = () => {
  pageQueryModel.value.page = 1
  pageQueryModel.value.size = 10
  emit('resetFormAndFetch')
}

const handleChange = (_currentPage: number, _pageSize: number) => {
  emit('fetchData')
}
</script>

<template>
  <el-card>
    <template v-if="$route.meta.menu">
      <h1 class="title">{{ $route.meta.menu.title }}</h1>
    </template>

    <el-card style="margin: 30px 0 20px">
      <el-row :gutter="20">
        <el-col :span="17">
          <slot name="filter"></slot>
        </el-col>
        <el-col :span="1" style="display: grid">
          <el-divider direction="vertical" style="justify-self: center; height: 100%" />
        </el-col>
        <el-col :span="6">
          <div style="display: flex; flex-wrap: wrap; gap: 10px">
            <el-button
              type="primary"
              icon="search"
              @click="emit('fetchData')"
              style="flex-grow: 1; flex-basis: calc(50% - 10px)"
            >
              조회
            </el-button>
            <el-button
              icon="CarbonReset"
              @click="resetFormAndFetch"
              style="flex-grow: 1; flex-basis: calc(50% - 10px)"
            >
              초기화
            </el-button>
            <slot name="action"></slot>
          </div>
        </el-col>
      </el-row>
    </el-card>

    <!-- table -->
    <slot name="table"> </slot>

    <!-- pagination -->
    <div style="display: flex; justify-content: center; padding: 2rem">
      <el-pagination
        v-model:page-size="pageQueryModel.size"
        v-model:current-page="pageQueryModel.page"
        layout="total, prev, pager, next, sizes"
        background
        @change="handleChange"
        :total="Number(props.tableData.total)"
      />
    </div>
  </el-card>
</template>

<style scoped>
.title {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  padding: 1rem;
}

.el-button + .el-button {
  margin-left: 0 !important;
}
</style>
