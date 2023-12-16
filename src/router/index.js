import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexView from '../views/IndexView.vue'
import RegisterView from '../views/RegisterView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
