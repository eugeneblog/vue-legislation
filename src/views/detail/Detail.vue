<template>
    <div class="detail_table_wrap box_wrap">
        <template>
            <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="任务" name="first">
                    <el-container>
                        <el-col :span="6">
                          <detail-menu
                          :menuData="task"
                          ></detail-menu>
                          <!-- datail-menu 与 detail-collapse 共用一个数据 -->
                        </el-col>
                        <el-col :span="18">
                          <detail-collapse :collapseData="task"></detail-collapse>
                        </el-col>
                    </el-container>
                </el-tab-pane>
                <el-tab-pane label="案情" name="second">
                  <detail-collapse></detail-collapse>
                </el-tab-pane>
                <el-tab-pane label="文件" name="third">文件</el-tab-pane>
            </el-tabs>
        </template>
    </div>
</template>

<script>
import DetailMenu from '@/components/DetailTreeMenu/index.vue'
import DetailCollapse from '@/components/DetailCollapse/index.vue'
export default {
  name: 'Detail',
  components: {
    DetailMenu,
    DetailCollapse
  },
  data () {
    return {
      activeName: 'first',
      isCollapse: true,
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      task: [
        {
          id: 1,
          label: '和解谈判',
          title: '和解谈判',
          stage: 2,
          iconClass: '',
          type: 'text',
          record: [
            {
              id: '1',
              text: '记录一'
            }, {
              id: '2',
              text: '记录二'
            }
          ]
        }, {
          id: 2,
          label: '立案准备',
          stage: 1,
          title: '立案准备',
          iconClass: '',
          type: 'text',
          record: [
            {
              id: '1',
              text: '记录二'
            }
          ]
        }, {
          id: 3,
          label: '财产保全',
          stage: 3,
          title: '财产保全',
          iconClass: '',
          type: 'text',
          record: [
            {
              id: '1',
              text: '记录三'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    selectNodeHandel (data, o, node) {
      console.log(`点击了${o.data.label}`)
    }
  },
  activated () { // 由于app使用了keep-alive页面dom不会重新渲染，所以使用activated替换mounted钩子, deactivated替换destroy
    // 获取当前路由参数
    let id = this.$route.params.path
    // 根据id查找需要的数据, 获取treedata
    this.$store.dispatch('getProgramDetail', id - 1).then(data => {
      this.task = data.task
    })
  }
}
</script>

<style lang="scss" scoped>
.el-tabs {
    height: 100%;
}
</style>
