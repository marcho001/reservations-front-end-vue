import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import NotFound from '../views/NotFound'
import SignIn from '../views/SignIn'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home')
  },
  {
    path: '/restaurant/:id',
    name: 'restaurant',
    component: () => import('../views/Restaurant')
  },
  {
    path: '/reservation/:id',
    name: 'reservation',
    component: () => import('../views/Reservation')
  },
  {
    path: '/join',
    name: 'join-us',
    component: () => import('../views/JoinUs')
  },
  {
    path: '/member/:id/:name',
    name: 'member',
    component: () => import('../views/Member')
  },
  {
    path: '/business/:id/:name',
    name: 'business',
    component: () => import('../views/BusinessCenter')
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignUp')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

router.beforeEach(async (to, from , next) => {
  // 取出token
  const token = localStorage.getItem('token')
  // 預設未驗證
  let isAuthenticated = false

  // 有token 才驗證
  if (token) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  if (!isAuthenticated 
      && to.name !== 'home' 
      && to.name !== 'restaurant'
      && to.name !== 'signin'
      && to.name !== 'signup') {
    next('/home')
    return
  }
  
  next()
})

export default router
