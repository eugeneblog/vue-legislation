import { randomRange } from '@/utils/libraryTools'

export default {
  verificationIsCorrect: config => {
    // 生成四位随机数字，模拟请求响应
    let number = randomRange(1000, 9999)
    return number
  }
}
