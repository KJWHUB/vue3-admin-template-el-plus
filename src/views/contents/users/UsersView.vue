<script setup lang="ts">
import { reactive, toRaw, type Reactive } from 'vue'

import { getUsers } from '@/api/modules/user'
import TableViewWrap, { type TableViewData } from '@/components/view-wrap/TableViewWrap.vue'

const listQuery = reactive({
  name: '',
  zip: ''
})

const tableColumns = [
  { prop: 'date', label: 'Date', minWidth: 150 },
  { prop: 'name', label: 'Name' },
  { prop: 'zip', label: 'Zip' },
  { prop: 'state', label: 'State' },
  { prop: 'city', label: 'City' },
  { prop: 'address', label: 'Address', minWidth: 200 }
]

const fetchRequest = () => {
  return toRaw(listQuery)
}

const fetchData = ({ res, tableData }: { res: any; tableData: Reactive<TableViewData> }) => {
  console.log(res, tableData)
  tableData.list = res
  tableData.total = res.total
}

const resetFiled = () => {
  listQuery.name = ''
  listQuery.zip = ''
}
</script>

<template>
  <TableViewWrap
    :fetchFn="getUsers"
    :fetchRequest="fetchRequest"
    @fetchData="fetchData"
    @resetFiled="resetFiled"
  >
    <template #filter>
      <el-form inline style="flex: 5">
        <el-form-item label="Name">
          <el-input v-model="listQuery.name" />
        </el-form-item>
        <el-form-item label="zip">
          <el-input v-model="listQuery.zip" />
        </el-form-item>
      </el-form>
    </template>

    <template #action>
      <el-button type="primary" style="flex: 1; margin: 0">등록</el-button>
    </template>

    <template #tableColumns>
      <el-table-column
        v-for="column in tableColumns"
        :key="column.prop"
        v-bind="column"
        :align="'center'"
      />
    </template>
  </TableViewWrap>
</template>

<style scoped></style>
