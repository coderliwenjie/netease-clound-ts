<template>
  <div class="remd-music">
    <recommend v-if="rendered"></recommend>
    <new v-if="rendered"></new>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import New from './New.vue'
import Recommend from './Recommend.vue'

@Component({
  components: {
    New,
    Recommend,
  },
})
export default class RecommendMusic extends Vue {
  @Action private personalized!: () => void
  @Action private newSong!: () => void
  private rendered!: boolean
  private data() {
    return {
      rendered: false,
    }
  }
  private async created() {
    await this.personalized()
    await this.newSong()
    this.rendered = true
  }
}
</script>
