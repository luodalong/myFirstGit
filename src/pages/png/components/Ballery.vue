<template>
  <div id='wrapper1' @click='handleShow'>
    <div class='ballery'>
      <swiper :options='swiperOptions'>
        <swiper-slide v-for='(item, index) of gallaryImgs' :key='index'>
          <img class='b-img' :src='item' alt="">
        </swiper-slide>
        <div class='swiper-pagination' slot='pagination'></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PngBallery',
  props: {
    gallaryImgs: Array
  },
  data: function () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        loop: true
      }
    }
  },
  methods: {
    handleShow: function () {
      this.$emit('closeBallery')
    }
  }
}
</script>

<style lang='stylus' scoped>
  #wrapper1{
    display:flex
    flex-direction:column
    justify-content:center
    position:fixed
    top:0
    left:0
    right:0
    bottom:0
    z-index:99
    background:#000
  }
  .ballery{
    width:100%
    height:0
    padding-bottom:100%
  }
  .b-img{
    width:100%
  }
  .swiper-pagination{
    color:#fff
  }
</style>
