<template>
    <div class="role_box">
        <div class="roles_wrap"
        v-for="item in roles"
        :key="item.id"
        >
            <img :src="item.imgUrl"/>
        </div>
        <div class="addrole_wrap" @click="clickHandle">
            <i class="el-icon-plus"></i>
        </div>
        <div class="assist_wrap">
            <div class="assist_label">
                <span>协办</span>
                <span class="halving__line">|</span>
            </div>
            <div class="addrole_wrap" @click="clickHandle">
                <i class="el-icon-plus"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AddRole',
  props: {
    roles: Array
  },
  methods: {
    clickHandle () {
      this.$emit('select')
    }
  }
}
</script>

<style lang="scss" scoped>
.role_box {
    float: left;
    div {
        float: left;
    }
    .addrole_wrap {
        cursor: pointer;
        width: 48px;
        height: 48px;
        border: 1px dotted #bbb;
        border-radius: 50%;
        i {
            display: block;
            margin: 0 auto;
            font-size: 28px;
            text-align: center;
            color: #bbb;
            line-height: 48px;
            width: 48px;
            height: 48px;
        }
    }
    .roles_wrap {
        margin-right: 10px;
        width: 48px;
        height: 48px;
        overflow: hidden;
        border-radius: 50%;
        img {
            width: 48px;
            height: 48px;
        }
    }
    .assist_wrap {
        margin-left: 50px;
        .assist_label {
            margin-right: 10px;
        }
    }
    .halving__line {
        font-size: 20px;
        font-weight: 300;
        color: #bbb;
        padding: 0 10px;
    }
}
</style>
