<template>
    <div class="collapse_box">
        <el-collapse>
          <el-collapse-item
          v-for="item in collapseData"
          :key="item.id"
          >
              <template slot="title">
              {{ item.label }}
              <!-- <i class="header-icon el-icon-info"></i> -->
              </template>
              <div>
                <!-- <el-button @click="addRecordHandle" type="text" icon="el-icon-plus">添加新记录</el-button> -->
                <member :memberType="item.type" :memberData="item"/>
              </div>
          </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
import Member from '@/components/Member/index.vue'
export default {
  name: 'DetailCollapse',
  components: {
    Member
  },
  props: {
    collapseData: Array
  },
  methods: {
    addRecordHandle () {
      console.log('add record')
    }
  }
}
</script>

<style lang="scss" scoped>
.collapse_box {
  padding-left: 20px;
}
</style>
