import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1a2311bc = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _c5c53ca2 = () => interopDefault(import('..\\pages\\articles\\_slug.vue' /* webpackChunkName: "pages/articles/_slug" */))
const _bddfac20 = () => interopDefault(import('..\\pages\\categories\\_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _cafc3558 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _ce6977e8 = () => interopDefault(import('..\\pages\\_slug.vue' /* webpackChunkName: "pages/_slug" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _1a2311bc,
    name: "contact"
  }, {
    path: "/articles/:slug?",
    component: _c5c53ca2,
    name: "articles-slug"
  }, {
    path: "/categories/:slug?",
    component: _bddfac20,
    name: "categories-slug"
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

export function createRouter () {
  return new Router(routerOptions)
}
