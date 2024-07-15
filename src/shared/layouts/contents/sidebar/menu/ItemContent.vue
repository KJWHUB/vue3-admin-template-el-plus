<script setup lang="ts">
import { resolveComponent, type PropType } from 'vue'

import { SemiSelect } from '@element-plus/icons-vue'

import { translateMenuTitle } from '@/shared/utils'

import type { RouteMenuRequireRaw } from './SidebarMenu.vue'

const props = defineProps({
  route: {
    type: Object as PropType<RouteMenuRequireRaw>,
    required: true
  }
})

const defaultIcon = SemiSelect
const { icon, title } = props.route.meta.menu

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
  <el-icon>
    <component :is="dynamicIcon" />
  </el-icon>
  <span>{{ translateMenuTitle(title) }}</span>
</template>

<style scoped></style>
