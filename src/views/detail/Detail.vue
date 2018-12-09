<template>
    <div class="detail_table_wrap box_wrap">
        <template>
            <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="任务" name="first">
                    <el-container>
                        <el-col :span="6">
                            <detail-menu></detail-menu>
                        </el-col>
                        <el-col :span="18">
                            <detail-collapse :collapseData="taskDetail"></detail-collapse>
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
      activeName: 'second',
      isCollapse: true,
      taskDetail: [{
        id: '1',
        title: '资料收取与查询',
        type: 'text',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
      }, {
        id: '2',
        title: '成员',
        type: 'participation',
        memberData: {
          userGroup: [{
            id: '1',
            name: 'Eugene',
            imgUrl: 'img_eugene_32@3x.png'
          }, {
            id: '2',
            name: 'Job',
            imgUrl: 'img_eugene_32@3x.png'
          }]
        }
      }]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-tabs {
    height: 100%;
}
</style>
