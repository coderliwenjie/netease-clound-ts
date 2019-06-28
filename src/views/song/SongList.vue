<template>
  <div class="song-list">
    <h4 class="song-list-tl">喜欢这首歌的人也喜欢听</h4>
    <div class="song-list-wrap">
      <song v-for="(item, index) in simiSong" :key="index" :data="item" class-name="song"></song>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Song from '../../components/Song.vue'
@Component({
  components: {
    Song,
  },
})
export default class SongList extends Vue {
  @Prop() private simiSong!: object[]
}
</script>
<style lang="scss">
@import '../../style/song/songList.scss';

.song-list {
  margin-top: 40px;

  &-tl {
    position: relative;
    padding-left: 10px;
    font-size: 16px;
    line-height: 18px;
    color: #fff;
    text-align: left;

    &::after {
      position: absolute;
      top: 1px;
      left: 0;
      display: block;
      width: 2px;
      height: 16px;
      content: '';
      background-color: #d33a31;
    }
  }

  &-wrap {
    padding-left: 10px;
  }
}
</style>
