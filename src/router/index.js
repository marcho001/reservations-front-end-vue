import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound'
import SignIn from '../views/SignIn'

Vue.use(VueRouter)

const routes = [
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
