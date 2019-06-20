<template>
  <div class="user">
    <user-header :user-info="userInfo" v-if="userInfo"></user-header>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import UserHeader from './Header.vue'
import api from '../../api'
@Component({
  components: {
    UserHeader,
  },
})
export default class User extends Vue {
  private userInfo!: object
  private userDj!: object
  private data() {
    return {
      userInfo: null,
      userDj: null,
    }
  }
  private async created() {
    Promise.all([api.userDetail(this.$route.query.id as string), api.userDj(this.$route.query.id as string)])
      .then((res) => {
        this.userInfo = res[0]
        this.userDj = res[1]
      })
  }
}
</script>
