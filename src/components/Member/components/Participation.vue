<template>
    <div class="usergroup_wrap">
        <div
        v-for="item in particData.userGroup"
        :key="item.id"
        class="userGroup_item"
        >
            <div class="usergroup_img">
                <img :src="'static/usergroup/' + item.imgUrl"/>
            </div>
            <span class="usergroup_name">{{ item.name }}</span>
        </div>
        <div class="userGroup_item userGroup_add" @click="addUserHandle">
            <div class="usergroup_img">
                <i class="el-icon-plus"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Participation',
  props: {
    particData: Object
  },
  methods: {
    addUserHandle () {
      this.$emit('addrole')
    }
  },
  mounted () {
    console.log(this.particData)
  }
}
</script>

<style lang="scss" scoped>
.usergroup_wrap {
    padding: 10px;
    float: left;
    .userGroup_item {
        float: left;
        margin-left: 10px;
        margin-right: 20px;
        text-align: center;
        span {
            float: left;
            width: 100%;
            margin: 0 auto;
            padding: 10px 0;
        }
        .usergroup_img {
            width: 60px;
            height: 60px;
            overflow: hidden;
            border-radius: 50%;
            img {
                width: 60px;
                height: 60px;
            }
        }
        &.userGroup_add {
            border: 1px dotted #bbb;
            border-radius: 50%;
            cursor: pointer;
            i {
                display: block;
                width: 100%;
                height: 100%;
                font-size: 40px;
                line-height: 60px;
                color: #bbb;
            }
        }
    }
}
</style>
