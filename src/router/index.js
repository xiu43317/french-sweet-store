import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/user/HomeLayout.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('../views/user/IntroPage.vue')
      },
      {
        path: 'introduction',
        name: 'introduction',
        component: () => import('../views/user/IntroPage.vue')
      },
      {
        path: 'aboutus',
        name: 'aboutus',
        component: () => import('../views/user/AboutUs.vue')
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('../views/user/NewsPage.vue')
      },
      {
        path: 'onenews/:id/num/:num',
        name: 'onenews',
        component: () => import('../views/user/NewsOnePage.vue')
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/user/ProductsPage.vue')
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/user/ProductPage.vue')
      },
      {
        path: 'notice',
        name: 'notice',
        component: () => import('../views/user/NoticePage.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../views/user/SearchOrderPage.vue')
      },
      {
        path: 'check',
        name: 'check',
        component: () => import('../views/user/CheckPageLayout.vue')
      },
      {
        path: 'payment',
        name: 'payment',
        component: () => import('../views/user/PaymentPage.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    component: () => import('../views/AdminLogin.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
