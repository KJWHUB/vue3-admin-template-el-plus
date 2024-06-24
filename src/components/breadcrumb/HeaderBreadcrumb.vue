<script setup lang="ts">
import { ref, watchEffect } from 'vue'

import { useRoute } from 'vue-router'

import contentsRoute from '@/views/contents/route'

type BreadcrumbItem = {
  label: string
  icon?: string
  path: string
}

const route = useRoute()

const items = ref<BreadcrumbItem[]>([])

watchEffect(() => {
  if (route.path) {
    creacteBreadcrumb()
  }
})

function creacteBreadcrumb() {
  const paths = route.path.split('/').filter((path) => path)
  const list = paths.map((path, index) => {
    const findItem = () => {
      for (const item of contentsRoute.children ?? []) {
        if (item.path === path) {
          return item
        }
        if (item.children) {
          const find = item.children.find((child) => child.path === path)
          if (find) {
            return find
          }
        }
      }
    }

    const item = findItem()

    return {
      label: item?.meta?.menu?.title || '',
      icon: item?.meta?.menu?.icon || '',
      path: `/${paths.slice(0, index + 1).join('/')}`
    }
  })

  items.value = list
}
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">
      <el-icon>
        <House />
      </el-icon>
    </el-breadcrumb-item>
    <!-- 현재라우터 에 active 효과 -->
    <el-breadcrumb-item v-for="item in items" :key="item.path" :to="{ path: item.path }">
      <el-space>
        <el-icon v-if="item.icon">
          <component :is="item.icon" />
        </el-icon>
        {{ item.label }}
      </el-space>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped></style>
