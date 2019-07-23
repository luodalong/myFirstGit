<template>
  <div>
    <home-header :city='city'></home-header>
    <home-swiper :swiperList='swiperList'></home-swiper>
    <home-icons :iconList='iconList'></home-icons>
    <home-recommend :recommendList='recommendList'></home-recommend>
    <home-play :weekendList='weekendList'></home-play>
    <home-zoom></home-zoom>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomePlay from './components/Play'
import HomeZoom from './components/Zoom'
import axios from 'axios'
import {mapState} from 'vuex'

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
    ...mapState(['city'])
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
  },
  activated: function () {
    if (this.lastcity !== this.city) {
      this.lastcity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
