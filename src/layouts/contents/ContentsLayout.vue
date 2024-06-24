<script setup lang="ts">
import ContentsHeader from './ContentsHeader.vue'
import ContentsSidebar from './ContentsSidebar.vue'
</script>

<template>
  <div class="contents-layout">
    <el-container>
      <el-aside width="200px">
        <ContentsSidebar />
      </el-aside>
      <el-container>
        <el-header style="padding: 0">
          <ContentsHeader />
        </el-header>
        <el-main>
          <el-card>
            <RouterView />
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.contents-layout {
  background: #fff;
}
</style>
