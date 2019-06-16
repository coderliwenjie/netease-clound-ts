<template>
  <div class="list" v-if="hotSearchData">
    <section class="list-wrapper">
      <h3 class="title">热门搜索</h3>
      <ul class="tags">
        <li class="tag-item" v-for="(item, index) in hotSearchData.result.hots" :key="index" @click="search(item.first)">{{ item.first }}</li>
      </ul>
    </section>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component
export default class TagList extends Vue {
  @State private hotSearchData!: object
  private search(val: string) {
    this.$emit('search', val)
  }
}
</script>
<style lang="scss" scoped>
.list {
  .list-wrapper {
    padding: 15px 10px 0;

    .title {
      font-size: 12px;
      font-weight: 500;
      color: #666;
      text-align: left;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      margin: 10px 0 7px;

      .tag-item {
        position: relative;
        padding: 4px 14px;
        margin-right: 8px;
        margin-bottom: 8px;
        font-size: 14px; /* no */
        color: #333;

        &::after {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          content: '';
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 16px;
          transform-origin: top left;
        }
      }
    }
  }
}
</style>

