<template>
    <div class="setting_box">
        <el-tabs type="border-card" tab-position="left">
            <el-tab-pane>
                <span slot="label"><i class="el-icon-date"></i> 个人中心</span>
                我的行程
            </el-tab-pane>
            <el-tab-pane label="安全设置">安全设置</el-tab-pane>
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
}
</style>
