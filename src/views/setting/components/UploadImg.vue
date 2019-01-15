<template>
  <div>
    <el-upload
      class="avatar-uploader"
      ref="uploadImg"
      action="api/upload/user/userImg"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :drag="true"
      :before-upload="beforeAvatarUpload">
      <i class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <div>
      <span style="font-size: 12px; color: #bbb;">提示: 上传的文件仅支持JPG/PNG,且不能超过2M</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UploadImg',
  data () {
    return {
      imageUrl: ''
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    progressUpload (event, file, fileList) {
      console.log(this.imageUrl)
    },
    beforeAvatarUpload (file) {
      const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png')
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG/PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style lang="scss">
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .el-upload-dragger {
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
</style>
