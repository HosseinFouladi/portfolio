import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'app',
      component: () => import('../App.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../components/home/index.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../components/services/index.vue')
    }
  ]
})

export default router
