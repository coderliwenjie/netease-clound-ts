<template>
  <div class="user">
    <user-header :user-info="userInfo" v-if="userInfo"></user-header>
    <div class="user-radio" v-if="userDj && userDj.count > 0">
      <h3 class="tl">电台({{ userDj.count }})</h3>
      <list-item v-for="(item, index) in userDj.programs" :key="index"
        :link="'/radio?id=' + item.id"
        :name="item.name"
        :pic-url="item.coverUrl"
        :category="item.channels[0]"
        :info-txt="'共'+item.serialNum+'期，'+item.subscribedCount+'人订阅'"></list-item>
    </div>
    <div class="user-playlist" v-if="userPlaylist">
      <h3 class="tl">歌单</h3>
      <list-item v-for="(item, index) in userPlaylist.playlist" :key="index"
        :link="'/playList?id=' + item.id"
        :name="item.name"
        :pic-url="item.coverImgUrl"
        :info-txt="item.trackCount+'首，播放'+item.playCount+'次'"></list-item>
    </div>
    <user-footer txt="去TA的个人主页"></user-footer>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import UserHeader from './Header.vue'
import ListItem from './ListItem.vue'
import UserFooter from '../../components/Footer.vue'
import api from '../../api'
@Component({
  components: {
    UserHeader,
    ListItem,
    UserFooter,
  },
})
export default class User extends Vue {
  private userInfo!: object
  private userDj!: object
  private userPlaylist!: object
  private data() {
    return {
      userInfo: null,
      userDj: null,
      userPlaylist: null,
    }
  }
  private async created() {
    Promise.all([api.userDetail(this.$route.query.id as string), api.userDj(this.$route.query.id as string),
    api.userPlaylist(this.$route.query.id as string)])
      .then((res) => {
        this.userInfo = res[0]
        this.userDj = res[1]
        this.userPlaylist = res[2]
      })
  }
}
</script>
<style lang="scss" scoped>
.user {
  .user-radio,
  .user-playlist {
    .tl {
      height: 28px;
      padding-left: 10px;
      font-size: 12px; /* no */
      line-height: 28px;
      color: #666;
      text-align: left;
      background-color: #eeeff0;
    }
  }
}
</style>
