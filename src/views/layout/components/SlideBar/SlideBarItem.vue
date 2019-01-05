<template>
    <div class="headerBox">
        <el-menu-item
        :index="item.id"
        v-for="(item) in list"
        :key="item.id"
        >
          {{ item.text }}
        </el-menu-item>
    </div>
</template>

<script>
export default {
  name: 'SlideBarItem',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" >
.headerBox {
  height: 68px;
}
</style>
