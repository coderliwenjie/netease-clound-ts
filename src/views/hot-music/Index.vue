<template>
  <div class="hot">
    <div></div>
    <div class="hot-ul" v-if="hotRank">
      <router-link to="/" class="hot-li" v-for="(item, index) in hotRank.playlist.tracks" :key="index" v-if="index < 20">
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
import { Vue, Component } from 'vue-property-decorator'
import api from '../../api/index'
@Component
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
  .hot-ul {
    box-sizing: border-box;
    padding-left: 10px;

    .hot-li {
      display: flex;

      .li-lf {
        width: 28px;
        font-size: 14px; /* no */
      }

      .li-rt {
        display: flex;
        flex: 1;
        justify-content: space-between;
        color: #333;

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

