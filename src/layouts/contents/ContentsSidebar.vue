<script setup lang="ts">
const headerHeight = 80
</script>

<template>
  <div class="contents-sidebar">
    <LogoBlock :style="{ height: headerHeight + 'px', flexShrink: 0 }" />

    <SidebarMenu style="width: 100%" />
  </div>
</template>

<style lang="scss" scoped>
.contents-sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
