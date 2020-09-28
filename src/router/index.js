import Vue from 'vue'
import VueRouter from 'vue-router'
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
    path: '/reservation',
    name: 'reservation',
    component: () => import('../views/Reservation')
  },
  {
    path: '/join',
    name: 'join-us',
    component: () => import('../views/JoinUs')
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
  routes
})

export default router
