<template>
  <el-form class="calendar-from" ref="calendarFrom" :model="form" label-width="80px">
    <el-form-item label="日程标题" class="calendar-from-item">
      <el-input placeholder="请输入日程标题" v-model="data.scheduleTitle"></el-input>
    </el-form-item>
    <el-form-item label="开始时间">
      <el-col :span="14">
        <el-date-picker
        v-model="data.showDevaultTime.startDay"
        align="right"
        type="date"
        placeholder="选择开始日期"
        :picker-options="pickerOptions">
        </el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="8">
        <el-time-select :disabled="data.delivery" :picker-options="form.options" placeholder="选择开始时间" v-model="isDelivery.startHour" style="width: 100%;"></el-time-select>
      </el-col>
    </el-form-item>
    <el-form-item label="结束时间">
      <el-col :span="14">
        <el-date-picker
        v-model="data.showDevaultTime.endDay"
        align="right"
        type="date"
        placeholder="选择结束日期"
        :picker-options="pickerOptions">
        </el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="8">
        <el-time-select :disabled="data.delivery" :picker-options="form.options" placeholder="选择结束时间" v-model="isDelivery.endHour" style="width: 100%;"></el-time-select>
      </el-col>
    </el-form-item>
    <el-form-item label="全天">
      <el-switch v-model="data.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="活动内容">
      <el-input
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 4}"
        placeholder="请输入内容"
        v-model="data.context">
      </el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'From',
  props: {
    data: Object
  },
  data () {
    return {
      form: {
        options: {
          start: '00:00',
          step: '00:30',
          end: '24:00'
        }
      },
      pickerOptions: {
        // disabledDate(time) {
        //   return time.getTime() > Date.now();
        // },
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      }
    }
  },
  computed: {
    isDelivery: function () {
      if (this.data.delivery) {
        return {
          startHour: '00.00',
          endHour: '24.00'
        }
      } else {
        return this.data.showDevaultTime
      }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.calendar-from {
  .calendar-from-item {
    .el-form-item__content {
      // float: left !important;
    }
  }
  .el-date-editor.el-input {
    width: 100%;
    padding-right: 58px;
  }
}

</style>
