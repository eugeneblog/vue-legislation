<template>
    <div>
        <div class="custom-tree-container">
            <div class="block">
                <el-button @click="appendTree">添加阶段</el-button>
                <el-tree
                :data="treeData"
                node-key="id"
                default-expand-all
                :expand-on-click-node="false"
                :render-content="renderContent">
                </el-tree>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'DetailMenu',
  data () {
    return {
      treeData: [{
        id: 1,
        label: '和解谈判',
        stage: 2,
        iconClass: ''
      }, {
        id: 2,
        label: '立案准备',
        stage: 1,
        iconClass: ''
      }, {
        id: 3,
        label: '财产保全',
        stage: 3,
        iconClass: ''
      }, {
        id: 4,
        label: '立案',
        stage: 3,
        iconClass: ''
      }, {
        id: 5,
        label: '开庭准备',
        stage: 1,
        iconClass: ''
      }, {
        id: 6,
        label: '开庭阶段',
        stage: 0,
        iconClass: ''
      }, {
        id: 7,
        label: '庭后工作',
        stage: 0,
        iconClass: ''
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    appendTree () {
      console.log('append')
    },
    renderContent (h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{ node.label }</span>
          <span>
            <el-button size="mini" type="text">{ `${data.stage} / 3` }</el-button>
          </span>
        </span>
      )
    }
  }
}
</script>
