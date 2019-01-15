<template>
    <el-scrollbar wrap-class="scrollbar-wrapper" class="navbar-wrapper">
      <div class="navbar-menuBox">
        <div class="navbar-logo">
            <router-link to="/dashboard/foo/calenDar"><img src="../../../../assets/logo/logo@3x.png" alt="律链"></router-link>
        </div>
        <el-menu
        class="navbar-menu"
        :default-active="select_navbar"
        mode="horizontal"
        @select="handleSelect"
        >
          <el-menu-item
          :index="item.id"
          v-for="(item) in list"
          :key="item.id"
          >
            {{ item.text }}
          </el-menu-item>
        </el-menu>
        <add-card class="addcard_box"></add-card>
        <el-menu
        class="tool-menu"
        :default-active="activeIndex"
        mode="horizontal"
        >
          <el-submenu index="2-4" class="right-menu">
              <template slot="title">
                <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
              </template>
              <router-link to="/dashboard/foo/setting">
                <el-menu-item divided index="2-4-1">个人中心</el-menu-item>
              </router-link>
              <el-menu-item divided @click="handleLogOut" index="2-4-2">退出登陆</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import AddCard from '@/components/AddProgramBtn/AddCard.vue'
import SlideBarItem from './SlideBarItem'
export default {
  name: 'SlideBar',
  data () {
    return {
      activeIndex: '1',
      list: [{
        id: '1',
        link: 'calenDar',
        text: '日程安排'
      }, {
        id: '2',
        link: 'lawsuit',
        text: '诉讼项目'
      }, {
        id: '3',
        link: 'special',
        text: '专项业务'
      }, {
        id: '4',
        link: 'perennial',
        text: '常年顾问'
      }, {
        id: '5',
        link: 'setting',
        text: '管理中心'
      }]
    }
  },
  components: {
    SlideBarItem,
    AddCard
  },
  computed: {
    ...mapGetters([
      'avatar',
      'name',
      'permission_routers',
      'select_navbar'
    ])
  },
  methods: {
    handleSelect (key, keyPath) {
      const list = this.list
      this.$router.push(`/${list[key - 1].link}`)
    },
    handleLogOut (key, keyPath) {
      this.$store.dispatch('LoginOut').then(() => {
        location.reload() // In order to re-instantiate the vue-router object to avoid bugs
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar-wrapper {
      position: fixed;
      width: 100%;
      left: 0;
      top: 0;
      z-index: 1500;
      background: #fff;
    .navbar-menuBox {
      background: #fff;
      .addcard_box {
        line-height: 60px;
        float: right;
      }
      .navbar-menu {
        float: left;
      }
      .navbar-logo {
        height: 68px;
        float: left;
        a {
          float: left;
          margin-right: 20px;
          img {
            padding: 10px 0;
            width: 100px;
          }
        }
      }
      margin: 0 auto;
      height: 61px;
      margin: 0 20px;
      .list-menu {
        float: left;
      }
      .tool-menu {
        float: right;
      }
    }
  }
  .right-menu {
    float: right;
    .el-menu-item {
      min-width: 100px;
    }
    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }
  }
</style>
