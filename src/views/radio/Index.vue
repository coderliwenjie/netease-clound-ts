<template>
  <div class="radio">
    <radio-header></radio-header>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import RadioHeader from './Header.vue'
import api from '../../api'
@Component({
  components: {
    RadioHeader,
  },
})
export default class Radio extends Vue {
  private created() {
    api.djDetail(this.$route.query.id as string)
  }
}
</script>
