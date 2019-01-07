<template>
    <div class="calendar_box">
        <div class="calendar_main" id="calendar">
        </div>
        <calen-dar-dialog
        :closeOrdel="isCreate ? String('取消') : String('删除')" :updateOrCreate="isCreate ? String('创建') : String('修改')"
        :data="fromData"
        :dialogTit="dialogTitle"
        @done="handleDone"
        @confirm="handleConfirm"
        @close="handleClose"
        :dialogFormVisible = "dialogFormVisible">
        </calen-dar-dialog>
    </div>
</template>
<script>
import CalenDarDialog from './CalenDarDialog'
export default {
  name: 'CalenDar',
  data () {
    return {
      fromData: {
        scheduleTitle: '',
        context: '',
        delivery: true,
        showDevaultTime: {
          startDay: new Date('2018-11-5'),
          endDay: new Date('2018-11-15'),
          startHour: '09:00',
          endHour: '21:00'
        }
      },
      isCreate: true,
      dialogTitle: '',
      dialogFormVisible: false
    }
  },
  components: {
    CalenDarDialog
  },
  methods: {
    showDialog (title, data) { // 显示dialog弹窗，接受表单数据
      console.log(this.fromData)
      const fromData = this.fromData
      this.dialogFormVisible = true
      this.dialogTitle = title
      this.fromData.scheduleTitle = data.scheduleTitle
      this.fromData.context = data.context
      fromData.showDevaultTime.startDay = new Date(data.startDate)
      fromData.showDevaultTime.endDay = new Date(data.endDate || data.startDate)
      fromData.showDevaultTime.startHour = data.startHour
      fromData.showDevaultTime.endHour = data.endHour
    },
    sendTime (method, data) { // 向服务器发送修改日程的请求
      return this.$store.dispatch(method, data)
    },
    handleClose () {
      const _this = this
      if (!_this.isCreate) {
        this.sendTime('removeSchedule', _this.event._id).then(response => {
          $('#calendar').fullCalendar('removeEvents', _this.event._id)
          this.$notify({
            title: '消息',
            message: `已删除一个日程`,
            type: 'success'
          })
        })
      }
      this.done()
    },
    handleConfirm () { // dialog弹窗点击确认后触发的函数
      if (this.isCreate) {
        this.sendTime('addCalendar', this.fromData).then(response => {
          this.createEvents(this.fromData)
          this.$notify({
            title: '消息',
            message: `成功创建新的日程`
          })
        })
      } else {
        this.updateEvent(this.event)
      }
      this.dialogFormVisible = false
    },
    createEvents (data) { // 创建eventSources
      console.log($('#calendar').fullCalendar)
      $('#calendar').fullCalendar('addEventSource', [{
        title: data.scheduleTitle,
        start: data.showDevaultTime.startDay,
        end: data.showDevaultTime.endDay,
        context: data.context,
        backgroundColor: '66afe0'
      }])
    },
    updateEvent (event) { // 修改eventSources
      const from = this.fromData
      event.title = from.scheduleTitle
      event.start = $.fullCalendar.moment(this.fromData.showDevaultTime.startDay)
      event.end = $.fullCalendar.moment(this.fromData.showDevaultTime.endDay)
      event.backgroundColor = '#81b88b'
      event.borderColor = '#81b88b'
      event.context = from.context
      $('#calendar').fullCalendar('updateEvent', event)
    },
    handleDone () {
      this.done()
    },
    done () {
      this.dialogFormVisible = false
    },
    dateConversion (time) { // 时间格式转换
      return time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
    },
    timeConversion (time) {
      return (time.hour() < 10 ? '0' + time.hour() : time.hour()) + ':' + (time.minute() === 0 ? time.minute() + '0' : time.minute())
    }
  },
  mounted () {
    const _this = this
    // let fullCalendarView = $('#calendar').fullCalendar('getView')
    // console.log(view)
    // fullCalendar 文档请查询 https://fullcalendar.io
    $('#calendar').fullCalendar({
      selectable: true, // 允许点击和拖动选择
      editable: true, // 可编辑
      eventLimit: true,
      eventDurationEditable: true,
      dragOpacity: {
        agenda: 0.5,
        '': 0.6
      },
      select: function (startDate, endDate, allDay, jsEvent) {
        // 求剩下的天数
        let start = startDate._d
        let end = endDate._d
        _this.isCreate = true
        if (startDate._ambigTime && endDate._ambigTime) {
          // 全时间段
          return _this.showDialog('创建日程', {
            startDate: _this.dateConversion(start),
            endDate: _this.dateConversion(end),
            startHour: '00:00',
            endHour: '24:00'
          })
        } else {
          return _this.showDialog('创建日程', {
            startDate: _this.dateConversion(start),
            endDate: _this.dateConversion(end),
            startHour: _this.timeConversion(startDate),
            endHour: _this.timeConversion(endDate)
          })
        }
      },
      eventClick: function (event, element) { // 点击event的回调
        // event.title = 'CLICK'
        // $('#calendar').fullCalendar('updateEvent', event)
        console.log(event)
        _this.event = event
        _this.isCreate = false
        _this.showDialog('修改日程', {
          startDate: event.start._d,
          endDate: event.end ? event.end._d : null,
          scheduleTitle: event.title,
          context: event.context
        })
      },
      eventDrop: function (event, dayDelta, minuteDelta, allDay, revertFunc) {
        console.log('event拖动')
      },
      eventSources: [{
        events: _this.$store.state.calendar.events
      }],
      nowIndicator: true,
      schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
      contentHeight: 600,
      // customButtons: {
      //   myCustomButton: {
      //     text: '自定义按钮',
      //     click: function () {
      //       alert('click')
      //     }
      //   }
      // },
      header: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'month,agendaWeek'
      },
      views: {
        month: {
          titleFormat: 'YYYY - MM - DD'
        }
      },
      minTime: '08:00:00',
      maxTime: '21:00:00'
    })
  }
}
</script>

<style lang="scss" scoped>
.calendar_box {
  .calendar_main {
    margin: 20px 20px 20px 20px;
    background: #ffffff;
    padding: 20px 20px 20px 20px;
  }
}
</style>
