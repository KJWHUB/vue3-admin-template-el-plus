import { createI18n } from 'vue-i18n'

import { ko, en } from './locales'

export const i18n = createI18n({
  legacy: false,
  locale: 'ko',
  fallbackLocale: 'ko',
  messages: {
    ko,
    en
  }
})
