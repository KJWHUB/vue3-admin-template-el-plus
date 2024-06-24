<script setup lang="ts">
import { ref, watchEffect } from 'vue'

import { useRoute } from 'vue-router'

import LanguageSelector from '@/components/language-selector/LanguageSelector.vue'
import contentsRoute from '@/views/contents/route'

const route = useRoute()

const home = ref({
  icon: 'pi pi-home',
  route: '/'
})
const items = ref([])

// watchEffect(() => {
//   if (route.path) {
//     creacteBreadcrumb()
//   }
// })

// function creacteBreadcrumb() {
//   const paths = route.path.split('/').filter((path) => path)
//   const list = paths.map((path, index) => {
//     const findItem = () => {
//       for (const item of contentsRoute.children ?? []) {
//         if (item.path === path) {
//           return item
//         }
//         if (item.children) {
//           const find = item.children.find((child) => child.path === path)
//           if (find) {
//             return find
//           }
//         }
//       }
//     }

//     const item = findItem()

//     return {
//       label: item?.meta?.menu?.title || '',
//       // icon: item?.meta?.menu?.icon || '',
//       route: `/${paths.slice(0, index + 1).join('/')}`
//     }
//   })

//   items.value = list
// }
</script>

<template>
  <el-header>
    <!-- breadcrumb -->
    <!-- lang -->
    <LanguageSelector />
  </el-header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
</style>
