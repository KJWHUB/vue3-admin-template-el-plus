<script setup lang="ts">
import type { PropType } from 'vue'

import { Mod, ModStateObj } from '@/utils/mod'

const { REGISTER, MODIFY } = ModStateObj

const props = defineProps({
  mod: {
    type: Object as PropType<Mod>,
    required: true
  }
})
const emit = defineEmits(['handleClick'])
</script>

<template>
  <el-card>
    <template #header>
      <div style="display: flex; justify-content: space-between">
        <el-text type="primary" class="page-title">
          {{ $route.name }}
        </el-text>
        <el-space>
          <el-button
            v-if="props.mod.isRegister"
            type="primary"
            @click="emit('handleClick', REGISTER)"
          >
            Edit
          </el-button>
          <el-button v-if="props.mod.isModify" type="warning" @click="emit('handleClick', MODIFY)">
            Update
          </el-button>
        </el-space>
      </div>
    </template>

    <slot> </slot>
  </el-card>
</template>

<style scoped>
.page-title {
  font-size: 2rem;
  font-weight: bold;
}
</style>
