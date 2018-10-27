<template>
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        >
            <SlideBarItem/>
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
      activeIndex2: '1'
    }
  },
  components: {
    SlideBarItem
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push('/dashboard/foo/calenDar')
    }
  },
  mounted () {
    console.log(this.resolvePath)
  }
}
</script>
