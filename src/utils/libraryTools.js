// 根据范围生成随机数
export function randomRange (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}
