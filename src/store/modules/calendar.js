import { addscheduleToServer, delscheduleToServer } from '@/api/schedule'
const calendar = {
  state: {
    sources: {}
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
    },
    removeSchedule ({ commit }, schedule) {
      return new Promise((resolve, reject) => {
        delscheduleToServer(schedule).then(response => {
          console.log(response)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default calendar
