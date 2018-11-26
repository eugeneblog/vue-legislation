import { getLawsuitData } from '@/api/lawsuit.js'
import { getToken } from '@/utils/auth'

let token = getToken()

const lawsuit = {
  state: {
    lawsuitData: []
  },
  actions: {
    getLawsuitData ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getLawsuitData(token).then(response => {
          let data = response.data
          commit('SET_LAWSUITDATA', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  mutations: {
    SET_LAWSUITDATA (state, data) {
      state.lawsuitData = data
    }
  }
}

export default lawsuit
