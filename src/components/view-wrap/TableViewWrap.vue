<script setup lang="ts">
import { reactive, ref } from 'vue'

interface Pageable {
  page: number
  size: number
}

export type TableViewData = {
  list: any[]
  total: number
}

const props = defineProps({
  fetchFn: {
    type: Function,
    required: true,
    default: () => {}
  },
  fetchRequest: {
    type: Function,
    required: false,
    default: () => {}
  },
  fetchResponse: {
    type: Function,
    required: false,
    default: (res: any) => res
  }
})

const emit = defineEmits(['fetchData', 'resetFiled'])

const tableData = reactive<TableViewData>({
  list: [],
  total: 0
})

const query = reactive<Pageable>({
  page: 1,
  size: 10
})

const tableDataLoading = ref(false)

const fetchData = async () => {
  tableDataLoading.value = true
  try {
    const req = {
      _limit: query.size,
      _start: (query.page - 1) * query.size
    }

    const requestAssign = Object.assign({}, req, props.fetchRequest())

    const res = await props.fetchFn(requestAssign)
    // tableData.list = props.fetchResponse(res)
    // tableData.total = 100
    emit('fetchData', { res, tableData })

    console.log('목록 조회', res)
  } catch (error) {
    console.error(error)
  } finally {
    tableDataLoading.value = false
  }
}
const resetFiled = () => {
  query.page = 1
  query.size = 10
  emit('resetFiled')
  fetchData()
}

const handleChange = (currentPage: number, pageSize: number) => {
  console.log(currentPage, pageSize)
  // query.page = currentPage
  // query.size = pageSize
  fetchData()
}

fetchData()
</script>

<template>
  <el-card>
    <template v-if="$route.meta.menu">
      <h1 class="title">{{ $route.meta.menu.title }}</h1>
    </template>

    <el-row :gutter="20" style="margin: 30px 0 20px">
      <el-col :span="18">
        <el-card>
          <slot name="filter"></slot>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div style="display: flex; flex-wrap: wrap; gap: 10px">
            <el-button type="primary" icon="search" @click="fetchData" style="flex: 1">
              조회
            </el-button>
            <el-button icon="CarbonReset" @click="resetFiled" style="flex: 1"> 초기화 </el-button>
            <slot name="action"></slot>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- table -->
    <el-table
      :data="tableData.list"
      scrollbar-always-on
      style="width: 100%"
      border
      :header-cell-style="{ backgroundColor: 'rgba(240, 248, 248, 1)', color: '#000' }"
      :loading="tableDataLoading"
    >
      <el-table-column label="No" :align="'center'">
        <template #default="{ $index }">
          <span>{{ tableData.total - ($index + 1 + (query.page - 1) * query.size) + 1 }}</span>
        </template>
      </el-table-column>
      <slot name="tableColumns"> </slot>
    </el-table>

    <!-- pagination -->
    <div style="display: flex; justify-content: center; padding: 2rem">
      <el-pagination
        v-model:page-size="query.size"
        v-model:current-page="query.page"
        layout="total, prev, pager, next, sizes"
        background
        @change="handleChange"
        :total="Number(tableData.total)"
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
