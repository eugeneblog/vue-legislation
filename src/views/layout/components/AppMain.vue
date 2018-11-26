<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <keep-alive>
                <router-view :key="key"/>>
            </keep-alive>
        </transition>
    </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key () {
      return this.$router.fullPath
    }
  }
}
</script>

<style>
.app-main {
  /*84 = navbar + tags-view = 50 +34 */
  padding-top: 64px;
  height: 100%;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  background: #f0f0f0;
}
</style>
