<script setup lang="ts">
import { ref, toRaw, type Reactive } from 'vue'

import { getUsers } from '@/api/modules/user'
import TableColumDetailRouting from '@/components/table/TableColumDetailRouting.vue'
import TableColumNo from '@/components/table/TableColumNo.vue'
import TableViewWrap from '@/components/view-wrap/TableViewWrap.vue'
import { useTableView, type Pageable } from '@/composables/useTableView'
import { filterNonEmptyQueryParamsDeep } from '@/utils'

import type { FormInstance } from 'element-plus'

type UserItem = {
  date: string
  name: string
  zip: string
  state: string
  city: string
  address: string
}

const createMod = 'user-register'
const modifyMod = 'user-modify'

const filterFormRef = ref<FormInstance>()

const lQuery = {
  name: '',
  zip: ''
}

const { tableData, listQuery, pageQuery, resetFormAndFetch, fetchData } = useTableView<
  typeof lQuery,
  typeof getUsers,
  UserItem
>({
  listQuery: lQuery,
  fetchFn: getUsers,
  formEl: filterFormRef
})

const tableColumns = [
  { prop: 'id', label: 'id', minWidth: 100 },
  { prop: 'date', label: 'Date', minWidth: 150 },
  { prop: 'name', label: 'Name' },
  { prop: 'zip', label: 'Zip' },
  { prop: 'state', label: 'State' },
  { prop: 'city', label: 'City' },
  { prop: 'address', label: 'Address', minWidth: 200 }
]

const requestHandler = (pQuery: Reactive<Pageable>, lQuery: Reactive<any>) => {
  return Object.assign(
    {},
    {
      _limit: pQuery.size,
      _start: (pQuery.page - 1) * pQuery.size
    },
    filterNonEmptyQueryParamsDeep(toRaw(lQuery))
  )
}

const responseHandler = (
  res: any
): {
  list: any[]
  total: number
} => {
  return {
    list: res,
    total: 100
  }
}

const customFetchData = () => fetchData(requestHandler, responseHandler)

customFetchData()
</script>

<template>
  <TableViewWrap
    v-model:page-query="pageQuery"
    :table-data="tableData"
    @fetchData="customFetchData"
    @resetFormAndFetch="resetFormAndFetch"
  >
    <template #filter>
      <el-form ref="filterFormRef" inline>
        <el-form-item label="Name">
          <el-input v-model="listQuery.name" />
        </el-form-item>
        <el-form-item label="zip">
          <el-input v-model="listQuery.zip" />
        </el-form-item>
      </el-form>
    </template>

    <template #action>
      <el-button
        type="primary"
        style="flex: 1; margin: 0"
        @click="$router.push({ name: createMod })"
      >
        등록
      </el-button>
    </template>

    <template #table>
      <el-table
        v-loading="tableData.loading"
        :data="tableData.list"
        scrollbar-always-on
        style="width: 100%"
        border
        :header-cell-style="{ backgroundColor: 'rgba(240, 248, 248, 1)', color: '#000' }"
      >
        <TableColumNo :page="pageQuery.page" :size="pageQuery.size" :total="tableData.total" />
        <template v-for="column in tableColumns" :key="column.prop">
          <TableColumDetailRouting
            v-if="column.prop === 'id'"
            v-bind="column"
            cellLabelKey="id"
            :align="'center'"
            :createFarms="(row) => ({ name: modifyMod, params: { id: row.id } })"
          />
          <el-table-column v-else v-bind="column" :align="'center'" />
        </template>
      </el-table>
    </template>
  </TableViewWrap>
</template>

<style scoped></style>
