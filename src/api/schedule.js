import request from '@/utils/request'

export function addscheduleToServer (ver) {
  const data = {
    ...ver
  }
  return request({
    url: '/calendar/addSchedule',
    method: 'post',
    data
  })
}

export function delscheduleToServer (ver) {
  return request({
    url: '/calendar/delSchedule',
    method: 'get',
    params: { ver }
  })
}
