import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/Index'),
    meta: {
      title: '全能花美男'
    }
  },
  {
    path: '/:pathMatch(.*)',
    name:'NotFound',
    component: () => import('@/views/NotFound'),
    meta: {
      title: '404 Page'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
