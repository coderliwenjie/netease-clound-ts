<template>
  <div class="play-list">
    <cover :playlist="playlist"></cover>
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
@Component({
  components: {
    Cover,
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

