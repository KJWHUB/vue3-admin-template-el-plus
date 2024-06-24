<script setup lang="ts">
import ContentsHeader from './ContentsHeader.vue'
import ContentsSidebar from './ContentsSidebar.vue'
</script>

<template>
  <div class="contents-layout">
    <ContentsSidebar style="flex: 1" />
    <div style="flex: 5">
      <ContentsHeader />
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contents-layout {
  display: flex;

  width: 100%;
  min-height: 100vh;

  background: #fff;
}
</style>
