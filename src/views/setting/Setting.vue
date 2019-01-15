<template>
    <div class="setting_box">
        <el-tabs type="border-card" tab-position="left">
            <el-tab-pane>
                <span slot="label"><i class="el-icon-date"></i> 个人中心</span>
                <el-card class="box-card" shadow="never">
                    <div slot="header" class="clearfix">
                        <span>用户信息</span>
                    </div>
                    <div class="text_item">
                        <div class="setting_item setting_user_img">
                            <img src="static/usergroup/img_eugene_32@3x.png" alt="">
                            <upload-img class="setting_user_uploadImgBTN"></upload-img>
                        </div>
                        <div style="clear:both;"></div>
                        <div class="setting_item">
                            <span>用户名:</span>
                            <div class="setting_attestation_item">{{ userData.userName }}</div>
                        </div>
                        <div class="setting_item">
                            <span>电子邮件:{{ userData.email || '' }}</span>
                            <el-button v-if="!userData.email" type="text" @click="bindEmailHandle">点击绑定</el-button>
                        </div>
                        <div class="setting_item">
                            <span>手机号:</span>
                            <div class="setting_attestation_item">{{ userData.phone }}</div>
                        </div>
                    </div>
                </el-card>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label">认证信息</span>
                <el-card class="box-card-attestation" shadow="never">
                    <div slot="header" class="clearfix">
                        <span>身份认证</span>
                    </div>
                    <div class="text_item">
                        <div class="setting_item">
                            <span>执业证照:{{ userData.email || '' }}</span>
                            <upload-attrestation></upload-attrestation>
                        </div>
                        <div style="clear:both;"></div>
                        <div class="setting_item">
                            <span>职业证号:{{ userData.email || '' }}</span>
                            <div class="setting_attestation_item">
                                <el-input></el-input>
                            </div>
                        </div>
                        <div class="setting_item">
                            <span>律所:{{ userData.email || '' }}</span>
                            <div class="setting_attestation_item">
                                <el-input></el-input>
                            </div>
                        </div>
                        <div class="setting_item">
                            <el-button @click="saveSettingHandle">保存</el-button>
                        </div>
                    </div>
                </el-card>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UploadImg from './components/UploadImg.vue'
import UploadAttrestation from './components/UploadAttestation'
export default {
  name: 'Setting',
  data () {
    return {
      userData: {
        userName: '',
        email: '',
        phone: ''
      }
    }
  },
  components: {
    UploadImg,
    UploadAttrestation
  },
  computed: {
    ...mapGetters({
      userName: 'name'
    })
  },
  methods: {
    bindEmailHandle () {
      this.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确'
      }).then(({ value }) => {
        // ajax发送邮箱信息
        this.$message({
          type: 'success',
          message: '你的邮箱是: ' + value
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    saveSettingHandle () {
      this.$message({
        type: 'success',
        message: '已提交，我们将会在3-5个工作日审核完成'
      })
    }
  },
  mounted () {
    // 发送ajax请求，获取用户信息
    setTimeout(() => {
      this.$store.dispatch('getUserData').then(data => {
        this.userData = data
      })
    }, 10)
  }
}
</script>

<style lang="scss" scoped>
.setting_box {
    .box-card-attestation {
        .setting_item {
            border-bottom: 0px solid #fff !important;
        }
    }
    padding: 20px;
    .el-tabs {
        height: 630px;
    }
    .el-card {
        border: none;
    }
    .text_item {
        .setting_user_img {
            position: relative;
            width: 100%;
            float: left;
            img {
                float: left;
                margin-right: 40px;
                border: 1px solid #f4f4f4;
                overflow: hidden;
                border-radius: 50%;
            }
            .el-button {
                position: absolute;
                margin-left: 40px;
                top: 50%;
                transform: translateY(-50%);
            }
            .setting_user_uploadImgBTN {
                float: left;
            }
        }
        .setting_item {
            .setting_attestation_item {
                display: table-cell;
                width: 1%;
                word-wrap: break-word;
                word-break: break-all;
            }
            padding: 26px 0;
            color: rgb(109, 109, 109);
            border-bottom: 1px solid #f4f4f4;
            span {
                float: left;
                width: 8em;
                margin: 0.1em 30px 0 0;
                color: rgb(43, 43, 43);
            }
        }
    }
}
</style>
