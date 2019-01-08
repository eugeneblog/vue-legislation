import { param2Obj } from '@/utils'
let lawsuitData = [{
  id: '1',
  title: '清华非洲学生骗中国女友600万被判14年：驱逐出境',
  state: '正在办理',
  businessType: 'lawsuit',
  addition: {
    date: '2018-3-4 08:43',
    linkman: 'Mr.Zhang',
    phone: '13845452678'
  },
  context: '由于法律未明文规定赔偿权利人之间如何分配死亡赔偿金等问题。故实践中对死亡赔偿金的分配常常会因认识不一致引发争议……',
  footer: {
    evolve: '拍板完成',
    sponsor: '无'
  },
  task: [
    {
      id: 1,
      label: '和解谈判',
      stage: 2,
      type: 'text',
      iconClass: '',
      record: [{
        id: '1',
        date: '2018-12-24',
        text: '记录一'
      }, {
        id: '2',
        date: '2018-12-24',
        text: '记录二'
      }]
    }, {
      id: 2,
      label: '立案准备',
      stage: 1,
      type: 'text',
      iconClass: '',
      record: []
    }, {
      id: 3,
      label: '财产保全',
      type: 'text',
      stage: 3,
      iconClass: '',
      record: []
    }
  ],
  case: [{
    id: '1',
    label: '基础信息',
    type: 'list',
    context: [{
      id: '1',
      iconClass: '',
      name: '联系人',
      value: '王五'
    }, {
      id: '2',
      iconClass: '',
      name: '电话',
      value: '17301193803'
    }, {
      id: '3',
      iconClass: '',
      name: '案件名称',
      value: '诉讼项目一'
    }, {
      id: '4',
      iconClass: '',
      name: '案由',
      value: '交通事故纠纷'
    }, {
      id: '5',
      iconClass: '',
      name: '来源',
      value: '北京'
    }]
  }], // 案情
  files: [{
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    fileName: 'food.docx',
    fileSize: '200kb',
    date: '2019-1-11',
    updateMan: 'Mr.Li'
  }, {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    fileName: 'axios.xls',
    fileSize: '300kb',
    date: '2019-1-11',
    updateMan: '张律师'
  }]
}, {
  id: '2',
  title: '常年项目一',
  state: '正在办理',
  businessType: 'perennial',
  addition: {
    date: '2018-3-4 08:43',
    linkman: 'Mr.Zhang',
    phone: '13845452678'
  },
  context: '由于法律未明文规定赔偿权利人之间如何分配死亡赔偿金等问题。故实践中对死亡赔偿金的分配常常会因认识不一致引发争议……',
  footer: {
    evolve: '拍板完成',
    sponsor: '无'
  },
  task: [
    {
      id: 1,
      label: '阶段一',
      stage: 2,
      type: 'text',
      iconClass: '',
      record: []
    }, {
      id: 2,
      label: '阶段二',
      type: 'text',
      stage: 1,
      iconClass: '',
      record: []
    }, {
      id: 3,
      label: '阶段三',
      stage: 3,
      type: 'text',
      iconClass: '',
      record: []
    }
  ],
  case: [{
    id: '1',
    title: '基础信息',
    context: [{
      id: '1',
      iconClass: '',
      name: '联系人',
      value: '王五'
    }, {
      id: '2',
      iconClass: '',
      name: '电话',
      value: '17301193803'
    }, {
      id: '3',
      iconClass: '',
      name: '案件名称',
      value: '诉讼项目一'
    }, {
      id: '4',
      iconClass: '',
      name: '案由',
      value: '交通事故纠纷'
    }, {
      id: '5',
      iconClass: '',
      name: '来源',
      value: '北京'
    }]
  }], // 案情
  files: [{
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    fileName: 'food.docx',
    fileSize: '200kb',
    date: '2019-1-11',
    updateMan: 'Mr.Li'
  }, {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    fileName: 'axios.xls',
    fileSize: '300kb',
    date: '2019-1-11',
    updateMan: '张律师'
  }]
}, {
  id: '3',
  title: '非诉项目',
  state: '正在办理',
  businessType: 'special',
  addition: {
    date: '2018-3-4 08:43',
    linkman: 'Mr.Zhang',
    phone: '13845452678'
  },
  context: '由于法律未明文规定赔偿权利人之间如何分配死亡赔偿金等问题。故实践中对死亡赔偿金的分配常常会因认识不一致引发争议……',
  footer: {
    evolve: '拍板完成',
    sponsor: '无'
  },
  task: [
    {
      id: 1,
      label: '阶段一',
      stage: 2,
      type: 'text',
      iconClass: '',
      record: []
    }, {
      id: 2,
      label: '阶段二',
      type: 'text',
      stage: 1,
      iconClass: '',
      record: []
    }
  ],
  case: [{
    id: '1',
    title: '基础信息',
    item: [{
      id: '1',
      iconClass: '',
      name: '联系人',
      value: '王五'
    }, {
      id: '2',
      iconClass: '',
      name: '电话',
      value: '17301193803'
    }, {
      id: '3',
      iconClass: '',
      name: '案件名称',
      value: '诉讼项目一'
    }, {
      id: '4',
      iconClass: '',
      name: '案由',
      value: '交通事故纠纷'
    }, {
      id: '5',
      iconClass: '',
      name: '来源',
      value: '北京'
    }]
  }], // 案情
  files: [{
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    fileName: 'food.docx',
    fileSize: '200kb',
    date: '2019-1-11',
    updateMan: 'Mr.Li'
  }, {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    fileName: 'axios.xls',
    fileSize: '300kb',
    date: '2019-1-11',
    updateMan: '张律师'
  }]
}]

export default {
  sendLawsuitData: config => {
    let type = JSON.parse(config.body).type || ''
    let o = []
    lawsuitData.forEach((e, i, arr) => {
      if (e.businessType === type) {
        o.push(e)
      }
    })
    return o
  },
  createStage: config => {
    // 创建阶段
  },
  createLawsuitProgram: config => {
    let data = JSON.parse(config.body)
    if (data) {
      let o = {
        id: lawsuitData.length + 1,
        title: data.val.caseName,
        state: data.val.status ? '完成' : '完成',
        businessType: data.val.businessType,
        addition: {
          data: new Date(),
          linkman: 'Mr.Zhang',
          phone: data.val.phone
        },
        context: 'asfafasdf',
        footer: {
          evolve: data.val.status ? '完成' : '正在进行中',
          sponsor: '无'
        },
        task: [
          {
            id: 1,
            label: '阶段一',
            stage: 2,
            type: 'text',
            iconClass: '',
            record: []
          }, {
            id: 2,
            label: '阶段二',
            type: 'text',
            stage: 1,
            iconClass: '',
            record: []
          }, {
            id: 3,
            label: '阶段三',
            stage: 3,
            type: 'text',
            iconClass: '',
            record: []
          }
        ],
        case: [{
          id: '1',
          title: '基础信息',
          item: [{
            id: '1',
            iconClass: '',
            name: '联系人',
            value: '王五'
          }, {
            id: '2',
            iconClass: '',
            name: '电话',
            value: '17301193803'
          }, {
            id: '3',
            iconClass: '',
            name: '案件名称',
            value: '诉讼项目一'
          }, {
            id: '4',
            iconClass: '',
            name: '案由',
            value: '交通事故纠纷'
          }, {
            id: '5',
            iconClass: '',
            name: '来源',
            value: '北京'
          }]
        }] // 案情
      }
      lawsuitData.push(o)
      return o
    }
  },
  searchLawsuitData: config => {
    const { id } = param2Obj(config.url)
    return lawsuitData[id]
  },
  searchLawsuitCases: config => {
    const { id } = param2Obj(config.url)
    return lawsuitData[id].case
  },
  searchProgramFiles: config => {
    const { id } = param2Obj(config.url)
    return lawsuitData[id].files
  }
}
