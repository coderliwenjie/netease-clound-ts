<template>
  <div class="song" v-if="songDetail" :style="{'background-image': 'url(//music.163.com/api/img/blur/'+songDetail.songs[0].al.pic_str+')'}">
    <player :lyric="lyric" :song-detail="songDetail" :song-url="songUrl"></player>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import api from '../../api'
import Player from './Player.vue'
@Component({
  components: {
    Player,
  },
})
export default class Song extends Vue {
  private lyric!: object
  private songDetail!: object
  private songUrl!: object []
  private data() {
    return {
      lyric: null,
      songDetail: null,
      songUrl: [],
    }
  }
  private async created() {
    Promise.all([api.songDetail(this.$route.query.id as string), api.lyric(this.$route.query.id as string),
    api.songUrl(this.$route.query.id as string)])
      .then((res) => {
        this.songDetail = res[0]
        this.lyric = res[1]
        this.songUrl = res[2].data
        console.log(this.songUrl)
      })
  }
}
</script>
<style lang="scss" scoped>
.song {
  z-index: 1;
  min-height: 100vh;
  background-color: #161824;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: auto 100%;
  transition: opacity 0.3s linear;
  transform-origin: center top;
}
</style>
