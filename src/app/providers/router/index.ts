import { createRouter, createWebHistory } from 'vue-router'

import { routes } from '@/pages'

import { authNavigationGuard } from './auth-navigation-guard'

import './meta'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(authNavigationGuard)
