import request from '@/utils/request'

export function getLawsuitData (token) {
  const data = {
    token
  }
  return request({
    url: '/lawsuit/lawsuit',
    method: 'post',
    data
  })
}
