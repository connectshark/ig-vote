import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/auth.vue')
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('../views/me.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/delete',
      name: 'delete',
      component: () => import('../views/delete.vue')
    },
    {
      path: '/cancel',
      name: 'cancel',
      component: () => import('../views/cancel.vue')
    }
  ]
})

export default router
