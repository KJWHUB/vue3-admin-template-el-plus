<script setup lang="ts">
import { LoginCard } from '@/features/auth'
</script>

<template>
  <main class="login-view">
    <LoginCard />
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
