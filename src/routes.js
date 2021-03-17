import Login from './components/Login'
import Products from './components/Products'
import ProductLayout from './components/ProductLayout'

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Login
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/product',
    name: 'product', 
    component: ProductLayout,
    children: [
      {
        path: '',
        component: Products,
      }
    ]
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});


export default router

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next({ 
      path: '/login', 
      query: { returnUrl: to.path } 
    });
  }

  next();
})
