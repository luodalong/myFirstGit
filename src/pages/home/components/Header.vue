<template>
  <div id="header">
    <div class="header-left">
      <span class='iconfont'>&#xe624;</span>
    </div>
    <div class="header-input">
      <span class='iconfont'>&#xe632;</span>输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      {{city}}<span class='iconfont arrow-icon'>&#xe603;</span>
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
  display:flex;
  height:.86rem;
  color:#fff;
  line-height :.86rem;
  background:$bgColor;
}
#header .header-left{
  float:left;
  width:.74rem;
  text-align  :center;
}
#header .header-input{
  flex:1
  background :#fff;
  height:.66rem;
  color:#ccc;
  line-height :.66rem;
  margin-top:.1rem;
  margin-left:.1rem;
  padding-left:.2rem;
  border-radius :.1rem
}
#header .header-right{
  float:right;
  width:1.24rem;
  text-align :center;
}
#header .header-right .arrow-icon{
  margin-left:-.05rem;
  vertical-align :top;
  font-size:.4rem;
}
</style>
