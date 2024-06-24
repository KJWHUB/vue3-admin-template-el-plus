<script setup lang="ts">
import LanguageSelector from '@/components/language-selector/LanguageSelector.vue'
import HeaderUserAvatar from '@/components/user/HeaderUserAvatar.vue'
</script>

<template>
  <div class="header">
    <!-- breadcrumb -->
    <HeaderBreadcrumb />
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
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
</style>
