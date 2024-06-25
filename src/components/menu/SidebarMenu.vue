<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'

import { storeToRefs } from 'pinia'
import { useRoute, type RouteMeta, type RouteRecordRaw } from 'vue-router'

import SidebarMenuItem from '@/components/menu/SidebarMenuItem.vue'
import type { Menu } from '@/router'
import { useLayoutStore } from '@/stores/layout'
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
const layoutStore = useLayoutStore()
const { isSidebarFold } = storeToRefs(layoutStore)

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
  <el-scrollbar :style="{ 'background-color': $style.menuBackgroundColor }">
    <el-menu
      :active-text-color="$style.menuActiveTextColor"
      :background-color="$style.menuBackgroundColor"
      :default-active="defaultActive"
      :text-color="$style.menuTextColor"
      :router="true"
      :collapse="isSidebarFold"
      style="border: none"
    >
      <SidebarMenuItem v-for="item in menu" :key="item.path" :route="item" />
    </el-menu>
  </el-scrollbar>
</template>

<style lang="scss" module>
$menu-active-text-color: #ffd04b;
$menu-background-color: #545c64;
$menu-text-color: #fff;

:export {
  menuActiveTextColor: $menu-active-text-color;
  menuBackgroundColor: $menu-background-color;
  menuTextColor: $menu-text-color;
}
</style>
