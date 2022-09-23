// @ts-nocheck
//call和apply可以用来重新定义函数的执行环境
// JS 的一大特点是，函数存在‘定义时’上下文，
// 以及‘运行时’上下文，还有’上下文是可以改变的‘
function Fruit() {}
Fruit.prototype = {
  color: 'red',
  say() {
    console.log('Fruit color is: ' + this.color)
  },
}
let apple = new Fruit()
apple.say() // Fruit color is: red

const banana = {
  color: 'yellow',
}
apple.say.call(banana) //Fruit color is: yellow
apple.say.apply(banana) //Fruit color is: yellow
// 通过call apply 可以吧this指向banana

// call apply 的区别在于传入的参数形式
function sum(x, y) {
  return x + y
}
let res = sum.call(null, 12, 13)
console.log('res=', res) //25
res = sum.apply(undefined, [23, 24])
console.log('res=', res) // 47

// this加进去
function showContent() {
  return this.content
}
let obj = { content: 'hi world' }
console.log('showContent=', showContent())
res = showContent.call(obj)
console.log('res=', res) //hi world

// bind 先看代码体会
let number = 90
obj = {
  number: 100,
  getNum: function () {
    console.log('number is :' + this.number)
  },
}
obj.getNum() // 100
var newfun = obj.getNum
newfun() //在浏览器环境下 90 因为调用newfun时this指向window
let bindGetNum = newfun.bind(obj)
bindGetNum() //100
// bin改变this的指向
