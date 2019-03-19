<template>
  <div>
    <div id="header">
      <div class="header-left">
        <span class='iconfont'>&#xe624;</span>
      </div>
      <div class='header-center'>
        <p class='header-text'>城市选择</p>
      </div>
    </div>
    <div id="search">
      <input type="text" class="search-input" name="" placeholder="输入拼音或中文">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
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
</style>
