import { ActionTree } from 'vuex'
import api from '../api/index'
import axios from 'axios'

const actions: ActionTree<any, any> = {
  async personalized({ state, commit }) {
    const res = await api.personalized()
      .catch((e: string) => console.error(e))
    if (res) {
      commit('PERSONALIZED', res)
    }
  },
  async newSong({ state, commit}) {
    const res = await api.newSong()
      .catch((e: string) => console.error(e))
    if (res) {
      commit('NEW_SONG', res)
    }
  },
  async hotSearch({ state, commit }) {
    const res = await api.hotSearch()
      .catch((e: string) => console.error(e))
    if (res) {
      commit('HOT_SEARCH', res)
    }
  },
  async playList({ state, commit}, id: string) {
    const res = await api.playList(id)
      .catch((e: string) => console.error(e))
    if (res) {
      commit('PLAY_LIST', res)
    }
  },
}

export default actions
