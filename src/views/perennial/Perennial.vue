<template>
    <div class="box_wrap">
        <card
        v-for="item in perenialData"
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
  name: 'Perennial',
  components: {
    card
  },
  data () {
    return {
      perenialData: []
    }
  },
  methods: {
    cardClickHandle (id) {
      this.$store.dispatch('setPresent', id) // 当前打开的页面
      this.$router.push(`/redirect/${id}`)
    }
  },
  beforeCreate () {
    this.$store.dispatch('getLawsuitData', 'perennial').then(data => {
      this.perenialData = data
      console.log(data)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
