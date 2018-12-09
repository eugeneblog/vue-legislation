<script>
import ListItem from './components/ListItem.vue'
import Participation from './components/Participation.vue'
export default {
  name: 'Member',
  props: {
    memberType: String, // 接受参数，决定选择使用哪个子组件
    memberData: Object
  },
  methods: {
    nativeSelctHandle () {
      alert('aa')
    }
  },
  render (h) {
    let _this = this
    let isMemberType = function (val, data) { // 判断组件类型
      if (val === 'text') {
        let _default = {
          content: data.content || '内容丢失了，刷新试试'
        }
        return h('div',
          {
            'class': 'member_text'
          },
          _default.content
        )
      } else if (val === 'participation') { // 增删成员 组件
        return h(
          Participation, {
            props: {
              particData: data.memberData || ''
            },
            on: {
              addrole: _this.nativeSelctHandle
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
        isMemberType(this.memberType, this.memberData)
      ]
    )
  }
}
</script>

<style lang="scss" scoped>
.member_wrap {
  background: #fff;
}
</style>
