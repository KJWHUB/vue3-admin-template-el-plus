<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useLayoutStore } from '@/shared/stores'

import ContentsHeader from './header/index.vue'
import ContentsSidebar from './sidebar/index.vue'

const layoutStore = useLayoutStore()
const { sidebarWidth } = storeToRefs(layoutStore)
</script>

<template>
  <div class="contents-layout">
    <el-container>
      <el-aside :width="sidebarWidth + 'px'" style="min-height: 100vh; transition: width 0.3s">
        <ContentsSidebar />
      </el-aside>
      <el-container>
        <el-header height="80px" style="padding: 0">
          <ContentsHeader />
        </el-header>
        <el-main>
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.contents-layout {
  background: #fff;
}
</style>
