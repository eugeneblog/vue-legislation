<template>
    <div class="calendar_box">
        <div class="calendar_main" id="calendar">
        </div>
        <calen-dar-dialog :data = "fromData.showDevaultTime" :dialogTitle="dialogTitle" @done="handleDone" @confirm="handleConfirm" @close = 'handleClose' :dialogFormVisible = "dialogFormVisible"/>
    </div>
</template>
<script>
import CalenDarDialog from './CalenDarDialog'
export default {
  name: 'CalenDar',
  data () {
    return {
      fromData: {
        title: 'aa',
        showDevaultTime: {
          startDay: new Date('2018-11-5'),
          endDay: new Date('2018-11-15'),
          startHour: '09:00',
          endHour: '21:00'
        }
      },
      dialogTitle: '',
      dialogFormVisible: false
    }
  },
  components: {
    CalenDarDialog
  },
  methods: {
    showDialog (title, data) { // 显示dialog弹窗，接受表单数据
      const fromData = this.fromData
      this.dialogFormVisible = true
      this.dialogTitle = title
      fromData.showDevaultTime.startDay = new Date(data.startDate)
      fromData.showDevaultTime.endDay = new Date(data.endDate || data.startDate)
      console.log(data)
    },
    sendTime (data) { // 向服务器发送修改日程的请求
      console.log(data)
    },
    handleClose () {
      this.done()
    },
    handleConfirm () { // dialog弹窗点击确认后触发的函数
      this.sendTime()
      this.dialogFormVisible = false
    },
    handleDone () {
      this.done()
    },
    done () {
      this.dialogFormVisible = false
    }
  },
  mounted () {
    const _this = this
    // const view = $('#calendar').fullCalendar('getView')
    // console.log(view)
    $('#calendar').fullCalendar({
      selectable: true, // 允许点击和拖动选择
      editable: true, // 可编辑
      eventStartEditable: true,
      eventDurationEditable: true,
      dayClick: function (date, jsEvent, view, resourceObj) {
        // console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY)
        _this.showDialog('创建日程', {
          startDate: date.format(),
          endDate: null
        })
      },
      dragOpacity: {
        agenda: 0.5,
        '': 0.6
      },
      select: function (startDate, endDate, allDay, jsEvent, view) {
        _this.showDialog('创建日程', {
          startDate: startDate.format(),
          endDate: endDate.format()
        })
      },
      eventClick: function (event, element) { // 点击event的回调
        // event.title = 'CLICK'
        // $('#calendar').fullCalendar('updateEvent', event)
        // console.log(event)
        _this.showDialog('修改日程', {
          startDate: event.start._i,
          endDate: event.end ? event.end._i : null
        })
      },
      eventDrop: function (event, dayDelta, minuteDelta, allDay, revertFunc) {
        console.log('event拖动')
      },
      eventSources: [{
        events: [{
          title: 'event1',
          start: '2018-11-01'
        },
        {
          title: 'event2',
          start: '2018-11-05',
          end: '2018-11-07'
        }]
      }],
      schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
      contentHeight: 600,
      customButtons: {
        myCustomButton: {
          text: '自定义按钮',
          click: function () {
            alert('click')
          }
        }
      },
      header: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      views: {
        month: {
          titleFormat: 'YYYY - MM - DD'
        }
      }
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
