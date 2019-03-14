<template>
  <div id="recommend">
    <h4 class="recommend-scene">去哪儿玩</h4>
    <ul>
      <li class="rem-item" v-for="item of weekendList" :key="item.id">
        <div class='rem-imgblock'>
          <img class="rem-img" :src="item.imgUrl" alt>
        </div>
        <div class="rem-desc">
          <h4>{{item.title}}</h4>
          <i>{{item.desc}}</i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomePlay',
  props: {
    weekendList: Array
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
  text-align: center;
  background: #00bcd4;
  margin-top: 0.2rem;
}

#recommend .rem-item {
  width: 100%;
  padding: 0.2rem;
  border-top: 1px solid #00bcd4;
  border-bottom: 0.02rem solid #00bcd4;
}
#recommend .rem-item .rem-imgblock{
  width:95%
  height:0
  padding-bottom:37.08%
  overflow:hidden
}
#recommend .rem-item .rem-img {
  width: 100%;
}

#recommend .rem-item .rem-desc {
  margin-top: 0.2rem;
}

#recommend .rem-item .rem-desc h4 {
  margin-bottom: 0.2rem;
  font-size: 0.4rem;
  font-weight: bold;
}

#recommend .rem-item .rem-desc i {
  color: #b2b2b2;
}
</style>
