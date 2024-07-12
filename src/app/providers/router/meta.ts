export type Menu = {
  title: string
  icon?: string
  hidden?: boolean
}

declare module 'vue-router' {
  interface RouteMeta {
    menu?: Menu
  }
}
