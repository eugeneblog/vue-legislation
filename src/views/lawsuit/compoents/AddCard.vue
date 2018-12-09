<template>
    <div>
        <el-button @click="clickHandle">新增项目</el-button>
    </div>
</template>

<script>
export default {
  name: 'AddCard',
  methods: {
    clickHandle () {
      this.$emit('select')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
