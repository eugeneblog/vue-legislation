import Mock from 'mockjs'
import loginAPI from './login'
import registerAPI from './register'
import calendarAPI from './calendar'
import lawsuitAPI from './lawsuit'

Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUserName)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/register\/verification/, 'post', registerAPI.verificationIsCorrect)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)
Mock.mock(/\/calendar\/addSchedule/, 'post', calendarAPI.addschedule)
Mock.mock(/\/calendar\/delSchedule/, 'get', calendarAPI.delschedule)
Mock.mock(/\/lawsuit\/lawsuit/, 'post', lawsuitAPI.sendLawsuitData)

export default Mock
