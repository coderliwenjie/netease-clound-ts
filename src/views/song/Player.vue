<template>
  <div class="player">
    <div class="wrap">
      <div class="disc" @click="play">
        <img class="cover" :src="songDetail.songs[0].al.picUrl">
      </div>
    </div>
    <div class="lyric">
      <h2 class="title">{{ songDetail.songs[0].name }} - {{ songDetail.songs[0].ar[0].name }}</h2>
      <div class="lyric-inner">
        <div class="inner-wrapper" :style="{'transform': 'translateY('+ translateY +'px)'}">
          <p class="lyric-item" v-for="(item, index) in lyrics" :key="index">{{ item.txt }}</p>
        </div>
      </div>
    </div>
    <audio :src="songUrl[0].url"></audio>
    <div class="link">查看完整歌词</div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop} from 'vue-property-decorator'
import Lyric from '../../utils/lyric-parse'
@Component
export default class Player extends Vue {
  @Prop() private lyric!: any
  @Prop() private songDetail!: object
  @Prop() private songUrl!: object []
  private lyrics!: object []
  private translateY!: number
  private lyricPlay!: any
  private data() {
    return {
      lyrics: [],
      translateY: 0,
    }
  }
  private created() {
    this.lyricPlay = new Lyric(this.lyric.lrc.lyric, (res: any): void => {
      if (res.lineNum > 0) {
        this.translateY -= 49
      }
    })
    this.lyrics = this.lyricPlay.lines
  }
  private play() {
    document.getElementsByTagName('audio')[0].play()
    this.lyricPlay.play()
  }
}
</script>
<style lang="scss" scoped>
.player {
  padding-top: 70px;

  .wrap {
    display: flex;
    align-items: center;
    justify-content: center;

    .disc {
      position: relative;
      width: 296px;
      height: 296px;

      &::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
        content: '';
        background: url('../../assets/disc.png') no-repeat;
        background-size: contain;
      }

      .cover {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 184px;
        height: 184px;
        margin: auto;
        border-radius: 50%;
      }
    }
  }

  .lyric {
    padding: 0 35px;
    margin-top: 25px;

    .title {
      font-size: 18px; /* no */
      color: #fefefe;
    }

    .lyric-inner {
      height: 43px;
      margin-top: 12px;
      overflow: hidden;

      .inner-wrapper {
        transition: transform 0.3s ease-out;

        .lyric-item {
          height: 49px;
          font-size: 16px; /* no */
          color: #fff;
        }
      }
    }
  }

  .link {
    width: 100%;
    height: 30px;
    margin-top: 100px;
    font-size: 14px; /* no */
    line-height: 30px;
    color: hsla(0, 0%, 100%, 0.6);
  }
}
</style>

