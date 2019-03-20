<template>
  <div>
    <png-header :sightName='sightName' :bannerImg='bannerImg' :gallaryImgs='gallaryImgs'></png-header>
    <png-banner :categoryList='categoryList'></png-banner>
  </div>
</template>

<script>
import PngHeader from './components/Header'
import PngBanner from './components/Banner'
import axios from 'axios'

export default {
  name: 'Png',
  components: {
    PngHeader,
    PngBanner
  },
  data: function () {
    return {
      sightName: '',
      bannerImg: '',
      categoryList: [],
      gallaryImgs: []
    }
  },
  methods: {
    handleSend: function () {
      axios.get('/api/detail.json')
        .then(this.handleResult)
    },
    handleResult: function (res) {
      let ndata = res.data.data
      let nret = res.data.ret
      if (nret || ndata) {
        this.sightName = ndata.sightName
        this.bannerImg = ndata.bannerImg
        this.categoryList = ndata.categoryList
        this.gallaryImgs = ndata.gallaryImgs
      }
    }
  },
  mounted: function () {
    this.handleSend()
  }
}
</script>

<style>
</style>
