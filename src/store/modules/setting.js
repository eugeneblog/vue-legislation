import { GetUserData } from '@/api/setting.js'

const setting = {
  state: {
    userData: ''
  },
  actions: {
    getUserData ({ commit, state }) {
      let username = this.state.user.username
      return new Promise((resolve, reject) => {
        GetUserData(username).then(response => {
          let data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default setting
