// @ts-nocheck
//字符串的遍历器接口
for (let i of 'foo') {
  console.log('i=', i)
}
// 'f' 'o' 'o'

// 模板字符串
let name = 'jack'
let time = 'now'
console.log(`hello ${name}, time is ${time}`)
//hello, jack, time is now

// 模板字符串中可以是表达式
let num1 = 10
let num2 = 11
console.log(`${1 + 1}`) // 2
console.log(`${num1 + num2}`) // 21
// 可以是函数
function showMsg() {
  return 'Hello world'
}
console.log(`${showMsg()}`) //'Hello world'
// 对象属性的引用
const obj = { id: 110, address: 'liaoning' }
console.log(`id is ${obj.id},address is ${obj.address}`) //id is 110,address is liaoning
