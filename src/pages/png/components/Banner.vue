<template>
  <div id='banner'>
    <div>
      <div v-for='(item, index) of categoryList' :key='index'>
        <div class='b-item'>
          <div class='aa'>
            <span class='iconfont'>&#xe603;</span>{{item.title}}
          </div>
          <div v-if='item.children'>
            <png-banner :categoryList='item.children'></png-banner>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PngBanner',
  props: {
    categoryList: Array
  }
}
</script>

<style lang='stylus' scoped>
#banner{
  padding-left:.2rem
}
#banner .b-item{
  margin-top:.2rem
}
.aa{
  padding-bottom:.1rem
}
</style>
