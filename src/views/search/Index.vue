<template>
  <div class="search">
    <form class="form" action='#' @submit="search">
      <div class="input-wrap">
        <svg class="icon search-icon" aria-hidden="true">
          <use xlink:href="#icon-search"></use>
        </svg>
        <input class="input" type="search" v-model="keyWord" @focus="focus" autocomplete="off" placeholder="搜索歌曲、歌手、专辑"/>
      </div>
    </form>
    <tag-list v-show="!keyWord && showField" @search="searchTag"></tag-list>
    <search-field :keyWord="keyWord" v-show="keyWord && showField" @search="searchTag"></search-field>
    <search-list v-show="searchList && !showField" :search-list="searchList"></search-list>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import TagList from './TagList.vue'
import SearchField from './Search.vue'
import api from '../../api'
import SearchList from './SearchList.vue'
@Component({
  components: {
    TagList,
    SearchField,
    SearchList,
  },
})
export default class Search extends Vue {
  @Action private hotSearch!: () => void
  private render!: boolean
  private keyWord!: string
  private searchList!: object
  private showField!: boolean
  private data() {
    return {
      keyWord: '',
      searchList: null,
      showField: true,
    }
  }
  private async created() {
    await this.hotSearch()
  }
  private async search(e: any) {
    (document.querySelector('.input') as HTMLElement).blur()
    e.preventDefault()
    this.searchList = await api.search(this.keyWord)
    this.showField = false
  }
  private focus() {
    this.showField = true
  }
  private async searchTag(val: string) {
    const keyWord = val ? val : this.keyWord
    this.searchList = await api.search(keyWord)
    this.showField = false
  }
}
</script>
<style lang="scss" scoped>
.search {
  .form {
    padding: 15px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    .input-wrap {
      box-sizing: border-box;
      display: flex;
      align-items: center;
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

        &::-webkit-search-cancel-button {
          -webkit-appearance: none;
        }
      }
    }
  }
}
</style>

