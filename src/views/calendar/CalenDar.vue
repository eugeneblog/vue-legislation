<template>
    <div class="calendar_box">
        <div class="calendar_main" id="calendar">

        </div>
    </div>
</template>
<script>
export default {
  name: 'CalenDar',
  mounted () {
    $('#calendar').fullCalendar({
      selectable: true, // 允许点击和拖动选择
      editable: true,
      dayRender: function () {
        console.log('datRender')
      },
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
          titleFormat: 'YYYY, MM, DD'
        }
      }
    })
    const view = $('#calendar').fullCalendar('getView')
    console.log(view)
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
