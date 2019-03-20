<template>
  <div>
    <div id='wrapper'>
      <img class='w-img' :src="bannerImg" alt="" @click='hanleBallery'>
      <div class='w-describe'>
        <div class='w-d-text'>{{sightName}}</div>
        <div class='w-d-sum'><span class='iconfont'>&#xe632;</span>34</div>
      </div>
      <router-link to='/'>
        <div class='w-back'><span class='iconfont'>&#xe624;</span></div>
      </router-link>
    </div>
    <animation>
      <png-ballery :gallaryImgs='gallaryImgs' v-if='showBallery' @closeBallery='closeThis'></png-ballery>
    </animation>
  </div>
</template>

<script>
import PngBallery from './Ballery'
import Animation from './Animation'
export default {
  name: 'PngHeader',
  components: {
    PngBallery,
    Animation
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data: function () {
    return {
      showBallery: false
    }
  },
  methods: {
    hanleBallery: function () {
      this.showBallery = true
    },
    closeThis: function () {
      this.showBallery = false
    }
  }
}
</script>

<style lang='stylus' scoped>
#wrapper {
  position:relative
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 56%;
  background: #ccc;
}
.w-img {
  width: 100%;
}
.w-describe{
  position:absolute
  bottom:.05rem
  color:#fff
  width:100%
  background:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
}
.w-describe .w-d-text{
  float:left
  padding-left:.2rem
}
.w-describe .w-d-sum{
  float:right
  min-width:1rem
  padding:0 .1rem
  margin-right:.2rem
  font-size:.3rem
  background:rgba(0,0,0,0.6)
  border-radius:.2rem
  text-align:center
}
.w-back{
  position:absolute
  top:.2rem
  left:.2rem
  padding:.3rem
  text-align:center
  color:#fff
  background:rgba(0,0,0,0.7)
  border-radius:50%
}
</style>
