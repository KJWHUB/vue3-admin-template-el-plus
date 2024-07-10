<script setup lang="ts">
import LoginCard from '@/components/login-card/LoginCard.vue'
</script>

<template>
  <main class="login-view">
    <LoginCard style="width: 40%" />
  </main>
</template>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
}
</style>
