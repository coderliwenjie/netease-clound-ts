export default {
  PERSONALIZED(state: any, res: any) {
    state.personalizedData = res
  },
  NEWSONG(state: any, res: any) {
    state.newSongData = res
  },
  HOTSEARCH(state: any, res: any) {
    state.hotSearchData = res
  },
}
