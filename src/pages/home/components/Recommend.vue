<template>
  <div id="recommend">
    <h4 class="recommend-scene">推荐景点</h4>
    <ul>
      <li class="rem-item" v-for="item of recommendList" :key="item.id">
        <div class='rem-imgblock'>
          <img class="rem-img" :src="item.imgUrl" alt>
        </div>
        <div class="rem-text">
          <h4 class='rem-title'>{{item.title}}</h4>
          <i class='rem-desc'>{{item.desc}}</i>
          <h4 class='rem-more'>查看更多</h4>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>

<style lang='stylus' scoped>
#recommend {
  width: 100%;
}

#recommend .recommend-scene {
  font-size: 0.3rem;
  width: 20%;
  padding: 0.1rem;
  margin-top: 0.2rem;
  text-align: center;
  background: #00bcd4;
}

#recommend .rem-item {
  border-top: 0.02rem solid #00bcb4;
  border-bottom: 0.02rem solid #00bcd4;
  width: 100%;
  padding:.2rem
}
#recommend .rem-item .rem-imgblock{
  display:inline-block
  width:30%;
  height:0
  padding-bottom: 30%
  vertical-align:middle
}
#recommend .rem-item .rem-imgblock .rem-img{
  width:100%
}
#recommend .rem-item .rem-text{
 display:inline-block
 width:50%
 vertical-align:middle
}
#recommend .rem-item .rem-text .rem-title{
  font-size: .4rem
  font-weight:bold
  padding:.2rem
}
#recommend .rem-item .rem-text .rem-desc{
  color:#bfbfbf
  padding:.2rem
  overflow:hidden
  text-align:center
}
#recommend .rem-item .rem-text .rem-more{
  width:1.5rem
  padding:.1rem 0
  background:yellow
  text-align:center
}
</style>
