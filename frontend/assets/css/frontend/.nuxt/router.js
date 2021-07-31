import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _66be73f8 = () => interopDefault(import('..\\pages\\articles\\index.vue' /* webpackChunkName: "pages/articles/index" */))
const _34930dba = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _6b3b74cc = () => interopDefault(import('..\\pages\\resources\\index.vue' /* webpackChunkName: "pages/resources/index" */))
const _6507d2b0 = () => interopDefault(import('..\\pages\\articles\\_slug.vue' /* webpackChunkName: "pages/articles/_slug" */))
const _6ea8b75c = () => interopDefault(import('..\\pages\\resources\\_slug.vue' /* webpackChunkName: "pages/resources/_slug" */))
const _0fb47395 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _0dfdd24d = () => interopDefault(import('..\\pages\\_slug.vue' /* webpackChunkName: "pages/_slug" */))

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
    component: _66be73f8,
    name: "articles"
  }, {
    path: "/contact",
    component: _34930dba,
    name: "contact"
  }, {
    path: "/resources",
    component: _6b3b74cc,
    name: "resources"
  }, {
    path: "/articles/:slug",
    component: _6507d2b0,
    name: "articles-slug"
  }, {
    path: "/resources/:slug",
    component: _6ea8b75c,
    name: "resources-slug"
  }, {
    path: "/",
    component: _0fb47395,
    name: "index"
  }, {
    path: "/:slug",
    component: _0dfdd24d,
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
