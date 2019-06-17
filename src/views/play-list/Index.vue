<template>
  <div class="play-list">
    <div class="wrap">
      <section class="cover" :style="'background-image:url(//music.163.com/api/img/blur/'+ playlist.coverImgId_str +'?param=170y170)'">
        <div>
          <img>
          <span>歌单</span>
          <div>
            <svg class="icon search-icon" aria-hidden="true">
              <use xlink:href="#icon-search"></use>
            </svg>
            <span></span>
          </div>
        </div>
        <div>
          <p></p>
          <div></div>
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
interface ListData {
  playlist: object,
  privileges: object[]
}
import { Vue, Component } from 'vue-property-decorator'
import api from '../../api'
@Component
export default class PlayList extends Vue {
  private playlist!: object
  private privileges!: object[]
  private data() {
    return {
      playlist: null,
      privileges: [],
    }
  }
  private async created() {
    const {playlist, privileges} = await api.playList(this.$route.query.id as string)
    console.log(playlist)
    this.playlist = playlist
    this.privileges = privileges
  }
}
</script>
<style lang="scss" scoped>
.play-list {
  .wrap {
    .cover {
      width: 170px;
    }
  }
}
</style>

