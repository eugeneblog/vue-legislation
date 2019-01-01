<template>
    <div>
        <el-table
        :data="tableData"
        style="width: 100%"
        :stripe="false"
        :border="false"
        >
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
    }
  }
}
</script>
