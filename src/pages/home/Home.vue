<template>
  <div>
    <home-header :city='city'></home-header>
    <home-swiper :swiperList='swiperList'></home-swiper>
    <home-icons :iconList='iconList'></home-icons>
    <home-recommend :recommendList='recommendList'></home-recommend>
    <home-play :weekendList='weekendList'></home-play>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomePlay from './components/Play'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomePlay
  },
  data: function () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo: function () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc: function (res) {
      const nret = res.data.ret
      const ndata = res.data.data
      if (nret && ndata) {
        this.city = ndata.city
        this.swiperList = ndata.swiperList
        this.iconList = ndata.iconList
        this.recommendList = ndata.recommendList
        this.weekendList = ndata.weekendList
      }
    }
  },
  mounted: function () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
