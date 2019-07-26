<!--根组件-->
<template>
  <div id="app">
    <keep-alive> <!-- keep-alive能将不变的数据保存起来，避免再次请求http -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
    name: 'App'  //导出组件，组件名为App
}
</script>

<style>

</style>

<!--下一步执行router 的index.js-->
