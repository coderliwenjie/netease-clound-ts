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
import Vue from 'vue'
import { Action } from 'vuex-class'
import { personalized } from '@/api';
export default Vue.extend({
  // todo
  created() {
    this.$store.dispatch('personalized')
  },
})
</script>

<style lang="scss" scoped>

</style>
