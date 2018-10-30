<template>
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        >
            <SlideBarItem :list = "list"/>
        </el-menu>
    </el-scrollbar>
</template>

<script>
// import { mapGetters } from 'vuex'
import SlideBarItem from './SlideBarItem'
export default {
  name: 'SlideBar',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      list: [{
        id: '1',
        link: 'calenDar',
        text: '日程安排'
      }, {
        id: '2',
        link: 'lawsuit',
        text: '诉讼项目'
      }, {
        id: '3',
        link: 'special',
        text: '专项业务'
      }, {
        id: '4',
        link: 'perennial',
        text: '常年顾问'
      }, {
        id: '5',
        link: 'setting',
        text: '管理中心'
      }]
    }
  },
  components: {
    SlideBarItem
  },
  methods: {
    handleSelect (key, keyPath) {
      const list = this.list
      this.$router.push(`/dashboard/foo/${list[key - 1].link}`)
    }
  },
  mounted () {
    console.log(this.resolvePath)
  }
}
</script>
