<template>
  <div class="search">
    <form class="form">
      <div class="input-wrap">
        <svg class="icon search-icon" aria-hidden="true">
          <use xlink:href="#icon-search"></use>
        </svg>
        <input class="input" placeholder="搜索歌曲、歌手、专辑"/>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Search extends Vue {
  
}
</script>
<style lang="scss" scoped>
  .search {
    .form {
      padding: 15px 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      .input-wrap {
        box-sizing: border-box;
        width: 355px;
        margin: auto;
        text-align: left;
        background-color: #ebecec;
        border-radius: 20px;

        .search-icon {
          margin-left: 6px;
          font-size: 14px; /* no */
        }

        .input {
          width: 295px;
          height: 30px;
          margin-left: 8px;
          font-size: 14px; /* no */
          color: #333;
          background: transparent;
          border: 0;
          outline: none;

          &::-webkit-input-placeholder {
            color: #c9c9c9;
          }
        }
      }
    }
  }
</style>
