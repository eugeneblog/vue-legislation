<script>
import AddRole from '@/components/AddRole'
export default {
  name: 'AddCardForm',
  // functional: true, // 开启之后render可以使用context对象参数, 开启之后render的this无法指向实例
  props: {
    fromData: Array,
    formModel: Object,
    rules: Object
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
            value: self.formModel[data.name]
          },
          on: {
            input: function (e) {
              self.formModel[data.name] = e
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
              value: self.formModel[data.name]
            },
            on: {
              change: function (e) {
                self.formModel[data.name] = String(e)
                console.log(self.formModel[data.name])
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
      <el-form rules={ this.rules } model={ this.formModel } label-width="100px">
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
  }
}
</script>
