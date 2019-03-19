<template>
  <div ref="wrapper" id='veil'>
    <div>
      <div class="list">
        <h3 class='list-top'>当前城市</h3>
        <ul class='list-content'>
          <li class='hot-city nowcity'>北京</li>
        </ul>
      </div>
      <div class="list">
        <h3 class='list-top'>热门城市</h3>
        <ul class='list-content'>
          <li class='hot-city'>北京</li>
          <li class='hot-city'>北京</li>
          <li class='hot-city'>北京</li>
          <li class='hot-city'>北京</li>
          <li class='hot-city'>北京</li>
          <li class='hot-city'>北京</li>
          <li class='hot-city'>北京</li>
          <li class='hot-city'>北京</li>
          <li class='hot-city'>北京</li>
          <li class='hot-city'>北京</li>
          <li class='hot-city'>北京</li>
          <li class='hot-city'>北京</li>
          <li class='hot-city'>北京</li>
        </ul>
      </div>
      <div class="list">
        <h3 class='list-top'>A</h3>
        <ul class='list-content'>
          <li class='select-city'>贵阳</li>
          <li class='select-city'>贵阳</li>
            <li class='select-city'>贵阳</li>
            <li class='select-city'>贵阳</li>
            <li class='select-city'>贵阳</li>
        </ul>
      </div>
      <div class="list">
        <h3 class='list-top'>A</h3>
        <ul class='list-content'>
          <li class='select-city'>贵阳</li>
          <li class='select-city'>贵阳</li>
            <li class='select-city'>贵阳</li>
            <li class='select-city'>贵阳</li>
            <li class='select-city'>贵阳</li>
        </ul>
      </div>
      <div class="list">
        <h3 class='list-top'>A</h3>
        <ul class='list-content'>
          <li class='select-city'>贵阳</li>
          <li class='select-city'>贵阳</li>
            <li class='select-city'>贵阳</li>
            <li class='select-city'>贵阳</li>
            <li class='select-city'>贵阳</li>
        </ul>
      </div>
      <div class="list">
        <h3 class='list-top'>A</h3>
        <ul class='list-content'>
          <li class='select-city'>贵阳</li>
          <li class='select-city'>贵阳</li>
            <li class='select-city'>贵阳</li>
            <li class='select-city'>贵阳</li>
            <li class='select-city'>贵阳</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
     
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
  .list .list-top{
    width:100%
    padding:.1rem .2rem
    color:#fff
    font-weight:bold
    background:#d8d8d8
  }
  .list .list-content{
    width:100%
    padding:0.1rem .5rem .1rem 0
  }
   .list .list-content:after{
    content:''
    clear:left
    display:block
  }
  .list .list-content .hot-city{
    width:25%
    float:left
    margin:0.1rem .2rem
    padding:.1rem 0
    text-align:center
    border:.02rem solid #ccc
    border-radius:.06rem
  }
  .list .list-content .nowcity{
    border-color:$bgColor
  }
  .list .list-content .select-city{
    padding:.2rem
    border-bottom:.02rem solid #cce7e7e7
  }
</style>
