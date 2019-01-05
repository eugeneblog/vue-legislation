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
                  <detail-collapse :collapseData="caseDetail"></detail-collapse>
                </el-tab-pane>
                <el-tab-pane label="文件" name="third">
                  <el-table
                  :data="files"
                  >
                    <el-button>上传文件</el-button>
                    <el-table-column
                    prop="date"
                    label="日期"
                    sortable
                    column-key="date"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="fileName"
                    label="文件名"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="updateMan"
                    label="最近修改人"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="fileSize"
                    label="文件大小"
                    >
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
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
      id: '',
      task: [],
      caseDetail: [],
      files: []
    }
  },
  methods: {
    handleClick (tab, event) {
      if (tab.label === '案情') {
        console.log('点击了案情')
        // 发送ajax，获取案情
        this.$store.dispatch('getProgramCase', this.id - 1).then(data => {
          this.caseDetail = data
        })
      } else if (tab.label === '文件') {
        this.$store.dispatch('getProgramFiles', this.id - 1).then(data => {
          this.files = data
        })
      }
    },
    selectNodeHandel (data, o, node) {
      console.log(`点击了${o.data.label}`)
    }
  },
  activated () { // 由于app使用了keep-alive页面dom不会重新渲染，所以使用activated替换mounted钩子, deactivated替换destroy
    // 获取当前路由参数
    let id = this.$route.params.path
    this.id = id
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
