import request from '@/utils/request'

export function GetLawsuitData (type) {
  const data = {
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

export function GetProgramCase (id) {
  return request({
    url: '/api/lawsuit/seachProgram/casedetail',
    method: 'get',
    params: { id }
  })
}

export function GetProgramFiles (id) {
  return request({
    url: '/api/lawsuit/seachProgramFiles',
    method: 'get',
    params: { id }
  })
}
