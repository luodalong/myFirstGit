<template>
  <div id='wrapper'>
    <div>
      <div id="header">
        <div class="header-left">
          <router-link to="/">
            <span class='iconfont'>&#xe624;</span>
          </router-link>
        </div>
        <div class='header-center'>
          <p class='header-text'>城市选择</p>
        </div>
      </div>
      <div id="search">
        <input v-model='searchValue' type="text" class="search-input" name="" placeholder="输入拼音或中文">
      </div>
      <div ref='result' class = 'wrapper2'>
        <ul class='s-result content'>
          <li @click="changeCity(item)" class='s-city' v-for='(item, index) of searchResult' :key='index'>{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// import BScroll from '@better-scroll/core'
export default {
  name: 'CityHeader',
  props: {
    cityHea: Object
  },
  data: function () {
    return {
      searchValue: '',
      timer: null,
      searchResult: []
    }
  },
  methods: {
    changeCity: function (res) {
        this.$store.dispatch('changethis',res)
      // this.$store.dispatch('changethis', res)
    //   this.$store.commit('changethat', res)
    //   this.$router.push('/') //路由跳转到首页
    }
  },
  activated: function () {
    this.searchValue = ''
  },
  watch: {
    searchValue: function () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (this.searchValue.length === 0) {
        this.searchResult = []
        return
      }
      this.timer = setTimeout(() => {
        this.searchResult = []
        for (let i in this.cityHea) {
          this.cityHea[i].forEach((value) => {
            if (value.spell.indexOf(this.searchValue) > -1 || value.name.indexOf(this.searchValue) > -1) {
              this.searchResult.push(value.name)
            }
          })
        }
      }, 30)
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
#header{
  display:flex
  height:.86rem
  color:#fff
  line-height :.86rem
  background:$bgColor
}
#header .header-left{
  float:left
  width:.74rem
  text-align:center
}
#header .header-center{
  flex:1
  text-align:center
}
#header .header-center .header-text{
  display:inline
  color:$bgColor
  padding:.1rem .3rem
  font-weight:bold
  background:#fff
  border-radius:.2rem
}
#search{
  display:flex
  height:.7rem
  color:#fff
  line-height :.7rem
  background:$bgColor
}
#search .search-input{
  box-sizing:border-box//转为IE标准
  height 0.6rem
  width:100%
  margin:0 .2rem .1rem .2rem
  color:#666
  border-radius:.05rem
  text-align:center
}
.s-result .s-city{
  padding 0.2rem
  color:#fff
  background:#ccc
  border-bottom:.02rem solid #fff
}
.iconfont{
  color:#fff
}
</style>
