export default {
  PERSONALIZED(state: any, res: any) {
    state.personalizedData = res
  },
  NEW_SONG(state: any, res: any) {
    state.newSongData = res
  },
  HOT_SEARCH(state: any, res: any) {
    state.hotSearchData = res
  },
  PLAY_LIST(state: any, res: any) {
    state.playListData = res
  },
}
