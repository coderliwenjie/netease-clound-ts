<template>
  <div class="hot">
    <div class="bg">
      <span class="rank">热歌榜</span>
      <span class="date">更新日期: {{ hotRank.playlist.updateTime | dateFomat }}</span>
    </div>
    <div class="hot-ul" v-if="hotRank">
      <router-link to="/" class="hot-li" v-for="(item, index) in hotRank.playlist.tracks" :key="index" v-if="index < 20">
        <div :class="['li-lf', index < 3 ? 'li-lf-red' : '']">{{ index | numFomat }}</div>
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
import { Vue, Component } from 'vue-property-decorator'
import api from '../../api/index'
@Component({
  filters: {
    numFomat(val: any): string {
      val = val + 1
      if (val <= 3) {
        val = '0' + val
      }
      return val
    },
    dateFomat(val: number): string {
      const date = new Date(val)
      return (date.getMonth() + 1) + '月' + date.getDate() + '日'
    },
  },
})
export default class HotMusic extends Vue {
  private hotRank!: null
  private data() {
    return {
      hotRank: null,
    }
  }
  private async mounted() {
    this.hotRank = await api.hotRank()
  }
}
</script>
<style lang="scss" scoped>
.hot {
  .bg {
    width: 375px;
    height: 145px;
    background: url('../../assets/hot-music.jpg') no-repeat;
    background-size: cover;

    .rank {
      display: block;
      padding-top: 24px;
      margin-left: 12px;
      font-size: 24px;
      font-weight: 600;
      color: #fff;
      text-align: left;
    }

    .date {
      display: block;
      padding-top: 6px;
      margin-left: 12px;
      font-size: 12px;
      color: hsla(0, 0%, 100%, 0.8);
      text-align: left;
    }
  }

  .hot-ul {
    box-sizing: border-box;
    padding-left: 10px;

    .hot-li {
      display: flex;
      align-items: center;

      .li-lf {
        width: 28px;
        font-size: 17px; /* no */
        font-weight: 500;
        color: #ccc;
        text-align: left;
      }

      .li-lf-red {
        color: #df3436;
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
          color: #ccc;
        }
      }
    }
  }
}
</style>

