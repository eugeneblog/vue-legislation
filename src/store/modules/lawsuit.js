import { GetLawsuitData, CreateNewProgram, CreateNewNode, GetLawsuitDataDetail, GetProgramCase, GetProgramFiles, GetLawsuitDataInfo } from '@/api/lawsuit.js'

const lawsuit = {
  state: {
    lawsuitData: [],
    detailData: null
  },
  actions: {
    getLawsuitDataInfo ({commit, state}, token) {
      // 获取所有用户项目
      return new Promise((resolve, reject) => {
        GetLawsuitDataInfo(token).then(response => {
          let data = response.data
          commit('SET_LAWSUITDATA', data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getLawsuitData ({ commit, state }, type) {
      return new Promise((resolve, reject) => {
        GetLawsuitData(type).then(response => {
          let data = response.data
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
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getProgramCase ({ commit, state }, id) {
      return new Promise((resolve, reject) => {
        GetProgramCase(id).then(response => {
          let data = response.data
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
          let responseData = response.data
          commit('ADD_NEWFORMDATA', responseData.data)
          resolve(responseData)
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
    },
    getProgramFiles ({ commit, state }, id) {
      return new Promise((resolve, reject) => {
        GetProgramFiles(id).then(response => {
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
