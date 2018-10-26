import request from '@/utils/request'

export function loginByUserName (username, password) {
  const data = {
    username,
    password
  }
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
    params: {token}
  })
}
