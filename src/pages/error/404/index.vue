<script setup lang="ts">
import src from './assets/404imgage.webp'
</script>

<template>
  <el-result title="404" sub-title="잘못된 경로입니다.">
    <template #icon>
      <el-image :src="src" style="width: 50%" />
    </template>
    <template #extra>
      <el-button type="primary" @click="$router.push({ name: 'home' })">Back</el-button>
    </template>
  </el-result>
</template>

<style scoped></style>
