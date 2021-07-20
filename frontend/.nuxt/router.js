import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0ae07b2b = () => interopDefault(import('..\\pages\\articles.vue' /* webpackChunkName: "pages/articles" */))
const _c5c53ca2 = () => interopDefault(import('..\\pages\\articles\\_slug.vue' /* webpackChunkName: "pages/articles/_slug" */))
const _1a2311bc = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _46c31427 = () => interopDefault(import('..\\pages\\resources.vue' /* webpackChunkName: "pages/resources" */))
const _d970159a = () => interopDefault(import('..\\pages\\resources\\_slug.vue' /* webpackChunkName: "pages/resources/_slug" */))
const _cafc3558 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _ce6977e8 = () => interopDefault(import('..\\pages\\_slug.vue' /* webpackChunkName: "pages/_slug" */))

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
    component: _0ae07b2b,
    name: "articles",
    children: [{
      path: ":slug?",
      component: _c5c53ca2,
      name: "articles-slug"
    }]
  }, {
    path: "/contact",
    component: _1a2311bc,
    name: "contact"
  }, {
    path: "/resources",
    component: _46c31427,
    name: "resources",
    children: [{
      path: ":slug?",
      component: _d970159a,
      name: "resources-slug"
    }]
  }, {
    path: "/",
    component: _cafc3558,
    name: "index"
  }, {
    path: "/:slug",
    component: _ce6977e8,
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
