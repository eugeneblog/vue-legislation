<template>
    <div  class="app-wrapper">
        <slide-bar/>
        <app-main/>
    </div>
</template>

<script>
import { SlideBar, AppMain } from './components'
export default {
  name: 'Layout',
  components: {
    SlideBar,
    AppMain
  },
  mounted () {
    console.log(this.$store.state.app)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/styles/mixin.scss";
    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
    }
</style>
