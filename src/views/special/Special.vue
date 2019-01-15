<template>
    <div class="box_wrap">
      <card
      v-for="item in specialData"
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
import Card from '@/components/Card'
import { mapGetters } from 'vuex'
export default {
  name: 'Special',
  components: {
    Card
  },
  computed: {
    ...mapGetters([
      'specialData'
    ])
  },
  methods: {
    cardClickHandle (id) {
      this.$store.dispatch('setPresent', id) // 当前打开的页面
      this.$router.push(`/redirect/${id}`)
    }
  }
}
</script>
