import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './theme/Home.vue'
import Opportunities from './theme/Opportunities.vue'
import Login from './theme/Login.vue'
import NotFound from './theme/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/opportunities/:status', name: 'opportunities', component: Opportunities },
    { path: '/', redirect: '/home' },
    { path: '*', component: NotFound }
  ]
})

export default router
