<script setup lang="ts"></script>

<template>
  <div class="auth-layout">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.auth-layout {
  position: relative;
  width: 100%;
  min-height: 100vh;

  background: linear-gradient(45deg, #f3ec78, #af4261, #577590, #2d93ad, #61c0bf);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}
</style>
