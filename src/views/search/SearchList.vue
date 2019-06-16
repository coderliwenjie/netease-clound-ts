<template>
  <div class="search" v-if="searchList && searchList.result && searchList.result.songCount > 0">
    <div class="search-list">
      <div class="search-ul">
        <router-link :to="'/song?id='+ item.id" class="search-li" :key="index" v-for="(item, index) in searchList.result.songs">
          <div class="li-lf">
            <div class="lf-song">{{ item.name }}</div>
            <div class="lf-artist">{{ item.name }}-{{ item.artists[0].name }}</div>
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
import { Vue, Prop, Component } from 'vue-property-decorator'
@Component
export default class SearchList extends Vue {
  @Prop() private searchList!: object
}
</script>

<style lang="scss" scoped>
.search {
  .search-list {
    .search-ul {
      padding-left: 12px;

      .search-li {
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
            text-align: left;
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

