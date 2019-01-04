import request from '@/utils/request'

export function GetLawsuitData (token, type) {
  const data = {
    token,
    type
  }
  return request({
    url: '/lawsuit/lawsuit',
    method: 'post',
    data
  })
}

export function CreateNewProgram (val) {
  const data = {
    val
  }
  return request({
    url: '/lawsuit/create_lawsuit',
    method: 'post',
    data
  })
}

export function CreateNewNode (val) {
  return request({
    url: '/lawsuit/create_tasknode',
    method: 'post',
    data: val
  })
}

export function GetLawsuitDataDetail (id) {
  return request({
    url: '/api/lawsuit/seachLawsuit',
    method: 'get',
    params: { id }
  })
}
