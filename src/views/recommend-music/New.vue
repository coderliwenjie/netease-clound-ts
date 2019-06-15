<template>
  <div class="new">
    <div class="new-list">
      <h2 class="new-tl">最新音乐</h2>
      <div class="new-ul">
        <router-link :to="'/song?id='+ item.id" class="new-li" :key="index" v-for="(item, index) in newSongData.result">
          <div class="li-lf">
            <div class="lf-song">{{ item.name }}</div>
            <div class="lf-artist">{{ item.name }}-{{ item.song.artists[0].name }}</div>
          </div>
          <svg class="icon li-rt" aria-hidden="true">
            <use xlink:href="#icon-play"></use>
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component
export default class New extends Vue {
  @State private newSongData!: {}
  private mounted() {
    console.log(this.newSongData)
  }
}
</script>
<style lang="scss" scoped>
  .new {
    .new-list {
      .new-tl {
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

      .new-ul {
        padding-left: 12px;

        .new-li {
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 0;
          border-bottom: 1px solid #eee; /* no */

          .li-lf {
            color: #333;

            .lf-song {
              font-size: 16px; /* no */
              font-weight: 600;
              text-align: left;
            }

            .lf-artist {
              font-size: 12px; /* no */
              font-weight: 500;
              color: #888;
            }
          }

          .li-rt {
            margin-right: 12px;
            color: #ccc;
          }
        }
      }
    }
  }
</style>

