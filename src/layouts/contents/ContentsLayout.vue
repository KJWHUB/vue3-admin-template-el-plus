<script setup lang="ts">
import ContentsHeader from './ContentsHeader.vue'
import ContentsSidebar from './ContentsSidebar.vue'
</script>

<template>
  <div class="contents-layout">
    <el-container>
      <ContentsSidebar />
      <el-container>
        <ContentsHeader />
        <el-main>
          <RouterView />
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
