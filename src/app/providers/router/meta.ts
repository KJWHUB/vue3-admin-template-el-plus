/**
 * 메뉴 정보.
 */
export type Menu = {
  title: string
  icon?: string
  hidden?: boolean
}

/**
 * 인증이 필요한지 여부.
 */
export type RequiresAuth = boolean

/**
 * 권한 정보.
 */
export type Permission = 'MASTER' | 'GROUP1' | 'GROUP2' | 'GROUP3'

declare module 'vue-router' {
  interface RouteMeta {
    menu?: Menu
    requiresAuth?: RequiresAuth
    permissions?: Permission[]
  }
}
