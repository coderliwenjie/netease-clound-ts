<template>
  <a :href="'/song?id='+ data.id" :class="['li', className]">
    <div class="li-lf">
      <div class="lf-song hidden">{{ data.name }}</div>
      <div class="lf-artist hidden">{{ data.name }}-{{ data.song && data.song.artists[0].name || data.artists[0].name }}</div>
    </div>
    <svg class="icon li-rt" aria-hidden="true">
      <use xlink:href="#icon-play"></use>
    </svg>
  </a>
</template>
<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
@Component
export default class Song extends Vue {
  @Prop() private data!: object
  @Prop() private className!: ''
}
</script>

<style lang="scss" scoped>
.li {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0;
  border-bottom: 1px solid #eee; /* no */

  .li-lf {
    flex: 1 1 auto;
    width: 0;
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
    margin-left: 12px;
    fill: #ccc;
  }

  .hidden {
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: normal;
    white-space: nowrap;
  }
}
</style>
