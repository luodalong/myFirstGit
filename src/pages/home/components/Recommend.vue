<template>
  <div id="recommend">
    <h4 class="recommend-scene">推荐景点</h4>
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
  name: 'HomeRecommend',
  data: function () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl:
            'https://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg',
          location: '古北水镇',
          assess: '含往返飞机票(含税)'
        },
        {
          id: '002',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1504/de/de67e39701f98515.water.jpg_256x160_1ccdec10.jpg',
          location: '八达岭长城',
          assess: '国旅品质+特惠促销+经典线路'
        },
        {
          id: '003',
          imgUrl:
            'https://imgs.qunarzz.com/p/p26/201302/28/d98c85ce311ea98693835fbb.jpg_256x160_5197fb68.jpg',
          location: ' 观音山梦幻海岸',
          assess: '满园春色尽在武夷风光'
        },
        {
          id: '004',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1504/37/37bc07abdd1fdbee.water.jpg_256x160_061797a3.jpg',
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
  margin-top: 0.2rem;
  text-align: center;
  background: #00bcd4;
}

#recommend .rem-item {
  border-top: 0.02rem solid #00bcb4;
  border-bottom: 0.02rem solid #00bcd4;
  display: flex;
  width: 100%;
  padding: 0.2rem;
}

#recommend .rem-item .rem-img {
  width: 50%;
  height: 100%;
}

#recommend .rem-item .rem-desc {
  display: inline;
  flex: 1;
  height: 100%;
  margin-left: 0.2rem;
  padding-right: 0.2rem !important;
}

#recommend .rem-item .rem-desc h4 {
  margin-top: 20%;
  margin-bottom: 0.2rem;
  font-size: 0.4rem;
  font-weight: bold;
}

#recommend .rem-item .rem-desc i {
  color: #b2b2b2;
}
</style>
