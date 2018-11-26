export default {
  addschedule: config => {
    return { response: true, text: '服务器已经接受请求，创建日程' }
  },
  delschedule: config => {
    return { response: true, text: '服务端响应：成功删除' }
  }
}
