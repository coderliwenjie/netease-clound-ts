<template>
  <div class="new">
    <div class="new-list">
      <h2 class="new-tl">最新音乐</h2>
      <div class="new-ul">
        <song :key="index" v-for="(item, index) in newSongData.result" :data='item'></song>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State } from 'vuex-class'
import Song from '../../components/Song.vue'

@Component({
  components: {
    Song,
  },
})
export default class New extends Vue {
  @State private newSongData!: object
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
    }
  }
}
</style>

