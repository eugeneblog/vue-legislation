<template>
    <div class="login-container">
        <el-form ref="loginForm" :label-position="labelPosition" label-width="80px" class="login-form" :model="formLabelAlign">

            <div class="title-container">
                <h3 class="title">登陆律链</h3>
                <!-- <lang-select class="set-language"/> -->
            </div>

            <el-form-item prop="username">
                <span class="svg-container svg-container_login">
                    <svg-icon icon-class="user" />
                </span>
                <el-input
                v-model="loginForm.username"
                :placeholder="login.username"
                name="username"
                type="text"
                auto-complete="on"
                />
            </el-form-item>

            <el-form-item prop="password">
                <span class="svg-container">
                    <svg-icon icon-class="password" />
                </span>
                <el-input
                v-model="loginForm.password"
                :placeholder="login.password"
                name="password"
                :type="passwordType"
                auto-complete="on"
                @keyup.enter.native="handleLogin"
                />
                <span class="show-pwd" @click="showPwd">
                    <svg-icon icon-class="eye" />
                </span>
            </el-form-item>

            <el-button class="thirdparty-button" type="primary" @click="handleLogin">{{ '登陆' }}</el-button>
            <div class="tips">
                <span>还没有账号? 点击<router-link to="/register">注册</router-link></span>
            </div>
        </el-form>
    </div>
</template>
<script>
import { isvalidUsername } from '@/utils/validate'
export default {
  name: 'Login',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      login: {
        name: 'placeholder',
        password: 'password',
        thirdparty: 'aa'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      labelPosition: 'right',
      formLabelAlign: {
        name: 'admin',
        region: '',
        type: ''
      },
      loading: false,
      showDialog: false,
      passwordType: 'password'
    }
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByUserName', this.loginForm).then(() => {
            this.loading = false
            this.$router.push('/dashboard/foo')
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    showPwd () {
      console.log('click')
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

  $bg:#283443;
  $light_gray:#eee;
  $cursor: #fff;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input{
      color: $cursor;
      &::first-line {
        color: $light_gray;
      }
    }
  }

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
</style>
<style rel="stylesheet/scss" lang="scss">
    $bg:#2d3a4b;
    $dark_gray:#889aa4;
    $light_gray:#eee;

    .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;
        .login-form {
            position: absolute;
            left: 0;
            right: 0;
            width: 520px;
            max-width: 100%;
            padding: 35px 35px 15px 35px;
            margin: 120px auto;
        }
        .tips {
            font-size: 14px;
            color: #fff;
            margin: 15px 0px;
            span {
                text-align: center;
            }
            a {
                font-size: 16px;
                color: #409EFF;
            }
        }
        .svg-container {
            padding: 6px 5px 6px 15px;
            color: $dark_gray;
            vertical-align: middle;
            width: 30px;
            display: inline-block;
            &_login {
            font-size: 20px;
            }
        }
        .title-container {
            position: relative;
            .title {
            font-size: 26px;
            color: $light_gray;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
            }
            .set-language {
            color: #fff;
            position: absolute;
            top: 5px;
            right: 0px;
            }
        }
        .show-pwd {
            position: absolute;
            right: 10px;
            top: 7px;
            font-size: 16px;
            color: $dark_gray;
            cursor: pointer;
            user-select: none;
        }
        .thirdparty-button {
            margin-left: 0px;
            margin-top: 10px;
            width: 100%;
        }
    }
</style>
