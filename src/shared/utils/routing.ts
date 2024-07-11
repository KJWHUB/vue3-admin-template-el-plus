import type { RouteLocation, RouteLocationRaw } from 'vue-router'

export const redirectToFirstChild: (to: RouteLocation) => RouteLocationRaw = (to) => {
  console.log(`redirecting to first child of`, to)
  const lastMatched = to.matched[to.matched.length - 1]
  const firstChild = lastMatched.children?.[0]

  if (!firstChild) {
    console.warn(`No child routes found for ${to.path}`)
    return { path: to.path }
  }

  console.log(`result path: ${to.path}/${firstChild.path}`)

  return { path: `${to.path}/${firstChild.path}` }
}
