<template>
  <div id="header">
    <div class="header-left">
      <span class='iconfont'>&#xe624;</span>
    </div>
    <div class="header-input">
      <span class='iconfont'>&#xe632;</span>输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.city}}<span class='iconfont arrow-icon'>&#xe603;</span>
        </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex' //直接调取store内的数据
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang='stylus' scoped>//stylus是一个Stylus是一个CSS预处理器。 
@import '~styles/varibles.styl' 
    // 当样式内引入样式的时候，import需要添加@，，路径需要添加~
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
  flex:1;//父级display：flex，，子级flex:1，子级会占满余下空间。
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
  min-width:1.24rem;
  text-align :center;
  color:#fff
  padding-left:.1rem
}
#header .header-right .arrow-icon{
  margin-left:-.05rem;
  vertical-align :top;
  font-size:.4rem;
}
</style>
