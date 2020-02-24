<template>
  <div class="home">
    <div class="home-head">
      <span class="home-head-lf">网易云音乐</span>
      <!-- <span class="home-head-fr">登录</span> -->
    </div>
    <van-tabs title-active-color="#DD001B" :swipeable="true" @change="change">
      <van-tab title="推荐音乐">
      </van-tab>
      <van-tab title="热歌榜"></van-tab>
      <van-tab title="搜索"></van-tab>
    </van-tabs>
    <div class="home-view">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {Tab, Tabs} from 'vant'

@Component({
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
  },
  methods: {
    change(index) {
      this.$router.push({
        path: `/home/${this.$data.tabs[index]}`,
      })
    },
  },
})

export default class Home extends Vue {
  private tabs!: object[]
  private data() {
    return {
      tabs: ['recommendMusic', 'hotMusic', 'search'],
    }
  }
  private async created() {
    this.$router.push({
      path: `/home/${this.tabs[0]}`,
    })
  }
}
</script>
<style lang="scss" scoped>
.home {
  .home-head {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 64px;
    padding: 16px;
    font-size: 18px; /* no */
    font-weight: 600;
    color: #fff;
    background-color: #d43c33;

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

