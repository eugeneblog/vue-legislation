import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
    schedules: {
      events: [{
        title: 'event1',
        start: [2018, 10, 19, 10, 0, 0]
      },
      {
        title: 'event3',
        start: '2018-11-09',
        context: '诉讼项目1'
      },
      {
        title: 'event2',
        start: '2018-11-05',
        end: '2018-11-07',
        context: '去江苏出差'
      }]
    }
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default {
  loginByUserName: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  loginOut: () => 'success'
}
