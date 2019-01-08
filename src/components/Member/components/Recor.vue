<template>
    <div>
        <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        :stripe="false"
        :border="false"
        @selection-change="handleSelectionChange"
        >
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            fixed
            label="记录"
            prop="text"
            >
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="120"
            >
                <template slot-scope="scope">
                    <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
                        移除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  name: 'Recor',
  props: {
    tableData: Array
  },
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    handleSelectionChange (val) {
      this.$notify({
        title: '提示',
        type: 'success',
        message: '任务标记完成'
      })
    }
  }
}
</script>
