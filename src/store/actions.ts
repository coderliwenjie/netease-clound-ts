import { ActionTree } from 'vuex'
import { personalized } from '../api/index'
import axios from 'axios'

const actions: ActionTree<any, any> = {
  async personalized({ state, commit }) {
    const res = await personalized()
      .then((result) => result.data)
      .catch((e: string) => console.error(e))
    if (res) {
      commit('PERSONALIZED', res)
    }
  },
}

export default actions
