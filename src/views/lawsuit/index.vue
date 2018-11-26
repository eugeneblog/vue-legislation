<template>
    <div class="lawsuit-wrap">
        <card title="aa"/>
    </div>
</template>

<script>
import { card } from './compoents'
export default {
  name: 'Lawsuit',
  components: {
    card
  },
  data () {
    return {
      lawsuitData: []
    }
  },
  beforeCreate () {
    this.$store.dispatch('getLawsuitData')
  }
}
</script>
<style lang="scss" scoped>
    .lawsuit-wrap {
        margin: 20px;
    }
</style>
