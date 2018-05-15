import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import Decade from '@/components/Decade'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/',
      name: 'Decade',
      component: Decade
    }
  ]
})