const user = {
  state: {
    user: '',
    status: '',
    code: '',
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  }
//   actions: {
//     LoginByUserName ({ commit }, userInfo) {
//       const username = userInfo.username.trim()
//       return new Promise((resolve, reject) => {
//         LoginByUserName(username, userInfo.password).then(response => {
//           const data = response.data
//           commit('SET_TOKEN', data.token)
//           setToken(response.data.token)
//           resolve()
//         }).catch(error => {
//           reject(error)
//         })
//       })
//     }
//   }
}

export default user
