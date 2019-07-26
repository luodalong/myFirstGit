// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


// 入口文件 
import Vue from 'vue' //引入脚手架的vue
import App from './App' //引入根组件
import router from './router' //引入路由
import fastClick from 'fastclick' //解决点击延迟问题的插件
import VueAwesomeSwiper from 'vue-awesome-swiper' //全局引入轮播插件
import store from './store' //引入vuex数据框架
import ElementUI from 'element-ui' //引入饿了么样式库

import 'element-ui/lib/theme-chalk/index.css' //样式库
import 'styles/border.css' //两个css样式
import 'styles/reset.css'
import 'styles/iconfont.css' //iconfont样式库 
import 'swiper/dist/css/swiper.css' //引入轮播动画样式

Vue.config.productionTip = false //?????????????????????????????????????????????
fastClick.attach(document.body) //fastclick用于全局
Vue.use(VueAwesomeSwiper) //vue安装轮播图
Vue.use(ElementUI) //vue安装饿了么样式库

/* eslint-disable no-new */
new Vue({
    el: '#app', //绑定app这个盒子 
    router, //路由
    store, //vuex
    components: { App }, //组件
    template: '<App/>', //模板
    render: h => h(App) //？？？？？？？？？？？？
})
