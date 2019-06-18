<template>
  <section class="cover-wrap">
    <div class="cover-bg" :style="'background-image:url(//music.163.com/api/img/blur/'+ playlist.coverImgId_str +'?param=170y170)'">
    </div>
    <div class="cover">
      <div class="cover-lf">
        <img class="lf-img" :src="playlist.coverImgUrl">
        <span class="lf-icon">歌单</span>
        <div class="lf-play">
          <svg class="icon play-icon" aria-hidden="true">
            <use xlink:href="#icon-music"></use>
          </svg>
          <span class="play-count">{{ playlist.playCount | playFormat }}</span>
        </div>
      </div>
      <div class="cover-rt">
        <p class="rt-name">{{ playlist.name }}</p>
        <div class="rt-creator">
          <img class="creator-avatar" :src="playlist.creator.avatarUrl"/>
          <span class="creator-nickname">{{ playlist.creator.nickname }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class Cover extends Vue {
  @Prop() private playlist!: null
}
</script>
<style lang="scss" scoped>
.cover-wrap {
  overflow: hidden;

  .cover-bg {
    position: relative;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 186px;
    padding: 30px 10px 30px 15px;
    filter: blur(20px); /* no */
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      content: '';
      background-color: rgba(0, 0, 0, 0.25);
    }
  }

  .cover {
    position: absolute;
    top: 30px;
    left: 15px;
    z-index: 2;
    display: flex;

    .cover-lf {
      position: relative;
      display: flex;

      .lf-img {
        width: 126px;
        height: 126px;
      }

      .lf-icon {
        position: absolute;
        top: 10px;
        left: 0;
        height: 17px;
        padding: 0 8px;
        font-size: 9px; /* no */
        font-weight: 500;
        line-height: 17px;
        color: #fff;
        background-color: rgba(217, 48, 48, 0.8);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }

      .lf-play {
        position: absolute;
        top: 3px;
        right: 3px;
        line-height: 0;

        .play-icon {
          padding-right: 3px;
          font-size: 14px; /* no */
          color: #fff;
          fill: #fff;
        }

        .play-count {
          font-size: 10px; /* no */
          font-weight: 500;
          color: #fff;
        }
      }
    }

    .cover-rt {
      margin-left: 16px;

      .rt-name {
        font-size: 17px; /* no */
        font-weight: 500;
        color: #fefefe;
        text-align: left;
      }

      .rt-creator {
        display: flex;
        align-items: center;
        margin-top: 20px;

        .creator-avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }

        .creator-nickname {
          margin-left: 3px;
          font-size: 14px; /* no */
          color: rgba(255, 255, 255, 0.7);
        }
      }
    }
  }
}
</style>


