import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/test'
import Heads from '@/components/heads'
import Home from '../App'
import Channel from '@/components/channel'
import List from '@/components/article'
import Userlist from '@/components/userlist'
import Login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Heads,
      children: [{
        path: '/list',
        name: 'list',
        component: List
      },
      {
        path: '/channel',
        name: 'channel',
        component: Channel
      },
      {
        path: '/test',
        name: 'test',
        component: Test
      },
      {
        path: '/userlist',
        name: 'userlist',
        component: Userlist
      }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
