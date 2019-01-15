<template>
    <div @click="cardClickHandle(id)" class="card_wrap">
        <el-row :gutter="24">
            <el-col :span="24">
                <el-card shadow="hover" class="card_items">
                    <div class="card_headerImg">
                        <img src="../../assets/card/Bitmap@3x.png" alt="">
                    </div>
                    <div class="card_content">
                        <div class="card_title">
                            <h3>{{ title }}</h3>
                        </div>
                        <div class="card_section">
                            <span>{{ date }}</span>
                            <span>联系人 ：{{ linkman }} </span>
                            <span>电话 ：{{ phone }}</span>
                        </div>
                        <div class="card_text">
                            <p>{{ context }}</p>
                        </div>
                        <div class="card_footer">
                            <span>最新进展 ： {{ evolve }}</span>
                            <span>主办 ： {{ sponsor }}</span>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String
    },
    id: '',
    date: '',
    linkman: '',
    phone: '',
    context: {
      type: String
    },
    evolve: '',
    sponsor: ''
  },
  methods: {
    cardClickHandle (id) {
      this.$emit('select', id)
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
