import { ActionTree } from 'vuex'
import api from '../api/index'
import axios from 'axios'

const actions: ActionTree<any, any> = {
  async personalized({ state, commit }) {
    const res = await api.personalized()
      .then((result) => result.data)
      .catch((e: string) => console.error(e))
    if (res) {
      commit('PERSONALIZED', res)
    }
  },
  async newSong({ state, commit}) {
    const res = await api.newSong()
      .then((result) => result.data)
      .catch((e: string) => console.error(e))
    if (res) {
      commit('NEWSONG', res)
    }
  },
}

export default actions
