<template>
    <div class="card_wrap">
        <el-row :gutter="24">
            <el-col :span="24">
                <el-card shadow="hover" class="card_items">
                    <div class="card_headerImg">
                        <img src="../../../assets/card/Bitmap@3x.png" alt="">
                    </div>
                    <div class="card_content">
                        <div class="card_title">
                            <h3>{{ title }}</h3>
                        </div>
                        <div class="card_section">
                            <span>2018-3-4 08:43</span>
                            <span>联系人 ：Mr.Zhang </span>
                            <span>电话 ：1234567890</span>
                        </div>
                        <div class="card_text">
                            <p>由于法律未明文规定赔偿权利人之间如何分配死亡赔偿金等问题。故实践中对死亡赔偿金的分配常常会因认识不一致引发争议……</p>
                        </div>
                        <div class="card_footer">
                            <span>最新进展 ： 拍板了（完成）</span>
                            <span>主办 ： 无</span>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
$fontColor: #878EA2;
.card_wrap {
    margin-top: 24px;
    cursor: pointer;
    .card_items {
        position: relative;
        .card_headerImg {
            float: left;
            img {
                width: 34px;
            }
        }
        .card_content {
            float: left;
            margin-left: 20px;
            margin-bottom: 20px;
            .card_title{
                h3 {
                    margin-top: 0px;
                    margin-bottom: 10px;
                }
            }
            .card_section {
                span {
                    font-size: 14px;
                    color: $fontColor;
                }
            }
            .card_text {
                p {
                    font-size: 14px;
                    color: $fontColor;
                }
            }
            .card_footer {
                span {
                    font-size: 14px;
                    color: $fontColor;
                }
            }
        }
    }
}
</style>
