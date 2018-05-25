import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Search from '@/components/Search'
import Search2 from '@/components/Search2'
import Profile from '@/components/Profile'
import Decade20s from '@/components/Decade20s'
import Decade30s from '@/components/Decade30s'
import Decade40s from '@/components/Decade40s'
import Decade50s from '@/components/Decade50s'
import Decade60s from '@/components/Decade60s'
import Decade70s from '@/components/Decade70s'
import Decade80s from '@/components/Decade80s'
import Decade90s from '@/components/Decade90s'
import Decade00s from '@/components/Decade00s'
import Decade010s from '@/components/Decade010s'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/lmao',
      name: 'Search2',
      component: Search2
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/decade/20s',
      name: 'Decade20s',
      component: Decade20s
    },
    {
      path: '/decade/30s',
      name: 'Decade30s',
      component: Decade30s
    },
    {
      path: '/decade/40s',
      name: 'Decade40s',
      component: Decade40s
    },
    {
      path: '/decade/50s',
      name: 'Decade50s',
      component: Decade50s
    },
    {
      path: '/decade/60s',
      name: 'Decade60s',
      component: Decade60s
    },
    {
      path: '/decade/70s',
      name: 'Decade70s',
      component: Decade70s
    },
    {
      path: '/decade/80s',
      name: 'Decade80s',
      component: Decade80s
    },
    {
      path: '/decade/90s',
      name: 'Decade90s',
      component: Decade90s
    },
    {
      path: '/decade/00s',
      name: 'Decade00s',
      component: Decade00s
    },
    {
      path: '/decade/010s',
      name: 'Decade010s',
      component: Decade010s
    }
  ]
})
