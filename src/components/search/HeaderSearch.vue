<template>
  <el-select
    v-model="value"
    style="width: 240px"
    filterable
    remote
    :remote-method="remoteMethod"
    clearable
    :options="options"
    :loading="loading"
    placeholder="Search"
    @change="handleChange"
  >
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { useRouter, type RouteRecordRaw } from 'vue-router'

import contentsRoute from '@/views/contents/route'

const contentsRouteChildren = contentsRoute.children as RouteRecordRaw[]

const router = useRouter()

const handleChange = (value: string) => {
  router.push('/' + value)
}

const routeList = () => {
  const list: ListItem[] = []
  const createList = (children: RouteRecordRaw[], parent?: ListItem) => {
    children
      .filter((child): child is RouteRecordRaw => !!child.meta?.menu)
      .forEach((child) => {
        if (!child.meta?.menu) return
        const fullPath = parent?.value ? parent?.value + '/' + child.path : child.path
        const label = `${parent?.label ? parent?.label + ' > ' : ''}${child.meta.menu.title}`
        list.push({ value: fullPath, label })
        if (child.children) {
          createList(child.children, { value: fullPath, label })
        }
      })
  }

  createList(contentsRouteChildren)

  return list
}
const list = routeList()

interface ListItem {
  value: string
  label: string
}

const value = ref([])
const options = ref<ListItem[]>([])
const loading = ref(false)

const remoteMethod = (query: string) => {
  if (query !== '') {
    loading.value = true
    setTimeout(() => {
      loading.value = false

      options.value = list.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      })

      console.log('option', options.value)
    }, 200)
  } else {
    options.value = []
  }
}
</script>
