<template>
  <div id="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of urlList" :key="item.id">
        <img class="swiper-img" :src="item.srcUrl" alt>
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
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        scrollbar: '.swiper-scrollbar',
        buttonPrev: 'swiper-button-prev',
        buttonNext: 'swiper-button-next',
        loop: true
      },
      urlList: [
        {
          id: '001',
          srcUrl:
            '//img1.qunarzz.com/vc/bf/9d/a3/67b7b37511fa26a78298bf1da1.jpg'
        },
        {
          id: '002',
          srcUrl:
            '//img1.qunarzz.com/vc/b8/25/51/f6173dbd12c1a0f783abe73855.jpg'
        },
        {
          id: '003',
          srcUrl:
            '//img1.qunarzz.com/vc/a9/f4/f1/bb33ddb697f07c375e7af81256.jpg'
        },
        {
          id: '004',
          srcUrl:
            '//img1.qunarzz.com/vc/82/e7/84/d69120ee33206dd700c8b7ff12.jpg'
        }
      ]
    }
  }
}
</script>

<style lang='stylus' scoped>
#wrapper >>> .swiper-pagination-bullet {
  background: #fff;
}
#wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 30.4%;
  background: #ccc;
}
.swiper-img {
  width: 100%;
}
</style>
