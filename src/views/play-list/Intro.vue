<template>
  <section class="intro">
    <div class="tag-list">
      <span>标签：</span>
      <em class="tag" v-for="(item, index) in playlist.tags" :key="index">{{ item }}</em>
    </div>
    <div :class="['detail', stretch ? '' : 'multi']">
      <span>简介：</span>
      <span v-for="(item, index) in intro" :key="index">{{ item }}<br></span>
    </div>
    <div class="arrow">
      <svg class="icon play-icon" aria-hidden="true" v-if="stretch" @click="stretchDetail">
        <use xlink:href="#icon-arrowon"></use>
      </svg>
      <svg class="icon play-icon" aria-hidden="true" v-else @click="stretchDetail">
        <use xlink:href="#icon-arrowdown"></use>
      </svg>
    </div>
  </section>  
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

interface PlayList {
  description: string,
  tags: string[]
}
@Component
export default class Intro extends Vue {
  @Prop() private playlist!: PlayList
  private intro!: string[]
  private stretch!: boolean
  private data() {
    return {
      intro: [],
      stretch: false,
    }
  }
  private created() {
    this.intro = this.playlist.description.split(/\n\n/)
  }
  private stretchDetail() {
    this.stretch = !this.stretch
  }
}
</script>

<style lang="scss" scoped>
.intro {
  padding-top: 10px;
  margin: 0 10px 0 15px;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  text-align: left;

  .tag-list {
    margin-bottom: 10px;

    .tag {
      display: inline-block;
      padding: 1px 8px;
      margin-right: 10px;
      font-size: 12px; /* no */
      font-style: normal;
      font-weight: 400;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }
  }

  .detail {
    font-size: 14px;
    color: #666;
    text-align: left;
  }

  .multi {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
  }

  .arrow {
    text-align: right;
  }
}
</style>
