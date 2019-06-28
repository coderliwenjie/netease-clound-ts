<template>
  <div class="song" v-if="songDetail" :style="{'background-image': 'url(//music.163.com/api/img/blur/'+songDetail.songs[0].al.pic_str+')'}">
    <player :lyric="lyric" :song-detail="songDetail" :song-url="songUrl"></player>
    <album-list v-if="simiPlaylist.length > 0" :simi-playlist="simiPlaylist"></album-list>
    <song-list v-if="simiSong.length > 0" :simi-song="simiSong"></song-list>
    <comment-list v-if="commentList.length > 0" :comment-list="commentList"></comment-list>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import api from '../../api'
import Player from './Player.vue'
import AlbumList from './AlbumList.vue'
import CommentList from './CommentList.vue'
import SongList from './SongList.vue'
@Component({
  components: {
    Player,
    AlbumList,
    CommentList,
    SongList,
  },
})
export default class Song extends Vue {
  private lyric!: object
  private songDetail!: object
  private songUrl!: object []
  private simiPlaylist!: object []
  private commentList!: object []
  private simiSong!: object []
  private data() {
    return {
      lyric: null,
      songDetail: null,
      songUrl: [],
      simiPlaylist: [],
      commentList: [],
      simiSong: [],
    }
  }
  private async created() {
    const songDetail = api.songDetail(this.$route.query.id as string)
    const lyric = api.lyric(this.$route.query.id as string)
    const songUrl = api.songUrl(this.$route.query.id as string)
    const simiPlaylist = api.simiPlaylist(this.$route.query.id as string)
    const commentList = api.songComments(this.$route.query.id as string)
    const simiSong = api.simiSong(this.$route.query.id as string)
    Promise.all([songDetail, lyric, songUrl, simiPlaylist, commentList, simiSong])
      .then((res) => {
        this.songDetail = res[0]
        this.lyric = res[1]
        this.songUrl = res[2].data
        this.simiPlaylist = res[3].playlists
        this.commentList = res[4].hotComments
        this.simiSong = res[5].songs
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
