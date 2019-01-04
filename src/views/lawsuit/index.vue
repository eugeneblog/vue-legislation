<template>
    <div class="box_wrap">
        <div class="top_tools">
          <add-card @select="addProgramHandle"/>
        </div>
        <card
        v-for="item in lawsuitData"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :date="item.addition.date"
        :linkman="item.addition.linkman"
        :phone="item.addition.phone"
        :context="item.context"
        :evolve="item.footer.evolve"
        :sponsor="item.footer.sponsor"
        @select="cardClickHandle"
        />
    </div>
</template>

<script>
import { card, AddCard, AddCardForm } from './compoents'
import Vue from 'vue'
export default {
  name: 'Lawsuit',
  components: {
    card,
    AddCard
  },
  data () {
    return {
      lawsuitData: [],
      addCardFormData: [{
        id: '1',
        title: '基础信息',
        inputs: [{
          id: '1',
          name: 'caseName',
          label: '案件名称',
          type: 'text',
          default: ''
        }, {
          id: '2',
          name: 'businessType',
          label: '业务类型',
          type: 'select',
          placeholder: '请选择业务类型',
          select: [{
            id: '1',
            label: '诉讼项目',
            value: 'lawsuit'
          }, {
            id: '2',
            label: '非诉项目',
            value: 'special'
          }, {
            id: '3',
            label: '常年顾问',
            value: 'perennial'
          }],
          default: '诉讼项目'
        }, {
          id: '3',
          name: 'caseAction',
          label: '案由',
          type: 'text',
          default: ''
        }, {
          id: '4',
          name: 'status',
          label: '状态',
          type: 'select',
          placeholder: '请选择状态',
          select: [{
            id: '1',
            label: '在办',
            value: false
          }, {
            id: '2',
            label: '完成',
            value: true
          }],
          default: ''
        }, {
          id: '5',
          name: 'linkman',
          label: '联系人',
          type: 'text',
          default: ''
        }, {
          id: '6',
          name: 'phone',
          label: '联系电话',
          type: 'text',
          default: ''
        }]
      }, {
        id: '2',
        title: '当事人信息',
        inputs: [{
          id: '1',
          name: 'identity',
          label: '当事人身份',
          type: 'text',
          default: ''
        }, {
          id: '2',
          name: 'concern1',
          label: '关注点1',
          type: 'text',
          default: ''
        }, {
          id: '3',
          name: 'concern2',
          label: '关注点2',
          type: 'text',
          default: ''
        }]
      }]
    }
  },
  beforeCreate () {
    this.$store.dispatch('getLawsuitData', 'lawsuit').then(data => {
      this.lawsuitData = data
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    cardClickHandle (id) {
      this.$store.dispatch('setPresent', id) // 当前打开的页面
      this.$router.push(`/redirect/${id}`)
    },
    addProgramOkHandle () {
      let data = this.$store.state.lawsuit.addFormData // 获取新项目数据
      this.$store.dispatch('createProgram', data) // 交由store进行数据处理，异步传输
    },
    addProgramHandle () {
      const h = this.$createElement
      this.$msgbox({
        title: '新建项目',
        message: h(AddCardForm, {
          props: {
            fromData: this.addCardFormData,
            refName: 'addCardForm'
          }
        }),
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonText: '立即创建',
        closeOnClickModal: false,
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            Vue.$bus.refs.addCardForm.validate((valid) => {
              if (valid) {
                this.addProgramOkHandle()
                instance.confirmButtonLoading = true
                instance.confirmButtonText = '执行中...'
                setTimeout(() => {
                  done()
                  setTimeout(() => {
                    instance.confirmButtonLoading = false
                  }, 300)
                }, 1000)
              } else {
                this.$message({
                  type: 'warning',
                  message: '请检查项目信息是否正确'
                })
              }
            })
          } else {
            done()
          }
        }
      }).then(action => {
        this.$message({
          type: 'success',
          message: '成功新增项目'
        })
      })
    }
  }
}
</script>
