<template>
    <div class="box_wrap">
        <card
        v-for="item in lawsuitData"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :date="item.addition.date"
        :linkman="item.addition.linkman"
        :phone="item.addition.phone"
        :context="item.context"
        :evolve="item.footer.evolve"
        :sponsor="item.footer.sponsor"
        @select="cardClickHandle"
        />
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
    this.$store.dispatch('getLawsuitData').then(data => {
      this.lawsuitData = data
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    cardClickHandle (id) {
      this.$router.push(`/dashboard/foo/detail/${id}`)
    }
  }
}
</script>
