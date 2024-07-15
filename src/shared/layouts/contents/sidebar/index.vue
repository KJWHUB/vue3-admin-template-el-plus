<script setup lang="ts">
import { storeToRefs } from 'pinia'

import Logo from '@/shared/components/logo/index.vue'
import { useLayoutStore } from '@/shared/stores'
// import SidebarMenu from '@/components/menu/SidebarMenu.vue'

const layoutStore = useLayoutStore()
const { headerHeight } = storeToRefs(layoutStore)
</script>

<template>
  <div class="contents-sidebar">
    <Logo :style="{ height: headerHeight + 'px', flexShrink: 0 }" />

    <!-- <SidebarMenu style="width: 100%" /> -->
  </div>
</template>

<style lang="scss" scoped>
.contents-sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: 100%;
}
</style>
