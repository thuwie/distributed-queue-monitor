import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App'
import Statistic from '@/components/Statistic'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/statistic',
      name: 'Statistic',
      component: Statistic
    }
  ]
})
