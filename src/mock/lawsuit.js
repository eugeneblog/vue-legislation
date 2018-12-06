const lawsuitData = [{
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
}]

export default {
  sendLawsuitData: config => {
    let token = config.body
    if (token) {
      return lawsuitData
    }
  }
}
