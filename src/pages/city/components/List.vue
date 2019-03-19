<template>
  <div id='listbody'>
    <div>
      <div class="list">
        <h3 class='list-top'>当前城市</h3>
        <ul class='list-content'>
          <li class='hot-city nowcity'>{{nowCity}}</li>
        </ul>
      </div>
      <div class="list">
        <h3 class='list-top'>热门城市</h3>
        <ul class='list-content'>
          <li class='hot-city'
              v-for="item of hotCity"
              :key='item.id'
              @click="changeCity(item.name)"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="list" v-for="(city, key) of cities" :key="key" ref="key">
        <h3 class='list-top'>{{key}}</h3>
        <ul class='list-content'>
          <li class='select-city'
              v-for="item of city"
              :key="item.id"
              @click="changeCity(item.name)"
          >{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList',
  props: {
    hotCity: Array,
    cities: Object
  },
  data: function () {
    return {
      nowCity: '贵阳'
    }
  },
  methods: {
    changeCity: function (res) {
      this.nowCity = res
      this.$router.push('/')
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
  .list .list-top{
    width:100%
    padding:.1rem .2rem
    color:#fff
    font-weight:bold
    background:#d8d8d8
  }
  .list .list-content{
    width:100%
    padding:0.1rem .5rem .1rem 0
  }
   .list .list-content:after{
    content:''
    clear:left
    display:block
  }
  .list .list-content .hot-city{
    width:25%
    float:left
    margin:0.1rem .2rem
    padding:.1rem 0
    text-align:center
    border:.02rem solid #ccc
    border-radius:.06rem
  }
  .list .list-content .nowcity{
    border-color:$bgColor
  }
  .list .list-content .select-city{
    padding:.2rem
    border-bottom:.02rem solid #cce7e7e7
  }
</style>
