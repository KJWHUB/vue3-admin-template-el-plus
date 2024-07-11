<script setup lang="ts">
import { LoginForm } from '@/features/auth'
import Logo from '@/shared/components/logo/index.vue'
</script>

<template>
  <el-card style="width: 480px">
    <div style="display: flex; justify-content: center; margin-bottom: 30px">
      <Logo logoType="both" />
    </div>
    <LoginForm />
  </el-card>
</template>

<style scoped></style>
