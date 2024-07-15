<script setup lang="ts">
import { ref, watchEffect } from 'vue'

import { useRoute } from 'vue-router'

import { type Menu } from '@/app/provider/router/meta'
import { translateMenuTitle } from '@/shared/utils'

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
    createBreadcrumb()
    await delay(300)
    isShow.value = true
  }
})

function createBreadcrumb() {
  const matchedRoutes = route.matched
  const list: BreadcrumbItem[] = []

  for (const matchedRoute of matchedRoutes) {
    const menuMeta = matchedRoute.meta?.menu as Menu | undefined
    if (menuMeta) {
      list.push({
        label: menuMeta.title,
        icon: menuMeta.icon || '',
        path: matchedRoute.path
      })
    }
  }

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
        <el-space style="margin: 0 10px">
          {{ translateMenuTitle(item.label) }}
        </el-space>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </Transition>
</template>

<style scoped></style>
