<template>
    <div>
        <el-select v-model="region" placeholder="请选择业务类型">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
        </el-select>
    </div>
</template>

<script>
export default {
  name: 'TypeSelect',
  data: {
    region: ''
  }
}
</script>

<style lang="scss" scoped>

</style>
