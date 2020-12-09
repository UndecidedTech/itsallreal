import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from '../views/loginScreen'
import mapScreen from '../views/mapScreen'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: loginPage
  },
  {
    path: '/',
    name: 'Map',
    component: mapScreen
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
