<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { Fold } from '@element-plus/icons-vue'

import LanguageSelector from '@/shared/components/language-selector/LanguageSelector.vue'
import { useLayoutStore } from '@/shared/stores'

import HeaderBreadcrumb from './HeaderBreadcrumb.vue'
import HeaderUserAvatar from './HeaderUserAvatar.vue'

const layoutStore = useLayoutStore()
const { toggleSidebarFold, setHeaderHeight } = layoutStore

const headerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (headerRef.value) {
    setHeaderHeight(headerRef.value.offsetHeight)
  }
})
</script>

<template>
  <div ref="headerRef" class="header">
    <el-space size="large">
      <!-- fold -->
      <el-button text @click="toggleSidebarFold">
        <el-icon size="20">
          <Fold />
        </el-icon>
      </el-button>
      <!-- breadcrumb -->
      <HeaderBreadcrumb />
    </el-space>
    <el-space size="large">
      <!-- search -->
      <!-- <HeaderSearch /> -->
      <!-- lang -->
      <LanguageSelector />
      <!-- user -->
      <HeaderUserAvatar />
    </el-space>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  padding: 0 30px;

  background: #fff;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.1);
}
</style>
