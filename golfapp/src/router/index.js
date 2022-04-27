import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ContactView from '../views/ContactView.vue'
import ForgotView from '../views/ForgotView.vue'
import TeeTimes from '../views/TeeTimeView.vue'
import EnterForgotView from '../views/EnterForgotView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/contactus',
    name: 'contactus',
    component: ContactView
  },
  {
    path: '/forgot',
    name: 'ForgotPass',
    component: ForgotView
  },
  {
    path: '/teetime',
    name: 'bookteetime',
    component: TeeTimes
  },
  {
    path: '/enterForgot',
    name: 'EnterForgot',
    component: EnterForgotView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
