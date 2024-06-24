<script setup lang="ts">
import LanguageSelector from '@/components/language-selector/LanguageSelector.vue'
</script>

<template>
  <el-header>
    <!-- breadcrumb -->
    <HeaderBreadcrumb />
    <!-- lang -->
    <LanguageSelector />
  </el-header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
</style>
