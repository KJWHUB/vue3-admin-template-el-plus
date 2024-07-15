<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'

import { storeToRefs } from 'pinia'
import { useRoute, useRouter, type RouteMeta, type RouteRecordRaw } from 'vue-router'

import type { Menu } from '@/app/providers/router/meta'
import { useLayoutStore } from '@/shared/stores'

import SidebarMenuItem from './SidebarMenuItem.vue'

export type RouteMenuRequireRaw = RouteRecordRaw & {
  meta: RouteMeta & {
    menu: Menu & {
      fullPath: string
    }
  }
  children?: RouteMenuRequireRaw[]
}

const route = useRoute()
const router = useRouter()
const layoutStore = useLayoutStore()
const { isSidebarFold } = storeToRefs(layoutStore)

const menu = ref<RouteMenuRequireRaw[]>([])

const defaultActive = computed(() => {
  const pathParts = route.path.slice(1).split('/')

  const findActiveMenu = (
    items: RouteMenuRequireRaw[],
    depth: number = 0,
    parentItem: RouteMenuRequireRaw | null = null
  ): string => {
    for (const item of items) {
      const isMatch =
        item.path === pathParts[depth] ||
        (typeof item.redirect === 'object' &&
          'name' in item.redirect &&
          item.redirect.name === route.name)

      if (isMatch) {
        if (depth === pathParts.length - 1 || !item.children?.length) {
          if (item.meta?.menu && !item.meta.menu.hidden) {
            return item.meta.menu.fullPath
          }
          return parentItem?.meta.menu.fullPath || ''
        }

        if (item.children?.length) {
          const result = findActiveMenu(item.children, depth + 1, item)
          if (result) return result
        }
      }
    }

    return parentItem?.meta.menu.fullPath || ''
  }

  return findActiveMenu(menu.value) || route.path.slice(1)
})

function createMenu(children: RouteRecordRaw[], parentPath: string = ''): RouteMenuRequireRaw[] {
  return children
    .filter(
      (child): child is RouteMenuRequireRaw =>
        !!child.meta?.menu && (child.meta.menu.hidden == null || child.meta.menu.hidden === false)
    )
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
        children: child.children ? createMenu(child.children, fullPath) : [],
        redirect: child.redirect
      }
    })
}

onMounted(() => {
  const contentsRoute = router.options.routes.find((r) => r.name === 'home')
  if (contentsRoute && contentsRoute.children) {
    menu.value = createMenu(contentsRoute.children as RouteRecordRaw[])
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
