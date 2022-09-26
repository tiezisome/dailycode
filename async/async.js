// @ts-nocheck
async function timeout(ms) {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}
async function asyncPrint(value, ms) {
  await timeout(ms)
  console.log(value)
}
asyncPrint('hello world', 1000)

// 具体语法
// async 函数返回一个Promise
async function foo() {
  return 'hello' // return await 'hello'也可以
}
foo().then((v) => console.log(v))
// async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态
async function f() {
  throw new Error('出错了')
}
f().then(
  (v) => console.log(v),
  (e) => console.log(e),
)
// Error: 出错了
// async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数

// 使用注意点
// 第一点，前面已经说过，await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。
// 第二点，多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。
// 第三点，await命令只能用在async函数之中，如果用在普通函数，就会报错。
