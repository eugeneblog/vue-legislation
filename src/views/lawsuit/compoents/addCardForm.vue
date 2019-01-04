<script>
import AddRole from '@/components/AddRole'
import Vue from 'vue'
import store from '@/store'
export default {
  name: 'AddCardForm',
  // functional: true, // 开启之后render可以使用context对象参数, 开启之后render的this无法指向实例
  props: {
    fromData: Array,
    refName: String
  },
  data () {
    return {
      form: {},
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
  },
  methods: {
    mapFromDataModel (data) {
      let newObj = {}
      data.forEach((item, index) => {
        item.inputs.forEach((ele, num) => {
          newObj[ele.name] = ''
        })
      })
      return newObj
    }
  },
  render (h) {
    let self = this
    let useCompoents = function (type, data) {
      if (type === 'text') {
        return h('el-input', {
          props: {
            value: self.form[data.name]
          },
          on: {
            input: function (e) {
              self.form[data.name] = e
            }
          },
          attrs: {
            placeholder: `请输入${data.label}`
          }
        })
      } else if (type === 'participation') {
        return h(AddRole)
      } else if (type === 'select') {
        return h(
          'el-select',
          {
            props: {
              placeholder: data.placeholder,
              value: self.form[data.name]
            },
            on: {
              change: function (e) {
                self.form[data.name] = e
              }
            }
          },
          data.select.map((e, i, arr) => {
            return h(
              'el-option',
              {
                props: {
                  label: e.label,
                  value: e.value
                }
              }
            )
          })
        )
      } else {
        return null
      }
    }
    return (
      <el-form ref={ this.refName } rules={ this.rules } model={ this.form } label-width="100px">
        {
          this.fromData.map((item, ind) => {
            return (
              <div>
                <h3 class="text-align">{ item.title }</h3>
                {
                  item.inputs.map((ele, num) => {
                    return (
                      <el-form-item prop={ ele.name } label={ ele.label }>
                        {
                          h('div', [
                            useCompoents(ele.type, ele)
                          ])
                        }
                      </el-form-item>
                    )
                  })
                }
              </div>
            )
          })
        }
      </el-form>
    )
  },
  mounted () {
    Vue.$bus = {
      refs: this.$refs
    }
    store.dispatch('setAddFormData', this.mapFromDataModel(this.fromData))
    this.form = store.state.lawsuit.addFormData
    console.log(this.form)
  }
}
</script>
