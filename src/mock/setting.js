import { param2Obj } from '@/utils'

let userData = [{
  userName: 'Eugene',
  userId: '228352',
  password: '123456789',
  phone: '17301193803',
  avatar: 'static/usergroup/img_eugene_32@3x.png',
  authentication: {
    identityCard: '360781198912428897',
    name: '马化腾',
    address: '广东省深圳市'
  }
}, {
  userName: 'Job',
  userId: '242674',
  password: '123456789',
  phone: '17301193803',
  authentication: {
    identityCard: '360781198912428896',
    name: '张天爱',
    address: '北京市朝阳区'
  }
}]

export default {
  searchUserData: config => {
    let userName = param2Obj(config.url).userName
    for (let index = 0; index < userData.length; index++) {
      if (userData[index].userName === userName) {
        return userData[index]
      }
    }
  }
}
