<template>
  <div class="cmt">
    <router-link to="/" class="cmt-avatar">
      <img class="avatar" :src="comment.user.avatarUrl">
    </router-link>
    <div class="cmt-wrap">
      <div class="cmt-top">
        <div class="cmt-meta">
          <router-link to="/" class="meta-name">{{comment.user.nickname}}</router-link>
          <span class="meta-date">{{comment.time | dateFormat}}</span>
        </div>
        <div class="cmt-like">
          <span class="like-count">{{comment.likedCount}}</span>
          <svg class="icon like-icon" aria-hidden="true">
            <use xlink:href="#icon-zan"></use>
          </svg>
        </div>
      </div>
      <div class="cmt-content" v-for="(item, index) in comment.beReplied" :key="index" v-if="comment.beReplied.length > 0">
        <span>回复<a class="reply-name">@{{item.user.nickname}}</a>：{{comment.content}}</span>
        <div class="cmt-reply">
          <span>@{{item.user.nickname}}：</span>
          <span>{{item.content}}</span>
        </div>
      </div>
      <div v-if="comment.beReplied.length == 0" class="cmt-content">{{comment.content}}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
@Component({
  filters: {
    dateFormat(val: number) {
      const date = new Date(val)
      return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
    },
  },
})
export default class Comment extends Vue {
  @Prop() private comment!: object
}
</script>
<style lang="scss" scoped>
.cmt {
  display: flex;
  padding-top: 10px;

  .cmt-avatar {
    margin: 0 10px;

    .avatar {
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }

  .cmt-wrap {
    flex: 1;
    padding-right: 10px;
    padding-bottom: 10px;

    .cmt-top {
      display: flex;

      .cmt-meta {
        flex: 1;

        .meta-name {
          display: block;
          overflow: hidden;
          font-size: 14px;
          color: #666; /* no */
          text-align: left;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .meta-date {
          display: block;
          font-size: 9px; /* no */
          color: #999;
          text-align: left;
        }
      }

      .cmt-like {
        display: block;
        align-items: center;
        width: 65px;
        height: 22px;
        line-height: 22px;
        text-align: right;

        .like-count {
          margin-right: 3px;
          font-size: 11px; /* no */
          color: #999;
        }

        .like-icon {
          font-size: 12px;
          fill: #999;
        }
      }
    }
  }

  .cmt-content {
    margin-top: 5px;
    font-size: 15px; /* no */
    line-height: 22px;
    color: #333;
    text-align: left;

    .reply-name {
      color: #507daf;
    }

    .cmt-reply {
      padding: 10px;
      margin: 5px 0;
      font-size: 14px; /* no */
      line-height: 21px;
      color: #888;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
}
</style>



