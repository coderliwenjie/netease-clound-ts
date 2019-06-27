<template>
  <div class="album">
    <h4 class="album-title">包含这首歌的歌单</h4>
    <div class="album-wrap">
      <router-link class="album-wrap-link" :to='"/playlist?id=" + item.id' :key="index" v-if="index < 3" v-for="(item, index) in simiPlaylist">
        <div class="album-cover">
          <img class="album-cover-img" :src="item.coverImgUrl">
          <div class="album-play">
            <svg class="icon play-icon" aria-hidden="true">
              <use xlink:href="#icon-music"></use>
            </svg>
            <span class="album-play-count">{{ item.playCount | playCountFormat }}</span>
          </div>
        </div>
        <p class="album-name">{{ item.name }}</p>
        <p class="creator-name">by {{ item.creator.nickname }}</p>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
@Component
export default class Album extends Vue {
  @Prop() private simiPlaylist!: object[]
}
</script>
<style lang="scss" scoped>
.album {
  margin-top: 40px;

  &-title {
    position: relative;
    padding-left: 10px;
    font-size: 16px;
    line-height: 18px;
    color: #fff;
    text-align: left;

    &::after {
      position: absolute;
      top: 1px;
      left: 0;
      display: block;
      width: 2px;
      height: 16px;
      content: '';
      background-color: #d33a31;
    }
  }

  &-wrap {
    display: flex;
    margin-top: 12px;
    margin-left: -3px;

    &-link {
      margin-left: 3px;

      .album-cover {
        position: relative;
        line-height: 1;

        &-img {
          width: 123px;
          height: 123px;
        }

        .album-play {
          position: absolute;
          top: 2px;
          right: 2px;
          font-size: 12px; /* no */
          color: #fff;
        }
      }
    }

    .album-name {
      box-sizing: border-box;
      width: 123px;
      padding: 0 6px;
      overflow: hidden;
      font-size: 13px; /* no */
      color: #fff;
      text-overflow: ellipsis;
      word-wrap: normal;
      white-space: nowrap;
    }

    .creator-name {
      overflow: hidden;
      font-size: 12px; /* no */
      color: hsla(0, 0%, 100%, 0.6);
    }
  }
}
</style>


