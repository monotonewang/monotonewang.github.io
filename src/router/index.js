import { createWebHistory, createRouter, createWebHashHistory } from 'vue-router'

// 公共路由
export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/homePage/index.vue'),
    hidden: true
  },
  {
    path: '/app',
    component: () => import('@/App.vue'),
    hidden: true
  },
  {
    path: '/home',
    component: () => import('@/views/homePage/index.vue'),
    hidden: true
  },
  {
    path: '/selfTest',
    component: () => import('@/views/selfTest/index.vue'),
    hidden: true
  },
  {
    path: '/bookmark',
    component: () => import('@/views/bookmark/index.vue'),
    hidden: true
  },
 {
    path: '/car2023',
    component: () => import('@/views/car2023/index.vue'),
    hidden: true
  }, {
    path: '/ref',
    component: () => import('@/views/ref/index.vue'),
    hidden: true
  }, {
    path: '/computed_watch',
    component: () => import('@/views/computed_watch/index.vue'),
    hidden: true
  }, {
    path: '/slot',
    component: () => import('@/views/slot/index.vue'),
    hidden: true
  },
]

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});

export default router;
