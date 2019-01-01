import { GetLawsuitData, CreateNewProgram, CreateNewNode, GetLawsuitDataDetail } from '@/api/lawsuit.js'
import { getToken } from '@/utils/auth'

let token = getToken()

const lawsuit = {
  state: {
    lawsuitData: [],
    addFormData: {},
    detailData: null
  },
  actions: {
    getLawsuitData ({ commit, state }) {
      return new Promise((resolve, reject) => {
        GetLawsuitData(token).then(response => {
          let data = response.data
          commit('SET_LAWSUITDATA', data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getProgramDetail ({ commit, state }, id) {
      return new Promise((resolve, reject) => {
        GetLawsuitDataDetail(id).then(response => {
          let data = response.data
          console.log(data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getAddFormData ({ commit, state }) {
      return state.addFormData
    },
    setAddFormData ({ commit, state }, data) {
      commit('SET_ADDFORMDATA', data)
    },
    createProgram ({ commit, state }, data) {
      // 发送ajax请求，后端保存数据
      return new Promise((resolve, reject) => {
        CreateNewProgram(data).then(response => { // 请求成功后更新项目列表
          let data = response.data
          commit('ADD_NEWFORMDATA', data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    addTreeNode ({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        CreateNewNode(data).then(response => {
          let data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    setPresent ({ commit, state }, id) {
      return new Promise((resolve, reject) => {
        GetLawsuitDataDetail(id).then(response => {
          let data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  mutations: {
    SET_LAWSUITDATA (state, data) {
      state.lawsuitData = data
    },
    SET_ADDFORMDATA (state, data) {
      state.addFormData = data
    },
    ADD_NEWFORMDATA (state, data) {
      state.lawsuitData.push(data)
    }
  }
}

export default lawsuit
