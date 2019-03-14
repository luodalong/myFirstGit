<template>
  <div id="recommend">
    <h4 class="recommend-scene">去哪儿玩</h4>
    <ul>
      <li class="rem-item" v-for="item of recommendList" :key="item.id">
        <img class="rem-img" :src="item.imgUrl" alt>
        <div class="rem-desc">
          <h4>{{item.location}}</h4>
          <i>{{item.assess}}</i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomePlay',
  data: function () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl:
            'https://dimg04.c-ctrip.com/images/300s10000000p79kd8D64_C_360_202.jpg',
          location: '古北水镇',
          assess: '含往返飞机票(含税)'
        },
        {
          id: '002',
          imgUrl:
            'https://dimg04.c-ctrip.com/images/300u0y000000lmfr26FE8_C_360_202.jpg',
          location: '八达岭长城',
          assess: '国旅品质+特惠促销+经典线路'
        },
        {
          id: '003',
          imgUrl:
            'https://dimg04.c-ctrip.com/images/300u10000000px2mu87A0_C_360_202.jpg',
          location: ' 观音山梦幻海岸',
          assess: '满园春色尽在武夷风光'
        },
        {
          id: '004',
          imgUrl:
            'https://dimg04.c-ctrip.com/images/30050x000000l4nhbF5B2_C_360_202.jpg',
          location: '云水谣土楼群',
          assess: '八闽门户、天南锁钥'
        }
      ]
    }
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

#recommend .rem-item .rem-img {
  display: block;
  width: 95%;
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
