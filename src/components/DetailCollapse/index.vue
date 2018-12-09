<template>
    <div class="collapse_box">
        <el-collapse>
          <el-collapse-item
          v-for="item in collapseData"
          :key="item.id"
          >
              <template slot="title">
              {{ item.title }}<i class="header-icon el-icon-info"></i>
              </template>
              <div>
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
  }
}
</script>

<style lang="scss" scoped>
.collapse_box {
  padding-left: 20px;
}
</style>
