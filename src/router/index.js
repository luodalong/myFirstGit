import Vue from 'vue' //引入vue
import Router from 'vue-router' //路由
// 引入组件
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Png from '@/pages/png/Png'

Vue.use(Router) //安装路由

export default new Router({
    routes: [{
        path: '/',
        name: 'helloworld',
        component: Home //刚开始访问根目录，
    }, {
        path: '/png',
        name: 'Png',
        component: Png
    }, {
        path: '/city',
        name: 'City',
        component: City
    }],
    scrollBehavior: function(to, from, savedPosition) { //解决回到首页没有跳到顶部问题
        return {
            x: 0,
            y: 0
        }
    }
})
