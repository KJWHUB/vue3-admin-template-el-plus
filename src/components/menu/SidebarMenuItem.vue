<script setup lang="ts">
import { resolveComponent, type PropType } from 'vue'

import { Menu } from '@element-plus/icons-vue'

import type { RouteMenuRequireRaw } from './SidebarMenu.vue'

const props = defineProps({
  route: {
    type: Object as PropType<RouteMenuRequireRaw>,
    required: true
  }
})

const defaultIcon = Menu

const { icon, title, fullPath: index } = props.route.meta.menu
const isSubmenu = props.route.children?.length

// 동적 컴포넌트의 존재 여부를 확인하고, 존재하지 않는 경우 디폴트 컴포넌트를 반환하는 함수
const resolveDynamicComponent = (componentName: string) => {
  try {
    if (!componentName) throw new Error('Component name is empty')

    const resolve = resolveComponent(componentName)

    if (typeof resolve === 'string') throw new Error('Component not found')

    return resolve
  } catch (error) {
    return defaultIcon
  }
}

const dynamicIcon = resolveDynamicComponent(icon || '')
</script>

<template>
  <el-sub-menu v-if="isSubmenu" :index="index">
    <template #title>
      <el-icon>
        <component :is="dynamicIcon" />
      </el-icon>
      <span>{{ title }}</span>
    </template>
    <SidebarMenuItem v-for="item in route.children" :key="item.path" :route="item" />
  </el-sub-menu>
  <el-menu-item v-else :index="index" :route="props.route">
    <el-icon>
      <component :is="dynamicIcon" />
    </el-icon>
    <span>{{ title }}</span>
  </el-menu-item>
</template>

<style scoped></style>
