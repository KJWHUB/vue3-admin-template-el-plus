<script setup lang="ts">
import logoSrc from '@/assets/logo.svg'
const logoText = 'LOGO'
</script>

<template>
  <div class="logo">
    <img :src="logoSrc" alt="logo" />
    <h1>{{ logoText }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    width: auto;
    max-height: 50px;
  }
}
</style>
