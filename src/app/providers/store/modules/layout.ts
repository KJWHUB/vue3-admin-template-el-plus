import { ref } from 'vue'

import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', () => {
  const isSidebarFold = ref(false)
  const sidebarWidth = ref(200)

  const toggleSidebarFold = () => {
    isSidebarFold.value = !isSidebarFold.value

    if (isSidebarFold.value) {
      sidebarWidth.value = 70
    } else {
      sidebarWidth.value = 200
    }
  }

  return { isSidebarFold, sidebarWidth, toggleSidebarFold }
})
