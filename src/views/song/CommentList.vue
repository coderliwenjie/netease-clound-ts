<template>
  <div>
    <h4>精彩评论</h4>
    <comment v-for="(item, index) in commentList" :key="index" :comment="item"></comment>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Comment from '../../components/Comment.vue'
@Component({
  components: {
    Comment,
  },
})
export default class CommentList extends Vue {
  @Prop() private commentList!: object []
}
</script>
<style lang="scss" scoped>
  h4 {
    padding-left: 10px;
    font-size: 16px; /* no */
    color: #fff;
    text-align: left;
  }
</style>


