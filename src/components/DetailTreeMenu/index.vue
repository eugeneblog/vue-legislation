<template>
    <div>
        <div class="custom-tree-container">
            <div class="block">
              <!-- 添加阶段 -->
                <el-popover
                placement="right"
                width="160"
                v-model="visible2">
                  <el-input style="margin-bottom: 14px;" placeholder="请输入阶段名称" v-model="form.nodeName" :class="{ isCorrect: isVerify }"></el-input>
                  <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
                    <el-button type="primary" size="mini" @click="appendTree">添加</el-button>
                  </div>
                  <el-button slot="reference">添加阶段</el-button>
                </el-popover>
                <!-- 邀请成员 -->
                <el-popover
                placement="right"
                width="160"
                title="参与人数"
                v-model="visibleUser">
                  <div class="usergroup-item">
                    <ul>
                      <li>
                        <div>
                          <img src="static/usergroup/img_eugene_32@3x.png" alt="">
                          <div class="usergroup-item-username"><a>张律师</a></div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img src="static/usergroup/img_eugene_32@3x.png" alt="">
                          <div class="usergroup-item-username"><a>张律师</a></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <el-button slot="reference">
                    <svg-icon icon-class="icon_users" />
                  </el-button>
                </el-popover>
                <el-tree
                :data="menuData"
                node-key="id"
                default-expand-all
                :expand-on-click-node="false"
                :render-content="renderContent"
                @node-click="nodeClickHandle"
                @node-contextmenu="nodeContextMenuHandle"
                draggable
                :allow-drag="allowDrapHandle"
                :allow-drop="allowDropHandle"
                >
                </el-tree>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'DetailMenu',
  props: {
    menuData: Array
  },
  data () {
    return {
      addNodeValue: '',
      form: {
        nodeName: ''
      },
      visible2: false,
      visibleUser: false,
      isVerify: false
    }
  },
  methods: {
    appendTree () { // 增加节点
      let pattern = /^\S{1,8}/
      if (pattern.test(this.form.nodeName)) {
        // 发送ajax请求，增加节点
        // this.$store.dispatch('addTreeNode', this.form.nodeName)
        console.log(this.menuData)
        this.menuData.push({
          id: this.menuData.length + 1,
          iconClass: '',
          label: this.form.nodeName,
          record: [],
          title: this.form.nodeName,
          type: 'text',
          stage: 1
        })
        this.isVerify = false
        this.visible2 = false
      } else {
        this.isVerify = true
        this.visible2 = true
      }
    },
    renderContent (h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{ node.label }</span>
          <span>
            <el-button size="mini" onClick={ () => { this.miniEditorHandle(node, data, store) } } type="text">编辑</el-button>
          </span>
        </span>
      )
    },
    nodeClickHandle (data, o, node) {
      this.$emit('select-node', data, o, node)
    },
    nodeContextMenuHandle (e, data, o, node) {
      this.$emit('context-menu', e, data, o, node)
    },
    miniEditorHandle (node, data, store) {
      console.log(`点击了${node.data.label}`)
    },
    allowDrapHandle (draggingNode) { // 判断节点能否被拖拽
      return draggingNode.data.label.indexOf('和解谈判') === -1
    },
    allowDropHandle (draggingNode, dropNode, type) { // 拖拽时判定目标节点能否被放置, 只能在同一级拖拽
      if (draggingNode.level === dropNode.level) {
        if (draggingNode.parent.id === dropNode.parent.id) {
          return type === 'prev'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.isCorrect {
  border: 1px solid rgb(255, 47, 0);
  border-radius: 5px;
}
.usergroup-item {
  line-height: 40px;
  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    li {
      padding-bottom: 10px;
      img {
        height: 40px;
        float: left;
      }
      usergroup-item-username {
        display: block;
        float: left;
        text-align: center;
        line-height: 40px;
        a {
          display: block;
          padding-left: 40px;
          line-height: 40px;
        }
      }
    }
  }
}
</style>
