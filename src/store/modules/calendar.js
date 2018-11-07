import { addscheduleToServer } from '@/api/schedule'
const calendar = {
  state: {
    events: [{
      title: 'event1',
      start: [2018, 10, 19, 10, 0, 0]
    },
    {
      title: 'event3',
      start: '2018-11-09',
      context: '诉讼项目1'
    },
    {
      title: 'event2',
      start: '2018-11-05',
      end: '2018-11-07',
      context: '去江苏出差'
    }]
  },
  actions: {
    addCalendar ({ commit }, calendarData) {
      return new Promise((resolve, reject) => {
        addscheduleToServer(calendarData).then(response => {
          const data = response.data
          console.log(data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default calendar
