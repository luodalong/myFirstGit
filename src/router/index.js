import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Png from '@/pages/png/Png'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'helloworld',
    component: Home
  }, {
    path: '/png',
    name: 'Png',
    component: Png
  }, {
    path: '/city',
    name: 'City',
    component: City
  }],
  scrollBehavior: function (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
