<template>
  <div class="song" v-if="songDetail" :style="{'background-image': 'url(//music.163.com/api/img/blur/'+songDetail.songs[0].al.pic_str+')'}">
    <player :lyric="lyric" :song-detail="songDetail" :song-url="songUrl"></player>
    <album-list :simi-playlist="simiPlaylist"></album-list>
    <comment-list :comment-list="commentList"></comment-list>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import api from '../../api'
import Player from './Player.vue'
import AlbumList from './AlbumList.vue'
import CommentList from './CommentList.vue'
@Component({
  components: {
    Player,
    AlbumList,
    CommentList,
  },
})
export default class Song extends Vue {
  private lyric!: object
  private songDetail!: object
  private songUrl!: object []
  private simiPlaylist!: object []
  private commentList!: object []
  private data() {
    return {
      lyric: null,
      songDetail: null,
      songUrl: [],
      simiPlaylist: [],
      commentList: [],
    }
  }
  private async created() {
    const songDetail = api.songDetail(this.$route.query.id as string)
    const lyric = api.lyric(this.$route.query.id as string)
    const songUrl = api.songUrl(this.$route.query.id as string)
    const simiPlaylist = api.simiPlaylist(this.$route.query.id as string)
    const commentList = api.songComments(this.$route.query.id as string)
    Promise.all([songDetail, lyric, songUrl, simiPlaylist, commentList])
      .then((res) => {
        this.songDetail = res[0]
        this.lyric = res[1]
        this.songUrl = res[2].data
        this.simiPlaylist = res[3].playlists
        this.commentList = res[4].hotComments
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
