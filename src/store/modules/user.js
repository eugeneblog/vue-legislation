import { loginByUserName, loginOut, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    username: '',
    avatar: '',
    introduction: '',
    roles: [],
    schedules: {},
    setting: {
      articlePlatform: []
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_NAME: (state, name) => {
      state.username = name
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    }
  },
  actions: {
    LoginByUserName ({ commit, state }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUserName(username, userInfo.password).then(response => {
          const data = response.data
          commit('SET_TOKEN', data.token)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          setToken(response.data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetUserInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => { // 获取用户列表
          if (!response.data) {
            reject(new Error('error: please check '))
          }
          const data = response.data

          if (data.roles && data.roles.length > 0) {
            commit('SET_ROLES', data.roles)
          } else {
            reject(new Error('getInfo: roles must be a non-null array !'))
          }
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    LoginOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        loginOut(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(new Error(error))
        })
      })
    }
  }
}

export default user
