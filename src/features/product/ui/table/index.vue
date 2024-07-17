<script setup lang="ts">
import { Picture as IconPicture } from '@element-plus/icons-vue'

import type { TableItemDataType } from '../../model'
const products = defineModel<TableItemDataType[]>({
  required: true
})
</script>

<template>
  <el-card>
    <el-table :data="products" :border="true">
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="price" label="Price"></el-table-column>
      <el-table-column prop="description" label="Description"></el-table-column>
      <el-table-column prop="image" label="Image" :align="'center'">
        <template v-slot="{ row }">
          <div class="demo-image__error">
            <el-image style="width: 100px; height: 100px" :src="row.image" fit="fill">
              <template #error>
                <div class="image-slot">
                  <el-icon><IconPicture /></el-icon>
                </div>
              </template>
            </el-image>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<style scoped>
.demo-image__error .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image__error .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.demo-image__error .el-image {
  padding: 0 5px;
  max-width: 300px;
  max-height: 200px;
  width: 100%;
  height: 200px;
}

.demo-image__error .image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
</style>
