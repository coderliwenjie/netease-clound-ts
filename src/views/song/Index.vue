<template>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import api from '../../api'
import {Lyric} from 'utils/lyric-parse'
/// <reference path="../../../shims-vue.d.ts" />
@Component
export default class Song extends Vue {
  private async created() {
    api.songDetail(this.$route.query.id as string)
    const lyric = await api.lyric(this.$route.query.id as string)
    console.log(new Lyric(lyric.lrc.lyric, () => { console.log('ss') }))
  }
}
</script>
