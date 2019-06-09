<template>
  <div class="home">
    <div class="home-head">
      <span class="home-head-lf">网易云音乐</span>
      <span class="home-head-fr">登录</span>
    </div>
    <van-tabs title-active-color="#DD001B" :swipeable="true">
      <van-tab title="推荐音乐">
        <recommend></recommend>
      </van-tab>
      <van-tab title="热歌榜">热歌榜</van-tab>
      <van-tab title="搜索">搜索</van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {Tab, Tabs} from 'vant'
import Recommend from './Recommend.vue'

@Component({
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    Recommend,
  },
})
export default class Home extends Vue {
}
</script>
<style lang="scss" scoped>
.home {

  .home-head {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 64px;
    padding: 16px;
    box-sizing: border-box;
    font-size: 18px; /* no */
    font-weight: 600;
    background-color: #d43c33;
    color: #fff;

    .home-head-fr {
      display: inline-block;
      width: 80px;
      height: 30px;
      line-height: 30px;
      border: 1px solid #fff; /* no */
      border-radius: 20px;
    }
  }
}
</style>

