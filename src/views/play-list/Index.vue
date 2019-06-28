<template>
  <div class="play-list">
    <cover :playlist="playlist" v-if="playlist"></cover>
    <intro :playlist="playlist" v-if="playlist"></intro>
    <list :playlist="playlist" v-if="playlist"></list>
    <comment-list :comments="comments" :hot-comments="hotComments" :total="total"></comment-list>
    <list-footer txt="收藏歌单"></list-footer>
  </div>
</template>
<script lang="ts">
interface ListData {
  playlist: object
}
import { Vue, Component } from 'vue-property-decorator'
import api from '../../api'
import Cover from './Cover.vue'
import Intro from './Intro.vue'
import List from './PlayList.vue'
import CommentList from './CommentList.vue'
import ListFooter from '../../components/Footer.vue'
@Component({
  components: {
    Cover,
    Intro,
    List,
    CommentList,
    ListFooter,
  },
})
export default class PlayList extends Vue {
  private playlist!: object
  private comments!: object[]
  private hotComments!: object[]
  private total!: number
  private data() {
    return {
      playlist: null,
      comments: [],
      hotComments: [],
      total: 0,
    }
  }
  private async created() {
    const {playlist} = await api.playList(this.$route.query.id as string)
    const { comments, hotComments, total } = await api.playListCmt(this.$route.query.id as string)
    this.playlist = playlist
    this.comments = comments
    this.hotComments = hotComments
    this.total = total
  }
}
</script>

