<template>
  <div class="tabitem">
    <div class="recommend">
      <h2 class="remd-tl">推荐歌单</h2>
      <div class="remd-songs">
        <router-link class="remd-list" :to='"/playlist?id=" + item.id' :key="index" v-if="index < 6" v-for="(item, index) in personalizedData.result">
          <div class="remd-img">
            <img class="list-img" :src='item.picUrl'>
            <span class="play-count">{{ item.playCount | playCountFormat }}</span>
          </div>
          <span class="remd-title">{{ item.name }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { State } from 'vuex-class'
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class Recommend extends Vue {
  @State private personalizedData!: object
}
</script>

<style lang="scss" scoped>
  .tabitem {
    .recommend {
      .remd-tl {
        position: relative;
        padding-left: 10px;
        margin-top: 14px;
        margin-bottom: 14px;
        font-size: 17px; /* no */
        font-weight: 400;
        text-align: left;

        &::after {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 2px;
          height: 18px;
          margin: auto;
          content: " ";
          background-color: #d33a31;
        }
      }

      .remd-songs {
        display: flex;
        flex-wrap: wrap;

        .remd-list {
          padding-right: 2px;

          .remd-img {
            position: relative;
            line-height: 0;

            .list-img {
              width: 123px;
              height: 123px;
            }

            .play-count {
              position: absolute;
              top: 10px;
              right: 5px;
              font-size: 10px; /* no */
              color: #fff;
            }
          }

          .remd-title {
            box-sizing: border-box;
            display: inline-block;
            width: 123px;
            padding: 6px 2px 0 6px;
            font-size: 13px; /* no */
            line-height: 1.2;
            color: #000;
            text-align: left;
          }
        }
      }
    }
  }
</style>
