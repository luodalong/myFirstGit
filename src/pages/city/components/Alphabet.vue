<template>
  <div id="alp">
    <ul>
      <li class='item' v-for="(city, key) of cityAlp" :key="key">{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlp',
  props: {
    cityAlp: Object
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
#alp{
  position:fixed
  top:1.56rem
  right:0
  display:flex
  flex-direction:column
  justify-content:center
}
.item{
  color:$bgColor
  margin:.07rem 0
}
</style>
