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
                            <detail-collapse></detail-collapse>
                        </el-col>
                    </el-container>
                </el-tab-pane>
                <el-tab-pane label="案情" name="second">案情</el-tab-pane>
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
      isCollapse: true
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
</style>
