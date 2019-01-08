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
            @select="selectHandle"
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
  data () {
    return {
      multipleSelection: [],
      selectionRows: []
    }
  },
  props: {
    tableData: Array
  },
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    handleSelectionChange (rows) {
      // 发送ajax请求，标记完成任务
      this.multipleSelection = rows
      console.log(rows)
    },
    selectHandle (s, row) {
      console.log(s, row)
    }
  }
}
</script>
