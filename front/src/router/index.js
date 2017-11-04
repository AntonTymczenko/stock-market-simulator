import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Portfolio from '@/components/portfolio/'
import Stocks from '@/components/stocks/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: Stocks
    }

  ],
  linkActiveClass: "active"
})
