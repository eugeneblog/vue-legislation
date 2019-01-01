<script>
import ListItem from './components/ListItem.vue'
import Participation from './components/Participation.vue'
import Recor from './components/Recor.vue'
export default {
  name: 'Member',
  props: {
    memberType: String, // 接受参数，决定选择使用哪个子组件
    memberData: Object
  },
  methods: {
    nativeSelctHandle () {
      alert('aa')
    },
    addRecordHandle (val) {
      this.$prompt('', '创建阶段记录', {
        confirmButtonText: '发布',
        cancelButtonText: '取消',
        inputPattern: /^\S+/,
        inputErrorMessage: '记录格式不正确'
      }).then(({ value }) => {
        this.createNewRecor(value, val)
        this.$message({
          type: 'success',
          message: '创建记录: ' + value
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    createNewRecor (val, o) { // 创建记录
      o.record.push({
        id: o.record.length,
        text: val
      })
    }
  },
  render (h) {
    let _this = this
    let isMemberType = function (val, data) { // 判断组件类型
      if (val === 'text') {
        return h('div',
          {
            'class': 'member_text'
          },
          [
            h(Recor, {
              props: {
                tableData: data.record
              }
            })
          ]
        )
      } else if (val === 'participation') { // 增删成员 组件
        return h(
          Participation, {
            props: {
              particData: data.memberData || ''
            },
            on: {
              addrole: _this.nativeSelctHandle()
            }
          }
        )
      } else if (val === 'list') {
        return h(
          ListItem, {
            props: {
              listData: data.memberData || ''
            }
          }
        )
      }
    }
    return h(
      'div', {
        'class': 'member_wrap'
      },
      [
        h('el-button',
          {
            props: {
              type: 'text',
              icon: 'el-icon-plus'
            },
            on: {
              click: function () {
                _this.addRecordHandle(_this.memberData)
              }
            }
          },
          ['添加新记录']
        ),
        isMemberType(_this.memberType, _this.memberData)
      ]
    )
  }
}
</script>

<style lang="scss" scoped>
.member_wrap {
  background: #fff;
}
.el-message-box {
  width: 40%;
}
</style>
