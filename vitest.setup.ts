// vitest.setup.ts

import { config } from '@vue/test-utils'

import { router, store, elementPlus, i18n, customComponentsUseagePlugin } from './src/app/providers'

// Vue Test Utils 구성
config.global.plugins = [router, store, elementPlus, i18n, customComponentsUseagePlugin]
