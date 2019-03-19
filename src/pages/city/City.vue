<template>
  <div>
    <city-header :cityHea="cities"></city-header>
    <city-list :hotCity='hotCities' :cities="cities"></city-list>
    <city-alp :cityAlp="cities"></city-alp>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CityList from './components/List'
import CityAlp from './components/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  data: function () {
    return {
      hotCities: [],
      cities: {}
    }
  },
  components: {
    CityHeader,
    CityList,
    CityAlp
  },
  methods: {
    handleSend: function () {
      axios.get('/api/city.json')
        .then(this.handleResult)
    },
    handleResult: function (res) {
      const ndata = res.data.data
      const nret = res.data.ret
      if (nret && ndata) {
        this.hotCities = ndata.hotCities
        this.cities = ndata.cities
        console.log(this.cities)
      }
    }
  },
  mounted: function () {
    this.handleSend()
  }
}
</script>

<style lang='stylus' scoped>
</style>
