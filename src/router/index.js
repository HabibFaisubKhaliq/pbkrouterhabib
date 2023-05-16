import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Aplikasiku from '../views/Aplikasi.vue'
import NotFound from '../views/404NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aplikasi',
      name: 'aplikasi',
      component: Aplikasiku
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: NotFound
    }
  ]
})

export default router
