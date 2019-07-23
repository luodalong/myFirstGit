<template>
  <div id="wrapper">
    <swiper :options="swiperOption" v-if='showImg'>
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data: function () {
    return {
        swiperOption: { //轮播插件，参数在swiper官网查看
            pagination: '.swiper-pagination',
            // scrollbar: '.swiper-scrollbar',
             prevButton: '.swiper-button-prev',
             nextButton: '.swiper-button-next',
            // clickable:true,
            loop: true,
            touchRatio : 0.5
        }
    }
  },
  computed: {
    showImg: function () {
      if (this.swiperList.length) return true
    }
  }
}
</script>

<style lang='stylus' scoped>
#wrapper >>> .swiper-pagination-bullet {//改变优先级
  background: #fff;
}
#wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.2%;
  background: #ccc;
}
.swiper-img {
  width: 100%;
}
</style>
