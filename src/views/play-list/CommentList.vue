<template>
  <div class="comment">
    <div class="comment-hot">
      <h4 class="title">精彩评论</h4>
      <comment v-for="(item, index) in hotComments" :key="index" :comment="item"></comment>
    </div>
    <div class="comment-new">
      <h4 class="title">最新评论({{total}})</h4>
      <comment v-for="(item, index) in comments" :key="index" :comment="item"></comment>
    </div>
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
  @Prop() private comments!: object[]
  @Prop() private hotComments!: object[]
  @Prop() private total!: 0
}
</script>
<style lang="scss" scoped>
.comment {
  .comment-hot,
  .comment-new {
    .title {
      height: 23px;
      padding: 0 10px;
      font-size: 12px; /* no */
      font-weight: 400;
      line-height: 23px;
      color: #666;
      text-align: left;
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
}
</style>


