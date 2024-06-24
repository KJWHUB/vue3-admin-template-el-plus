<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'

type AvatarDropdownItemId = 'MYINFO' | 'LOGOUT'
type AvatarDropdownItem = {
  id: AvatarDropdownItemId
  title: string
  icon?: string
}

const items: AvatarDropdownItem[] = [
  { id: 'MYINFO', title: 'Profile', icon: 'MaterialSymbolsPersonSearch' },
  { id: 'LOGOUT', title: 'Logout', icon: 'UimSignout' }
]

const { logout } = useAuth()

const command = (command: string) => {
  switch (command) {
    case 'MYINFO':
      console.log('MYINFO')
      break
    case 'LOGOUT':
      logout()
      break
    default:
      break
  }
}
</script>

<template>
  <el-dropdown @command="command">
    <el-avatar> user </el-avatar>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in items" :key="item.id" :command="item.id">
          <el-icon v-if="item.icon">
            <component :is="item.icon" />
          </el-icon>
          {{ item.title }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped></style>
