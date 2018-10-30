import Mock from 'mockjs'
import loginAPI from './login'
import registerAPI from './register'

Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUserName)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/register\/verification/, 'post', registerAPI.verificationIsCorrect)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)

export default Mock
