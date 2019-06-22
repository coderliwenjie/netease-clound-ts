<template>
  <div class="item">
    <img class="item-lf" :src="picUrl">
    <div class="rt">
      <div class="rt-name">
        <span class="category" v-if="category">{{ category }}</span>
        <span class="name">{{ name }}</span>
      </div>
      <div class="rt-info">{{ infoTxt }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
@Component
export default class ListItem extends Vue {
  @Prop() private picUrl!: ''
  @Prop() private name!: ''
  @Prop() private category!: ''
  @Prop() private infoTxt!: ''
}
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  padding-left: 6px;

  .item-lf {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  .rt {
    box-sizing: 1;
    flex: 1;
    height: 50px;
    padding: 3px 10px 3px 0;
    overflow: hidden;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    .rt-name {
      height: 22px;
      margin-top: 6px;
      overflow: hidden;
      font-size: 17px; /* no */
      line-height: 20px;
      color: #333;
      text-align: left;
      text-overflow: ellipsis;
      word-break: normal;
      white-space: nowrap;

      .category {
        padding: 0 2px;
        font-size: 11px; /* no */
        color: #d33a31;
        vertical-align: 1px;
        border: 1px solid #d33a31;
      }
    }

    .rt-info {
      margin-top: 5px;
      font-size: 12px; /* no */
      color: #888;
      text-align: left;
    }
  }
}
</style>


