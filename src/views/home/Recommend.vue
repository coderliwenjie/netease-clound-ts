<template>
  <div class="tabitem">
    <div class="recommend">
      <h2 class="remd-tl">推荐歌单</h2>
      <div class="remd-songs">
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Action } from 'vuex-class'
import { personalized } from '@/api'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Recommend extends Vue {
  @Prop() private recommend!: {}
  private mounted() {
    console.log(this.recommend)
  }
}
</script>

<style lang="scss" scoped>

</style>
