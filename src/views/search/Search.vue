<template>
  <div class="search">
    <section class="link">
      <h3 class="title" @click="search">
        搜索"{{keyWord}}"
      </h3>
      <ul v-if="searchSuggest">
        <li class="link-item" v-for="(item, index) in searchSuggest.result.allMatch" :key="index" @click="search(item.keyword)">
          <svg class="icon search-icon" aria-hidden="true">
            <use xlink:href="#icon-search"></use>
          </svg>
          <div class="content">{{ item.keyword }}</div>
        </li>
      </ul>
    </section>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop } from 'vue-property-decorator'
import api from '../../api'

@Component
export default class Search extends Vue {
  @Prop() private keyWord!: string
  private searchSuggest!: object
  private data() {
    return {
      searchSuggest: null,
    }
  }
  @Watch('keyWord')
  private async searchKey(val: any) {
    if (val) {
      this.searchSuggest = await api.searchSuggest(val)
    }
  }
  private search(val: any) {
    this.$emit('search', val)
  }
}
</script>
<style lang="scss" scoped>
.search {
  .link {
    .title {
      height: 50px;
      padding-right: 10px;
      margin-left: 10px;
      font-size: 15px; /* no */
      line-height: 50px;
      color: #507daf;
      text-align: left;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .link-item {
      display: flex;
      align-items: center;
      height: 45px;
      padding-left: 10px;

      .search-icon {
        margin-right: 7px;
        font-size: 16px; /* no */
      }

      .content {
        box-sizing: border-box;
        flex: 1;
        font-size: 15px; /* no */
        font-weight: 500;
        line-height: 45px;
        color: #333;
        text-align: left;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>

