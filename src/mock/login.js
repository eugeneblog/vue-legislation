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
    },
    lawsuitData: [{ // 诉讼
      id: '1',
      title: '清华非洲学生骗中国女友600万被判14年：驱逐出境',
      state: '正在办理',
      addition: {
        date: '2018-3-4 08:43',
        linkman: 'Mr.Zhang',
        phone: '13845452678'
      },
      context: '由于法律未明文规定赔偿权利人之间如何分配死亡赔偿金等问题。故实践中对死亡赔偿金的分配常常会因认识不一致引发争议……',
      footer: {
        evolve: '拍板完成',
        sponsor: '无'
      }
    }, {
      id: '2',
      title: '清华非洲学生骗中国女友600万被判14年：驱逐出境',
      state: '正在办理',
      addition: {
        date: '2018-3-4 08:43',
        linkman: 'Mr.Zhang',
        phone: '13845452678'
      },
      context: '由于法律未明文规定赔偿权利人之间如何分配死亡赔偿金等问题。故实践中对死亡赔偿金的分配常常会因认识不一致引发争议……',
      footer: {
        evolve: '拍板完成',
        sponsor: '无'
      }
    }],
    detail: [],
    perennial: []
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
  logout: () => 'success'
}
