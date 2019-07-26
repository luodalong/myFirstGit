<template>
  <div>
    <home-header :city='city'></home-header>
    <div ref = 'list2' class = 'wrapper'>
        <div class = "content">
            <home-swiper :swiperList='swiperList'></home-swiper>
            <home-icons :iconList='iconList'></home-icons>
            <home-recommend :recommendList='recommendList'></home-recommend>
            <home-play :weekendList='weekendList'></home-play>
            <home-zoom></home-zoom>
        </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomePlay from './components/Play'
import HomeZoom from './components/Zoom'
import axios from 'axios'       //引入axios，用于ajax请求数据
import {mapState} from 'vuex'  //映射将store的数据映射到该组件的computed属性中，通过this.调用
import BScroll from 'better-scroll'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomePlay,
    HomeZoom
  },
  data: function () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastcity: ''
    }
  },
  computed: {
    ...mapState(['city']) //映射，公共数据city被映射到父组件中的computed属性，这个组件可以直接调用this.city
  },
  methods: {
    getHomeInfo: function () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc: function (res) {
      const nret = res.data.ret
      const ndata = res.data.data
      if (nret && ndata) {
        this.swiperList = ndata.swiperList
        this.iconList = ndata.iconList
        this.recommendList = ndata.recommendList
        this.weekendList = ndata.weekendList
      }
    }
  },
  mounted: function () {
    this.lastcity = this.city
    this.getHomeInfo()
    // this.scroll = new BScroll(this.$refs.list2)
    let wrapper = document.querySelector('.wrapper')
    // let scroll = new BScroll(wrapper)
    console.log(this.$store.state.city,this.city)
  },
  activated: function () { // 不受keep-alive影响，每次回到这个页面都会触发
    if (this.lastcity !== this.city) {
      this.lastcity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
