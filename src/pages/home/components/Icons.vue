<template>
  <div id="icons">
     <swiper>
        <swiper-slide v-for='(page, index) of pages' :key='index'>
          <div class="icons-block" v-for="item of page" :key="item.id">
            <img class='icons-img' :src="item.imgUrl" alt="">
            <p class='icons-desc'>{{item.imgdesc}}</p>
          </div>
       </swiper-slide>
     </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data: function () {
    return {
      iconsList: [{
        id: '001',
        imgUrl: '//imgs.qunarzz.com/ftejia/1806/94/69fc1e0519b438.png',
        imgdesc: '低价机票HI和覅恢复大师和覅uahdid'
      },
      {
        id: '002',
        imgUrl: '//imgs.qunarzz.com/ftejia/1806/94/69fc1e0519b438.png',
        imgdesc: '低价机票'
      },
      {
        id: '003',
        imgUrl: '//imgs.qunarzz.com/ftejia/1806/94/69fc1e0519b438.png',
        imgdesc: '低价机票'
      },
      {
        id: '004',
        imgUrl: '//imgs.qunarzz.com/ftejia/1806/94/69fc1e0519b438.png',
        imgdesc: '低价机票'
      },
      {
        id: '005',
        imgUrl: '//imgs.qunarzz.com/ftejia/1806/94/69fc1e0519b438.png',
        imgdesc: '低价机票'
      },
      {
        id: '006',
        imgUrl: '//imgs.qunarzz.com/ftejia/1806/94/69fc1e0519b438.png',
        imgdesc: '低价机票'
      },
      {
        id: '007',
        imgUrl: '//imgs.qunarzz.com/ftejia/1806/94/69fc1e0519b438.png',
        imgdesc: '低价机票'
      },
      {
        id: '008',
        imgUrl: '//imgs.qunarzz.com/ftejia/1806/94/69fc1e0519b438.png',
        imgdesc: '低价机票'
      }]
    }
  },
  computed: {
    pages: function () {
      const pages = []
      this.iconsList.forEach((item, index) => {
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
    margin:0 auto;
    margin-top:10%;
  }
  #icons .icons-block .icons-desc{
    width:100%
    text-align:center;
    ellipsis()
  }
</style>
