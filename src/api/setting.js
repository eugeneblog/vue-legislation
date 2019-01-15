import request from '@/utils/request'

export function GetUserData (userName) {
  return request({
    url: '/api/user/data',
    method: 'get',
    params: { userName }
  })
}
