import { ref } from 'vue'

import { useRoute } from 'vue-router'

import { Mod } from '@/utils/mod'

export const useMod = () => {
  const route = useRoute()

  if (!route.meta.modState) throw new Error('Invalid route {route.meta.modState} failed')

  const mod = new Mod(route.meta.modState)

  return {
    mod
  }
}
