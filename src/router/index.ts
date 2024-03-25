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
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../components/experince/index.vue')
    }
    ,
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/contact/index.vue')
    }
    ,
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/about/index.vue')
    }
    ,
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../components/projects/index.vue')
    }
  ]
})

export default router
