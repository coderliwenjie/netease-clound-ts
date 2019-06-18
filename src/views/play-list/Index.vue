<template>
  <div class="play-list">
    <cover :playlist="playlist" v-if="playlist"></cover>
    <intro :playlist="playlist" v-if="playlist"></intro>
    <list :playlist="playlist" v-if="playlist"></list>
  </div>
</template>
<script lang="ts">
interface ListData {
  playlist: object,
  privileges: object[]
}
import { Vue, Component } from 'vue-property-decorator'
import api from '../../api'
import Cover from './Cover.vue'
import Intro from './Intro.vue'
import List from './List.vue'
@Component({
  components: {
    Cover,
    Intro,
    List,
  },
})
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
    this.playlist = playlist
    this.privileges = privileges
  }
}
</script>

