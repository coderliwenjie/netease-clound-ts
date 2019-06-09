import { ActionTree } from 'vuex'
import axios from 'axios'
import { personalized } from '../api/index'

const actions: ActionTree<any, any> = {
  async personalized({ state, commit}) {
    const res = await personalized()
      .then((result) => result.data)
      .catch((e: string) => console.error(e))
    if (res) {
      commit('PERSONALIZED', res)
    }
  },
}

export default actions
