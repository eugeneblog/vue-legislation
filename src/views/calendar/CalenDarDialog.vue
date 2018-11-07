<template>
    <el-dialog
    :title="dialogTit"
    :visible.sync="dialogFormVisible"
    :before-close="handleClose">
    <from :data="data"/>
    <span slot="footer" class="dialog-footer">
        <el-button @click="closeHandle">{{ closeOrdel }}</el-button>
        <el-button type="primary" @click="confirmHandle">{{ updateOrCreate }}</el-button>
    </span>
    </el-dialog>
</template>

<script>
import From from './components/From'
export default {
  name: 'CalenDarDialog',
  props: {
    dialogFormVisible: Boolean,
    dialogTit: String,
    data: Object,
    updateOrCreate: String,
    closeOrdel: String
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
