<script setup lang="ts">
import { type PropType } from 'vue'

import ItemContent from './ItemContent.vue'

import type { RouteMenuRequireRaw } from './SidebarMenu.vue'

const props = defineProps({
  route: {
    type: Object as PropType<RouteMenuRequireRaw>,
    required: true
  }
})

const { fullPath: index } = props.route.meta.menu
const isSubmenu = props.route.children?.length
</script>

<template>
  <el-sub-menu v-if="isSubmenu" :index="index">
    <template #title>
      <ItemContent :route="props.route" />
    </template>
    <SidebarMenuItem v-for="item in route.children" :key="item.path" :route="item" />
  </el-sub-menu>
  <el-menu-item v-else :index="index" :route="props.route">
    <ItemContent :route="props.route" />
  </el-menu-item>
</template>

<style scoped></style>
