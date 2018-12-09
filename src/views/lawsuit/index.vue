<template>
    <div class="box_wrap">
        <div class="top_tools">
          <add-card @select="addProgramHandle"/>
        </div>
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
import { card, AddCard } from './compoents'
export default {
  name: 'Lawsuit',
  components: {
    card,
    AddCard
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
    },
    addProgramHandle () {
      const h = this.$createElement
      this.$msgbox({
        titls: '消息',
        message:  h('p', null, [
          h('span', null, '内容'),
          h('i', { style: 'color: teal' }, 'VNode')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action == 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '执行中...'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 3000)
          } else {
            done()
          }
        }
      }).then(action => {
        this.$message({
          type: 'info',
          message: 'action: ' + action
        })
      })
    }
  }
}
</script>
