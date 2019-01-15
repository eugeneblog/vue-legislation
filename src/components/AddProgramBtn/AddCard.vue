<template>
    <div>
      <el-button @click="addProgramHandle" type="primary" round><svg-icon icon-class="featherpen" style="font-size: 20px;" /> 新增项目</el-button>
    </div>
</template>

<script>
import AddCardForm from './addCardForm.vue'
export default {
  name: 'AddCard',
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
      }],
      formModel: {
        caseName: '',
        businessType: '',
        caseAction: '',
        status: '',
        linkman: '',
        phone: '',
        identity: '',
        concern1: '',
        concern2: ''
      }
    }
  },
  methods: {
    addProgramHandle () {
      const h = this.$createElement
      this.$msgbox({
        title: '新建项目',
        message: h(AddCardForm, {
          ref: 'addcardform',
          props: {
            fromData: this.addCardFormData,
            formModel: this.formModel,
            rules: {
              caseName: [
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                { min: 1, max: 12, message: '长度在 1 到 12 个字符', trigger: 'blur' }
              ],
              businessType: [
                { required: true, message: '请选择业务类型', trigger: 'blur' }
              ]
            }
          }
        }),
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonText: '立即创建',
        closeOnClickModal: false,
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            this.$refs.addcardform.$children[0].validate((valid) => {
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
      })
    },
    addProgramOkHandle () {
      let data = this.formModel // 获取新项目数据
      this.$store.dispatch('createProgram', data).then(data => {
        this.$message({
          type: 'success',
          message: data.message
        })
      }).catch(error => {
        console.log(error)
      }) // 交由store进行数据处理，异步传输
    }
  }
}
</script>
