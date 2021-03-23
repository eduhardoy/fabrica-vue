import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Articulos from '../views/Articulos.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/articulos',
    name: 'Articulos',
    component: Articulos
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
