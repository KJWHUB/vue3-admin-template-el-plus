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

const isShow = ref(true)
const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s))

watchEffect(async () => {
  if (route.path) {
    isShow.value = false
    creacteBreadcrumb()
    await delay(300)
    isShow.value = true
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
  <Transition name="fade">
    <el-breadcrumb v-if="isShow" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">
        <el-icon>
          <HugeiconsHome06 />
        </el-icon>
      </el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in items" :key="item.path" :to="{ path: item.path }">
        <el-space>
          <el-icon v-if="item.icon">
            <component :is="item.icon" />
          </el-icon>
          {{ item.label }}
        </el-space>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </Transition>
</template>

<style scoped></style>
