// @ts-nocheck
const promise = new Promise((resolve, reject) => {
  resolve('success!!')
})
promise.then(
  (msg) => console.log(msg),
  (err) => console.log(err),
)
// timeout函数
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, '执行成功')
  })
}
timeout(1000).then((value) => console.log(value))

// 看下面代码执行顺序
let p = new Promise((resolve, reject) => {
  console.log('Promise')
  resolve()
})
p.then(() => console.log('resolved'))
console.log('hi')
// 1- Promise 2-hi 3-resolved
// 异步执行指主线程的所有代码执行完毕后才会执行异步结果
new Promise((resolve, reject) => {
  return resolve(1)
  // 后面的语句不会执行
  console.log(2)
})
// Promise的其他用法都大同小异
