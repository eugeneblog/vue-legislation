<template>
    <el-dialog
    :title="dialogTitle"
    :visible.sync="dialogFormVisible"
    :before-close="handleClose">
    <from :data="data"/>
    <span slot="footer" class="dialog-footer">
        <el-button @click="closeHandle">取 消</el-button>
        <el-button type="primary" @click="confirmHandle">确 定</el-button>
    </span>
    </el-dialog>
</template>

<script>
import From from './components/From'
export default {
  name: 'CalenDarDialog',
  props: {
    dialogFormVisible: Boolean,
    dialogTitle: String,
    data: Object
  },
  methods: {
    handleClose (done) {
      this.$emit('done')
    },
    closeHandle () {
      this.$emit('close')
    },
    confirmHandle () {
      this.$emit('confirm')
    }
  },
  components: {
    From
  }
}
</script>
