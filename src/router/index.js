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
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token
  let isAuthenticated = store.state.isAuthenticated

  // 比較 localStorage 和 store 中的 token 是否一樣
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  const pathsWithoutAuthentication = [
    'home', 'restaurant', 'signin', 'signup', 'join-us'
  ]
  const pathsWithAuthentication = ['signin', 'signup']

  if (!isAuthenticated 
      && !pathsWithoutAuthentication.includes(to.name)) {
    next('/home')
    return
  } 

  if (isAuthenticated 
    && pathsWithAuthentication.includes(to.name)) {
      next('/')
      return
    }
  next()
})

export default router
