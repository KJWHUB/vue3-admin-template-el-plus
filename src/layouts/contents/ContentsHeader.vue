<script setup lang="ts">
import { Fold } from '@element-plus/icons-vue'

import LanguageSelector from '@/components/language-selector/LanguageSelector.vue'
import HeaderUserAvatar from '@/components/user/HeaderUserAvatar.vue'
import { useLayoutStore } from '@/stores/layout'

const { toggleSidebarFold } = useLayoutStore()
</script>

<template>
  <div class="header">
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
