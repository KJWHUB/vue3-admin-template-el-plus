<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'

import { useRoute, type RouteMeta, type RouteRecordRaw } from 'vue-router'

import SidebarMenuItem from '@/components/menu/SidebarMenuItem.vue'
import type { Menu } from '@/router'
import contentsRoute from '@/views/contents/route'

export type RouteMenuRequireRaw = RouteRecordRaw & {
  meta: RouteMeta & {
    menu: Menu & {
      fullPath: string
    }
  }
  children?: RouteMenuRequireRaw[]
}

const contentsRouteChildren = contentsRoute.children as RouteRecordRaw[]

const route = useRoute()

const menu = ref<RouteMenuRequireRaw[]>(createMenu(contentsRouteChildren))

const defaultActive = ref('dashboard')

function createMenu(children: RouteRecordRaw[], parentPath: string = ''): RouteMenuRequireRaw[] {
  return children
    .filter((child): child is RouteMenuRequireRaw => !!child.meta?.menu)
    .map((child) => {
      const fullPath = `${parentPath}/${child.path}`
      return {
        ...child,
        meta: {
          ...child.meta,
          menu: {
            ...child.meta.menu,
            fullPath: fullPath.slice(1)
          }
        },
        children: child.children ? createMenu(child.children, fullPath) : []
      }
    })
}

onMounted(() => {
  defaultActive.value = route.path.slice(1)
})

watchEffect(() => {
  if (route.path) {
    defaultActive.value = route.path.slice(1)
  }
})
</script>

<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    :default-active="defaultActive"
    text-color="#fff"
    :router="true"
  >
    <SidebarMenuItem v-for="item in menu" :key="item.path" :route="item" />
  </el-menu>
</template>

<style lang="scss" scoped>
$menu-active-text-color: #ffd04b;
$menu-background-color: #545c64;
$menu-text-color: #fff;
</style>
