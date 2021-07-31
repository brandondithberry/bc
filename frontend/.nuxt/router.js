import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _62ac412b = () => interopDefault(import('../pages/articles/index.vue' /* webpackChunkName: "pages/articles/index" */))
const _5d9813f6 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _0ecce566 = () => interopDefault(import('../pages/resources/index.vue' /* webpackChunkName: "pages/resources/index" */))
const _60f59fe3 = () => interopDefault(import('../pages/articles/_slug.vue' /* webpackChunkName: "pages/articles/_slug" */))
const _123a27f6 = () => interopDefault(import('../pages/resources/_slug.vue' /* webpackChunkName: "pages/resources/_slug" */))
const _56607e12 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _59cdc0a2 = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/articles",
    component: _62ac412b,
    name: "articles"
  }, {
    path: "/contact",
    component: _5d9813f6,
    name: "contact"
  }, {
    path: "/resources",
    component: _0ecce566,
    name: "resources"
  }, {
    path: "/articles/:slug",
    component: _60f59fe3,
    name: "articles-slug"
  }, {
    path: "/resources/:slug",
    component: _123a27f6,
    name: "resources-slug"
  }, {
    path: "/",
    component: _56607e12,
    name: "index"
  }, {
    path: "/:slug",
    component: _59cdc0a2,
    name: "slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
