<template>
    <div class="setting_box">
        <el-tabs type="border-card" tab-position="left">
            <el-tab-pane>
                <span slot="label"><i class="el-icon-date"></i> 个人中心</span>
                <el-card class="box-card" shadow="never">
                    <div slot="header" class="clearfix">
                        <span>注册信息</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
                <el-card class="box-card" shadow="never">
                    <div slot="header" class="clearfix">
                        <span>管理员信息</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="账号设置">账号设置</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
  name: 'Setting'
}
</script>

<style lang="scss" scoped>
.setting_box {
    padding: 20px;
    .el-tabs {
        height: 630px;
    }
    .el-card {
        border: none;
    }
}
</style>
