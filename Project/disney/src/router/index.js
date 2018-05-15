import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Profile from '@/components/Profile'
import Decade from '@/components/Decade'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
