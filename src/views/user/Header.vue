<template>
  <section class="header" :style="{'background-image': 'url(' + userInfo.profile.backgroundUrl + ')'}">
    <div class="wrap">
      <div class="usrhd-top">
        <div class="top-num">
          <p class="num-t1">{{ userInfo.listenSongs }}</p>
          <p class="num-t2">听歌数</p>
        </div>
        <img class="usrhd-avatar" :src="userInfo.profile.avatarUrl">
        <div class="top-num">
          <p class="num-t1">{{ userInfo.profile.followeds }}</p>
          <p class="num-t2">粉丝数</p>
        </div>
      </div>
      <div class="usrhd-info">
        <div class="info-name">
          <span>{{ userInfo.profile.nickname }}</span>
          <svg class="icon name-icon" aria-hidden="true" v-if="userInfo.profile.gender === 1">
            <use xlink:href="#icon-male"></use>
          </svg>
          <svg class="icon name-icon" aria-hidden="true" v-else>
            <use xlink:href="#icon-female"></use>
          </svg>
        </div>
        <p class="info-sub">云音乐达人</p>
        <div class="info-follow">
          <svg class="icon follow-icon" aria-hidden="true">
            <use xlink:href="#icon-plus"></use>
          </svg>
          <span>关注</span>
        </div>
      </div>
    </div> 
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class Header extends Vue {
  @Prop() private userInfo!: null
}
</script>
<style lang="scss" scoped>
  .header {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 242px;
    background-position: 50%;
    background-size: cover;

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      content: " ";
      background-color: rgba(0, 0, 0, 0.25);
    }

    .wrap {
      position: relative;
      z-index: 2;
      margin-top: 25px;

      .usrhd-top {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        .top-num {
          box-sizing: border-box;
          flex: 1;
          height: 80;
          padding-top: 20px;
          text-align: center;

          .num-t1 {
            font-size: 17px; /* no */
            color: #fff;
          }

          .num-t2 {
            margin-top: 1px;
            font-size: 12px; /* no */
            color: hsla(0, 0%, 100%, 0.6);
          }
        }

        .usrhd-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
      }

      .usrhd-info {
        .info-name {
          font-size: 17px; /* no */
          font-weight: 500;
          color: #fff;

          .name-icon {
            margin-left: 5px;
          }
        }

        .info-sub {
          margin-top: 3px;
          font-size: 14px; /* no */
          color: hsla(0, 0%, 100%, 0.8);
        }

        .info-follow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 126px;
          height: 30px;
          margin: 6px auto;
          font-size: 13px; /* no */
          color: #fff;
          border: 1px solid #fff;
          border-radius: 15px;

          .follow-icon {
            margin-left: 3px;
            font-size: 10px; /* no */
            fill: #fff;
            transform: scale(0.8);
          }
        }
      }
    }
  }
</style>


