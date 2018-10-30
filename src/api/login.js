import request from '@/utils/request'

export function loginByUserName (username, password) {
  const data = {
    username,
    password
  }
  console.log(`发送post请求，验证${data.username}用户数据是否正确`)
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function loginOut () {
  return request({
    url: '/login/loginout',
    method: 'post'
  })
}

export function getUserInfo (token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
