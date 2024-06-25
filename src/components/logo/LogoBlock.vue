<script setup lang="ts">
import logoSrc from '@/assets/logo.svg'
const logoText = 'LOGO'

const props = withDefaults(
  defineProps<{
    logoType?: 'text' | 'image' | 'both'
  }>(),
  {
    logoType: 'text'
  }
)
</script>

<template>
  <div class="logo">
    <template v-if="props.logoType === 'both'">
      <img :src="logoSrc" alt="logo" />
      <h1>{{ logoText }}</h1>
    </template>

    <template v-else-if="props.logoType === 'text'">
      <h1>{{ logoText }}</h1>
    </template>

    <template v-else-if="props.logoType === 'image'">
      <img :src="logoSrc" alt="logo" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    width: auto;
    max-height: 30px;
  }
  h1 {
    font-size: 1.3rem;
    font-weight: bold;
  }
}
</style>
