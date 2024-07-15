import { useI18n } from 'vue-i18n'

// menu title translation
export const translateMenuTitle = (menu: string): string => {
  const { t } = useI18n()
  return t(`menuTitle.${menu}`)
}
