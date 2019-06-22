<template>
  <div class="wrap">
    <h3 class="list-title">歌曲列表</h3>
    <div class="list-ul">
      <router-link :to="'/song?id=' + item.id" class="list-li" v-for="(item, index) in playlist.tracks" :key="index">
        <div class="li-lf">{{ index }}</div>
        <div class="li-rt">
          <div class="rt-music">
            <div class="music-name">{{item.name}}</div>
            <div class="music-all">{{item.ar[0].name}}-{{item.al.name}}</div>
          </div>
          <svg class="icon rt-icon" aria-hidden="true">
            <use xlink:href="#icon-play"></use>
          </svg>
        </div>
      </router-link>
    </div>
  </div>  
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class PlayList extends Vue {
  @Prop() private playlist!: object
}
</script>

<style lang="scss" scoped>
.wrap {
  .list-title {
    height: 23px;
    padding: 0 10px;
    font-size: 12px; /* no */
    line-height: 23px;
    color: #666;
    text-align: left;
    background-color: #eeeff0;
  }

  .list-ul {
    box-sizing: border-box;
    padding-left: 10px;

    .list-li {
      display: flex;
      align-items: center;

      .li-lf {
        width: 28px;
        font-size: 17px; /* no */
        font-weight: 500;
        color: #ccc;
        text-align: left;
      }

      .li-rt {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-between;
        padding: 6px 0;
        color: #333;
        border-bottom: 1px solid #eee;

        .rt-music {
          .music-name {
            font-size: 16px; /* no */
            font-weight: 600;
            text-align: left;
          }

          .music-all {
            font-size: 12px; /* no */
            font-weight: 500;
            color: #888;
          }
        }

        .rt-icon {
          margin-right: 12px;
          fill: #ccc;
        }
      }
    }
  }
}
</style>
