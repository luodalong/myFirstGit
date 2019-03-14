<template>
  <div id="icons">
     <swiper  :options="swiperOption">
        <swiper-slide v-for='(page, index) of pages' :key='index'>
          <div class="icons-block" v-for="item of page" :key="item.id">
            <img class='icons-img' :src="item.imgUrl" alt="">
            <p class='icons-desc'>{{item.desc}}</p>
          </div>
       </swiper-slide>
     </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data: function () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages: function () {
      const pages = []
      this.iconList.forEach((item, index) => {
        var i = Math.floor(index / 8)
        if (!pages[i]) pages[i] = []
        pages[i].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/mixins.styl';
  #icons{
    width:100%;
    height:0;
    padding-bottom:50%;add6d3
    overflow: hidden;
    background:#fff;
  }
  #icons .icons-block{
    float:left;
    width:25%;
    height:0;
    padding-bottom:25%;
  }
  #icons .icons-block .icons-img{
    display:block;
    width:50%;
    margin:10% auto
  }
  #icons .icons-block .icons-desc{
    width:100%
    text-align:center;
    ellipsis()
  }
</style>
