import request from '@/utils/request'

export function verificationIsCorrect (ver) {
  console.log('向服务端请求验证码')
  return request({
    url: '/register/verification',
    method: 'post',
    ver
  })
}
