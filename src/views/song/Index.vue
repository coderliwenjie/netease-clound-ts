<template>
  
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import api from '../../api'
import LyricParse from '../../utils/lyric-parse.js'
@Component
export default class Song extends Vue {
  private async created() {
    api.songDetail(this.$route.query.id as string)
    const lyric = await api.lyric(this.$route.query.id as string)
    console.log(new LyricParse(lyric.lrc.lyric))
  }
}
</script>
