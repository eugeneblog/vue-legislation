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
      list: [{
        id: '1',
        text: '日程安排'
      }, {
        id: '2',
        text: '诉讼项目'
      }, {
        id: '3',
        text: '专项业务'
      }, {
        id: '4',
        text: '常年顾问'
      }, {
        id: '5',
        text: '管理中心'
      }]
    }
  },
  methods: {
    itemClickHand (key, keyPath) {
      console.log(key)
      console.log('change router')
    }
  }
}
</script>

<style lang="scss">
.headerBox {
  width: 1200px;
  margin: 0 auto;
}
</style>
