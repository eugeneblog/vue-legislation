<template>
    <div class="headerBox">
        <el-menu-item
        :index="item.id"
        v-for="(item) in list"
        :key="item.id"
        >{{ item.text }}</el-menu-item>
    </div>
</template>

<script>
export default {
  name: 'SlideBarItem',
  data () {
    return {
      onlyOneChild: null
    }
  },
  props: {
    list: Array,
    basePath: {
      type: String,
      default: ''
    }
  },
  methods: {
    itemClickHand (key, keyPath) {
      console.log(key)
      console.log('change router')
    },
    resolvePath (routePath) {

    }
  }
}
</script>

<style lang="scss" >
.headerBox {
  width: 1200px;
  margin: 0 auto;
}
.el-menu-item:hover {
  background: none;
}
// .is-active {

// }
</style>
